import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = (vendor = '') => {
    let provider;
    switch(vendor.toLowerCase()){
        case 'google':
            provider = googleAuthProvider;
            break;
        case 'github':
            provider = githubAuthProvider;
            break;
        default:
            provider = googleAuthProvider;
    }
    return () => {
        return firebase.auth().signInWithPopup(provider);
    };
};

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};