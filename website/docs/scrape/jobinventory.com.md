---
title: Scraping Job Listings
tags: [Scraping, Python, GitHub, Automation, Data Science]
---

# Python Web Scraping: A Beginner’s Guide to Scraping Job Listings

Are you tired of manually scrolling through endless job postings to find the perfect opportunity? Look no further! In this tutorial, I’ll walk you through the steps of scraping job listings from [JobInventory.com](http://jobinventory.com/) using Python.

First, we’ll use the `requests` library to send a GET request to the website and retrieve the HTML content. Then, we’ll use `BeautifulSoup` to parse the HTML and extract the relevant job listing information, such as the job title, company name, and job description.

Next, we’ll explore how to use Python’s regular expressions module to clean up the extracted data and prepare it for further analysis. We’ll also cover how to store the data in a CSV file for future use.

But wait, there’s more! We’ll also dive into advanced scraping techniques, such as handling pagination and dynamically loaded content. And, as a bonus, we’ll show you how to use Python’s natural language processing libraries to extract keywords and analyze job descriptions.

So, grab a cup of coffee and get ready to dive into the world of web scraping with Python. By the end of this tutorial, you’ll have the skills to scrape job listings on JobInventory.com and beyond!

## Setup

To get started with scraping job listings, we’ll first need to install a few Python packages. Open up your terminal or command prompt and run the following command:

```bash title="Shell"
pip install requests beautifulsoup4 pandas
```

These packages will allow us to send HTTP requests, parse HTML, and store the scraped data in a CSV file.

## Scraping a single page

Now that we have our dependencies installed, let’s dive into the code.

```python title="Python" showLineNumbers
import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

# Define the search query and location
search_query = "data scientist"
location = "New York City, NY"

# Construct the URL
url = f"http://www.jobinventory.com/search?q={search_query}&l={location}"

# Send a GET request to the URL
response = requests.get(url)

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Find all the job listings on the page
job_listings = soup.find_all("li", class_="resultBlock")

# Define empty lists to store the job details
titles = []
companies = []
locations = []
descriptions = []

# Loop through each job listing and extract the relevant details
for job in job_listings:
    title = job.find("div", class_="title").text.strip()
    company = job.find("span", class_="company").text.strip()
    location = (
        job.find("div", class_="state").text.split("\xa0-\xa0")[-1].strip()
    )
    description = job.find("div", class_="description").text.strip()

    titles.append(title)
    companies.append(company)
    locations.append(location)
    descriptions.append(description)

# Clean up the job descriptions using regular expressions
regex = re.compile(r"\s+")
clean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]

# Create a Pandas DataFrame to store the job details
df = pd.DataFrame(
    {
        "Title": titles,
        "Company": companies,
        "Location": locations,
        "Description": clean_descriptions,
    }
)

# Export the DataFrame to a CSV file
df.to_csv("job_listings.csv", index=False)

print("Scraping complete! The results are saved in \"job_listings.csv\".")

df
```

```
Scraping complete! The results are saved in 'job_listings.csv'.
```

<div>
<table border="1">
  <thead>
    <tr>
      <th></th>
      <th>Title</th>
      <th>Company</th>
      <th>Location</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Lead Data Scientist</td>
      <td>Tiro</td>
      <td>New York, NY</td>
      <td>Lead Data Scientist Enigma is seekingand visua...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Data Scientist</td>
      <td>Smith Hanley Associates</td>
      <td>New York, NY</td>
      <td>Title: Data Scientist Location: Newengineering...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Data Scientist</td>
      <td>Averity</td>
      <td>New York, NY</td>
      <td>like to become a Data Scientist at a global in...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Data Scientist</td>
      <td>Revelio Labs</td>
      <td>New York, NY</td>
      <td>for: Revelio Labs is looking for a creative Se...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Lead Data Scientist</td>
      <td>Thomas</td>
      <td>New York, NY</td>
      <td>looking for a Lead Data Scientist to lead and ...</td>
    </tr>
    <tr>
      <th>5</th>
      <td>Data Scientist</td>
      <td>Eliassen Group</td>
      <td>Jersey City, NJ</td>
      <td>The client is seeking a Neo4j data scientist/e...</td>
    </tr>
    <tr>
      <th>6</th>
      <td>Sr. Data Scientist</td>
      <td>CVS</td>
      <td>New York, NY</td>
      <td>hiring for the following role in New York, NY:...</td>
    </tr>
    <tr>
      <th>7</th>
      <td>Data Scientist</td>
      <td>E-Frontiers</td>
      <td>New York, NY</td>
      <td>Data Scientist The Company is aExperience in a...</td>
    </tr>
    <tr>
      <th>8</th>
      <td>Staff Data Scientist</td>
      <td>Harnham</td>
      <td>New York, NY</td>
      <td>Staff Data Scientist AdTech Companyimplement. ...</td>
    </tr>
    <tr>
      <th>9</th>
      <td>Data Scientist, Modeling</td>
      <td>Gro Intelligence</td>
      <td>New York, NY</td>
      <td>addresses agriculture, food, and our climate o...</td>
    </tr>
    <tr>
      <th>10</th>
      <td>Senior Data Scientist</td>
      <td>Teachers Insurance and Annuity Association - TIAA</td>
      <td>New York, NY</td>
      <td>reporting, interpretation of data analyses to ...</td>
    </tr>
    <tr>
      <th>11</th>
      <td>Lead NLP Data Scientist - Remote | WFH</td>
      <td>Get It Recruit - Real Estate</td>
      <td>Jersey City, NJ</td>
      <td>of data science! We are looking for a talented...</td>
    </tr>
    <tr>
      <th>12</th>
      <td>Senior Research Scientist</td>
      <td>NYU Langone Health</td>
      <td>New York, NY</td>
      <td>Senior Research Scientist will help manage, pr...</td>
    </tr>
    <tr>
      <th>13</th>
      <td>Senior Data Scientist</td>
      <td>Equation Staffing</td>
      <td>New York, NY</td>
      <td>B2B. They are looking for a Senior Data Scient...</td>
    </tr>
    <tr>
      <th>14</th>
      <td>Assistant Research Scientist</td>
      <td>NYU Langone Health</td>
      <td>New York, NY</td>
      <td>Investigator. The Research Scientist will mana...</td>
    </tr>
    <tr>
      <th>15</th>
      <td>Principal Data Scientist</td>
      <td>Harnham</td>
      <td>New York, NY</td>
      <td>Principal Data Scientist AdTech StartupLead th...</td>
    </tr>
    <tr>
      <th>16</th>
      <td>Senior Data Scientist</td>
      <td>Oliwska Grupa Konsultingowa</td>
      <td>New York, NY</td>
      <td>for an experienced applied data scientist to j...</td>
    </tr>
    <tr>
      <th>17</th>
      <td>Senior Data Scientist</td>
      <td>Storm3</td>
      <td>New York, NY</td>
      <td>achieving faster outcomes. We are seeking a dr...</td>
    </tr>
    <tr>
      <th>18</th>
      <td>Data Scientist</td>
      <td>Verizon</td>
      <td>New York, NY</td>
      <td>in a complex, multi-functional, Agile team env...</td>
    </tr>
    <tr>
      <th>19</th>
      <td>Data Scientist Series, MTA Data &amp; Analytics</td>
      <td>MTA</td>
      <td>New York, NY</td>
      <td>Data Scientist Series, MTA012 479 3 Senior Dat...</td>
    </tr>
  </tbody>
</table>
</div>

In this code, we first define the search query and location variables. We then construct the URL by concatenating these variables with the base URL of JobInventory.com.

We then send a GET request to the URL using the requests library and parse the HTML content using BeautifulSoup. We find all the job listings on the page by searching for the `li` elements with the `resultBlock` class.

Next, we define empty lists to store the job details and loop through each job listing, extracting the relevant details using the `find` method. We append the extracted details to their respective lists.

To clean up the job descriptions, we define a regular expression pattern that matches one or more whitespace characters and use the `sub` method to replace them with a single space.

Finally, we create a Pandas DataFrame to store the job details and export it to a CSV file using the `to_csv` method.

And there you have it! With just a few lines of Python code, you can scrape job listings from JobInventory.com and store them in a CSV file for further analysis.

But what if there are multiple pages of job listings?

## Scraping multiple pages

We can handle pagination by modifying our code as follows:

```python title="Python" showLineNumbers
import requests
from bs4 import BeautifulSoup
import re
import pandas as pd

# Define the search query and location
search_query = "data scientist"
location = "New York City, NY"

# Construct the base URL
base_url = "http://www.jobinventory.com"

# Define empty lists to store the job details
titles = []
companies = []
locations = []
descriptions = []

# Loop through each page of job listings
max_pages = 5
page_num = 1

while page_num <= max_pages:
    # Construct the URL for the current page
    url = f"{base_url}/search?q={search_query}&l={location}&start={page_num}"

    # Send a GET request to the URL
    response = requests.get(url)

    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.content, "html.parser")

    # Find all the job listings on the page
    job_listings = soup.find_all("li", class_="resultBlock")

    # If there are no job listings on the current page, we have reached the end
    # of the results
    if not job_listings:
        break

    # Loop through each job listing and extract the relevant details
    for job in job_listings:
        title = job.find("div", class_="title").text.strip()
        company = job.find("span", class_="company").text.strip()
        location = (
            job.find("div", class_="state").text.split(
                "\xa0-\xa0"
            )[-1].strip()
        )
        description = job.find("div", class_="description").text.strip()

        titles.append(title)
        companies.append(company)
        locations.append(location)
        descriptions.append(description)

    # Increment the page number
    page_num += 1

# Clean up the job descriptions using regular expressions
regex = re.compile(r"\s+")
clean_descriptions = [regex.sub(" ", d).split(" - ")[1] for d in descriptions]

# Create a Pandas DataFrame to store the job details
df = pd.DataFrame(
    {
        "Title": titles,
        "Company": companies,
        "Location": locations,
        "Description": clean_descriptions,
    }
)

# Export the DataFrame to a CSV file
df.to_csv("job_listings_multiple.csv", index=False)

print("Scraping complete! Check 'job_listings_multiple.csv' for the results.")

df
```

```
Scraping complete! Check 'job_listings_multiple.csv' for the results.
```

<div>
<table border="1">
  <thead>
    <tr>
      <th></th>
      <th>Title</th>
      <th>Company</th>
      <th>Location</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Lead Data Scientist</td>
      <td>Tiro</td>
      <td>New York, NY</td>
      <td>Lead Data Scientist Enigma is seekingand visua...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Data Scientist</td>
      <td>Smith Hanley Associates</td>
      <td>New York, NY</td>
      <td>Title: Data Scientist Location: Newengineering...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Data Scientist</td>
      <td>Averity</td>
      <td>New York, NY</td>
      <td>like to become a Data Scientist at a global in...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Data Scientist</td>
      <td>Revelio Labs</td>
      <td>New York, NY</td>
      <td>for: Revelio Labs is looking for a creative Se...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Lead Data Scientist</td>
      <td>Thomas</td>
      <td>New York, NY</td>
      <td>looking for a Lead Data Scientist to lead and ...</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95</th>
      <td>Senior Data Scientist</td>
      <td>Wonder</td>
      <td>New York, NY</td>
      <td>written and verbal) to collaborate with busine...</td>
    </tr>
    <tr>
      <th>96</th>
      <td>Data Scientist, Product Experimentation</td>
      <td>Captions</td>
      <td>New York, NY</td>
      <td>, or a related discipline. * 3-5 years of prov...</td>
    </tr>
    <tr>
      <th>97</th>
      <td>Staff Data Scientist, Marketplace</td>
      <td>CookUnity</td>
      <td>New York, NY</td>
      <td>with engineering. * Provide mentorship and gui...</td>
    </tr>
    <tr>
      <th>98</th>
      <td>Sr. Product Data Scientist (NY)</td>
      <td>Philo</td>
      <td>New York, NY</td>
      <td>streaming service. You'll be working closely w...</td>
    </tr>
    <tr>
      <th>99</th>
      <td>Staff Data Scientist, Marketplace</td>
      <td>CookUnity</td>
      <td>New York, NY</td>
      <td>with engineering. * Provide mentorship and gui...</td>
    </tr>
  </tbody>
</table>
<p>100 rows × 4 columns</p>
</div>

In this modified code, we first define the search query and location variables, as well as the base URL of JobInventory.com. We also define empty lists to store the job details.

We then loop through each page of job listings, up to e.g. 5 pages, by incrementing the `start` parameter of the URL. We check if there are any job listings on the current page, and if not, we break out of the loop.

We then loop through each job listing on the current page, extracting the relevant details using the `find` method and appending them to their respective lists.

After we have scraped all the job listings, we clean up the job descriptions using regular expressions, create a Pandas DataFrame to store the job details, and export it to a CSV file.

And there you have it! With these modifications, we can scrape job listings from [JobInventory.com](http://jobinventory.com/) across multiple pages.

Happy scraping!
