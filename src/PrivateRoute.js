import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ children, auth, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() =>
          auth.authenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login", 
              }}
            />
          )
        }
      />
    );
}

PrivateRoute.propTypes = { 
    auth: PropTypes.object
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default  connect(mapStateToProps)(PrivateRoute);