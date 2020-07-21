import authReducer from '../../reducers/auth';

test('should set login state', () => {
    const uid = 'abc123def';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
});

test('should set logout state', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'abc123def'}, action);
    expect(state.uid).toBeFalsy();
    expect(state).toEqual({});
});