import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import avatar from './../../../assets/images/avatar.jpg';
import bc from './../../../assets/images/b-c.jpg';
import './ProfileInfo.css';
import { NavLink } from 'react-router-dom';
import ProfileStatus from './ProfileInfoBlock/ProfileStatus'
import ProfileName from './ProfileInfoBlock/ProfileName';
import ProfileSurname from './ProfileInfoBlock/ProfileSurname';
import ProfileCity from './ProfileInfoBlock/ProfileСity';
import ProfileCountry from './ProfileInfoBlock/ProfileCountry';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className="container-block">
      <div className="backgroundImage">
        <img className="bc" src={bc} alt="bc"></img>
        <div className={`${props.login.user.id === props.userId ? "editBackgroundImage" : "display"}`}>
          <NavLink to={`/edit/background/` + props.profile._id}>Update Background Image</NavLink>
        </div>
      </div>
      <div className="profileHeader">
        <div className="avatarImage">
          <div className={`${props.login.user.id === props.userId ? "updateImage" : "display"}`}>
            <NavLink to={`/edit/avatar/` + props.profile._id}>Update Image</NavLink>
          </div>
          <img className="avatar" src={avatar} alt="avatar"></img>
        </div>
        <div className="shortInfo">
          <div className="profileInfo">
            <div className="infoBlock">
              <ProfileName name={props.name} login={props.login} userId={props.userId} updateName={props.updateName} />
              <ProfileSurname surname={props.surname} login={props.login} userId={props.userId} updateSurname={props.updateSurname} />
            </div>
          </div>
          <div className="profileInfo">
            <ProfileStatus status={props.status} login={props.login} userId={props.userId} updateStatus={props.updateStatus} />
          </div>
          <div className="profileInfo">
            <div className="infoBlock">
              <ProfileCity city={props.city} login={props.login} userId={props.userId} updateCity={props.updateCity} />
              <ProfileCountry country={props.country} login={props.login} userId={props.userId} updateCountry={props.updateCountry} />
            </div>
          </div>
        </div>
      </div>
      {/*<div className="fullInfo">
        <h2>Full Description</h2>
        {!props.profile.city
          ? <span>User hasn't set information yet.</span>
          : <div>
            <div>{props.profile.city}</div>
            <div>{props.profile.facebook}</div>
            <div>{props.profile.instagram}</div>
          </div>}
        </div>*/}
    </div>
  );
}

export default ProfileInfo;