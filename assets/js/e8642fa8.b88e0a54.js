"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5795],{35187:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=n(85893),i=n(11151);const r={title:"Structured Formats for DS",description:"The top 5 structured data formats for data science",tags:["Format","JSON","CSV","SQL","Parquet","Feather"]},o="Top 5 Structured Data Formats for Data Science",s={id:"format/structured-formats",title:"Structured Formats for DS",description:"The top 5 structured data formats for data science",source:"@site/docs/format/structured-formats.md",sourceDirName:"format",slug:"/format/structured-formats",permalink:"/portfolio/docs/format/structured-formats",draft:!1,unlisted:!1,tags:[{label:"Format",permalink:"/portfolio/docs/tags/format"},{label:"JSON",permalink:"/portfolio/docs/tags/json"},{label:"CSV",permalink:"/portfolio/docs/tags/csv"},{label:"SQL",permalink:"/portfolio/docs/tags/sql"},{label:"Parquet",permalink:"/portfolio/docs/tags/parquet"},{label:"Feather",permalink:"/portfolio/docs/tags/feather"}],version:"current",frontMatter:{title:"Structured Formats for DS",description:"The top 5 structured data formats for data science",tags:["Format","JSON","CSV","SQL","Parquet","Feather"]},sidebar:"tutorialSidebar",previous:{title:"Data Format",permalink:"/portfolio/docs/format/"},next:{title:"Hyperparameter Tuning",permalink:"/portfolio/docs/hypertune/"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"CSV",id:"csv",level:2},{value:"CSV Unveiled",id:"csv-unveiled",level:3},{value:"CSV Handling with Python",id:"csv-handling-with-python",level:3},{value:"CSV Magic Tips",id:"csv-magic-tips",level:3},{value:"Additional Resources",id:"additional-resources",level:3},{value:"JSON",id:"json",level:2},{value:"JSON Unveiled",id:"json-unveiled",level:3},{value:"JSON Handling with Python",id:"json-handling-with-python",level:3},{value:"JSON Magic Tips",id:"json-magic-tips",level:3},{value:"Additional Resources",id:"additional-resources-1",level:3},{value:"Parquet",id:"parquet",level:2},{value:"Parquet Unveiled",id:"parquet-unveiled",level:3},{value:"Parquet Handling with Python",id:"parquet-handling-with-python",level:3},{value:"Parquet Magic Tips",id:"parquet-magic-tips",level:3},{value:"Additional Resources",id:"additional-resources-2",level:3},{value:"Feather",id:"feather",level:2},{value:"Feather Unveiled",id:"feather-unveiled",level:3},{value:"Feather Handling with Python",id:"feather-handling-with-python",level:3},{value:"Feather Magic Tips",id:"feather-magic-tips",level:3},{value:"Additional Resources",id:"additional-resources-3",level:3},{value:"SQL",id:"sql",level:2},{value:"SQL Unveiled",id:"sql-unveiled",level:3},{value:"SQL Handling with Python",id:"sql-handling-with-python",level:3},{value:"SQL Magic Tips",id:"sql-magic-tips",level:3},{value:"Additional Resources",id:"additional-resources-4",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"top-5-structured-data-formats-for-data-science",children:"Top 5 Structured Data Formats for Data Science"}),"\n",(0,t.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(a.p,{children:"Welcome, data aficionados and fellow Pythonistas, to another blog post! Today, we embark on a thrilling quest to unravel the world of file formats in the realm of data science. We will explore the top 5 file formats that are essential for every data sorcerer out there!"}),"\n",(0,t.jsx)(a.p,{children:"Before we dive headlong into the world of file formats, let\u2019s take a moment to appreciate the importance of choosing the right format. Imagine you\u2019re venturing through a dark forest (not the internet kind, mind you) in search of hidden treasures. The path you choose can either lead you to a pot of gold or a barrel of pickle juice. Likewise, selecting the right file format can be the difference between smooth data sailing and a world of frustration."}),"\n",(0,t.jsx)(a.p,{children:"So, without further ado, let\u2019s unveil the magnificent five file formats that will undoubtedly make your data science adventures extraordinary:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"CSV (Comma-Separated Values)"}),"\n",(0,t.jsx)(a.li,{children:"JSON (JavaScript Object Notation)"}),"\n",(0,t.jsx)(a.li,{children:"Parquet"}),"\n",(0,t.jsx)(a.li,{children:"Feather"}),"\n",(0,t.jsx)(a.li,{children:"SQL (Structured Query Language)"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Now that we\u2019ve unveiled the magnificent five file formats for data science, you\u2019re well-equipped to face any data adventure that comes your way. In the following sections, we\u2019ll explore each format in greater detail, learn how to wield their powers using Python spells \u2014 uh, code \u2014 and uncover some secret tips and tricks to make your data quests even more enjoyable. So, grab your wizard hat and Python wand, for the magic of data science awaits!"}),"\n",(0,t.jsx)(a.h2,{id:"csv",children:"CSV"}),"\n",(0,t.jsx)(a.p,{children:"The stalwart companion of data scientists, this format is like the Swiss Army knife of data storage. In this section, we\u2019ll embark on a journey through the magical land of CSV files and learn how to tame them with the spellbinding Python powers!"}),"\n",(0,t.jsx)(a.h3,{id:"csv-unveiled",children:"CSV Unveiled"}),"\n",(0,t.jsx)(a.p,{children:"CSV files are delightfully straightforward and easy to understand. They consist of rows and columns, just like a spreadsheet, with each row representing a record and each column representing a field. Each field is separated by a comma (hence the name \u201cComma-Separated Values\u201d), but other delimiters like tabs or semicolons can also be used."}),"\n",(0,t.jsx)(a.p,{children:"Picture CSV files as treasure troves of data, where each line holds a precious gem of information. These files can store vast datasets in a compact, human-readable form, making them a favorite among data adventurers. CSVs are so popular that even the mightiest of data tools, like Excel and pandas, bow before their simplicity and versatility!"}),"\n",(0,t.jsx)(a.h3,{id:"csv-handling-with-python",children:"CSV Handling with Python"}),"\n",(0,t.jsx)(a.p,{children:"Now, it\u2019s time to wield your Python wand and start working with CSV files. Fear not, for Python offers powerful spells in the form of built-in modules to handle CSVs effortlessly."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import csv\n\n# Writing to a CSV file\ndata = [\n    ["Name", "Age", "Occupation"],\n    ["Gandalf", "2019", "Wizard"],\n    ["Frodo", "33", "Ring Bearer"],\n]\n\nwith open("data.csv", "w", newline="") as csv_file:\n    csv_writer = csv.writer(csv_file)\n    csv_writer.writerows(data)\n\n# Reading a CSV file\nwith open("data.csv", "r") as csv_file:\n    csv_reader = csv.reader(csv_file)\n    for row in csv_reader:\n        print(row)\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"['Name', 'Age', 'Occupation']\n['Gandalf', '2019', 'Wizard']\n['Frodo', '33', 'Ring Bearer']\n"})}),"\n",(0,t.jsx)(a.h3,{id:"csv-magic-tips",children:"CSV Magic Tips"}),"\n",(0,t.jsxs)(a.admonition,{title:"Dealing with Headers",type:"tip",children:[(0,t.jsxs)(a.p,{children:["Headers can be magical blessings when they accompany your CSV files. They provide context and names to the columns, making your data quests much more enjoyable. When reading CSV files, you can access the headers separately using the ",(0,t.jsx)(a.code,{children:"csv.DictReader"})," or ",(0,t.jsx)(a.code,{children:"csv.reader"})," class."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import csv\n\n# Print the header of a CSV file\n# Method 1\nwith open("data.csv", "r") as csv_file:\n    csv_reader = csv.DictReader(csv_file)\n    header = csv_reader.fieldnames\n    print(header)\n\n# Method 2\nwith open("data.csv", "r") as csv_file:\n    csv_reader = csv.reader(csv_file)\n    header = next(csv_reader)\n    print(header)\n'})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"['Name', 'Age', 'Occupation']\n"})})]}),"\n",(0,t.jsxs)(a.admonition,{title:"Befriending pandas",type:"tip",children:[(0,t.jsx)(a.p,{children:"Pandas, the chivalrous Python library, can effortlessly read and write CSV files, converting them into majestic DataFrames. DataFrames are like enchanted tables that empower you to perform extraordinary data manipulations with ease!"}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import pandas as pd\n\n# Reading a CSV into a DataFrame\ndf = pd.read_csv("data.csv")\n\n# Writing a DataFrame to a CSV file\ndf.to_csv("new_data.csv", index=False)\n'})})]}),"\n",(0,t.jsx)(a.h3,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsx)(a.p,{children:"To dive deeper into the enchanting world of CSVs and learn more about Python\u2019s CSV handling, check out these resources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.python.org/3/library/csv.html",children:"Python CSV Module Documentation"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_csv.html",children:"Pandas CSV Documentation"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"json",children:"JSON"}),"\n",(0,t.jsx)(a.p,{children:"Prepare to be enchanted by the captivating world of this format. JSON is like a versatile spellbook that data sorcerers use to store and exchange their data in a human-readable and lightweight manner. In this section, we\u2019ll embark on a journey to discover the inner workings of JSON and learn how Python can help us cast spells upon this format."}),"\n",(0,t.jsx)(a.h3,{id:"json-unveiled",children:"JSON Unveiled"}),"\n",(0,t.jsx)(a.p,{children:"JSON is a data interchange format that\u2019s not just limited to the realm of JavaScript. It has become a universal language for data exchange across the entire enchanted forest of programming languages. Its simplicity and readability make it a favorite choice for storing complex data structures. Picture JSON as a magical scroll filled with enchanting hieroglyphs that hold the secrets of your data."}),"\n",(0,t.jsx)(a.h3,{id:"json-handling-with-python",children:"JSON Handling with Python"}),"\n",(0,t.jsx)(a.p,{children:"Now, let\u2019s unleash the Python spells to work with JSON and tap into its powers!"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import json\n\n# Writing JSON to a file\ndata = {\n    "name": "Harry Potter",\n    "occupation": "Wizard",\n    "house": "Gryffindor",\n}\n\nwith open("data.json", "w") as json_file:\n    json.dump(data, json_file, indent=4)\n\n# Reading JSON from a file\nwith open("data.json", "r") as json_file:\n    data = json.load(json_file)\n    print(data)\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"{'name': 'Harry Potter', 'occupation': 'Wizard', 'house': 'Gryffindor'}\n"})}),"\n",(0,t.jsx)(a.h3,{id:"json-magic-tips",children:"JSON Magic Tips"}),"\n",(0,t.jsxs)(a.admonition,{title:"Nested Magic",type:"tip",children:[(0,t.jsx)(a.p,{children:"JSON can store complex and nested data structures with ease. Imagine nesting magical creatures within magical creatures! Python lets you traverse the nested JSON using dictionaries and lists."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import json\n\ndata = {\n    "name": "Dumbledore",\n    "age": 115,\n    "occupation": "Headmaster",\n    "house": "Gryffindor",\n    "pets": {"owl": "Hedwig", "phoenix": "Fawkes"},\n    "students": [\n        {"name": "Harry", "age": 14},\n        {"name": "Hermione", "age": 13},\n        {"name": "Ron", "age": 14},\n    ],\n}\n\n# Accessing nested data\nprint(data["pets"]["owl"])  # Output: "Hedwig"\nprint(data["students"][0]["name"])  # Output: "Harry"\n'})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"Hedwig\nHarry\n"})})]}),"\n",(0,t.jsxs)(a.admonition,{title:"Encoding & Decoding Potions",type:"tip",children:[(0,t.jsx)(a.p,{children:"Python can conjure JSON from dictionaries and lists (encoding) and reverse the spell to create Python objects from JSON (decoding)."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import json\n\ndata = {"name": "Gandalf", "age": 2019, "occupation": "Wizard"}\n\n# Encoding Python data to JSON\njson_str = json.dumps(data)\nprint(json_str)\n\n# Decoding JSON to Python data\ndecoded_data = json.loads(json_str)\nprint(decoded_data)\n'})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"{\"name\": \"Gandalf\", \"age\": 2019, \"occupation\": \"Wizard\"}\n{'name': 'Gandalf', 'age': 2019, 'occupation': 'Wizard'}\n"})})]}),"\n",(0,t.jsx)(a.h3,{id:"additional-resources-1",children:"Additional Resources"}),"\n",(0,t.jsx)(a.p,{children:"To delve deeper into the arcane art of JSON manipulation in Python, consult this resource:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.python.org/3/library/json.html",children:"Python JSON Module Documentation"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"parquet",children:"Parquet"}),"\n",(0,t.jsx)(a.p,{children:"Prepare to be enchanted by the wonders of this columnar storage format. Parquet is like a magical tapestry that weaves speed, efficiency, and sorcery into a single fabric. In this section, we shall unveil the secrets of Parquet and learn how Python can summon its powers for unparalleled data manipulation and storage."}),"\n",(0,t.jsx)(a.h3,{id:"parquet-unveiled",children:"Parquet Unveiled"}),"\n",(0,t.jsx)(a.p,{children:"Parquet is a columnar storage file format designed to optimize data storage and processing. Unlike traditional row-based formats, Parquet stores data column by column, making it ideal for data exploration and analysis. Think of it as a magical wardrobe that organizes your data, allowing for quick access to specific columns without loading unnecessary data. This format is particularly useful when dealing with large datasets, making data operations as swift as a winged horse."}),"\n",(0,t.jsx)(a.h3,{id:"parquet-handling-with-python",children:"Parquet Handling with Python"}),"\n",(0,t.jsxs)(a.p,{children:["Time to unleash the Python magic to work with Parquet files. But before we dive into the spellcasting, we need to summon the right familiar \u2014 the ",(0,t.jsx)(a.code,{children:"pyarrow"})," library!"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import pandas as pd\nimport pyarrow as pa\nimport pyarrow.parquet as pq\n\n# Create a DataFrame (our data)\ndata = {\n    "name": ["Gandalf", "Frodo", "Aragorn", "Gimli"],\n    "age": [2019, 33, 87, 139],\n    "occupation": ["Wizard", "Ring Bearer", "King", "Dwarf"],\n}\ndf = pd.DataFrame(data)\n\n# Write DataFrame to a Parquet file\ntable = pa.Table.from_pandas(df)\npq.write_table(table, "data.parquet")\n\n# Read Parquet file into DataFrame\ntable_read = pq.read_table("data.parquet")\ndf_read = table_read.to_pandas()\nprint(df_read)\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"      name   age   occupation\n0  Gandalf  2019       Wizard\n1    Frodo    33  Ring Bearer\n2  Aragorn    87         King\n3    Gimli   139        Dwarf\n"})}),"\n",(0,t.jsx)(a.h3,{id:"parquet-magic-tips",children:"Parquet Magic Tips"}),"\n",(0,t.jsx)(a.admonition,{title:"Fast as a Firebolt",type:"tip",children:(0,t.jsx)(a.p,{children:"Parquet\u2019s columnar storage shines when it comes to analytical queries that involve specific columns. It\u2019s like having a library of spells to quickly access the data you need without loading everything else. Leverage Parquet\u2019s speed to fly through your data exploration tasks!"})}),"\n",(0,t.jsxs)(a.admonition,{title:"Compatibility Charms",type:"tip",children:[(0,t.jsx)(a.p,{children:"Parquet plays well with many programming languages, including Python, R, Java, and more. It\u2019s the ultimate cross-language translator, allowing you to share data files across different magical realms."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-r",metastring:'title="R"',children:'# Writing a Parquet file with pyarrow in R\nlibrary(arrow)\n\ndf <- data.frame(name=c("Legolas", "Boromir"), age=c(2931, 3289))\ntable <- arrow_table(df)\nwrite_parquet(table, "data.parquet")\n'})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'# Reading the same Parquet file in Python\nimport pyarrow.parquet as pq\n\ntable = pq.read_table("data.parquet")\ndf = table.to_pandas()\nprint(df)\n'})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"      name     age\n0  Legolas  2931.0\n1  Boromir  3289.0\n"})})]}),"\n",(0,t.jsx)(a.h3,{id:"additional-resources-2",children:"Additional Resources"}),"\n",(0,t.jsx)(a.p,{children:"To master the art of Parquet and explore more Python spells with this format, delve into these resources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://arrow.apache.org/docs/python/",children:"PyArrow Documentation"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://parquet.apache.org/docs/",children:"Parquet Format Specification"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"feather",children:"Feather"}),"\n",(0,t.jsx)(a.p,{children:"A feather-light format that glides through data like a gentle breeze. Feather is like the graceful dance of a woodland fairy, designed to speedily store data. In this section, we\u2019ll unveil the enchanting secrets of Feather and learn how Python can harness its swift powers for seamless data manipulation."}),"\n",(0,t.jsx)(a.h3,{id:"feather-unveiled",children:"Feather Unveiled"}),"\n",(0,t.jsxs)(a.p,{children:["Feather is an efficient binary file format that lets you write and read data with remarkable speed and grace. It utilizes the ",(0,t.jsx)(a.a,{href:"https://arrow.apache.org/docs/python/ipc.html#ipc",children:"Arrow IPC format"})," internally, and is compatible with popular data manipulation libraries like ",(0,t.jsx)(a.code,{children:"pandas"})," and ",(0,t.jsx)(a.code,{children:"PyArrow"}),"."]}),"\n",(0,t.jsx)(a.h3,{id:"feather-handling-with-python",children:"Feather Handling with Python"}),"\n",(0,t.jsxs)(a.p,{children:["Feather\u2019s simplicity and speed shine when working with large datasets, and Python provides us with a handy spellbook in the form of the ",(0,t.jsx)(a.code,{children:"pandas"})," library for manipulating data with ease."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import pandas as pd\n\n# Create a DataFrame (our data)\ndata = {\n    "name": ["Gandalf", "Frodo", "Aragorn"],\n    "age": [2019, 33, 87],\n    "occupation": ["Wizard", "Ring Bearer", "King"],\n}\ndf = pd.DataFrame(data)\n\n# Write DataFrame to a Feather file\ndf.to_feather("data.feather")\n\n# Read Feather file into DataFrame\ndf_read = pd.read_feather("data.feather")\nprint(df_read)\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"      name   age   occupation\n0  Gandalf  2019       Wizard\n1    Frodo    33  Ring Bearer\n2  Aragorn    87         King\n"})}),"\n",(0,t.jsx)(a.h3,{id:"feather-magic-tips",children:"Feather Magic Tips"}),"\n",(0,t.jsx)(a.admonition,{title:"Swift as a Phoenix",type:"tip",children:(0,t.jsx)(a.p,{children:"Feather\u2019s binary storage and efficient design enable quick reading and writing of data, making it an excellent choice for handling large datasets with ease."})}),"\n",(0,t.jsx)(a.admonition,{title:"Perfect Companion for pandas",type:"tip",children:(0,t.jsxs)(a.p,{children:["Feather plays wonderfully well with ",(0,t.jsx)(a.code,{children:"pandas"}),", one of Python\u2019s most versatile data manipulation libraries. This synergy allows you to seamlessly store and share dataframes with other data sorcerers in your Python realm."]})}),"\n",(0,t.jsx)(a.h3,{id:"additional-resources-3",children:"Additional Resources"}),"\n",(0,t.jsx)(a.p,{children:"To explore the full potential of Feather\u2019s magic within the Python ecosystem, consult this resource:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://arrow.apache.org/docs/python/feather.html",children:"Feather Python Library Documentation"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"sql",children:"SQL"}),"\n",(0,t.jsx)(a.p,{children:"The legendary language of databases and a crucial tool in every data sorcerer\u2019s arsenal. SQL is like the secret language of ancient scrolls, granting you the power to interact with databases and conjure data like a master enchanter. In this section, we\u2019ll unveil the magical wonders of SQL and how Python can serve as your faithful companion in harnessing its sorcery."}),"\n",(0,t.jsx)(a.h3,{id:"sql-unveiled",children:"SQL Unveiled"}),"\n",(0,t.jsx)(a.p,{children:"SQL is a declarative language designed for managing, querying, and manipulating relational databases. Think of SQL as a magical chant that enables you to communicate with powerful entities known as database management systems (DBMS). With SQL, you can create, modify, and retrieve data from databases, allowing you to uncover hidden treasures of information."}),"\n",(0,t.jsx)(a.h3,{id:"sql-handling-with-python",children:"SQL Handling with Python"}),"\n",(0,t.jsxs)(a.p,{children:["To embark on your SQL adventures, Python offers a magical ally in the form of the ",(0,t.jsx)(a.code,{children:"sqlite3"})," library. Together, they\u2019ll help you cast SQL spells on a lightweight database known as SQLite."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'import sqlite3\n\n# Connect to a database (implicitly creates it if it doesn\'t exist)\nconn = sqlite3.connect("my_database.db")\n\n# Create a table\ncreate_table_query = """\nCREATE TABLE IF NOT EXISTS wizards (\n    id INTEGER PRIMARY KEY,\n    name TEXT,\n    age INTEGER,\n    occupation TEXT\n);\n"""\nconn.execute(create_table_query)\n\n# Insert data into the table\ninsert_data_query = """\nINSERT INTO wizards (name, age, occupation)\nVALUES (\'Gandalf\', 2019, \'Wizard\'),\n       (\'Frodo\', 33, \'Ring Bearer\'),\n       (\'Hermione\', 13, \'Witch\');\n"""\nconn.execute(insert_data_query)\n\n# Query the database and fetch data\nselect_data_query = "SELECT * FROM wizards;"\ncursor = conn.execute(select_data_query)\ndata = cursor.fetchall()\nfor row in data:\n    print(row)\n\n# Close the connection\nconn.close()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"(1, 'Gandalf', 2019, 'Wizard')\n(2, 'Frodo', 33, 'Ring Bearer')\n(3, 'Hermione', 13, 'Witch')\n"})}),"\n",(0,t.jsx)(a.h3,{id:"sql-magic-tips",children:"SQL Magic Tips"}),"\n",(0,t.jsx)(a.admonition,{title:"Readability and Simplicity",type:"tip",children:(0,t.jsx)(a.p,{children:"SQL\u2019s power lies in its simplicity and readability. Its human-readable syntax allows you to express complex data operations in just a few lines of code."})}),"\n",(0,t.jsxs)(a.admonition,{title:"Parameterized Queries for Security",type:"tip",children:[(0,t.jsx)(a.p,{children:"When crafting SQL spells, be mindful of SQL injection attacks. Always use parameterized queries to shield yourself from malicious entities attempting to tamper with your data."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",metastring:'title="Python"',children:'# Dangerous (don\'t use!):\nname = "Gandalf\'; DROP TABLE wizards;--"\nevil_query = f"SELECT * FROM wizards WHERE name = \'{name}\';"\n\n# Safe (use parameterized queries!):\nsafe_query = "SELECT * FROM wizards WHERE name = ?;"\ncursor.execute(safe_query, (name,))\n'})}),(0,t.jsxs)(a.p,{children:["In this example, if the ",(0,t.jsx)(a.code,{children:"name"})," value comes from user input and is not properly validated, an attacker can manipulate it to execute a dangerous command like dropping the entire ",(0,t.jsx)(a.code,{children:"wizards"})," table, causing data loss. With parameterized queries, you separate the SQL code from the user-provided input. Instead of directly embedding the input into the query string, you use placeholders (often denoted by ",(0,t.jsx)(a.code,{children:"?"}),") in the query. Then, you pass the actual input values separately."]})]}),"\n",(0,t.jsx)(a.h3,{id:"additional-resources-4",children:"Additional Resources"}),"\n",(0,t.jsx)(a.p,{children:"To delve deeper into the art of SQL and explore its full potential, consult these resources:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://www.sqlite.org/docs.html",children:"SQLite Documentation"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"https://docs.sqlalchemy.org/",children:"SQLAlchemy Documentation"})}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Happy data wrangling and may the Pythonic force be with you! \u2728"})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>o});var t=n(67294);const i={},r=t.createContext(i);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);