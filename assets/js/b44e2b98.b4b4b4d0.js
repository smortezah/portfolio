"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,d=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(d,s(s({ref:t},h),{},{components:n})):i.createElement(d,s({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Forecasting with sktime",tags:["Timeseries","Data Science","Machine Learning","Sktime","Forecasting"]},s="Time-Series Forecasting with sktime",o={unversionedId:"time-series/sktime",id:"time-series/sktime",title:"Forecasting with sktime",description:"Greetings, data enthusiasts! Today, we embark on a thrilling journey into the realm of time-series forecasting using the marvelous sktime library. Whether you\u2019re a seasoned data scientist seeking to sharpen your skills or a curious beginner taking your first steps into the world of time-series analysis, this tutorial promises to unravel the magic behind forecasting with practicality. So, fasten your seatbelts and let\u2019s dive in!",source:"@site/docs/time-series/sktime.md",sourceDirName:"time-series",slug:"/time-series/sktime",permalink:"/portfolio/docs/time-series/sktime",draft:!1,tags:[{label:"Timeseries",permalink:"/portfolio/docs/tags/timeseries"},{label:"Data Science",permalink:"/portfolio/docs/tags/data-science"},{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"Sktime",permalink:"/portfolio/docs/tags/sktime"},{label:"Forecasting",permalink:"/portfolio/docs/tags/forecasting"}],version:"current",frontMatter:{title:"Forecasting with sktime",tags:["Timeseries","Data Science","Machine Learning","Sktime","Forecasting"]},sidebar:"tutorialSidebar",previous:{title:"Taming Overfitting",permalink:"/portfolio/docs/time-series/overfit"},next:{title:"Data Visualization",permalink:"/portfolio/docs/visualization/"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installing libraries and Preparing our Data",id:"installing-libraries-and-preparing-our-data",level:2},{value:"Exploratory Time-Series Analysis",id:"exploratory-time-series-analysis",level:2},{value:"The Power of Visualization",id:"the-power-of-visualization",level:3},{value:"Detecting Seasonality",id:"detecting-seasonality",level:3},{value:"Auto Correlation Function (ACF) and Partial Auto Correlation Function (PACF)",id:"auto-correlation-function-acf-and-partial-auto-correlation-function-pacf",level:3},{value:"Statistical Tests for Stationarity",id:"statistical-tests-for-stationarity",level:3},{value:"Embrace the Insights",id:"embrace-the-insights",level:3},{value:"Forecasting with Classical Methods",id:"forecasting-with-classical-methods",level:2},{value:"Data Splitting",id:"data-splitting",level:3},{value:"Naive is Nice",id:"naive-is-nice",level:3},{value:"Exponential Smoothing",id:"exponential-smoothing",level:3},{value:"ARIMA",id:"arima",level:3},{value:"Cherish the Classical Charm",id:"cherish-the-classical-charm",level:3},{value:"Evaluating and Visualizing Forecasts",id:"evaluating-and-visualizing-forecasts",level:2},{value:"The Metrics of Mastery",id:"the-metrics-of-mastery",level:3},{value:"A Visual Feast",id:"a-visual-feast",level:3},{value:"Grasp the Power of Evaluation",id:"grasp-the-power-of-evaluation",level:3},{value:"Unleashing the Power of Machine Learning",id:"unleashing-the-power-of-machine-learning",level:2},{value:"Crafting the Machine Learning Pipeline",id:"crafting-the-machine-learning-pipeline",level:3},{value:"Try a Different Tune",id:"try-a-different-tune",level:3},{value:"Enchanting the Future",id:"enchanting-the-future",level:3},{value:"The Symphony of Machine Learning",id:"the-symphony-of-machine-learning",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}],h={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-series-forecasting-with-sktime"},"Time-Series Forecasting with sktime"),(0,a.kt)("p",null,"Greetings, data enthusiasts! Today, we embark on a thrilling journey into the realm of time-series forecasting using the marvelous ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sktime/sktime"},"sktime")," library. Whether you\u2019re a seasoned data scientist seeking to sharpen your skills or a curious beginner taking your first steps into the world of time-series analysis, this tutorial promises to unravel the magic behind forecasting with practicality. So, fasten your seatbelts and let\u2019s dive in!"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before we leap into the technicalities, let\u2019s set the stage with a quick introduction to time-series forecasting. Imagine you\u2019re holding a magnifying glass to a series of data points recorded at regular intervals","\u2014","these are time-series data. From stock prices to weather measurements, time-series data are ubiquitous and demand powerful techniques to predict future values."),(0,a.kt)("h2",{id:"installing-libraries-and-preparing-our-data"},"Installing libraries and Preparing our Data"),(0,a.kt)("p",null,"To kickstart our journey, we need the right tools. Open up your trusty command line or Jupyter Notebook and install the required libraries with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Shell"',title:'"Shell"'},"pip install sktime matplotlib pandas\n")),(0,a.kt)("p",null,"With sktime at our disposal, we're ready to dive into the dataset. For this tutorial, let's use a classic time-series dataset: the good ol' AirPassengers. You can load it up with just a few lines of Python:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"from sktime.datasets import load_airline\n\ny = load_airline()\ny\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Period\n1949-01    112.0\n1949-02    118.0\n1949-03    132.0\n1949-04    129.0\n1949-05    121.0\n           ...\n1960-08    606.0\n1960-09    508.0\n1960-10    461.0\n1960-11    390.0\n1960-12    432.0\nFreq: M, Name: Number of airline passengers, Length: 144, dtype: float64\n")),(0,a.kt)("h2",{id:"exploratory-time-series-analysis"},"Exploratory Time-Series Analysis"),(0,a.kt)("p",null,"Before we plunge headfirst into the realm of forecasting, it\u2019s vital to understand the landscape we\u2019re traversing. In this section, we\u2019ll put on our detective hats and engage in some exploratory time-series analysis."),(0,a.kt)("h3",{id:"the-power-of-visualization"},"The Power of Visualization"),(0,a.kt)("p",null,"A picture is worth a thousand words, and in the world of data analysis, a good plot can reveal insights that words alone might miss. Let\u2019s dive in and visualize our AirPassengers dataset to understand its journey through time."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import matplotlib.pyplot as plt\nfrom sktime.utils.plotting import plot_series\n\nplot_series(y)\nplt.title("AirPassengers Dataset")\nplt.show()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(92543).Z,width:"1315",height:"374"})),(0,a.kt)("p",null,"This nifty piece of code harnesses the might of matplotlib and sktime\u2019s plotting utilities to present our dataset as a beautiful time-series plot. Peaks, valleys, trends, and seasonality","\u2014","these visual cues will provide the foundation for our forecasting endeavors."),(0,a.kt)("h3",{id:"detecting-seasonality"},"Detecting Seasonality"),(0,a.kt)("p",null,"Seasonality is like the rhythm in a song","\u2014","a repeating pattern that gives a time series its unique flavor. To detect it, we can use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/statsmodels/statsmodels"},"statsmodels")," library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'import pandas as pd\nfrom statsmodels.tsa.seasonal import seasonal_decompose\n\n# Convert to pandas dataframe\ny_df = pd.DataFrame(y.values, index=y.index.to_timestamp(freq="M"))\n\n# Decompose the time series\ndecomposed = seasonal_decompose(y_df)\n\n# Plot the decomposed time series\ndecomposed.plot();\n')),(0,a.kt)("p",null,"This code snippet dissects the time series into its components: trend, seasonality, and residuals. The ",(0,a.kt)("inlineCode",{parentName:"p"},"decomposed")," object contains these components, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"plot()")," function visually showcases the individual parts, helping us gauge the presence and nature of seasonality."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(27383).Z,width:"630",height:"470"})),(0,a.kt)("h3",{id:"auto-correlation-function-acf-and-partial-auto-correlation-function-pacf"},"Auto Correlation Function (ACF) and Partial Auto Correlation Function (PACF)"),(0,a.kt)("p",null,"Just as detectives gather clues to solve a mystery, we can leverage the Auto Correlation Function (ACF) and Partial Auto Correlation Function (PACF) plots to unravel hidden patterns within our time series. These plots provide valuable insights into potential lag relationships and inform the choice of parameters for our forecasting models."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"from sktime.utils.plotting import plot_correlations\n\nplot_correlations(y);\n")),(0,a.kt)("p",null,"This code crafts the ACF and PACF plots, letting us identify lag correlations and trends in the data. It\u2019s like gazing at constellations in the night sky","\u2014","each peak and dip holds a piece of the forecasting puzzle."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50067).Z,width:"1211",height:"811"})),(0,a.kt)("h3",{id:"statistical-tests-for-stationarity"},"Statistical Tests for Stationarity"),(0,a.kt)("p",null,"A stationary time series has stable statistical properties over time, which makes forecasting more feasible. We can employ the Augmented Dickey-Fuller (ADF) test to determine stationarity:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.param_est.stationarity import StationarityADF\n\nsty_est = StationarityADF()\nsty_est.fit(y)\n\nprint(f"ADF statistic: {sty_est.test_statistic_:.2f}")\nprint(f"p-value: {sty_est.pvalue_:.2f}")\nprint(f"The data is {\'\' if sty_est.stationary_ else \'not\'} stationary.")\n')),(0,a.kt)("p",null,"This code conducts the ADF test on our time series and reports the ADF statistic and p-value. A p-value below a certain threshold (0.05 by default) suggests stationarity. If our series isn\u2019t stationary, we can consider ",(0,a.kt)("em",{parentName:"p"},"differencing")," to make it more amenable to forecasting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADF statistic: 0.82\np-value: 0.99\nThe data is not stationary.\n")),(0,a.kt)("h3",{id:"embrace-the-insights"},"Embrace the Insights"),(0,a.kt)("p",null,"And there you have it, our exploration into the heart of our time series data. With visualization, decomposition, ACF and PACF analysis, and stationarity testing, we\u2019ve equipped ourselves with tools that let us understand the rhythm, detect patterns, and assess the stationary nature of our data. Armed with these insights, we\u2019re primed and ready to venture into the exciting world of forecasting methods. Stay tuned for the upcoming sections as we journey deeper into the art of prediction!"),(0,a.kt)("h2",{id:"forecasting-with-classical-methods"},"Forecasting with Classical Methods"),(0,a.kt)("p",null,"In this section, we\u2019ll dive into the world of classical time-series forecasting methods. We\u2019ll explore the elegance of exponential smoothing and the power of ARIMA models, all while keeping the horizon and test data size in perfect harmony."),(0,a.kt)("h3",{id:"data-splitting"},"Data Splitting"),(0,a.kt)("p",null,"Before we unleash our forecasting magic, it\u2019s crucial to split our data into training and testing sets. The horizon, which represents the number of steps into the future we want to predict, should match the size of our test set. This ensures a fair evaluation of our forecasts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"from sktime.forecasting.model_selection import temporal_train_test_split\n\n# Horizon size = 36\ny_train, y_test = temporal_train_test_split(y, test_size=36)\n")),(0,a.kt)("p",null,"With our data neatly partitioned, we can move on to the world of forecasting."),(0,a.kt)("h3",{id:"naive-is-nice"},"Naive is Nice"),(0,a.kt)("p",null,"Let\u2019s start with a gentle introduction","\u2014","meet the Naive Forecaster. Like a crystal ball that sees the future as an extension of the present, the Naive Forecaster predicts the last observed value for the forecast horizon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.forecasting.naive import NaiveForecaster\n\n# Fit the forecaster\nnaive_forecaster = NaiveForecaster(strategy="last")\nnaive_forecaster.fit(y_train)\n\n# Predict 36 steps ahead\nnaive_preds = forecaster.predict(fh=range(1, 37))\nnaive_preds.head()\n')),(0,a.kt)("p",null,"The code above creates a Naive Forecaster instance and uses it to predict the values for the next 36 steps. Simple, effective, and a great starting point for our forecasting journey."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1958-01    336.0\n1958-02    336.0\n1958-03    336.0\n1958-04    336.0\n1958-05    336.0\nFreq: M, Name: Number of airline passengers, dtype: float64\n")),(0,a.kt)("h3",{id:"exponential-smoothing"},"Exponential Smoothing"),(0,a.kt)("p",null,"Next on our journey is Exponential Smoothing, a method that captures trends and seasonality with an air of elegance. Let\u2019s summon its power to predict the future."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.forecasting.exp_smoothing import ExponentialSmoothing\n\n# Fit the forecaster\nets_forecaster = ExponentialSmoothing(\n    trend="additive",\n    seasonal="additive",\n    sp=12,\n)\nets_forecaster.fit(y_train)\n\n# Predict 36 steps ahead\nets_preds = ets_forecaster.predict(fh=range(1, 37))\nets_preds.head()\n')),(0,a.kt)("p",null,"The above code crafts an Exponential Smoothing forecaster, fits it to the training data, and produces forecasts for the next 36 steps. Watch as it captures the essence of the time series and weaves predictions that respect its nuances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1958-01    357.332353\n1958-02    345.820169\n1958-03    398.634554\n1958-04    390.191995\n1958-05    396.346394\nFreq: M, Name: Number of airline passengers, dtype: float64\n")),(0,a.kt)("h3",{id:"arima"},"ARIMA"),(0,a.kt)("p",null,"No discussion of classical forecasting methods would be complete without mentioning ARIMA (AutoRegressive Integrated Moving Average). Like a wizard conjuring spells, ARIMA weaves together ",(0,a.kt)("em",{parentName:"p"},"auto-regressive"),", ",(0,a.kt)("em",{parentName:"p"},"differencing"),", and ",(0,a.kt)("em",{parentName:"p"},"moving average")," components to predict the future."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},"from sktime.forecasting.arima import ARIMA\n\n# Fit the forecaster\narima_forecaster = ARIMA(seasonal_order=(1, 1, 1, 12))\narima_forecaster.fit(y_train)\n\n# Predict 36 steps ahead\narima_preds = arima_forecaster.predict(fh=range(1, 37))\narima_preds.head()\n")),(0,a.kt)("p",null,"Behold, the code above crafts an ARIMA forecaster with a chosen order, fits it to the training data, and summons its predictive magic for the next 36 steps."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1958-01    344.448891\n1958-02    331.472840\n1958-03    383.956004\n1958-04    376.575094\n1958-05    383.183513\nFreq: M, Name: Number of airline passengers, dtype: float64\n")),(0,a.kt)("h3",{id:"cherish-the-classical-charm"},"Cherish the Classical Charm"),(0,a.kt)("p",null,"With the horizon and test data size in perfect alignment, we\u2019ve tamed the classical forecasting methods","\u2014","Naive, Exponential Smoothing, and ARIMA. These techniques are your companions as you journey through the ever-changing landscape of time-series data. But our voyage is far from over! The realm of evaluation, visualization of forcecasts, and machine learning approaches beckons, and we\u2019ll explore their treasures in the next sections."),(0,a.kt)("h2",{id:"evaluating-and-visualizing-forecasts"},"Evaluating and Visualizing Forecasts"),(0,a.kt)("p",null,"In this section, we\u2019ll put on our data detective hats once more and dive deep into the world of evaluating and visualizing forecasts. It\u2019s not just about making predictions; it\u2019s about understanding how well our models fare in the art of foreseeing the future."),(0,a.kt)("h3",{id:"the-metrics-of-mastery"},"The Metrics of Mastery"),(0,a.kt)("p",null,"Before we unravel the forecasting magic, let\u2019s talk metrics. A trustworthy metric helps us gauge the performance of our models. For time-series forecasting, one of the go-to metrics is the Mean Absolute Percentage Error (MAPE). It tells us how much our predictions deviate from the actual values, in percentage terms."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.performance_metrics.forecasting import (\n    mean_absolute_percentage_error\n)\n\nmape_naive = mean_absolute_percentage_error(y_test, naive_preds)\nmape_ets = mean_absolute_percentage_error(y_test, ets_preds)\nmape_arima = mean_absolute_percentage_error(y_test, arima_preds)\n\nprint(f"MAPE Naive: {mape_naive:.2f}")\nprint(f"MAPE ETS: {mape_ets:.2f}")\nprint(f"MAPE ARIMA: {mape_arima:.2f}")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"MAPE Naive: 0.20\nMAPE ETS: 0.05\nMAPE ARIMA: 0.04\n")),(0,a.kt)("h3",{id:"a-visual-feast"},"A Visual Feast"),(0,a.kt)("p",null,"Numbers have their charm, but nothing beats a well-crafted plot to visualize the forecasting journey. Behold the code that creates a visual symphony of training, test, and predicted values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.utils.plotting import plot_series\n\nplot_series(\n    y_train,\n    y_test,\n    naive_preds,\n    ets_preds,\n    arima_preds,\n    labels=["Train", "Test", "Naive", "ETS", "ARIMA"],\n    title="Forecasting Results",\n);\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48261).Z,width:"1315",height:"391"})),(0,a.kt)("h3",{id:"grasp-the-power-of-evaluation"},"Grasp the Power of Evaluation"),(0,a.kt)("p",null,"In the realm of forecasting, evaluation and visualization are your guiding stars. By calculating MAPE and painting visual narratives, you\u2019re equipped to comprehend the strengths and weaknesses of your models. With these insights in hand, you\u2019re ready to make informed decisions and refine your forecasting strategies. So, embrace the metrics, relish the plots, and set forth with a deeper understanding of your forecasting journey!"),(0,a.kt)("h2",{id:"unleashing-the-power-of-machine-learning"},"Unleashing the Power of Machine Learning"),(0,a.kt)("p",null,"Greetings, data explorers, as we journey into the heart of modern forecasting! In this section, we\u2019ll harness the boundless potential of machine learning to predict time series values. Buckle up, for we\u2019re about to merge the beauty of sktime\u2019s regression-based models with the finesse of machine learning pipelines."),(0,a.kt)("h3",{id:"crafting-the-machine-learning-pipeline"},"Crafting the Machine Learning Pipeline"),(0,a.kt)("p",null,"A machine learning pipeline is like a symphony","\u2014","each instrument (or step) plays a crucial role in creating harmonious predictions. Let\u2019s summon the pipeline wizardry and craft our own using ",(0,a.kt)("inlineCode",{parentName:"p"},"make_reduction()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sktime.forecasting.compose import make_reduction\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LinearRegression\n\nregressor = make_reduction(\n    estimator=Pipeline([("regressor", LinearRegression())]),\n    window_length=12,\n)\n')),(0,a.kt)("p",null,"The code above creates a pipeline that encompasses a Linear Regression model. The ",(0,a.kt)("inlineCode",{parentName:"p"},"window_length")," parameter determines the number of past observations the model considers. This way, our model learns from history to predict the future."),(0,a.kt)("h3",{id:"try-a-different-tune"},"Try a Different Tune"),(0,a.kt)("p",null,"Machine learning is versatile, so let\u2019s swap our model for something different. How about the mighty ",(0,a.kt)("inlineCode",{parentName:"p"},"RandomForestRegressor"),"? It\u2019s like having an ensemble of experts predicting together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'from sklearn.ensemble import RandomForestRegressor\n\nrf_regressor = make_reduction(\n    estimator=Pipeline(\n        [\n            ("regressor", RandomForestRegressor(random_state=42)),\n        ]\n    ),\n    window_length=12,\n)\n')),(0,a.kt)("p",null,"The code snippet introduces the Random Forest Regressor into our pipeline. Now we have a different instrument in our symphony, ready to predict with its own unique flavor."),(0,a.kt)("h3",{id:"enchanting-the-future"},"Enchanting the Future"),(0,a.kt)("p",null,"With our machine learning pipelines at the ready, it\u2019s time to summon their predictive power."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Python" showLineNumbers',title:'"Python"',showLineNumbers:!0},'# Fit the models\nl_regressor.fit(y_train)\nrf_regressor.fit(y_train)\n\n# Predict 36 steps ahead\nl_preds = l_regressor.predict(fh=range(1, 37))\nrf_preds = rf_regressor.predict(fh=range(1, 37))\n\n# Print the predictions\nprint("Linear Regression")\nprint(l_preds.head())\n\nprint("\\n\\nRandom Forest")\nprint(rf_preds.head())\n')),(0,a.kt)("p",null,"These lines of code fit our pipelines to the training data and unleash them to predict the values for the next 36 steps."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Linear Regression\n1958-01    352.755841\n1958-02    345.708489\n1958-03    388.697585\n1958-04    388.083764\n1958-05    409.020152\nFreq: M, Name: Number of airline passengers, dtype: float64\n\n\nRandom Forest\n1958-01    351.24\n1958-02    351.57\n1958-03    422.33\n1958-04    432.40\n1958-05    434.68\nFreq: M, Name: Number of airline passengers, dtype: float64\n")),(0,a.kt)("h3",{id:"the-symphony-of-machine-learning"},"The Symphony of Machine Learning"),(0,a.kt)("p",null,"As our machine learning models sing their predictive symphony, consider the magic of these pipelines. They encapsulate the essence of machine learning, enabling you to combine models, preprocessors, and more into a harmonious unit. With machine learning, you\u2019ve added another dimension to your forecasting toolkit","\u2014","adaptable, robust, and ready to tackle a myriad of time series challenges."),(0,a.kt)("h2",{id:"wrapping-up"},"Wrapping Up"),(0,a.kt)("p",null,"Congratulations, intrepid explorers of time-series forecasting! You\u2019ve ventured through classical methods and unleashed machine learning might with sktime. Armed with these techniques, you can now tackle a myriad of time-series challenges with confidence. Remember, practice makes perfect, so keep experimenting and refining your skills. Until next time, may your predictions be accurate and your data flow ever smooth."))}u.isMDXComponent=!0},50067:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sktime-acf-pacf-93a58ebcf3ec0e92bace84c047be4ac9.png"},48261:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sktime-forecast-f6acf8bc6d4f302d58c5513217d1c607.png"},27383:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sktime-seasonality-bd05324f03675b22260220c3e4fb590b.png"},92543:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sktime-series-8ee329e2d8871b7becc7f364654d83e6.png"}}]);