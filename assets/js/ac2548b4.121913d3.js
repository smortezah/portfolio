"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5037],{73149:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=o(85893),i=o(11151);const a={title:"Automatic Git Commit",description:"Automate your GitHub commits using GitHub Actions",tags:["Github","Automation","Data Science","Python"]},r="Automate Your GitHub Commits",s={id:"automation/auto-commit",title:"Automatic Git Commit",description:"Automate your GitHub commits using GitHub Actions",source:"@site/docs/automation/auto-commit.md",sourceDirName:"automation",slug:"/automation/auto-commit",permalink:"/portfolio/docs/automation/auto-commit",draft:!1,unlisted:!1,tags:[{label:"Github",permalink:"/portfolio/docs/tags/github"},{label:"Automation",permalink:"/portfolio/docs/tags/automation"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Python",permalink:"/portfolio/docs/tags/python"}],version:"current",frontMatter:{title:"Automatic Git Commit",description:"Automate your GitHub commits using GitHub Actions",tags:["Github","Automation","Data Science","Python"]},sidebar:"tutorialSidebar",previous:{title:"Automation",permalink:"/portfolio/docs/automation/"},next:{title:"Best Practices",permalink:"/portfolio/docs/best-practices/"}},l={},u=[{value:"Step 1: Setting Up Your Repository",id:"step-1-setting-up-your-repository",level:2},{value:"Step 2: Defining Your Workflow",id:"step-2-defining-your-workflow",level:2},{value:"Step 3: Writing Your Python Script",id:"step-3-writing-your-python-script",level:2},{value:"Step 4: Committing to Your Repository Every Day",id:"step-4-committing-to-your-repository-every-day",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(t){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"automate-your-github-commits",children:"Automate Your GitHub Commits"}),"\n",(0,n.jsx)(e.p,{children:"Are you tired of manually committing to your GitHub repository every day? Do you wish there was an easier way to stay on top of your daily commits? Look no further than Python and GitHub Actions!"}),"\n",(0,n.jsx)(e.p,{children:"In this article, I\u2019ll show you how to automate your GitHub commits using Python and GitHub Actions. By the end of this tutorial, you\u2019ll have a fully functional automated commit process that will run every day and keep your repository up to date."}),"\n",(0,n.jsx)(e.h2,{id:"step-1-setting-up-your-repository",children:"Step 1: Setting Up Your Repository"}),"\n",(0,n.jsx)(e.p,{children:"Before we dive into the code, you\u2019ll need to create a new repository in GitHub. Once you\u2019ve created your repository, navigate to the \u201cActions\u201d tab and click \u201cset up a workflow yourself\u201d. This will open up a new file where you can define your workflow."}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.img,{src:o(61082).Z+"",width:"1400",height:"579"})}),"\n",(0,n.jsx)(e.h2,{id:"step-2-defining-your-workflow",children:"Step 2: Defining Your Workflow"}),"\n",(0,n.jsx)(e.p,{children:"In the new file, you\u2019ll need to define your workflow. Here\u2019s an example of what your workflow might look like:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-yaml",metastring:'title="YAML"',children:'name: Daily Commit\n\non:\n  schedule:\n    - cron: "0 3 * * *" # Runs every day at 3 AM\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Set up Python\n        uses: actions/setup-python@v4\n        with:\n          python-version: "3.10"\n\n      - name: Install Dependencies\n        run: |\n          python -m pip install --upgrade pip\n          pip install -r requirements.txt\n\n      - name: Run Python Script\n        run: |\n          python main.py\n\n      - name: Commit Changes\n        run: |\n          git config --global user.email "you@example.com"\n          git config --global user.name "Your Name"\n          git commit -am "Daily Commit"\n          git push\n'})}),"\n",(0,n.jsx)(e.p,{children:"This workflow will run every day at 3 AM and execute the following steps:"}),"\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsx)(e.li,{children:"Check out the latest code from the repository"}),"\n",(0,n.jsx)(e.li,{children:"Set up Python"}),"\n",(0,n.jsx)(e.li,{children:"Install any necessary dependencies, that are listed in requirements.txt file"}),"\n",(0,n.jsxs)(e.li,{children:["Run the Python script (",(0,n.jsx)(e.code,{children:"main.py"}),")"]}),"\n",(0,n.jsx)(e.li,{children:"Commit the changes with the message \u201cDaily Commit\u201d and push them back to GitHub"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"step-3-writing-your-python-script",children:"Step 3: Writing Your Python Script"}),"\n",(0,n.jsx)(e.p,{children:"Now that you have your workflow defined, you\u2019ll need to write a Python script that will update your code. Here\u2019s an example script that will add a new line, current date, to a text file every day:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-python",metastring:'title="main.py"',children:"from datetime import datetime\n\nfilename = 'example.txt'\n\nwith open(filename, 'a') as f:\n    now = datetime.now()\n    f.write(f'Today is {now.strftime(\"%Y-%m-%d\")}\\n')\n"})}),"\n",(0,n.jsx)(e.p,{children:"This script will open up the \u201cexample.txt\u201d file and add a new line with today\u2019s date every time it is run."}),"\n",(0,n.jsx)(e.h2,{id:"step-4-committing-to-your-repository-every-day",children:"Step 4: Committing to Your Repository Every Day"}),"\n",(0,n.jsx)(e.p,{children:"Now, you can sit back and let it run every day. With this automated commit process in place, you\u2019ll never have to worry about falling behind on your daily commits again!"}),"\n",(0,n.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(e.p,{children:"In this tutorial, I showed you how to automate your GitHub commits using Python and GitHub Actions. By following these steps, you\u2019ll have a fully functional automated commit process that will run every day and keep your repository up to date."}),"\n",(0,n.jsx)(e.p,{children:"Happy coding!"})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(c,{...t})}):c(t)}},61082:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/commit-setup-1c98a3fa61d3647e437b650e31207c42.jpeg"},11151:(t,e,o)=>{o.d(e,{Z:()=>s,a:()=>r});var n=o(67294);const i={},a=n.createContext(i);function r(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);