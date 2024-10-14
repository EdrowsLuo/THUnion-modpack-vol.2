import json
import os
from collections import Counter

def generate_unique_id(counter):
    return f"custom_recipe_{counter}"

def extract_modid(enchantment):
    return enchantment.split(':')[0] if ':' in enchantment else 'unknown_mod'

def generate_fluid_name(modid):
    return f"{modid}:source_fluid"

def generate_code_snippet(unique_id, enchantment, level, source_cost, pedestal_items):
    modid = extract_modid(enchantment)
    fluid_name = generate_fluid_name(modid)

    # 处理 pedestalItems
    item_strings = process_pedestal_items(pedestal_items)

    # 构建代码片段
    snippet = (
        f"event.recipes.gtceu.TO_BE_DONE('{unique_id}')\n"
        f"    .itemInputs(Item.of('minecraft:enchanted_book').enchant('{enchantment}', {level - 1}))\n"
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

def main(input_json_file, output_text_file):
    if not os.path.isfile(input_json_file):
        print(f"输入文件 {input_json_file} 不存在。请检查路径是否正确。")
        return

    with open(input_json_file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            print(f"读取 JSON 文件时出错: {e}")
            return

    counter = 1
    snippets = []

    for entry in data:
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
    input_json_file = 'event_custom_data.json'
    output_text_file = 'output_recipes.txt'

    main(input_json_file, output_text_file)
