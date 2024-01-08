import { Fragment } from "react";
import classes from "../../styles/myfile/Projects.module.css";

import project1 from "../../assets/projectsLogo/0218.png";
import project2 from "../../assets/projectsLogo/KAC.png";
import project3 from "../../assets/projectsLogo/PPLOGO2.png";
import project4 from "../../assets/projectsLogo/PANDA.png";
import project5 from "../../assets/projectsLogo/windowsxp.jpg";

const Projects = () => {
  const url1 =
    "https://whispering-kettledrum-eab.notion.site/0218-abd4eec363cf4eefb8f4c3cbb6193c4a?pvs=4";
  const url2 =
    "https://whispering-kettledrum-eab.notion.site/KIM-S-GAME-CHANNEL-a8b69e4ccf804f3eace30932e7bb27b6?pvs=4";
  const url3 =
    "https://whispering-kettledrum-eab.notion.site/674f1a1a8081433db76687ffe4fbaeaf?pvs=4";
  const url4 =
    "https://whispering-kettledrum-eab.notion.site/62d7e5d636134859a4eaebf85102a2c3?pvs=4";
  const url5 =
    "https://whispering-kettledrum-eab.notion.site/Windows-XP-portfolio-b0083a2923fc4d9aba97d65992bb1b08?pvs=4";

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.mainTitle}>💻 프로젝트</div>
        <div className={classes.projectList}>
          <button
            className={classes.project}
            onClick={() => {
              window.open(url1);
            }}
          >
            <div className={classes.coverImg}>
              <img src={project1} className={classes.pjImg} />
            </div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>0218 개인 홈페이지</div>
              <div className={classes.projectTimeLine}>2021/09 - 2021/11</div>
              <ul className={classes.stackBox}>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.project}
            onClick={() => {
              window.open(url2);
            }}
          >
            <div className={classes.coverImg}>
              <img src={project2} className={classes.pjImg} />
            </div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>KIM`S GAME CHANNEL</div>
              <div className={classes.projectTimeLine}>2021/09 - 2021/12</div>
              <ul className={classes.stackBox}>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.project}
            onClick={() => {
              window.open(url3);
            }}
          >
            <div className={classes.coverImg}>
              <img src={project3} className={classes.pjImg} />
            </div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>
                주차 공간 대여 서비스 팍플
              </div>
              <div className={classes.projectTimeLine}>2022/03 - 2022/06</div>
              <ul className={classes.stackBox}>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.project}
            onClick={() => {
              window.open(url4);
            }}
          >
            <div className={classes.coverImg}>
              <img src={project4} className={classes.pjImg} />
            </div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>
                블록체인 기반 안전거래 플랫폼 판다
              </div>
              <div className={classes.projectTimeLine}>2023/03 - 2023/12</div>
              <ul className={classes.stackBox}>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Redux.js</li>
                <li>MUI</li>
                <li>Git</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.project}
            onClick={() => {
              window.open(url5);
            }}
          >
            <div className={classes.coverImg}>
              <img src={project5} className={classes.pjImg} />
            </div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>Windows XP portfolio</div>
              <div className={classes.projectTimeLine}>2023/12 - </div>
              <ul className={classes.stackBox}>
                <li>Javascript</li>
                <li>React.js</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
