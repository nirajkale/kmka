
def read_safe(filepath):
    with open(filepath,'rb') as f:
        data = f.read()
    data_str = None
    try:
        data_str = data.decode('utf-8')
    except UnicodeDecodeError as ude:
        try:
            data_str = data.decode('ISO-8859-1')
        except Exception as e:
            raise e
    return data_str