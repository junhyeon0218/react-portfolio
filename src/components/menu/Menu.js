import { Fragment } from "react";
import classes from "../../styles/menu/Menu.module.css";
import startImg from "../../assets/start.png";
import vaccine from "../../assets/vaccine.png";
import usb from "../../assets/usb.png";
import sound from "../../assets/sound.png";
import moment from "moment";
import "moment/locale/ko";

const Menu = () => {
  const currentTime = moment().format("a HH:mm");

  return (
    <Fragment>
      <div className={classes.startMenu}>
        <div className={classes.startImgBox}>
          <img src={startImg} className={classes.startImg} />
        </div>
        <div className={classes.rightBar}>
          <img src={sound} className={classes.barIcons} />
          <img src={vaccine} className={classes.barIcons} />
          <img src={usb} className={classes.barIcons} />
          <div className={classes.time}>{currentTime}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
