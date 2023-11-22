import React, {useEffect, useState} from "react";
import axios from 'axios';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';

function Home() {
    const [user, setUser] = useState({
        name: "",
        age: "",
        contact: "",
        country: ""
    });
    const [data, setData] = useState([]);
    function changeData(value) {
        return setUser((prev) => {
            return { ...prev, ...value };
        });
    }
    useEffect(() => {
        getusers();
    }, [])
    async function getusers() {
        await axios.get("http://localhost:8000/api/get-users")
                .then((res)=>{
                    const userdata = res.data;
                    setData(userdata);
                }).catch(err => {
                    console.log(err);
                }) 
    } 
    async function deleteUser(id) {
        console.log("id"+id)
        await axios.post("http://localhost:8000/api/delete-user",{id: id}).then(() => {
            console.log('User Removed...');
            getusers();
        })
        .catch(err => {
        console.error(err);
        });
    }
    const [editIcons, setEditIcons] = useState(data.map(() => true));
    function toggleUser(id) {
        console.log("id"+id);
        const index = data.findIndex((item) => item._id === id);
        const newEditIcons = [...editIcons];
        newEditIcons[index] = !newEditIcons[index];
        setEditIcons(newEditIcons);
    }
    
    async function editUser(data) {
        console.log("id"+data);
        const id = data._id;
        const name = (user.name==='') ? data.name : user.name;
        const age = (user.age==='') ? data.age : user.age;
        const contact = (user.contact==='') ? data.contact : user.contact;
        const country = (user.country==='') ? data.country : user.country;
        await axios.post("http://localhost:8000/api/edit-user",{
            id:id, 
            name:name, 
            age:age, 
            contact:contact, 
            country:country
        }).then(() => {
            console.log('User Data Modified...');
            getusers();
        })
        .catch(err => {
        console.error(err);
        });
    }
    async function addUser() {
        const newUser = user;
        console.log(newUser);
        await axios.post("http://localhost:8000/api/add-user", newUser, {
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newUser),
        })
        .then(() => {
            console.log('User added...');
        })
        .catch(err => {
        console.error(err);
        });
        setUser({name: "", age: "", contact: "", country: ""});
    }
    const newuser = () => {
        addUser();
        getusers();
    }
    return (
        <>
            <div className="container mt-5 mb-10">
                <h1 className="text-center">User List App</h1>
                <br/>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td><input id="name" type="text" className="form-control" placeholder="User Name" onChange={(e) => changeData({ name: e.target.value })}/></td>
                            <td><input id="age" type="text" className="form-control" placeholder="Age" onChange={(e) => changeData({ age: e.target.value })}/></td>
                            <td><input id="contact" type="text" className="form-control" placeholder="Contact" onChange={(e) => changeData({ contact: e.target.value })}/></td>
                            <td><input  id="country" type="text" className="form-control" placeholder="Country" onChange={(e) => changeData({ country: e.target.value })}/></td>
                            <td><button className="btn btn-primary" onClick={newuser}>Add User</button></td>
                        </tr>
                        {/*<tr>
                            <td>
                                <span className="d-block">test</span>
                                <input type="text" className="d-none form-control" placeholder="User Name"/>
                            </td>
                            <td>
                                <span className="d-block">test</span>
                                <input type="text" className="d-none form-control" placeholder="Age"/>
                            </td>
                            <td>
                                <span className="d-block">test</span>
                                <input type="text" className="d-none form-control" placeholder="Contact"/>
                            </td>
                            <td>
                                <span className="d-block">test</span>
                                <input type="text" className="d-none form-control" placeholder="Country"/>
                            </td> 
                        </tr>
                        */}
                        { data.map((data, index) => (
                            <tr key={index}>
                                {editIcons[index] ? (
                                    <>
                                        <td><input type="text" className="form-control" defaultValue={data.name} onChange={(e) => changeData({ name: e.target.value })} placeholder="User Name" /></td>
                                        <td><input type="text" className="form-control" defaultValue={data.age} onChange={(e) => changeData({ age: e.target.value })} placeholder="Age" /></td>
                                        <td><input type="text" className="form-control" defaultValue={data.contact} onChange={(e) => changeData({ contact: e.target.value })} placeholder="Contact" /></td>
                                        <td><input type="text" className="form-control" defaultValue={data.country} onChange={(e) => changeData({ country: e.target.value })} placeholder="Country" /></td>
                                        <td><i className="fas fa-spell-check" onClick={() => {toggleUser(data._id); editUser(data);}}></i></td></>
                                ) : (
                                    <>
                                        <td>{data.name}</td>
                                        <td>{data.age}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.country}</td>
                                        <td><i className="fas fa-pen-to-square" onClick={() => toggleUser(data._id)}></i></td></>
                                )}

                                <td>
                                    <i className="far fa-trash-can" onClick={() => deleteUser(data._id)}></i>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>
            </div>
        {/* <h1 className="text-center text-warning mt-5">User Data API</h1>
        <div className="text-center align-items-center justify-content-center mt-5">
            <p><input type="text" className="uname text-center" placeholder="User Name"/></p>
            <p><input type="text" className="uage text-center" placeholder="Age"/></p>
            <p><input type="text" className="ucon text-center" placeholder="Contact"/></p>
            <p><input type="text" className="uct text-center" placeholder="Country"/></p>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-5">
            <button type="button" className="btn btn-primary">Show</button> &nbsp;
            <button type="button" className="btn btn-primary">Add</button> &nbsp;
            <button type="button" className="btn btn-primary">Update</button> &nbsp;
            <button type="button" className="btn btn-primary">Delete</button> 
        </div> */}
        </>
    );
}

export default Home;