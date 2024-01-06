import { Fragment, useState } from "react";
import classes from "../styles/background/Grid.module.css";
import internet from "../assets/internetex.png";
import mycomputer from "../assets/mycomputer.png";
import github from "../assets/github.png";
import myfile from "../assets/myfile.png";
import notion from "../assets/notion.png";
import Information from "./apps/Information";

const Grid = () => {
  const [openIcon, setOpenIcon] = useState(false);

  const openBtn = () => {
    setOpenIcon(true);
  };

  return (
    <Fragment>
      <div className={classes.background}>
        <div className={classes.icons}>
          <div className={classes.iconBox}>
            <img src={internet} className={classes.iconImg} />
          </div>
          <div className={classes.iconText}>Internet Explorer</div>
        </div>

        <div className={classes.icons}>
          <div className={classes.iconBox}>
            <img src={mycomputer} className={classes.iconImg} />
          </div>
          <div className={classes.iconText}>내 컴퓨터</div>
        </div>

        <div className={classes.icons}>
          <div className={classes.iconBox}>
            <img src={github} className={classes.iconImg} />
          </div>
          <div className={classes.iconText}>GitHub</div>
        </div>

        <div className={classes.icons} onClick={openBtn}>
          <div className={classes.iconBox}>
            <img src={myfile} className={classes.iconImg} />
          </div>
          <div className={classes.iconText}>내 정보</div>
        </div>

        <div className={classes.icons}>
          <div className={classes.iconBox}>
            <img src={notion} className={classes.iconImg} />
          </div>
          <div className={classes.iconText}>Notion</div>
        </div>
      </div>
      {openIcon && <Information />}
    </Fragment>
  );
};

export default Grid;
