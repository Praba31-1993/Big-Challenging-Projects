// className='userList'

import React from "react";
import {useState} from "react";

import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";

export default function UserList() {
    const [data, setData] = useState(userRows)
    const handleDelete = (id)=>{
        setData(data.filter(item=>item.id!==id))
    }

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "user",
    headerName: "user",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "email", width: 200 },
  { field: "status", headerName: "status", width: 200 },
  { field: "transaction", headerName: "transaction", width: 200 },
  {
    field: "Action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div>
          <Link to={"/users/"+params.row.id}>
            <button className="UserListEdit">Edit</button>
          </Link>
          <DeleteOutline className="UserListDelete" onClick={()=>handleDelete(params.row.id)} />
        </div>
      );
    },
  },
];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
