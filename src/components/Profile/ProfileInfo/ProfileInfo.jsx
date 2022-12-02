import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  if (! props.profile ) {
    return <Preloader />
  };
  
  return (
    <div>
      <div>
        <img src='https://img1.akspic.ru/attachments/crops/4/8/5/4/34584/34584-mersedes_amg-avtomobil-mercedes_benz-superkar-sportivnyj_avtomobil-1920x1080.jpg' alt={""}></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt={""} />
        ava + description
      </div>
    </div >
  )
}

export default ProfileInfo;