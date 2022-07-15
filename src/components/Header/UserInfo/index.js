import React from "react";
import "./styles.css";

const UserInfo = () => (
    <div className="user-info">
        <div className="name">Astro Dev</div>
        <div className="status">
            <span className="circle" />online
        </div>
    </div>
);

export default UserInfo;