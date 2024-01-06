import { Fragment } from "react";
import classes from "../../styles/myfile/Projects.module.css";

const Projects = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.mainTitle}>💻 프로젝트</div>
        <div className={classes.projectList}>
          <div className={classes.project}>
            <div className={classes.coverImg}>사진</div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>프로젝트 제목</div>
              <div className={classes.projectTimeLine}>2022/02 - 2022/10</div>
              <div className={classes.projectInfo}>설명</div>
            </div>
          </div>

          <div className={classes.project}>
            <div className={classes.coverImg}>사진</div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>프로젝트 제목</div>
              <div className={classes.projectTimeLine}>2022/02 - 2022/10</div>
              <div className={classes.projectInfo}>설명</div>
            </div>
          </div>

          <div className={classes.project}>
            <div className={classes.coverImg}>사진</div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>프로젝트 제목</div>
              <div className={classes.projectTimeLine}>2022/02 - 2022/10</div>
              <div className={classes.projectInfo}>설명</div>
            </div>
          </div>

          <div className={classes.project}>
            <div className={classes.coverImg}>사진</div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>프로젝트 제목</div>
              <div className={classes.projectTimeLine}>2022/02 - 2022/10</div>
              <div className={classes.projectInfo}>설명</div>
            </div>
          </div>

          <div className={classes.project}>
            <div className={classes.coverImg}>사진</div>
            <div className={classes.projectDetail}>
              <div className={classes.projectTitle}>프로젝트 제목</div>
              <div className={classes.projectTimeLine}>2022/02 - 2022/10</div>
              <div className={classes.projectInfo}>설명</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
