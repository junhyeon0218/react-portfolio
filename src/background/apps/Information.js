import { Fragment, useState, useEffect, useRef } from "react";
import classes from "../../styles/background/Information.module.css";
import myfile from "../../assets/myfile.png";
import Profile from "../../components/myfile/Profile";
import Stacks from "../../components/myfile/Stacks";
import Actives from "../../components/myfile/Actives";
import Papers from "../../components/myfile/Papers";
import Projects from "../../components/myfile/Projects";
import "xp.css/dist/XP.css";

const Information = () => {
  const [activeSection, setActiveSection] = useState("프로필");
  const [closeBtn, setCloseBtn] = useState("true");
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);
  const [size, setSize] = useState({ width: 960, height: 800 });

  const containerRef = useRef(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleCloseWindow = () => {
    setCloseBtn(false);
  };

  const handleMouseDown = (e) => {
    if (e.target.classList.contains(classes.resizer)) {
      setResizing(true);
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    } else {
      setDragging(true);
      setPosition({
        x: e.clientX - containerRef.current.offsetLeft,
        y: e.clientY - containerRef.current.offsetTop,
      });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const newLeft = e.clientX - position.x;
      const newTop = e.clientY - position.y;

      containerRef.current.style.left = `${newLeft}px`;
      containerRef.current.style.top = `${newTop}px`;
    } else if (resizing) {
      const newWidth = e.clientX - containerRef.current.offsetLeft;
      const newHeight = e.clientY - containerRef.current.offsetTop;

      setSize({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    setResizing(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, resizing]);

  return (
    <Fragment>
      {closeBtn && (
        <div
          className={classes.container}
          ref={containerRef}
          style={{ width: size.width, height: size.height }}
          onMouseDown={handleMouseDown}
        >
          <div className={classes.resizer}></div>
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
              <button aria-label='Maximize'></button>
              <button
                aria-label='Close'
                className={classes.closeBtn}
                onClick={handleCloseWindow}
              ></button>
            </div>
          </div>
          <div className={classes.content}>
            <ul className={classes.nav}>
              <li onClick={() => handleSectionChange("프로필")}>프로필</li>
              <li onClick={() => handleSectionChange("기술/스택")}>
                기술/스택
              </li>
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
      )}
    </Fragment>
  );
};

export default Information;
