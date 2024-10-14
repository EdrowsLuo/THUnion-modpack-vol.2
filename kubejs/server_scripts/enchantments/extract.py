import re
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

def main(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = extract_event_custom_blocks(content)
    print(f"共提取到 {len(blocks)} 个 event.custom 块。")
    
    parsed_data = parse_blocks(blocks)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(parsed_data, f, ensure_ascii=False, indent=4)
    
    print(f"提取的数据已保存到 {output_file}")

if __name__ == "__main__":
    # 替换为你的输入文件路径和输出文件路径
    input_file = 'enchantments_b2c.js'
    output_file = 'event_custom_data.json'
    main(input_file, output_file)
