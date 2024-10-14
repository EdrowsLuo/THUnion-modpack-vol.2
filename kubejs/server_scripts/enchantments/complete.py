import os
import re
from collections import Counter

def generate_unique_id(counter):
    return f"custom_recipe_{counter}"

def extract_modid(enchantment):
    return enchantment.split(':')[0] if ':' in enchantment else 'unknown_mod'

def generate_fluid_name(modid):
    return f"{modid}:source_fluid"


import json
import json5

def extract_event_custom_blocks(file_content):
    """
    提取所有 event.custom({...}) 块中的内容
    匹配小括号内的JSON对象，并确保没有嵌套的小括号
    """
    # 正则表达式匹配 event.custom 后的一对小括号
    pattern = r'event\.custom\(\s*(\{[^()]*\})\s*\)'
    matches = re.findall(pattern, file_content, re.DOTALL)
    return matches

def clean_js_object(js_object_str):
    """
    清理并转换 JavaScript 对象字符串为 JSON 兼容的字符串
    """
    # 移除注释
    js_object_str = re.sub(r'//.*', '', js_object_str)
    js_object_str = re.sub(r'/\*[\s\S]*?\*/', '', js_object_str)

    # 替换单引号为双引号
    js_object_str = js_object_str.replace("'", '"')

    return js_object_str

def parse_blocks(blocks):
    """
    将提取的块转换为 Python 字典
    """
    parsed = []
    for block in blocks:
        cleaned_str = clean_js_object(block)
        try:
            data = json5.loads(cleaned_str)  # 使用 json5 解析宽松的 JSON 格式
            parsed.append(data)
        except json5.JSONDecodeError as e:
            print("JSON解析错误:", e)
            print("出错的块内容:", cleaned_str)
    return parsed

def process_event_custom_content(content):
    return parse_blocks(extract_event_custom_blocks(content))

def generate_code_snippet(unique_id, enchantment, level, source_cost, pedestal_items):
    modid = extract_modid(enchantment)
    fluid_name = "starbunclemania:source_fluid"

    # 处理 pedestalItems
    item_strings = process_pedestal_items(pedestal_items)

    if level==1:
        snippet=(
        f"event.recipes.gtceu.TO_BE_DONE('{unique_id}')\n"
        f"    .itemInputs('minecraft:book')\n"
        f"    .itemInputs({', '.join([f'\'{item}\'' for item in item_strings])})\n"
        f"    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('{enchantment}', {level})) \n"
        f"    .inputFluids(Fluid.of('{fluid_name}', {source_cost}))\n"
        f"    .EUt({source_cost});\n"
        )
    else:
    # 构建代码片段
        snippet = (
        f"event.recipes.gtceu.TO_BE_DONE('{unique_id}')\n"
        f"    .itemInputs(Item.of('minecraft:enchanted_book').enchant('{enchantment}', {level - 1}).strongNBT())\n"
        f"    .itemInputs({', '.join([f'\'{item}\'' for item in item_strings])})\n"
        f"    .itemOutputs(Item.of('minecraft:enchanted_book').enchant('{enchantment}', {level})) \n"
        f"    .inputFluids(Fluid.of('{fluid_name}', {source_cost}))\n"
        f"    .EUt({source_cost});\n"
        )
    return snippet

def process_pedestal_items(pedestal_items):
    """
    处理 pedestalItems，返回格式化的字符串列表
    """
    item_counter = Counter()

    for item in pedestal_items:
        if 'item' in item:
            item_name = item['item']
            item_counter[item_name] += 1
        elif 'tag' in item:
            tag_name = '#' + item['tag']
            item_counter[tag_name] += 1

    # 生成合并后的字符串列表
    return [f"{count}x {name}" for name, count in item_counter.items()]

def process_js_files_and_generate_output(output_text_file):
    js_files = [f for f in os.listdir() if f.endswith('.js')]
    
    if not js_files:
        print("当前目录下没有找到 .js 文件。")
        return

    counter = 1
    snippets = []

    for js_file in js_files:
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read()
            extracted_data = process_event_custom_content(content)

            for entry in extracted_data:
                enchantment = entry.get('enchantment')
                level_str = entry.get('level')
                source_cost = entry.get('sourceCost')
                pedestal_items = entry.get('pedestalItems', [])

                if enchantment is None or level_str is None or source_cost is None:
                    print(f"跳过缺少必需字段的条目: {entry}")
                    continue

                try:
                    level = int(level_str)
                except ValueError:
                    print(f"无效的 level 值 '{level_str}'，跳过该条目。")
                    continue

                unique_id = generate_unique_id(counter)
                snippet = generate_code_snippet(unique_id, enchantment, level, source_cost, pedestal_items)
                snippets.append(snippet)
                counter += 1

    with open(output_text_file, 'w', encoding='utf-8') as f:
        for snippet in snippets:
            f.write(snippet + "\n")

    print(f"成功生成 {len(snippets)} 个代码片段，并保存到 {output_text_file}")

if __name__ == "__main__":
    output_text_file = 'output_recipes.txt'
    process_js_files_and_generate_output(output_text_file)
