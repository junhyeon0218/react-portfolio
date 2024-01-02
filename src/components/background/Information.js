import { Fragment, useState } from "react";
import classes from "../../styles/background/Information.module.css";
import myfile from "../../assets/myfile.png";
import Profile from "../myfile/Profile";
import Stacks from "../myfile/Stacks";
import Actives from "../myfile/Actives";
import Papers from "../myfile/Papers";
import Projects from "../myfile/Projects";
import "xp.css/dist/XP.css";

const Information = () => {
  const [activeSection, setActiveSection] = useState("프로필");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.headerBg}></div>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <div className={classes.myfileIconBox}>
              <img src={myfile} className={classes.myfileIcon} />
            </div>
            <div>내 정보</div>
          </div>

          <div className='title-bar-controls'>
            <button aria-label='Minimize'></button>
            <button aria-label='Restore'></button>
            <button aria-label='Close' className={classes.closeBtn}></button>
          </div>
        </div>
        <div className={classes.content}>
          <ul className={classes.nav}>
            <li onClick={() => handleSectionChange("프로필")}>프로필</li>
            <li onClick={() => handleSectionChange("기술/스택")}>기술/스택</li>
            <li onClick={() => handleSectionChange("프로젝트")}>프로젝트</li>
            <li onClick={() => handleSectionChange("활동")}>활동</li>
            <li onClick={() => handleSectionChange("논문")}>논문</li>
          </ul>
          <div className={classes.detail}>
            {activeSection === "프로필" && <Profile />}
            {activeSection === "기술/스택" && <Stacks />}
            {activeSection === "프로젝트" && <Projects />}
            {activeSection === "활동" && <Actives />}
            {activeSection === "논문" && <Papers />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Information;
