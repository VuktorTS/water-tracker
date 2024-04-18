export const getUser = state => state.auth.user;

export const getToken = state => state.auth.token;

export const isLoggedIn = state => state.auth.isLoggedIn;

export const error = state => state.auth.error;