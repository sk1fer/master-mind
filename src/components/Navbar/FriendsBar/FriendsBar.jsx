import React from 'react';
import styles from './../Navbar.module.css';
import { NavLink } from 'react-router-dom';
import avatar from './../../../images/avatar2.jpg'

const FriendsBar = (props) => {
    return (
        <div className={styles.friendBlock}>
            <div className={styles.friendItem}>
                <NavLink to={"/friends/" + props.id}><img src={avatar} alt="navbarAvatar" /></NavLink>
                <NavLink to={"/friends/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default FriendsBar;