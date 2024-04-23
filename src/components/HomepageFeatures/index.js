import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Lightweight",
    Svg: require("@site/static/img/logo2.svg").default,
    description: (
      <>
        Docker drives this entire project. The project itself is driven by the
        docker-compose which will orchestrate all the file creation and
        container management for you.
      </>
    ),
  },
  {
    title: "Easy to Setup",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Just take a few minutes and setup your .env file and the project is
        ready to go out of the box with many containers built for you already.
      </>
    ),
  },
  {
    title: "Easy to Modify",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your setup however you wish.
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
        <Heading as="h3">{title}</Heading>
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
