import { Fragment } from "react";
import classes from "../../styles/myfile/Projects.module.css";

import project1 from "../../assets/projectsLogo/0218.png";
import project2 from "../../assets/projectsLogo/KAC.png";
import project3 from "../../assets/projectsLogo/PPLOGO2.png";
import project4 from "../../assets/projectsLogo/PANDA.png";
import project5 from "../../assets/projectsLogo/windowsxp.jpg";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.mainTitle}>💻 프로젝트</div>
        <div className={classes.projectList}>
          <div className={classes.project}>
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
          </div>

          <div className={classes.project}>
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
          </div>

          <div className={classes.project}>
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
          </div>

          <div className={classes.project}>
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
          </div>

          <div className={classes.project}>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
