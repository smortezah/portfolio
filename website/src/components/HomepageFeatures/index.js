import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "AI & Machine Learning",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Tokenization in LLMs, Neural networks for fraud detection, PyTorch image classification,
        Optuna hyperparameter tuning, and SHAP for explainable AI.
      </>
    ),
  },
  {
    title: "Data Science Mastery",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Polars & Pandas for data wrangling, stunning visualizations with ggplot2, A/B testing,
        time-series forecasting, and insightful EDA.
      </>
    ),
  },
  {
    title: "Production-Ready Solutions",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        End-to-end pipelines with Airflow & Docker, CI/CD workflows, data privacy with encryption,
        and interactive Streamlit deployments.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
