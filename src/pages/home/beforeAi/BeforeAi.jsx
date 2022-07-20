import React from 'react'
import MainChartOne from '../../../components/chart/MainChartOne'
import './beforeAi.css'
import {beforeAiData} from "../../../dummyDataBeforeAi"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function BeforeAi() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'user', headerName: 'Username', width: 260, renderCell: (params) =>{
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 260 },
    {
      field: 'status',
      headerName: 'Status',
      width: 170,
    },
    {
      field: 'change',
      headerName: 'Change Status',
      width: 200,
    },
  ];
  
  const rows = [
    { 
      id: 1, username: 'User Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 2, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 3, username: 'Placeholder Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 4, username: 'This Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 5, username: 'Profile Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 6, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 7, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 8, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 9, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 10, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 11, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 12, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 13, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },
    { 
      id: 14, username: 'Example Name', 
      avatar: "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png",
      email:"email@gmail.com",
      status:"active",
      change:"Pending"
    },

  ];

  return (
    <div className="beforeAi">

      <h1>More in depth data would go here</h1>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={14}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <MainChartOne data={beforeAiData} title="Before Ai" grid dataKey="pv" />
    </div>
  )
}
