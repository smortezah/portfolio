"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[672],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var r=a.createContext({}),p=function(t){var e=a.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(r.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,r=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(n),h=i,u=c["".concat(r,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,l(l({ref:e},d),{},{components:n})):a.createElement(u,l({ref:e},d))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var r in e)hasOwnProperty.call(e,r)&&(s[r]=e[r]);s.originalType=t,s[c]="string"==typeof t?t:i,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5983:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={title:"Pitfalls in Data Visualization",tags:["Data Visualization","Data Science","Pitfalls","Python","Charts"]},l="Dodging the Common Pitfalls in Data Visualization",s={unversionedId:"data-visualization/pitfalls",id:"data-visualization/pitfalls",title:"Pitfalls in Data Visualization",description:"Hello data enthusiasts!",source:"@site/docs/data-visualization/pitfalls.md",sourceDirName:"data-visualization",slug:"/data-visualization/pitfalls",permalink:"/portfolio/docs/data-visualization/pitfalls",draft:!1,tags:[{label:"Data Visualization",permalink:"/portfolio/docs/tags/data-visualization"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Pitfalls",permalink:"/portfolio/docs/tags/pitfalls"},{label:"Python",permalink:"/portfolio/docs/tags/python"},{label:"Charts",permalink:"/portfolio/docs/tags/charts"}],version:"current",frontMatter:{title:"Pitfalls in Data Visualization",tags:["Data Visualization","Data Science","Pitfalls","Python","Charts"]},sidebar:"tutorialSidebar",previous:{title:"lets-plot",permalink:"/portfolio/docs/data-visualization/lets-plot"},next:{title:"Venn Diagram",permalink:"/portfolio/docs/data-visualization/venn"}},r={},p=[{value:"Setup",id:"setup",level:2},{value:"Pitfall 1: Inappropriate Use of Pie charts",id:"pitfall-1-inappropriate-use-of-pie-charts",level:2},{value:"Pitfall 2: Misleading Y-axis",id:"pitfall-2-misleading-y-axis",level:2},{value:"Pitfall 3: Overcomplication of Plot Designs",id:"pitfall-3-overcomplication-of-plot-designs",level:2},{value:"Pitfall 4: Ignoring Scale Differences",id:"pitfall-4-ignoring-scale-differences",level:2},{value:"Pitfall 5: Unconsidered use of 3D Plots",id:"pitfall-5-unconsidered-use-of-3d-plots",level:2},{value:"Pitfall 6: Overplotting",id:"pitfall-6-overplotting",level:2},{value:"Pitfall 7: Not Emphasizing on What\u2019s Important",id:"pitfall-7-not-emphasizing-on-whats-important",level:2},{value:"Pitfall 8: Improper use of Line charts for Discrete Data",id:"pitfall-8-improper-use-of-line-charts-for-discrete-data",level:2},{value:"Pitfall 9: Not Using Faceting for multidimensional data",id:"pitfall-9-not-using-faceting-for-multidimensional-data",level:2},{value:"Pitfall 10: Not Smoothing Noisy Data",id:"pitfall-10-not-smoothing-noisy-data",level:2}],d={toc:p},c="wrapper";function m(t){let{components:e,...o}=t;return(0,i.kt)(c,(0,a.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dodging-the-common-pitfalls-in-data-visualization"},"Dodging the Common Pitfalls in Data Visualization"),(0,i.kt)("p",null,"Hello data enthusiasts!"),(0,i.kt)("p",null,"Today, we\u2019ll be addressing a crucial topic that\u2019s often overlooked in the exciting world of data science and machine learning: Bad and Good Data Visualisation. We know how critical it is to not just crunch those numbers and build models, but present our findings in the most effective way possible."),(0,i.kt)("p",null,"You know, they say a picture is worth a thousand words. This couldn\u2019t be truer in our field! The right plot or graphs can be the difference between giving others a clear insight into the data or leaving them utterly confused. So, let\u2019s dive into the common pitfalls we find in data visualisations and how to correct them."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"For our illustrations, we\u2019ll use the matplotlib library and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/smortezah/mplstyle"},"ggplot_classic")," plotting style. Ready to go on this journey? Let\u2019s roll!"),(0,i.kt)("p",null,"Make sure to install the required libraries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install numpy pandas matplotlib\n")),(0,i.kt)("p",null,"And let\u2019s import all the necessary libraries and set things up."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import string\n\nimport numpy as np\nimport pandas as pd\n\nimport matplotlib.pyplot as plt\n\n# Plot style\nplt.style.use("ggplot_classic.mplstyle")\n\n# Seed for reproducibility\nSEED = 7\n')),(0,i.kt)("h2",{id:"pitfall-1-inappropriate-use-of-pie-charts"},"Pitfall 1: Inappropriate Use of Pie charts"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A common error that many make is to use pie charts when there are too many categories. Pie charts work best when there\u2019s only a few categories to compare. Otherwise, the chart looks cluttered and doesn\u2019t vindicate the cause of visualisation.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For better readability and efficient information delivery, we can use a bar chart.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)  # set random seed for reproducibility\nn_cat = 11  # number of categories\n\ndf = pd.DataFrame(\n    {\n        "Category": list(string.ascii_uppercase[:n_cat]),\n        "Value": np.random.randint(5, 20, n_cat),\n    }\n)\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot.pie(\n    y="Value",\n    labels=df["Category"],\n    autopct="%.0f",\n    colors=plt.cm.Set3.colors,\n    title="Bad Use of Pie Chart",\n    ylabel="",\n    legend=False,\n    ax=ax[0],\n)\n\n# Good Example\ndf.plot.barh(\n    x="Category",\n    y="Value",\n    width=0.8,\n    color=plt.cm.Set3.colors,\n    title="Better Use of Bar Chart",\n    xlabel="Value",\n    legend=False,\n    ax=ax[1],\n)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(983).Z,width:"772",height:"391"})),(0,i.kt)("p",null,"There you have it! The right plot ensures there\u2019s no straining of eyes or brows. Each category and its value is readily on display."),(0,i.kt)("h2",{id:"pitfall-2-misleading-y-axis"},"Pitfall 2: Misleading Y-axis"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Manipulating the y-axis to emphasize a minor change is a common issue. This can mislead the viewer into assuming a greater difference than there actually is.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Ensure y-axis scaling accurately represents the data, avoiding exaggeration or understatement. Start from zero, if possible, for clarity.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\ndf = pd.DataFrame(\n    {\n        "Year": ["2020", "2021", "2022", "2023"],\n        "Revenue": [3.4, 3.5, 3.6, 3.7],\n    }\n)\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot(\n    x="Year",\n    y="Revenue",\n    color="blue",\n    ylim=(3.3, 3.8),\n    title="Misleading Y-axis",\n    ylabel="Revenue",\n    legend=False,\n    ax=ax[0],\n)\n\n# Good Example\ndf.plot(\n    x="Year",\n    y="Revenue",\n    color="blue",\n    ylim=(0, 5),\n    title="Appropriate Y-axis",\n    ylabel="Revenue",\n    legend=False,\n    ax=ax[1],\n)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(793).Z,width:"836",height:"391"})),(0,i.kt)("p",null,"In the left plot above, the increase in revenue might seem significant due to the narrow range of the y-axis. The correct graphic, on the right side, gives us a much more honest perspective of the revenue change."),(0,i.kt)("h2",{id:"pitfall-3-overcomplication-of-plot-designs"},"Pitfall 3: Overcomplication of Plot Designs"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Sometimes, we try to create aesthetically striking visualizations and end up overcomplicating the design. This can result in the dampening of the information we were trying to convey.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Instead, we could settle for straightforward designs that are easy-to-follow, using neat colors.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\nn_columns = 3\n\ndf = pd.DataFrame(\n    np.random.rand(4, n_columns),\n    columns=list(string.ascii_uppercase[:n_columns]),\n    index=["Spring", "Summer", "Autumn", "Winter"],\n)\n\n# Plot\nfig, axs = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot.bar(\n    stacked=True,\n    rot=0,\n    color=plt.cm.Set2_r.colors,\n    title="Overcomplicated Design",\n    ylabel="Value",\n    ax=axs[0],\n)\n\n# Good Example\ndf.plot.bar(\n    width=0.7,\n    rot=0,\n    color=plt.cm.Set2_r.colors,\n    title="Simplified Design",\n    ylabel="Value",\n    ax=axs[1],\n).legend(loc="upper right", ncol=3)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(342).Z,width:"836",height:"374"})),(0,i.kt)("h2",{id:"pitfall-4-ignoring-scale-differences"},"Pitfall 4: Ignoring Scale Differences"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"We often overlook the scale of different variables while plotting them in the same graph, which can lead to the misrepresentation of data.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We might want to plot separate graphs or use secondary y-axis for variables with different scales.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\nn_points = 10\n\ndf = pd.DataFrame(\n    {\n        "Celsius": np.random.randint(25, 31, n_points),\n        "Fahrenheit": np.random.randint(75, 85, n_points)\n    },\n    index=pd.date_range(start="2023-08-20", periods=n_points, freq="D"),\n)\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=3, figsize=(15, 4))\n\n# Bad Example\ndf.plot(title="Ignoring Scale Difference", color=["red", "blue"], ax=ax[0])\n\n# Good Example\ndf["Celsius"].plot(\n    title="Addressed Scale Difference",\n    color="red",\n    ax=ax[1],\n).legend(loc="lower left")\n\ndf["Fahrenheit"].plot(\n    title="Addressed Scale Difference",\n    color="blue",\n    ax=ax[2],\n).legend(loc="lower left")\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8658).Z,width:"1209",height:"397"})),(0,i.kt)("h2",{id:"pitfall-5-unconsidered-use-of-3d-plots"},"Pitfall 5: Unconsidered use of 3D Plots"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While 3D plots might seem like a good idea to represent a third variable, it often leads to misinterpretation and confusion. This is exacerbated if the view angle hides important details.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Instead, 2D scatter plots with color encoding for the 3rd dimension often work better.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\n\ndf = pd.DataFrame(np.random.rand(70, 3) * 100, columns=["X", "Y", "Z"])\n\n# Plot\nfig = plt.figure(figsize=(10, 4))\nax0 = fig.add_subplot(121, projection="3d")\nax1 = fig.add_subplot(122)\n\n# Bad Example\nax0.scatter(df["X"], df["Y"], df["Z"])\nax0.view_init(elev=20, azim=110, roll=0)\nax0.set(\n    title="Overcomplicated 3D Scatter",\n    xlabel="X",\n    ylabel="Y",\n    zlabel="Z",\n)\n\n# Good Example\nscatter = ax1.scatter(df["X"], df["Y"], c=df["Z"])\nax1.set(title="2D Scatter with Color Encoding", xlabel="X", ylabel="Y")\nfig.colorbar(scatter, shrink=0.75, label="Z").set_label("Z", rotation=0)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9067).Z,width:"760",height:"391"})),(0,i.kt)("h2",{id:"pitfall-6-overplotting"},"Pitfall 6: Overplotting"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"While trying to visualize a large amount of data, we sometimes end with overplotting. This happens when data points overlap each other and obscure the view.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We can use techniques like transparency, jitter, or even better, a 2D density plot.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\n\ndf = pd.DataFrame(np.random.rand(1000, 2), columns=["X", "Y"])\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot.scatter(x="X", y="Y", title="Overcomplicated Scatter", ax=ax[0])\n\n# Good Example\nnum_hexagons = 15  # no. hexagons in x-axis. The more, the finer the grid.\n\ndf.plot.hexbin(\n    x="X",\n    y="Y",\n    gridsize=num_hexagons,\n    cmap="Purples",\n    title="2D Density Plot",\n    ax=ax[1],\n)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9374).Z,width:"820",height:"391"})),(0,i.kt)("h2",{id:"pitfall-7-not-emphasizing-on-whats-important"},"Pitfall 7: Not Emphasizing on What\u2019s Important"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A pitfall comes when visualizing everything but not emphasizing what is important. We always want to highlight the most important aspects of our visualizations.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The remedy here is to highlight what\u2019s important.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\n\ndf = pd.DataFrame(np.random.rand(10, 1), columns=["Value"])\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot(\n    title="Can\'t Emphasize on What\'s Important",\n    ylabel="Value",\n    marker="o",\n    color="deepskyblue",\n    legend=False,\n    ax=ax[0],\n)\n\n# Good Example\ndf.plot(\n    title="Emphasize on What\'s Important",\n    ylabel="Value",\n    marker="o",\n    color="deepskyblue",\n    legend=False,\n    ax=ax[1],\n)\n\nimportant_idx = np.argmax(df["Value"])  # index of the important point\nax[1].plot(important_idx, df.iloc[important_idx], color="red", marker="o")\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(563).Z,width:"836",height:"374"})),(0,i.kt)("h2",{id:"pitfall-8-improper-use-of-line-charts-for-discrete-data"},"Pitfall 8: Improper use of Line charts for Discrete Data"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The line chart connects data points with a line implying a smooth continuity in the data which is often incorrect for ",(0,i.kt)("em",{parentName:"p"},"discrete")," categories.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We replace line charts with bar charts which are efficient for comparative analysis as well as presenting discrete data. It\u2019s important to select the right chart type when visualizing data in order to accurately represent the data\u2019s story.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\ndf = pd.DataFrame(\n    {\n        "student": ["John", "Mary", "Peter", "Bill", "Lisa"],\n        "grade": [80, 60, 60, 40, 40],\n    }\n)\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot(\n    x="student",\n    y="grade",\n    ylim=(0, 100),\n    marker="o",\n    title="Bad Use: Line Chart",\n    xlabel="Student",\n    ylabel="Grade",\n    color="green",\n    legend=False,\n    ax=ax[0],\n)\n\n# Good Example\ndf.plot.bar(\n    x="student",\n    y="grade",\n    ylim=(0, 100),\n    width=0.6,\n    title="Good Use: Bar Chart",\n    xlabel="Student",\n    ylabel="Grade",\n    color="deepskyblue",\n    rot=0,\n    legend=False,\n    ax=ax[1],\n)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3171).Z,width:"840",height:"391"})),(0,i.kt)("h2",{id:"pitfall-9-not-using-faceting-for-multidimensional-data"},"Pitfall 9: Not Using Faceting for multidimensional data"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Faceting is the act of breaking data variables up across multiple subplots, and combining those subplots into a single figure. Plotting multiple dimensions in a single graph can overwhelm viewers and obscure patterns.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Instead of plotting a line graph with six superposed lines, we can create six subplots with one subplot for each dimension.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\n\ndf = pd.DataFrame(\n    {\n        "Region": np.random.choice(["North", "South"], size=100),\n        "Category": np.random.choice(["A", "B", "C"], size=100),\n        "Sales": np.random.randint(low=100, high=1000, size=100),\n    }\n)\n\n# Pivot data\ndf_wide = df.pivot(\n    columns=["Region", "Category"],\n    values="Sales",\n).sort_index(axis=1)\n\n# Bad Example\ndf_wide.plot.kde(\n    title="Bad: Single Plot for Multidimensional Data", figsize=(7, 4)\n).legend(\n    ncols=2,\n    title="Region, Category",\n    bbox_to_anchor=(1.0, 1.05),\n)\n\n# Good Example\nfacet = df_wide.plot.kde(\n    title="Good: Multiple Plots for Multidimensional Data",\n    subplots=True,\n    layout=(2, 3),\n    figsize=(7, 4),\n    legend=False,\n    sharex=False,\n    sharey=True,\n)\n\nfor ax in facet.ravel():\n    ax.legend(loc="lower center")\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9997).Z,width:"625",height:"374"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8537).Z,width:"625",height:"384"})),(0,i.kt)("h2",{id:"pitfall-10-not-smoothing-noisy-data"},"Pitfall 10: Not Smoothing Noisy Data"),(0,i.kt)("admonition",{title:"Pitfall",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Data often comes with noise. Yet bypassing the important step of smoothing noisy data before visualizing it can lead to an unclear and misleading interpretation.")),(0,i.kt)("admonition",{title:"Fix",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Instead, smoothing the data can help to reveal important trends and remove random variation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Data\nnp.random.seed(SEED)\nx = np.linspace(0, 10, 100)\ny = np.sin(x) + np.random.normal(0, 0.35, 100)\n\ndf = pd.DataFrame({"x": x, "y": y})\n\n# Plot\nfig, ax = plt.subplots(nrows=1, ncols=2, figsize=(10, 4))\n\n# Bad Example\ndf.plot(\n    x="x",\n    y="y",\n    title="Bad: Raw Noisy Data",\n    xlabel="X",\n    ylabel="Y",\n    legend=False,\n    color="green",\n    ax=ax[0],\n)\n\n# Moving average smoothing\nwindow_size = 10\nsmoothed_y = np.convolve(\n    df["y"],\n    np.ones(window_size) / window_size,\n    mode="same",\n)\ndf["smoothed_y"] = smoothed_y\n\n# Good Example\ndf.plot(\n    x="x",\n    y="smoothed_y",\n    title="Good: Smoothed Data",\n    xlabel="X",\n    ylabel="Y",\n    legend=False,\n    color="darkgreen",\n    ax=ax[1],\n)\n\nplt.show()\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4040).Z,width:"844",height:"391"})),(0,i.kt)("p",null,"In the example above, the smoothed data reveals the underlying sinusoidal pattern, which would be rather difficult to observe in the raw, noisy data."),(0,i.kt)("p",null,"Employing effective data visualization techniques is crucial in unlocking the potential of (big) data and enhancing informed decision-making in the business realm."))}m.isMDXComponent=!0},9067:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-3d-a580c70aa48e94ba46a72d688dc526c8.png"},563:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-emphasize-e70a2fd1789e425cb09fed85f3de8441.png"},9997:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-facet-bad-5039d5b4adb14a7062b1dc60972d18f9.png"},8537:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-facet-good-c2967a0a9ed10c175729cbf88d8f1387.png"},3171:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-line-43908255218f328f6c1e6a28f57f11ba.png"},9374:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-overplot-9cb98006aa676cbea30d870e88139a9b.png"},983:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-pie-e57ad10aeaf3975299ed1235e8b38e5f.png"},8658:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-scale-915a74b31171450231acb1ec9824bdd7.png"},4040:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-smooth-7b1b58c61185f1c9b0b6672e356ecf2b.png"},342:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-stacked-94628df69dbdda76394a0435940988d6.png"},793:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/pitfalls-y-ax-0ae86915fc17635ff292696a265dc87f.png"}}]);