import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest Changes</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">User</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Change</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User Name</span>  
            </td>
            <td className="widgetLgDate">20 Jun 2022</td>
            <td className="widgetLgAmount">Change in BIM model</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User Name</span>  
            </td>
            <td className="widgetLgDate">20 Jun 2022</td>
            <td className="widgetLgAmount">Change in BIM model</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User Name</span>  
            </td>
            <td className="widgetLgDate">20 Jun 2022</td>
            <td className="widgetLgAmount">Change in BIM model</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png" alt="" className="widgetLgImg" />
              <span className="widgetLgName">User Name</span>  
            </td>
            <td className="widgetLgDate">20 Jun 2022</td>
            <td className="widgetLgAmount">Change in BIM model</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
          </tr> 
        </table>
    </div>
  )
}