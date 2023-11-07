"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7239],{78178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(85893),s=n(11151);const r={title:"Scraping Job Listings",description:"Scraping job listings using Python",tags:["Scraping","Python","GitHub","Automation","Data Science"]},a="Python Web Scraping: A Beginner\u2019s Guide to Scraping Job Listings",o={id:"scrape/jobinventory.com",title:"Scraping Job Listings",description:"Scraping job listings using Python",source:"@site/docs/scrape/jobinventory.com.md",sourceDirName:"scrape",slug:"/scrape/jobinventory.com",permalink:"/portfolio/docs/scrape/jobinventory.com",draft:!1,unlisted:!1,tags:[{label:"Scraping",permalink:"/portfolio/docs/tags/scraping"},{label:"Python",permalink:"/portfolio/docs/tags/python"},{label:"GitHub",permalink:"/portfolio/docs/tags/git-hub"},{label:"Automation",permalink:"/portfolio/docs/tags/automation"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"}],version:"current",frontMatter:{title:"Scraping Job Listings",description:"Scraping job listings using Python",tags:["Scraping","Python","GitHub","Automation","Data Science"]},sidebar:"tutorialSidebar",previous:{title:"Web Scraping",permalink:"/portfolio/docs/scrape/"},next:{title:"Statistics",permalink:"/portfolio/docs/stats/"}},l={},d=[{value:"Setup",id:"setup",level:2},{value:"Scraping a single page",id:"scraping-a-single-page",level:2},{value:"Scraping multiple pages",id:"scraping-multiple-pages",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"python-web-scraping-a-beginners-guide-to-scraping-job-listings",children:"Python Web Scraping: A Beginner\u2019s Guide to Scraping Job Listings"}),"\n",(0,i.jsxs)(t.p,{children:["Are you tired of manually scrolling through endless job postings to find the perfect opportunity? Look no further! In this tutorial, I\u2019ll walk you through the steps of scraping job listings from ",(0,i.jsx)(t.a,{href:"http://jobinventory.com/",children:"JobInventory.com"})," using Python."]}),"\n",(0,i.jsxs)(t.p,{children:["First, we\u2019ll use the ",(0,i.jsx)(t.code,{children:"requests"})," library to send a GET request to the website and retrieve the HTML content. Then, we\u2019ll use ",(0,i.jsx)(t.code,{children:"BeautifulSoup"})," to parse the HTML and extract the relevant job listing information, such as the job title, company name, and job description."]}),"\n",(0,i.jsx)(t.p,{children:"Next, we\u2019ll explore how to use Python\u2019s regular expressions module to clean up the extracted data and prepare it for further analysis. We\u2019ll also cover how to store the data in a CSV file for future use."}),"\n",(0,i.jsx)(t.p,{children:"But wait, there\u2019s more! We\u2019ll also dive into advanced scraping techniques, such as handling pagination and dynamically loaded content. And, as a bonus, we\u2019ll show you how to use Python\u2019s natural language processing libraries to extract keywords and analyze job descriptions."}),"\n",(0,i.jsx)(t.p,{children:"So, grab a cup of coffee and get ready to dive into the world of web scraping with Python. By the end of this tutorial, you\u2019ll have the skills to scrape job listings on JobInventory.com and beyond!"}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.p,{children:"To get started with scraping job listings, we\u2019ll first need to install a few Python packages. Open up your terminal or command prompt and run the following command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="Shell"',children:"pip install requests beautifulsoup4 pandas\n"})}),"\n",(0,i.jsx)(t.p,{children:"These packages will allow us to send HTTP requests, parse HTML, and store the scraped data in a CSV file."}),"\n",(0,i.jsx)(t.h2,{id:"scraping-a-single-page",children:"Scraping a single page"}),"\n",(0,i.jsx)(t.p,{children:"Now that we have our dependencies installed, let\u2019s dive into the code."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Python"',children:'import requests\nfrom bs4 import BeautifulSoup\nimport re\nimport pandas as pd\n\n# Define the search query and location\nsearch_query = "data scientist"\nlocation = "New York City, NY"\n\n# Construct the URL\nurl = f"http://www.jobinventory.com/search?q={search_query}&l={location}"\n\n# Send a GET request to the URL\nresponse = requests.get(url)\n\n# Parse the HTML content using BeautifulSoup\nsoup = BeautifulSoup(response.content, "html.parser")\n\n# Find all the job listings on the page\njob_listings = soup.find_all("li", class_="resultBlock")\n\n# Define empty lists to store the job details\ntitles = []\ncompanies = []\nlocations = []\ndescriptions = []\n\n# Loop through each job listing and extract the relevant details\nfor job in job_listings:\n    title = job.find("div", class_="title").text.strip()\n    company = job.find("span", class_="company").text.strip()\n    location = (\n        job.find("div", class_="state").text.split("\\xa0-\\xa0")[-1].strip()\n    )\n    description = job.find("div", class_="description").text.strip()\n\n    titles.append(title)\n    companies.append(company)\n    locations.append(location)\n    descriptions.append(description)\n\n# Clean up the job descriptions using regular expressions\nregex = re.compile(r"\\s+")\nclean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]\n\n# Create a Pandas DataFrame to store the job details\ndf = pd.DataFrame(\n    {\n        "Title": titles,\n        "Company": companies,\n        "Location": locations,\n        "Description": clean_descriptions,\n    }\n)\n\n# Export the DataFrame to a CSV file\ndf.to_csv("job_listings.csv", index=False)\n\nprint("Scraping complete! The results are saved in \\"job_listings.csv\\".")\n\ndf\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Scraping complete! The results are saved in 'job_listings.csv'.\n"})}),"\n",(0,i.jsx)("div",{children:(0,i.jsxs)("table",{border:"1",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsx)("th",{children:"Title"}),(0,i.jsx)("th",{children:"Company"}),(0,i.jsx)("th",{children:"Location"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"0"}),(0,i.jsx)("td",{children:"Lead Data Scientist"}),(0,i.jsx)("td",{children:"Tiro"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Lead Data Scientist Enigma is seekingand visua..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"1"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Smith Hanley Associates"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Title: Data Scientist Location: Newengineering..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"2"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Averity"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"like to become a Data Scientist at a global in..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"3"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Revelio Labs"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"for: Revelio Labs is looking for a creative Se..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"4"}),(0,i.jsx)("td",{children:"Lead Data Scientist"}),(0,i.jsx)("td",{children:"Thomas"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"looking for a Lead Data Scientist to lead and ..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"5"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Eliassen Group"}),(0,i.jsx)("td",{children:"Jersey City, NJ"}),(0,i.jsx)("td",{children:"The client is seeking a Neo4j data scientist/e..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"6"}),(0,i.jsx)("td",{children:"Sr. Data Scientist"}),(0,i.jsx)("td",{children:"CVS"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"hiring for the following role in New York, NY:..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"7"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"E-Frontiers"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Data Scientist The Company is aExperience in a..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"8"}),(0,i.jsx)("td",{children:"Staff Data Scientist"}),(0,i.jsx)("td",{children:"Harnham"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Staff Data Scientist AdTech Companyimplement. ..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"9"}),(0,i.jsx)("td",{children:"Data Scientist, Modeling"}),(0,i.jsx)("td",{children:"Gro Intelligence"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"addresses agriculture, food, and our climate o..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"10"}),(0,i.jsx)("td",{children:"Senior Data Scientist"}),(0,i.jsx)("td",{children:"Teachers Insurance and Annuity Association - TIAA"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"reporting, interpretation of data analyses to ..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"11"}),(0,i.jsx)("td",{children:"Lead NLP Data Scientist - Remote | WFH"}),(0,i.jsx)("td",{children:"Get It Recruit - Real Estate"}),(0,i.jsx)("td",{children:"Jersey City, NJ"}),(0,i.jsx)("td",{children:"of data science! We are looking for a talented..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"12"}),(0,i.jsx)("td",{children:"Senior Research Scientist"}),(0,i.jsx)("td",{children:"NYU Langone Health"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Senior Research Scientist will help manage, pr..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"13"}),(0,i.jsx)("td",{children:"Senior Data Scientist"}),(0,i.jsx)("td",{children:"Equation Staffing"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"B2B. They are looking for a Senior Data Scient..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"14"}),(0,i.jsx)("td",{children:"Assistant Research Scientist"}),(0,i.jsx)("td",{children:"NYU Langone Health"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Investigator. The Research Scientist will mana..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"15"}),(0,i.jsx)("td",{children:"Principal Data Scientist"}),(0,i.jsx)("td",{children:"Harnham"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Principal Data Scientist AdTech StartupLead th..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"16"}),(0,i.jsx)("td",{children:"Senior Data Scientist"}),(0,i.jsx)("td",{children:"Oliwska Grupa Konsultingowa"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"for an experienced applied data scientist to j..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"17"}),(0,i.jsx)("td",{children:"Senior Data Scientist"}),(0,i.jsx)("td",{children:"Storm3"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"achieving faster outcomes. We are seeking a dr..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"18"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Verizon"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"in a complex, multi-functional, Agile team env..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"19"}),(0,i.jsx)("td",{children:"Data Scientist Series, MTA Data & Analytics"}),(0,i.jsx)("td",{children:"MTA"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Data Scientist Series, MTA012 479 3 Senior Dat..."})]})]})]})}),"\n",(0,i.jsx)(t.p,{children:"In this code, we first define the search query and location variables. We then construct the URL by concatenating these variables with the base URL of JobInventory.com."}),"\n",(0,i.jsxs)(t.p,{children:["We then send a GET request to the URL using the requests library and parse the HTML content using BeautifulSoup. We find all the job listings on the page by searching for the ",(0,i.jsx)(t.code,{children:"li"})," elements with the ",(0,i.jsx)(t.code,{children:"resultBlock"})," class."]}),"\n",(0,i.jsxs)(t.p,{children:["Next, we define empty lists to store the job details and loop through each job listing, extracting the relevant details using the ",(0,i.jsx)(t.code,{children:"find"})," method. We append the extracted details to their respective lists."]}),"\n",(0,i.jsxs)(t.p,{children:["To clean up the job descriptions, we define a regular expression pattern that matches one or more whitespace characters and use the ",(0,i.jsx)(t.code,{children:"sub"})," method to replace them with a single space."]}),"\n",(0,i.jsxs)(t.p,{children:["Finally, we create a Pandas DataFrame to store the job details and export it to a CSV file using the ",(0,i.jsx)(t.code,{children:"to_csv"})," method."]}),"\n",(0,i.jsx)(t.p,{children:"And there you have it! With just a few lines of Python code, you can scrape job listings from JobInventory.com and store them in a CSV file for further analysis."}),"\n",(0,i.jsx)(t.p,{children:"But what if there are multiple pages of job listings?"}),"\n",(0,i.jsx)(t.h2,{id:"scraping-multiple-pages",children:"Scraping multiple pages"}),"\n",(0,i.jsx)(t.p,{children:"We can handle pagination by modifying our code as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",metastring:'title="Python"',children:'import requests\nfrom bs4 import BeautifulSoup\nimport re\nimport pandas as pd\n\n# Define the search query and location\nsearch_query = "data scientist"\nlocation = "New York City, NY"\n\n# Construct the base URL\nbase_url = "http://www.jobinventory.com"\n\n# Define empty lists to store the job details\ntitles = []\ncompanies = []\nlocations = []\ndescriptions = []\n\n# Loop through each page of job listings\nmax_pages = 5\npage_num = 1\n\nwhile page_num <= max_pages:\n    # Construct the URL for the current page\n    url = f"{base_url}/search?q={search_query}&l={location}&start={page_num}"\n\n    # Send a GET request to the URL\n    response = requests.get(url)\n\n    # Parse the HTML content using BeautifulSoup\n    soup = BeautifulSoup(response.content, "html.parser")\n\n    # Find all the job listings on the page\n    job_listings = soup.find_all("li", class_="resultBlock")\n\n    # If there are no job listings on the current page, we have reached the end\n    # of the results\n    if not job_listings:\n        break\n\n    # Loop through each job listing and extract the relevant details\n    for job in job_listings:\n        title = job.find("div", class_="title").text.strip()\n        company = job.find("span", class_="company").text.strip()\n        location = (\n            job.find("div", class_="state").text.split(\n                "\\xa0-\\xa0"\n            )[-1].strip()\n        )\n        description = job.find("div", class_="description").text.strip()\n\n        titles.append(title)\n        companies.append(company)\n        locations.append(location)\n        descriptions.append(description)\n\n    # Increment the page number\n    page_num += 1\n\n# Clean up the job descriptions using regular expressions\nregex = re.compile(r"\\s+")\nclean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]\n\n# Create a Pandas DataFrame to store the job details\ndf = pd.DataFrame(\n    {\n        "Title": titles,\n        "Company": companies,\n        "Location": locations,\n        "Description": clean_descriptions,\n    }\n)\n\n# Export the DataFrame to a CSV file\ndf.to_csv("job_listings_multiple.csv", index=False)\n\nprint("Scraping complete! Check \'job_listings_multiple.csv\' for the results.")\n\ndf\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Scraping complete! Check 'job_listings_multiple.csv' for the results.\n"})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsxs)("table",{border:"1",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsx)("th",{children:"Title"}),(0,i.jsx)("th",{children:"Company"}),(0,i.jsx)("th",{children:"Location"}),(0,i.jsx)("th",{children:"Description"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"0"}),(0,i.jsx)("td",{children:"Lead Data Scientist"}),(0,i.jsx)("td",{children:"Tiro"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Lead Data Scientist Enigma is seekingand visua..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"1"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Smith Hanley Associates"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"Title: Data Scientist Location: Newengineering..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"2"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Averity"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"like to become a Data Scientist at a global in..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"3"}),(0,i.jsx)("td",{children:"Data Scientist"}),(0,i.jsx)("td",{children:"Revelio Labs"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"for: Revelio Labs is looking for a creative Se..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"4"}),(0,i.jsx)("td",{children:"Lead Data Scientist"}),(0,i.jsx)("td",{children:"Thomas"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"looking for a Lead Data Scientist to lead and ..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"95"}),(0,i.jsx)("td",{children:"Senior Data Scientist"}),(0,i.jsx)("td",{children:"Wonder"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"written and verbal) to collaborate with busine..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"96"}),(0,i.jsx)("td",{children:"Data Scientist, Product Experimentation"}),(0,i.jsx)("td",{children:"Captions"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:", or a related discipline. * 3-5 years of prov..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"97"}),(0,i.jsx)("td",{children:"Staff Data Scientist, Marketplace"}),(0,i.jsx)("td",{children:"CookUnity"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"with engineering. * Provide mentorship and gui..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"98"}),(0,i.jsx)("td",{children:"Sr. Product Data Scientist (NY)"}),(0,i.jsx)("td",{children:"Philo"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"streaming service. You'll be working closely w..."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"99"}),(0,i.jsx)("td",{children:"Staff Data Scientist, Marketplace"}),(0,i.jsx)("td",{children:"CookUnity"}),(0,i.jsx)("td",{children:"New York, NY"}),(0,i.jsx)("td",{children:"with engineering. * Provide mentorship and gui..."})]})]})]}),(0,i.jsx)("p",{children:"100 rows \xd7 4 columns"})]}),"\n",(0,i.jsx)(t.p,{children:"In this modified code, we first define the search query and location variables, as well as the base URL of JobInventory.com. We also define empty lists to store the job details."}),"\n",(0,i.jsxs)(t.p,{children:["We then loop through each page of job listings, up to e.g. 5 pages, by incrementing the ",(0,i.jsx)(t.code,{children:"start"})," parameter of the URL. We check if there are any job listings on the current page, and if not, we break out of the loop."]}),"\n",(0,i.jsxs)(t.p,{children:["We then loop through each job listing on the current page, extracting the relevant details using the ",(0,i.jsx)(t.code,{children:"find"})," method and appending them to their respective lists."]}),"\n",(0,i.jsx)(t.p,{children:"After we have scraped all the job listings, we clean up the job descriptions using regular expressions, create a Pandas DataFrame to store the job details, and export it to a CSV file."}),"\n",(0,i.jsxs)(t.p,{children:["And there you have it! With these modifications, we can scrape job listings from ",(0,i.jsx)(t.a,{href:"http://jobinventory.com/",children:"JobInventory.com"})," across multiple pages."]}),"\n",(0,i.jsx)(t.p,{children:"Happy scraping!"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);