import { Fragment } from "react";
import myPic from "../../assets/myPic.jpg";

import classes from "../../styles/myfile/Profile.module.css";

const Profile = () => {
  return (
    <Fragment>
      <div className={classes.header}>안녕하세요! 김준현입니다.</div>
      <div className={classes.subHeader}>
        <span className={classes.strong}>트렌디한 개발자</span>를 꿈꾸는{" "}
        <span className={classes.strong}>김준현</span>입니다.
      </div>
      <div className={classes.contents}>
        <div className={classes.imgBox}>
          <img src={myPic} />
        </div>
        <ul className={classes.profileBox}>
          <li className={classes.title}>Address</li>
          <li className={classes.detail}>서울시 마포구</li>
          <li className={classes.title}>Brith</li>
          <li className={classes.detail}>1999/02/18</li>
          <li className={classes.title}>E-mail</li>
          <li className={classes.detail}>junhyeon0218@gmail.com</li>
          <li className={classes.title}>GitHub</li>
          <li className={classes.detail}>
            <a href='https://github.com/junhyeon0218' target='_blank'>
              github.com/junhyeon0218
            </a>
          </li>
          <li className={classes.title}>Notion</li>
          <li className={classes.detail}>
            <a
              href='https://www.notion.so/Kim-Junhyeon-a43ba31ad6624dbda8e9a674a8334193?pvs=4'
              target='_blank'
            >
              notion.so/Kim-Junhyeon
            </a>
          </li>
        </ul>
      </div>
      <ul className={classes.list}>
        <li>✅ 새로운 지식의 습득에서 기쁨을 느끼며 전진하는 개발자</li>
        <li>
          ✅ 활발한 성격과 여러 협업 경험으로 팀원과 원활한 소통이 가능한 개발자
        </li>
        <li>
          ✅ 끈기 있고 세심한 성격으로 완성도 높은 코드를 작성하는 신중한 개발자
        </li>
        <li>✅ 직관적이고 세련된 디자인 감각을 갖춘 개발자</li>
      </ul>

      <div className={classes.content2}>
        <div className={classes.eduBox}>
          <div className={classes.eduTitle}>학력</div>
          <div className={classes.eduDetailBox}>
            <ul className={classes.years}>
              <li>2018.03</li>
              <li>2021</li>
              <li>2022</li>
              <li>2024.02</li>
            </ul>
            <ul className={classes.eduDetail}>
              <li>중부대학교 소프트웨어공학부 입학</li>
              <li>정보보호학과 총무직 수행</li>
              <li>정보보호학과 총무직 수행</li>
              <li>중부대학교 정보보호학과 졸업예정</li>
            </ul>
          </div>
        </div>

        <div className={classes.certBox}>
          <div className={classes.certTitle}>자격증</div>
          <div className={classes.certDetailBox}>
            <div className={classes.certDetail}>네트워크관리사 2급</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
