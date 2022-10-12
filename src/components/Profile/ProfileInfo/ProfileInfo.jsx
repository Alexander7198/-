import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://img1.akspic.ru/attachments/crops/4/8/5/4/34584/34584-mersedes_amg-avtomobil-mercedes_benz-superkar-sportivnyj_avtomobil-1920x1080.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div >
  )
}

export default ProfileInfo;