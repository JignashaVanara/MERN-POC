import React from "react";

class Home extends React.Component {
    render () {
        return (
            <>
            <h1 className="text-center text-warning mt-5">User Data API</h1>
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
            </div>
            </>
        );
    }
}

export default Home;