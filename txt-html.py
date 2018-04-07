contents = open("definitions.txt","r")
    with open("definitions.html", "w") as e:
        for lines in contents.readlines():
            e.write("<pre>" + lines + "</pre> <br>\n")