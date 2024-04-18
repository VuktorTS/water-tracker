export const getUserName = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getToken = state => state.auth.token;

export const isLoggedIn = state => state.auth.isLoggedIn;

export const error = state => state.auth.error;

export const selectUser = state => state.auth.user;