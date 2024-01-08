import { Fragment } from "react";
import classes from "../../styles/myfile/Actives.module.css";

import active1 from "../../assets/active/capston.png";
import active2 from "../../assets/active/CISC.png";
import active3 from "../../assets/active/academy.png";

const Actives = () => {
  const url1 =
    "https://whispering-kettledrum-eab.notion.site/bda56b797694494f8e043b1663b4fe06?pvs=4";
  const url2 =
    "https://whispering-kettledrum-eab.notion.site/CISC-W-23-6777806701b3467e922b2d9a91e5096a?pvs=4";
  const url3 =
    "https://whispering-kettledrum-eab.notion.site/543b60ce67994807bb9a8ae7a2939ae3?pvs=4";

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.mainTitle}>⭐ 활동</div>
        <div className={classes.activeList}>
          <button
            className={classes.active}
            onClick={() => {
              window.open(url1);
            }}
          >
            <div className={classes.coverImg}>
              <img src={active1} className={classes.activeImg} />
            </div>
            <div className={classes.activeDetail}>
              <div className={classes.activeTitle}>교내 캡스톤 경진대회</div>
              <div className={classes.activeTimeLine}>2023/12/07</div>
              <ul className={classes.stackBox}>
                <li>캡스톤디자인</li>
                <li>대회</li>
                <li>입선</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.active}
            onClick={() => {
              window.open(url2);
            }}
          >
            <div className={classes.coverImg}>
              <img src={active2} className={classes.activeImg} />
            </div>
            <div className={classes.activeDetail}>
              <div className={classes.activeTitle}>
                한국정보보호학회 동계학술대회 CISC-W`23
              </div>
              <div className={classes.activeTimeLine}>2023/12/02</div>
              <ul className={classes.stackBox}>
                <li>학술대회</li>
                <li>논문</li>
              </ul>
            </div>
          </button>

          <button
            className={classes.active}
            onClick={() => {
              window.open(url3);
            }}
          >
            <div className={classes.coverImg}>
              <img src={active3} className={classes.activeImg} />
            </div>
            <div className={classes.activeDetail}>
              <div className={classes.activeTitle}>교내 기업분석 아카데미</div>
              <div className={classes.activeTimeLine}>2023/09 - 2023/11</div>
              <ul className={classes.stackBox2}>
                <li>기업분석</li>
                <li>대회</li>
                <li>대상</li>
                <li>소통</li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Actives;
