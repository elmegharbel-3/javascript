def create(number):
    global html_code 
    html_code = f'<html lang="en">\n    <head>\n        <title></title>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <link href="{number:0>2d}.css" rel="stylesheet">\n    </head>\n    <body>\n        <script src="{number:0>2d}.js"></script>\n    </body>\n</html>\n'
    print(html_code)
    html = open(f"{number:0>2d}.html","x")
    css = open(f"{number:0>2d}.css","x")
    JavaScript = open(f"{number:0>2d}.js","x")
    html.close()
    css.close()
    JavaScript.close()
    html_write = open(f"{number:0>2d}.html","a")
    html_write.write(html_code)
    html.close()
    print (f"files with number => {number:0>2d} are created you can code now")   
create(34)