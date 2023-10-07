"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7239],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=l.createContext({}),u=function(t){var e=l.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=r(t,["components","mdxType","originalType","parentName"]),p=u(n),k=a,h=p["".concat(s,".").concat(k)]||p[k]||d[k]||i;return n?l.createElement(h,o(o({ref:e},c),{},{components:n})):l.createElement(h,o({ref:e},c))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=k;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[p]="string"==typeof t?t:a,o[1]=r;for(var u=2;u<i;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5163:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const i={title:"Scraping Job Listings",tags:["Scraping","Python","GitHub","Automation","Data Science"]},o="Python Web Scraping: A Beginner\u2019s Guide to Scraping Job Listings",r={unversionedId:"scrape/jobinventory.com",id:"scrape/jobinventory.com",title:"Scraping Job Listings",description:"Are you tired of manually scrolling through endless job postings to find the perfect opportunity? Look no further! In this tutorial, I\u2019ll walk you through the steps of scraping job listings from JobInventory.com using Python.",source:"@site/docs/scrape/jobinventory.com.md",sourceDirName:"scrape",slug:"/scrape/jobinventory.com",permalink:"/portfolio/docs/scrape/jobinventory.com",draft:!1,tags:[{label:"Scraping",permalink:"/portfolio/docs/tags/scraping"},{label:"Python",permalink:"/portfolio/docs/tags/python"},{label:"GitHub",permalink:"/portfolio/docs/tags/git-hub"},{label:"Automation",permalink:"/portfolio/docs/tags/automation"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"}],version:"current",frontMatter:{title:"Scraping Job Listings",tags:["Scraping","Python","GitHub","Automation","Data Science"]},sidebar:"tutorialSidebar",previous:{title:"Web Scraping",permalink:"/portfolio/docs/scrape/"},next:{title:"Statistics",permalink:"/portfolio/docs/stats/"}},s={},u=[{value:"Setup",id:"setup",level:2},{value:"Scraping a single page",id:"scraping-a-single-page",level:2},{value:"Scraping multiple pages",id:"scraping-multiple-pages",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-web-scraping-a-beginners-guide-to-scraping-job-listings"},"Python Web Scraping: A Beginner\u2019s Guide to Scraping Job Listings"),(0,a.kt)("p",null,"Are you tired of manually scrolling through endless job postings to find the perfect opportunity? Look no further! In this tutorial, I\u2019ll walk you through the steps of scraping job listings from ",(0,a.kt)("a",{parentName:"p",href:"http://jobinventory.com/"},"JobInventory.com")," using Python."),(0,a.kt)("p",null,"First, we\u2019ll use the ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," library to send a GET request to the website and retrieve the HTML content. Then, we\u2019ll use ",(0,a.kt)("inlineCode",{parentName:"p"},"BeautifulSoup")," to parse the HTML and extract the relevant job listing information, such as the job title, company name, and job description."),(0,a.kt)("p",null,"Next, we\u2019ll explore how to use Python\u2019s regular expressions module to clean up the extracted data and prepare it for further analysis. We\u2019ll also cover how to store the data in a CSV file for future use."),(0,a.kt)("p",null,"But wait, there\u2019s more! We\u2019ll also dive into advanced scraping techniques, such as handling pagination and dynamically loaded content. And, as a bonus, we\u2019ll show you how to use Python\u2019s natural language processing libraries to extract keywords and analyze job descriptions."),(0,a.kt)("p",null,"So, grab a cup of coffee and get ready to dive into the world of web scraping with Python. By the end of this tutorial, you\u2019ll have the skills to scrape job listings on JobInventory.com and beyond!"),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To get started with scraping job listings, we\u2019ll first need to install a few Python packages. Open up your terminal or command prompt and run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install requests beautifulsoup4 pandas\n")),(0,a.kt)("p",null,"These packages will allow us to send HTTP requests, parse HTML, and store the scraped data in a CSV file."),(0,a.kt)("h2",{id:"scraping-a-single-page"},"Scraping a single page"),(0,a.kt)("p",null,"Now that we have our dependencies installed, let\u2019s dive into the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import requests\nfrom bs4 import BeautifulSoup\nimport re\nimport pandas as pd\n\n# Define the search query and location\nsearch_query = "data scientist"\nlocation = "New York City, NY"\n\n# Construct the URL\nurl = f"http://www.jobinventory.com/search?q={search_query}&l={location}"\n\n# Send a GET request to the URL\nresponse = requests.get(url)\n\n# Parse the HTML content using BeautifulSoup\nsoup = BeautifulSoup(response.content, "html.parser")\n\n# Find all the job listings on the page\njob_listings = soup.find_all("li", class_="resultBlock")\n\n# Define empty lists to store the job details\ntitles = []\ncompanies = []\nlocations = []\ndescriptions = []\n\n# Loop through each job listing and extract the relevant details\nfor job in job_listings:\n    title = job.find("div", class_="title").text.strip()\n    company = job.find("span", class_="company").text.strip()\n    location = (\n        job.find("div", class_="state").text.split("\\xa0-\\xa0")[-1].strip()\n    )\n    description = job.find("div", class_="description").text.strip()\n\n    titles.append(title)\n    companies.append(company)\n    locations.append(location)\n    descriptions.append(description)\n\n# Clean up the job descriptions using regular expressions\nregex = re.compile(r"\\s+")\nclean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]\n\n# Create a Pandas DataFrame to store the job details\ndf = pd.DataFrame(\n    {\n        "Title": titles,\n        "Company": companies,\n        "Location": locations,\n        "Description": clean_descriptions,\n    }\n)\n\n# Export the DataFrame to a CSV file\ndf.to_csv("job_listings.csv", index=False)\n\nprint("Scraping complete! The results are saved in \\"job_listings.csv\\".")\n\ndf\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Scraping complete! The results are saved in 'job_listings.csv'.\n")),(0,a.kt)("div",null,(0,a.kt)("table",{border:"1"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Title"),(0,a.kt)("th",null,"Company"),(0,a.kt)("th",null,"Location"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"0"),(0,a.kt)("td",null,"Lead Data Scientist"),(0,a.kt)("td",null,"Tiro"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Lead Data Scientist Enigma is seekingand visua...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"1"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Smith Hanley Associates"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Title: Data Scientist Location: Newengineering...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Averity"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"like to become a Data Scientist at a global in...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"3"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Revelio Labs"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"for: Revelio Labs is looking for a creative Se...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"4"),(0,a.kt)("td",null,"Lead Data Scientist"),(0,a.kt)("td",null,"Thomas"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"looking for a Lead Data Scientist to lead and ...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"5"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Eliassen Group"),(0,a.kt)("td",null,"Jersey City, NJ"),(0,a.kt)("td",null,"The client is seeking a Neo4j data scientist/e...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"6"),(0,a.kt)("td",null,"Sr. Data Scientist"),(0,a.kt)("td",null,"CVS"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"hiring for the following role in New York, NY:...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"7"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"E-Frontiers"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Data Scientist The Company is aExperience in a...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"8"),(0,a.kt)("td",null,"Staff Data Scientist"),(0,a.kt)("td",null,"Harnham"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Staff Data Scientist AdTech Companyimplement. ...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"9"),(0,a.kt)("td",null,"Data Scientist, Modeling"),(0,a.kt)("td",null,"Gro Intelligence"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"addresses agriculture, food, and our climate o...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"10"),(0,a.kt)("td",null,"Senior Data Scientist"),(0,a.kt)("td",null,"Teachers Insurance and Annuity Association - TIAA"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"reporting, interpretation of data analyses to ...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"11"),(0,a.kt)("td",null,"Lead NLP Data Scientist - Remote | WFH"),(0,a.kt)("td",null,"Get It Recruit - Real Estate"),(0,a.kt)("td",null,"Jersey City, NJ"),(0,a.kt)("td",null,"of data science! We are looking for a talented...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"12"),(0,a.kt)("td",null,"Senior Research Scientist"),(0,a.kt)("td",null,"NYU Langone Health"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Senior Research Scientist will help manage, pr...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"13"),(0,a.kt)("td",null,"Senior Data Scientist"),(0,a.kt)("td",null,"Equation Staffing"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"B2B. They are looking for a Senior Data Scient...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"14"),(0,a.kt)("td",null,"Assistant Research Scientist"),(0,a.kt)("td",null,"NYU Langone Health"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Investigator. The Research Scientist will mana...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"15"),(0,a.kt)("td",null,"Principal Data Scientist"),(0,a.kt)("td",null,"Harnham"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Principal Data Scientist AdTech StartupLead th...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"16"),(0,a.kt)("td",null,"Senior Data Scientist"),(0,a.kt)("td",null,"Oliwska Grupa Konsultingowa"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"for an experienced applied data scientist to j...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"17"),(0,a.kt)("td",null,"Senior Data Scientist"),(0,a.kt)("td",null,"Storm3"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"achieving faster outcomes. We are seeking a dr...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"18"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Verizon"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"in a complex, multi-functional, Agile team env...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"19"),(0,a.kt)("td",null,"Data Scientist Series, MTA Data & Analytics"),(0,a.kt)("td",null,"MTA"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Data Scientist Series, MTA012 479 3 Senior Dat..."))))),(0,a.kt)("p",null,"In this code, we first define the search query and location variables. We then construct the URL by concatenating these variables with the base URL of JobInventory.com."),(0,a.kt)("p",null,"We then send a GET request to the URL using the requests library and parse the HTML content using BeautifulSoup. We find all the job listings on the page by searching for the ",(0,a.kt)("inlineCode",{parentName:"p"},"li")," elements with the ",(0,a.kt)("inlineCode",{parentName:"p"},"resultBlock")," class."),(0,a.kt)("p",null,"Next, we define empty lists to store the job details and loop through each job listing, extracting the relevant details using the ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," method. We append the extracted details to their respective lists."),(0,a.kt)("p",null,"To clean up the job descriptions, we define a regular expression pattern that matches one or more whitespace characters and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," method to replace them with a single space."),(0,a.kt)("p",null,"Finally, we create a Pandas DataFrame to store the job details and export it to a CSV file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"to_csv")," method."),(0,a.kt)("p",null,"And there you have it! With just a few lines of Python code, you can scrape job listings from JobInventory.com and store them in a CSV file for further analysis."),(0,a.kt)("p",null,"But what if there are multiple pages of job listings?"),(0,a.kt)("h2",{id:"scraping-multiple-pages"},"Scraping multiple pages"),(0,a.kt)("p",null,"We can handle pagination by modifying our code as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import requests\nfrom bs4 import BeautifulSoup\nimport re\nimport pandas as pd\n\n# Define the search query and location\nsearch_query = "data scientist"\nlocation = "New York City, NY"\n\n# Construct the base URL\nbase_url = "http://www.jobinventory.com"\n\n# Define empty lists to store the job details\ntitles = []\ncompanies = []\nlocations = []\ndescriptions = []\n\n# Loop through each page of job listings\nmax_pages = 5\npage_num = 1\n\nwhile page_num <= max_pages:\n    # Construct the URL for the current page\n    url = f"{base_url}/search?q={search_query}&l={location}&start={page_num}"\n\n    # Send a GET request to the URL\n    response = requests.get(url)\n\n    # Parse the HTML content using BeautifulSoup\n    soup = BeautifulSoup(response.content, "html.parser")\n\n    # Find all the job listings on the page\n    job_listings = soup.find_all("li", class_="resultBlock")\n\n    # If there are no job listings on the current page, we have reached the end\n    # of the results\n    if not job_listings:\n        break\n\n    # Loop through each job listing and extract the relevant details\n    for job in job_listings:\n        title = job.find("div", class_="title").text.strip()\n        company = job.find("span", class_="company").text.strip()\n        location = (\n            job.find("div", class_="state").text.split(\n                "\\xa0-\\xa0"\n            )[-1].strip()\n        )\n        description = job.find("div", class_="description").text.strip()\n\n        titles.append(title)\n        companies.append(company)\n        locations.append(location)\n        descriptions.append(description)\n\n    # Increment the page number\n    page_num += 1\n\n# Clean up the job descriptions using regular expressions\nregex = re.compile(r"\\s+")\nclean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]\n\n# Create a Pandas DataFrame to store the job details\ndf = pd.DataFrame(\n    {\n        "Title": titles,\n        "Company": companies,\n        "Location": locations,\n        "Description": clean_descriptions,\n    }\n)\n\n# Export the DataFrame to a CSV file\ndf.to_csv("job_listings_multiple.csv", index=False)\n\nprint("Scraping complete! Check \'job_listings_multiple.csv\' for the results.")\n\ndf\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Scraping complete! Check 'job_listings_multiple.csv' for the results.\n")),(0,a.kt)("div",null,(0,a.kt)("table",{border:"1"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null),(0,a.kt)("th",null,"Title"),(0,a.kt)("th",null,"Company"),(0,a.kt)("th",null,"Location"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"0"),(0,a.kt)("td",null,"Lead Data Scientist"),(0,a.kt)("td",null,"Tiro"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Lead Data Scientist Enigma is seekingand visua...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"1"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Smith Hanley Associates"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"Title: Data Scientist Location: Newengineering...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"2"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Averity"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"like to become a Data Scientist at a global in...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"3"),(0,a.kt)("td",null,"Data Scientist"),(0,a.kt)("td",null,"Revelio Labs"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"for: Revelio Labs is looking for a creative Se...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"4"),(0,a.kt)("td",null,"Lead Data Scientist"),(0,a.kt)("td",null,"Thomas"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"looking for a Lead Data Scientist to lead and ...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"..."),(0,a.kt)("td",null,"...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"95"),(0,a.kt)("td",null,"Senior Data Scientist"),(0,a.kt)("td",null,"Wonder"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"written and verbal) to collaborate with busine...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"96"),(0,a.kt)("td",null,"Data Scientist, Product Experimentation"),(0,a.kt)("td",null,"Captions"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,", or a related discipline. * 3-5 years of prov...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"97"),(0,a.kt)("td",null,"Staff Data Scientist, Marketplace"),(0,a.kt)("td",null,"CookUnity"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"with engineering. * Provide mentorship and gui...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"98"),(0,a.kt)("td",null,"Sr. Product Data Scientist (NY)"),(0,a.kt)("td",null,"Philo"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"streaming service. You'll be working closely w...")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"99"),(0,a.kt)("td",null,"Staff Data Scientist, Marketplace"),(0,a.kt)("td",null,"CookUnity"),(0,a.kt)("td",null,"New York, NY"),(0,a.kt)("td",null,"with engineering. * Provide mentorship and gui...")))),(0,a.kt)("p",null,"100 rows \xd7 4 columns")),(0,a.kt)("p",null,"In this modified code, we first define the search query and location variables, as well as the base URL of JobInventory.com. We also define empty lists to store the job details."),(0,a.kt)("p",null,"We then loop through each page of job listings, up to e.g. 5 pages, by incrementing the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," parameter of the URL. We check if there are any job listings on the current page, and if not, we break out of the loop."),(0,a.kt)("p",null,"We then loop through each job listing on the current page, extracting the relevant details using the ",(0,a.kt)("inlineCode",{parentName:"p"},"find")," method and appending them to their respective lists."),(0,a.kt)("p",null,"After we have scraped all the job listings, we clean up the job descriptions using regular expressions, create a Pandas DataFrame to store the job details, and export it to a CSV file."),(0,a.kt)("p",null,"And there you have it! With these modifications, we can scrape job listings from ",(0,a.kt)("a",{parentName:"p",href:"http://jobinventory.com/"},"JobInventory.com")," across multiple pages."),(0,a.kt)("p",null,"Happy scraping!"))}d.isMDXComponent=!0}}]);