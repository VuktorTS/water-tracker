import axios from "axios";
axios.defaults.baseURL = 'https://project-node-wt-team4.onrender.com/api';


export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };
  // ----------- auth-service -------------------

  export const reqLogin = async body=>{
    const {data} = await axios.post('/users/signin', body);
    setAuthHeader(data.token);
    return data;
  }

  export const reqSignUp = async body=>{
    const {data} = await axios.post('/users/signup', body);
      return data;
  }

  export const reqSignOut = async ()=>{
    const {data} = await axios.post('/users/signout');
      clearAuthHeader();
      return data;
  }

  export const reqCurrent = async ()=>{
    const {data} = await axios.get('users/current');
      return data;
  }

  export const reqUpdateUser = async (formData)=>{
    const {data} = await axios.patch('users/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
  }