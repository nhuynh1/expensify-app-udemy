import React from 'react';
import { connect } from 'react-redux';

import { startLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startGithubLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify App</h1>
            <p>A place for your expenses</p>
            <button className="button button--login" onClick={ startGoogleLogin }>Login with Google</button>
            <button 
                className="button button--secondary button--login" 
                onClick={ startGithubLogin }>
                    Login with Github
            </button>
        </div>
        
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startGoogleLogin: () => dispatch(startLogin('Google')),
    startGithubLogin: () => dispatch(startLogin('Github'))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);