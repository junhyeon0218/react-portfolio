import { Fragment } from "react";
import classes from "../../styles/myfile/Stacks.module.css";

const Stacks = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.title}>스택/기술</div>
        <div className={classes.content}>
          <div className={classes.subTitle}>익숙해요!</div>
          <ul className={classes.stackBox}>
            <li>Javascript</li>
            <li>React.js</li>
            <li>Redux.js</li>
            <li>MUI</li>
            <li>Git</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className={classes.content}>
          <div className={classes.subTitle}>경험해봤어요!</div>
          <ul className={classes.stackBox2}>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Angular.js</li>
            <li>Tailwindcss</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Stacks;
