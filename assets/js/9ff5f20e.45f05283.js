"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2953],{94378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(85893),s=t(11151);const a={title:"Fraud Detection",description:"Build a credit card fraud detection model using Keras",tags:["Machine Learning","Fraud Detection","Classification","Keras","Deep Learning"]},r="Credit card fraud detection",l={id:"anomaly-detection/fraud-detection",title:"Fraud Detection",description:"Build a credit card fraud detection model using Keras",source:"@site/docs/anomaly-detection/fraud-detection.md",sourceDirName:"anomaly-detection",slug:"/anomaly-detection/fraud-detection",permalink:"/portfolio/docs/anomaly-detection/fraud-detection",draft:!1,unlisted:!1,tags:[{label:"Machine Learning",permalink:"/portfolio/docs/tags/machine-learning"},{label:"Fraud Detection",permalink:"/portfolio/docs/tags/fraud-detection"},{label:"Classification",permalink:"/portfolio/docs/tags/classification"},{label:"Keras",permalink:"/portfolio/docs/tags/keras"},{label:"Deep Learning",permalink:"/portfolio/docs/tags/deep-learning"}],version:"current",frontMatter:{title:"Fraud Detection",description:"Build a credit card fraud detection model using Keras",tags:["Machine Learning","Fraud Detection","Classification","Keras","Deep Learning"]},sidebar:"tutorialSidebar",previous:{title:"Anomaly Detection",permalink:"/portfolio/docs/anomaly-detection/"},next:{title:"Automation",permalink:"/portfolio/docs/automation/"}},o={},d=[{value:"Dataset Exploration and Understanding",id:"dataset-exploration-and-understanding",level:2},{value:"Preprocessing: Cleaning and Preparing the Data",id:"preprocessing-cleaning-and-preparing-the-data",level:2},{value:"Handling Missing Values",id:"handling-missing-values",level:3},{value:"Train-Test Splitting",id:"train-test-splitting",level:3},{value:"Finding Class Weights",id:"finding-class-weights",level:3},{value:"Standard Scaling",id:"standard-scaling",level:3},{value:"Building a Binary Classification Model",id:"building-a-binary-classification-model",level:2},{value:"Training the Model",id:"training-the-model",level:2},{value:"Visualizing Training Progress",id:"visualizing-training-progress",level:3},{value:"Evaluation: Measuring Model Performance",id:"evaluation-measuring-model-performance",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"credit-card-fraud-detection",children:"Credit card fraud detection"}),"\n",(0,i.jsxs)(n.p,{children:["Welcome to this exciting journey into the world of credit card fraud detection using the power of machine learning and Python! In this article, I\u2019m going to walk you through the entire process of building a robust fraud detection model using the ",(0,i.jsx)(n.a,{href:"https://keras.io/",children:"Keras"})," library. Strap in as we explore each step, from data preprocessing to model evaluation, all while sprinkling in handy code examples and tips to make your learning experience smooth and enjoyable."]}),"\n",(0,i.jsx)(n.h2,{id:"dataset-exploration-and-understanding",children:"Dataset Exploration and Understanding"}),"\n",(0,i.jsx)(n.p,{children:"Before we jump into the code, let\u2019s take a moment to understand the dataset we\u2019ll be working with. Our dataset contains credit card transaction data, a mixture of legitimate and fraudulent transactions. This dataset is an example of an imbalanced dataset, where legitimate transactions (the majority class) far outnumber fraudulent ones (the minority class)."}),"\n",(0,i.jsx)(n.p,{children:"Now, let\u2019s dive into exploring structure and characteristics of the dataset."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Shell"',children:"pip install -q scipy pandas scikit-learn tensorflow keras\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'import urllib.request\nfrom scipy.io import arff\nimport pandas as pd\n\n# Download the dataset to the current directory (149 MB)\n# Source: https://www.openml.org/search?type=data&id=43627\nurl = "https://www.openml.org/data/download/22102452"\nfile_name = "credit_card.arff"\nurllib.request.urlretrieve(url, file_name)\n\n# Convert the dataset in arff format into a pandas dataframe\ndata_arff = arff.loadarff("credit_card.arff")\ndata = pd.DataFrame(data_arff[0])\n\ndata.head(3)\n'})}),"\n",(0,i.jsxs)("div",{children:[(0,i.jsxs)("table",{border:"1",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsx)("th",{children:"Time"}),(0,i.jsx)("th",{children:"V1"}),(0,i.jsx)("th",{children:"V2"}),(0,i.jsx)("th",{children:"V3"}),(0,i.jsx)("th",{children:"V4"}),(0,i.jsx)("th",{children:"V5"}),(0,i.jsx)("th",{children:"V6"}),(0,i.jsx)("th",{children:"V7"}),(0,i.jsx)("th",{children:"V8"}),(0,i.jsx)("th",{children:"V9"}),(0,i.jsx)("th",{children:"..."}),(0,i.jsx)("th",{children:"V21"}),(0,i.jsx)("th",{children:"V22"}),(0,i.jsx)("th",{children:"V23"}),(0,i.jsx)("th",{children:"V24"}),(0,i.jsx)("th",{children:"V25"}),(0,i.jsx)("th",{children:"V26"}),(0,i.jsx)("th",{children:"V27"}),(0,i.jsx)("th",{children:"V28"}),(0,i.jsx)("th",{children:"Amount"}),(0,i.jsx)("th",{children:"Class"})]})}),(0,i.jsxs)("tbody",{style:{textAlign:"right"},children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"0"}),(0,i.jsx)("td",{children:"0.0"}),(0,i.jsx)("td",{children:"-1.359807"}),(0,i.jsx)("td",{children:"-0.072781"}),(0,i.jsx)("td",{children:"2.536347"}),(0,i.jsx)("td",{children:"1.378155"}),(0,i.jsx)("td",{children:"-0.338321"}),(0,i.jsx)("td",{children:"0.462388"}),(0,i.jsx)("td",{children:"0.239599"}),(0,i.jsx)("td",{children:"0.098698"}),(0,i.jsx)("td",{children:"0.363787"}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"-0.018307"}),(0,i.jsx)("td",{children:"0.277838"}),(0,i.jsx)("td",{children:"-0.110474"}),(0,i.jsx)("td",{children:"0.066928"}),(0,i.jsx)("td",{children:"0.128539"}),(0,i.jsx)("td",{children:"-0.189115"}),(0,i.jsx)("td",{children:"0.133558"}),(0,i.jsx)("td",{children:"-0.021053"}),(0,i.jsx)("td",{children:"149.62"}),(0,i.jsx)("td",{children:"0.0"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"1"}),(0,i.jsx)("td",{children:"0.0"}),(0,i.jsx)("td",{children:"1.191857"}),(0,i.jsx)("td",{children:"0.266151"}),(0,i.jsx)("td",{children:"0.166480"}),(0,i.jsx)("td",{children:"0.448154"}),(0,i.jsx)("td",{children:"0.060018"}),(0,i.jsx)("td",{children:"-0.082361"}),(0,i.jsx)("td",{children:"-0.078803"}),(0,i.jsx)("td",{children:"0.085102"}),(0,i.jsx)("td",{children:"-0.255425"}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"-0.225775"}),(0,i.jsx)("td",{children:"-0.638672"}),(0,i.jsx)("td",{children:"0.101288"}),(0,i.jsx)("td",{children:"-0.339846"}),(0,i.jsx)("td",{children:"0.167170"}),(0,i.jsx)("td",{children:"0.125895"}),(0,i.jsx)("td",{children:"-0.008983"}),(0,i.jsx)("td",{children:"0.014724"}),(0,i.jsx)("td",{children:"2.69"}),(0,i.jsx)("td",{children:"0.0"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"2"}),(0,i.jsx)("td",{children:"1.0"}),(0,i.jsx)("td",{children:"-1.358354"}),(0,i.jsx)("td",{children:"-1.340163"}),(0,i.jsx)("td",{children:"1.773209"}),(0,i.jsx)("td",{children:"0.379780"}),(0,i.jsx)("td",{children:"-0.503198"}),(0,i.jsx)("td",{children:"1.800499"}),(0,i.jsx)("td",{children:"0.791461"}),(0,i.jsx)("td",{children:"0.247676"}),(0,i.jsx)("td",{children:"-1.514654"}),(0,i.jsx)("td",{children:"..."}),(0,i.jsx)("td",{children:"0.247998"}),(0,i.jsx)("td",{children:"0.771679"}),(0,i.jsx)("td",{children:"0.909412"}),(0,i.jsx)("td",{children:"-0.689281"}),(0,i.jsx)("td",{children:"-0.327642"}),(0,i.jsx)("td",{children:"-0.139097"}),(0,i.jsx)("td",{children:"-0.055353"}),(0,i.jsx)("td",{children:"-0.059752"}),(0,i.jsx)("td",{children:"378.66"}),(0,i.jsx)("td",{children:"0.0"})]})]})]}),(0,i.jsx)("p",{children:"3 rows \xd7 31 columns"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'from pprint import pprint\n\n# Display basic information about the dataset\nprint("Number of rows:", data.shape[0])\nprint("Number of columns:", data.shape[1])\n\nprint("\\nColumn names:")\npprint(data.columns.values.tolist(), compact=True, width=60)\n\nprint("\\nTarget distribution:")\nprint(data[\'Class\'].value_counts())\n\nprint("\\nSummary statistics:")\nprint(data.describe().applymap(lambda x: f"{x: 0.2f}"))\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Number of rows: 284807\nNumber of columns: 31\n\nColumn names:\n['Time', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8',\n 'V9', 'V10', 'V11', 'V12', 'V13', 'V14', 'V15', 'V16',\n 'V17', 'V18', 'V19', 'V20', 'V21', 'V22', 'V23', 'V24',\n 'V25', 'V26', 'V27', 'V28', 'Amount', 'Class']\n\nTarget distribution:\nClass\n0.0    284315\n1.0       492\nName: count, dtype: int64\n\nSummary statistics:\n            Time         V1         V2         V3         V4         V5  \\\ncount  284807.00  284807.00  284807.00  284807.00  284807.00  284807.00\nmean    94813.86       0.00       0.00      -0.00       0.00       0.00\nstd     47488.15       1.96       1.65       1.52       1.42       1.38\nmin         0.00     -56.41     -72.72     -48.33      -5.68    -113.74\n25%     54201.50      -0.92      -0.60      -0.89      -0.85      -0.69\n50%     84692.00       0.02       0.07       0.18      -0.02      -0.05\n75%    139320.50       1.32       0.80       1.03       0.74       0.61\nmax    172792.00       2.45      22.06       9.38      16.88      34.80\n...\n          Amount      Class\ncount  284807.00  284807.00\nmean       88.35       0.00\nstd       250.12       0.04\nmin         0.00       0.00\n25%         5.60       0.00\n50%        22.00       0.00\n75%        77.16       0.00\nmax     25691.16       1.00\n"})}),"\n",(0,i.jsx)(n.p,{children:"Running the above code will load the dataset and provide you with some initial insights. You\u2019ll see e.g., the distribution of classes (fraudulent vs. legitimate transactions).\nAdditionally, it\u2019s a good idea to visualize the class distribution to get a better sense of the data imbalance. You can create a bar plot to illustrate this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'import matplotlib.pyplot as plt\n\n# Plot the distribution of the target variable\nclass_counts = data["Class"].value_counts()\n\nax = class_counts.plot(\n    kind="barh",\n    figsize=(6, 2),\n    title="Class Distribution",\n    xlabel="Count",\n    ylabel="",\n)\nax.set_yticklabels(["Legitimate", "Fraudulent"])\nax.spines[["right", "top"]].set_visible(False)\n\n# Print the count of each class\nfor index, value in enumerate(class_counts):\n    plt.text(\n        value + int(class_counts[0] / 50),\n        index,\n        str(value),\n        color="blue",\n    )\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(50561).Z+"",width:"608",height:"239"})}),"\n",(0,i.jsx)(n.p,{children:"Remember, the goal of this step is to establish a solid foundation for the rest of your credit card fraud detection project. With this understanding in place, you\u2019re ready to move on to preprocessing the data and preparing it for model training."}),"\n",(0,i.jsx)(n.h2,{id:"preprocessing-cleaning-and-preparing-the-data",children:"Preprocessing: Cleaning and Preparing the Data"}),"\n",(0,i.jsx)(n.p,{children:"Data preprocessing is a critical step in any machine learning project. It involves transforming raw data into a format that is suitable for training a model. In this section, we\u2019ll walk through the various preprocessing steps required to prepare our dataset for training a fraud detection model."}),"\n",(0,i.jsx)(n.h3,{id:"handling-missing-values",children:"Handling Missing Values"}),"\n",(0,i.jsx)(n.p,{children:"Dealing with missing values is crucial to ensure the quality of our dataset. Missing values can disrupt model training and lead to inaccurate predictions. Let\u2019s take a look at how we can handle missing values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'# Check for missing values in the dataset\nmissing_values = data.isnull().sum()\n\n# Display columns with missing values\nprint("Columns with missing values:")\nprint(f"{missing_values[missing_values > 0]}")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Columns with missing values:\nSeries([], dtype: int64)\n"})}),"\n",(0,i.jsx)(n.p,{children:"As can be seen, there is no missing value in our dataset. However, if you find any columns with missing values, you have a few options: you can impute missing values using techniques like mean, median, or predictive modeling, or you can remove rows or columns with a significant number of missing values. Choose the approach that best suits your dataset and the specific column."}),"\n",(0,i.jsx)(n.h3,{id:"train-test-splitting",children:"Train-Test Splitting"}),"\n",(0,i.jsx)(n.p,{children:"To evaluate the performance of our model accurately, and also some preprocessing steps shown bellow, we need to split our dataset into training and testing sets. In the evaluation part, the training set is used to train the model, while the testing set is used to evaluate its performance on unseen data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'from sklearn.model_selection import train_test_split\n\n# Separate features and target variable\nX = data.drop("Class", axis=1)\ny = data["Class"]\n\n# Split the data into training and testing sets\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the code above, we\u2019ve split the data into an 80\u201320 ratio, meaning 80% of the data will be used for training and 20% for testing. The ",(0,i.jsx)(n.code,{children:"random_state"})," parameter ensures reproducibility."]}),"\n",(0,i.jsx)(n.h3,{id:"finding-class-weights",children:"Finding Class Weights"}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned earlier, our dataset is imbalanced, with fraudulent transactions being the minority class. To handle this, we\u2019ll calculate class weights and pass them to our model during training. This way, the model will pay ",(0,i.jsx)(n.em,{children:"more attention to the minority"})," class:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'from sklearn.utils.class_weight import compute_class_weight\nimport numpy as np\n\n# Get the unique classes\nunique_classes = np.unique(y_train)\n\n# Calculate class weights\nclass_weights_array = compute_class_weight(\n    class_weight="balanced", classes=unique_classes, y=y_train\n)\n\n# Convert class weights to a dictionary for model training\nclass_weights = dict(zip(unique_classes, class_weights_array))\nprint(f"Class weights: {class_weights}")\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Class weights: {0.0: 0.5008661206149896, 1.0: 289.14340101522845}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"standard-scaling",children:"Standard Scaling"}),"\n",(0,i.jsx)(n.p,{children:"Standard scaling ensures that all features are on the same scale, which is essential for many machine learning algorithms. It prevents features with larger values from dominating the training process:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:"from sklearn.preprocessing import StandardScaler\n\n# Initialize the scaler\nscaler = StandardScaler()\n\n# Fit and transform the scaler on training data\nX_train_scaled = scaler.fit_transform(X_train)\n\n# Transform the test data using the same scaler\nX_test_scaled = scaler.transform(X_test)\n"})}),"\n",(0,i.jsx)(n.p,{children:"With these preprocessing steps completed, our data is now cleaned, split, and ready for model training. In the next section, we\u2019ll dive into building our binary classification model using the powerful Keras library."}),"\n",(0,i.jsx)(n.h2,{id:"building-a-binary-classification-model",children:"Building a Binary Classification Model"}),"\n",(0,i.jsx)(n.p,{children:"Now that our data is preprocessed and ready, it\u2019s time to roll up our sleeves and construct a binary classification model using the Keras library. Keras provides a user-friendly interface to build and train neural networks, making it a great choice for this task."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:"from tensorflow.keras import Sequential, layers, activations, initializers\n\ndropout_rate = 0.3\n\n# Define the model\nmodel = Sequential(\n    [\n        layers.Dense(\n            256,\n            activation=activations.relu,\n            input_shape=(X_train_scaled.shape[-1],),\n        ),\n        layers.Dense(256, activation=activations.relu),\n        layers.Dropout(dropout_rate),\n        layers.Dense(256, activation=activations.relu),\n        layers.Dropout(dropout_rate),\n        layers.Dense(1, activation=activations.sigmoid),\n    ]\n)\n\n# Summarize the model\nmodel.summary()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #\n=================================================================\n dense (Dense)               (None, 256)               7936\n\n dense_1 (Dense)             (None, 256)               65792\n\n dropout (Dropout)           (None, 256)               0\n\n dense_2 (Dense)             (None, 256)               65792\n\n dropout_1 (Dropout)         (None, 256)               0\n\n dense_3 (Dense)             (None, 1)                 257\n\n=================================================================\nTotal params: 139777 (546.00 KB)\nTrainable params: 139777 (546.00 KB)\nNon-trainable params: 0 (0.00 Byte)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the above code, we designed an effective feedforward neural network architecture for our fraud detection task. We defined a sequential model that includes three hidden layers with ",(0,i.jsx)(n.a,{href:"https://keras.io/api/layers/activation_layers/relu/",children:"ReLU"})," activation functions, which help the model learn complex patterns in the data. We\u2019ve also incorporated ",(0,i.jsx)(n.a,{href:"https://keras.io/api/layers/regularization_layers/dropout/",children:"dropout"})," layers to introduce regularization, which serves to counteract overfitting. The output layer uses a ",(0,i.jsx)(n.a,{href:"https://keras.io/api/layers/activations/#sigmoid-function",children:"sigmoid"})," activation function for binary classification. Eventually, we take a look at the summary of our model to understand its architecture and the number of parameters."]}),"\n",(0,i.jsx)(n.h2,{id:"training-the-model",children:"Training the Model"}),"\n",(0,i.jsx)(n.p,{children:"Training the model involves providing it with our preprocessed data and letting it learn the patterns from the training set:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'from tensorflow.keras import metrics, optimizers, losses, callbacks\n\n# Define the metrics to be used for model evaluation\nmetrics_ = [\n    metrics.FalseNegatives(name="fn"),\n    metrics.FalsePositives(name="fp"),\n    metrics.TrueNegatives(name="tn"),\n    metrics.TruePositives(name="tp"),\n]\n\n# Compile the model\nmodel.compile(\n    optimizer=optimizers.Adam(1e-4),\n    loss=losses.binary_crossentropy,\n    metrics=metrics_,\n)\n\n# Define callbacks\ncallbacks_ = [\n    callbacks.ModelCheckpoint(\n        filepath="fraud_model.h5",\n        save_best_only=True,\n        save_weights_only=True,\n    )\n]\n\n# Train the model\nhistory = model.fit(\n    x=X_train_scaled,\n    y=y_train,\n    validation_data=(X_val_scaled, y_val),\n    batch_size=2048,\n    epochs=50,\n    callbacks=callbacks_,\n    class_weight=class_weights,\n)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Epoch 1/50\n90/90 [==============================] - 1s 12ms/step - loss: 0.4623 - fn: 30.0000 - fp: 80148.0000 - tn: 101798.0000 - tp: 300.0000 - val_loss: 0.3945 - val_fn: 10.0000 - val_fp: 265.0000 - val_tn: 45240.0000 - val_tp: 54.0000\nEpoch 2/50\n90/90 [==============================] - 1s 10ms/step - loss: 0.2687 - fn: 44.0000 - fp: 1939.0000 - tn: 180007.0000 - tp: 286.0000 - val_loss: 0.1977 - val_fn: 9.0000 - val_fp: 363.0000 - val_tn: 45142.0000 - val_tp: 55.0000\nEpoch 3/50\n90/90 [==============================] - 1s 10ms/step - loss: 0.2096 - fn: 39.0000 - fp: 2854.0000 - tn: 179092.0000 - tp: 291.0000 - val_loss: 0.1433 - val_fn: 7.0000 - val_fp: 631.0000 - val_tn: 44874.0000 - val_tp: 57.0000\n...\nEpoch 48/50\n90/90 [==============================] - 1s 10ms/step - loss: 0.0259 - fn: 1.0000 - fp: 1718.0000 - tn: 180228.0000 - tp: 329.0000 - val_loss: 0.0288 - val_fn: 7.0000 - val_fp: 405.0000 - val_tn: 45100.0000 - val_tp: 57.0000\nEpoch 49/50\n90/90 [==============================] - 1s 11ms/step - loss: 0.0233 - fn: 1.0000 - fp: 1560.0000 - tn: 180386.0000 - tp: 329.0000 - val_loss: 0.0276 - val_fn: 7.0000 - val_fp: 396.0000 - val_tn: 45109.0000 - val_tp: 57.0000\nEpoch 50/50\n90/90 [==============================] - 1s 10ms/step - loss: 0.0269 - fn: 2.0000 - fp: 1954.0000 - tn: 179992.0000 - tp: 328.0000 - val_loss: 0.0253 - val_fn: 7.0000 - val_fp: 350.0000 - val_tn: 45155.0000 - val_tp: 57.0000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, we\u2019re using the ",(0,i.jsx)(n.code,{children:"fit"})," method to train the model. We specify the training data (",(0,i.jsx)(n.code,{children:"X_train_scaled"})," and ",(0,i.jsx)(n.code,{children:"y_train"}),"), the number of training epochs, the batch size for gradient updates, and the validation data for monitoring the model\u2019s performance during training. The ",(0,i.jsx)(n.code,{children:"class_weight"})," argument helps our model pay more attention to the ",(0,i.jsx)(n.em,{children:"minority"})," class."]}),"\n",(0,i.jsx)(n.h3,{id:"visualizing-training-progress",children:"Visualizing Training Progress"}),"\n",(0,i.jsx)(n.p,{children:"It\u2019s helpful to visualize the training progress using plots. This allows us to observe how the model\u2019s performance changes over epochs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'import matplotlib.pyplot as plt\n\nplt.plot(history.history["loss"], label="Training")\nplt.plot(history.history["val_loss"], label="Validation")\nplt.ylabel("Loss")\nplt.xlabel("Epoch")\nplt.legend();\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(77824).Z+"",width:"567",height:"432"})}),"\n",(0,i.jsx)(n.p,{children:"As can be seen, the model is performing well not only on the training data but also on new, unseen validation data."}),"\n",(0,i.jsx)(n.h2,{id:"evaluation-measuring-model-performance",children:"Evaluation: Measuring Model Performance"}),"\n",(0,i.jsx)(n.p,{children:"In this section, we\u2019ll dive into evaluating the performance of our credit card fraud detection model. By using various metrics, we can gain insights into how well the model is identifying fraudulent transactions and where it might need improvement."}),"\n",(0,i.jsx)(n.p,{children:"To evaluate a binary classification model like ours, we\u2019ll use several key metrics that provide a comprehensive view of its performance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"True positives:"})," The model predicts fraud and the event is actually fraud."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"False positives:"})," The model predicts fraud but the event is actually legitimate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"True negatives:"})," The model predicts legitimate and the event is actually legitimate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"False negatives:"})," The model predicts legitimate but the event is actually fraud."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Confusion Matrix:"})," A table that summarizes the model\u2019s predictions and actual classes. It shows true positive, true negative, false positive, and false negative counts."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Recall:"})," Also known as ",(0,i.jsx)(n.em,{children:"sensitivity"})," or ",(0,i.jsx)(n.em,{children:"True Positive Rate"}),", is percentage of total fraud the model detects. Also known as capture rate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Precision:"})," Percentage of fraud events correctly predicted as fraudulent as compared to all events predicted as fraudulent."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Once the model is trained, we can use it to make predictions on the test data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:"# Predict on the test data\ny_pred = model.predict(X_test_scaled)\n\n# Convert predictions to binary values\ny_pred = np.where(y_pred >= 0.5, 1, 0)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"1781/1781 [==============================] - 1s 411us/step\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",metastring:'title="Python"',children:'from sklearn.metrics import recall_score, precision_score, confusion_matrix\n\n# Recall score\nrecall = recall_score(y_test, y_pred)\nprint(f"Recall score: {recall:.2f}")\n\n# Precision score\nprecision = precision_score(y_test, y_pred)\nprint(f"Precision score: {precision:.2f}")\n\n# Confusion matrix\nconf_matrix = confusion_matrix(y_test, y_pred)\n\n# True negatives, false positives, false negatives, true positives\ntn, fp, fn, tp = conf_matrix.ravel()\nprint(f"\\nTrue negatives: {tn}")\nprint(f"False positives: {fp}")\nprint(f"False negatives: {fn}")\nprint(f"True positives: {tp}")\n\n# Plot the confusion matrix\ndisp = ConfusionMatrixDisplay(\n    confusion_matrix=conf_matrix,\n    display_labels=["Legitimate", "Fraudulent"]\n)\nprint("\\nConfusion matrix:")\ndisp.plot(cmap="Blues", values_format="d", ax=None, colorbar=False);\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Recall score: 0.90\nPrecision score: 0.16\n\nTrue negatives: 56403\nFalse positives: 461\nFalse negatives: 10\nTrue positives: 88\n\nConfusion matrix:\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(97496).Z+"",width:"493",height:"432"})}),"\n",(0,i.jsx)(n.p,{children:"This heatmap provides a clearer view of how well the model is classifying instances."}),"\n",(0,i.jsx)(n.p,{children:"Out of 56,962 testing transactions, we are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Correctly identifying 88 of them as fraudulent (True Positives)"}),"\n",(0,i.jsx)(n.li,{children:"Missing 10 fraudulent transactions (False Negatives)"}),"\n",(0,i.jsx)(n.li,{children:"At the cost of incorrectly flagging 461 legitimate transactions (False Positives)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Congratulations! You\u2019ve successfully embarked on a journey through the creation of a credit card fraud detection model using Keras and Python. From data preprocessing to model training and evaluation, you\u2019ve gained a comprehensive understanding of the entire process. Remember, the world of fraud detection is ever-evolving, so feel free to experiment with different architectures, hyperparameters, and techniques to further enhance your model\u2019s performance."}),"\n",(0,i.jsx)(n.p,{children:"Happy coding and stay vigilant against fraud!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},97496:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fraud-conf-mat-87030cdb0ece2d5979a46471ef0e169f.png"},50561:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fraud-distro-180429647f9e0fee269db3ac4642ec30.png"},77824:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/fraud-loss-1a7dfaab212bab7917fa49baa70aac2f.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);