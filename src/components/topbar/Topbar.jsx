import React from 'react'
import "./topbar.css"
import { ReactComponent as AllPlanLogo } from "./img/allplan-logo.svg"
import { Link } from "react-router-dom";
import {NotificationsNone, Settings, Search} from '@material-ui/icons';
import SettingsButton from '../settingsButton/SettingsButton';
import NotificationButton from '../notificationButton/NotificationButton';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <div className="logo">
                        <Link to="/bimdashboard">
                            <AllPlanLogo />
                        </Link>
                    </div>
                </div>

                <div className="middle">
                    <h2>Allplan - Design solutions for a better built environment</h2>
                </div>

                <div className="topRight">
                    {/* 
                    <div className="topbarIconContainer">
                        <IconContext.Provider value={{size: 37}}>
                            <MdNotificationsNone />
                            <span className="topIconBadge">2</span>
                        </IconContext.Provider>
                    </div>
                    <div className="topbarIconContainer">
                        <IconContext.Provider value={{size: 35}}>
                            <FiSettings />
                        </IconContext.Provider>
                    </div>
                    <div className="topbarIconContainer">
                        <IconContext.Provider value={{size: 35}}>
                            <FaSearch />
                        </IconContext.Provider>
                    </div>
                    */}

                    {/* 
                    <div className="topbarIconContainer">
                        <Search fontSize="large"/>
                    </div>
                    */}
                    <div className="topbarIconContainer">
                        {/* <Settings fontSize="large"/> */}
                        <SettingsButton />
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationButton />
                    </div>

                    <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/f3de20aa-2186-43ca-97ea-f54394c3da13.png" alt=" Allplan 'A' logo" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}