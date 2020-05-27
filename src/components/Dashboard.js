import React from 'react';
import PropTypes from 'prop-types'; 
import {destroyUser,setLoading} from '../actions/auth';
import { connect } from 'react-redux'; 

const Dashboard = ({auth, destroyUser}) => {
    return (
        <div className="container row m-auto justify-content-between">
            <div className="col-md-8 mt-5">
                <p>ID: {auth.userData.id}</p>
                <p>Welcome {auth.userData.name}</p>
                <p>Email: {auth.userData.email}</p>
            </div>
            <div className="col-md-1 mt-5">
                <button className="btn btn-primary" onClick={() =>{
                    setLoading(true);
                    destroyUser();
                }}>Logout</button>
            </div>
        </div>
    )
}

Dashboard.propTypes = { 
    auth: PropTypes.object,
    destroyUser: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired  
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default  connect(mapStateToProps, {destroyUser,setLoading})(Dashboard);