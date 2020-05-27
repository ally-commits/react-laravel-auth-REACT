import React from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';

const Loader = ({auth}) => { 
    return (
        <>
            {auth.loading &&
                <div style={{width: '100vw', height: '100vh',position: 'absolute', zIndex: '10',
                    backgroundColor: 'rgba(255,255,255,.4)', overflow: 'hidden'
                }} class="d-flex justify-content-center align-items-center">
                    <h4>Loading....</h4>
                </div>
            }
        </>
    );
}

Loader.propTypes = { 
    auth: PropTypes.object, 
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default  connect(mapStateToProps)(Loader);
  