import React from 'react'
import "./sidebar.css"
import { Link } from "react-router-dom";

import { IconContext } from 'react-icons'
import { MdLineStyle } from "react-icons/md"
import { FiArrowLeftCircle } from "react-icons/fi"
import { FiArrowRightCircle } from "react-icons/fi"
import { MdInfoOutline } from "react-icons/md"
import { MdInput } from "react-icons/md"
import { MdInsertChartOutlined } from "react-icons/md"
import { MdInsights } from "react-icons/md"
import { MdImportContacts } from "react-icons/md"
import { MdImportExport } from "react-icons/md"
import { MdInsertInvitation } from "react-icons/md"
import { MdIcecream } from "react-icons/md"
import { MdIncompleteCircle } from "react-icons/md"
import { MdImageAspectRatio } from "react-icons/md"
import { MdImportantDevices } from "react-icons/md"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <IconContext.Provider value={{size: 30}}>
                                <MdLineStyle className="sidebarIcon" />
                            </IconContext.Provider>
                            Home
                        </li>
                        <Link to="/beforeai">
                            <li className="sidebarListItem">
                                <IconContext.Provider value={{size: 30}}>
                                    <FiArrowLeftCircle className="sidebarIcon" /> 
                                </IconContext.Provider>
                                Before AI
                            </li>
                        </Link>
                        <Link to="/afterai">
                            <li className="sidebarListItem">
                                <IconContext.Provider value={{size: 30}}>
                                    <FiArrowRightCircle className="sidebarIcon" />
                                </IconContext.Provider>
                                After AI
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInfoOutline className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInput className="sidebarIcon" /> 
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInsertChartOutlined className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Log</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInsights className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdImportContacts className="sidebarIcon" /> 
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdImportExport className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">BIM Model</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInsertInvitation className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdIcecream className="sidebarIcon" /> 
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdIncompleteCircle className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Customise</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <IconContext.Provider value={{size: 30}}>
                                <MdImageAspectRatio className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdInsertInvitation className="sidebarIcon" /> 
                            </IconContext.Provider>
                            NavItem
                        </li>
                        <li className="sidebarListItem">
                            <IconContext.Provider value={{size: 30}}>
                                <MdImportantDevices className="sidebarIcon" />
                            </IconContext.Provider>
                            NavItem
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}