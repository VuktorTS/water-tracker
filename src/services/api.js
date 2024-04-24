import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/api';

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
// ----------- auth-service -------------------

export const reqLogin = async (body) => {
  const { data } = await axios.post('/users/signin', body);
  setAuthHeader(data.token);
  return data;
};

export const reqSignUp = async (body) => {
  const { data } = await axios.post('/users/signup', body);
  return data;
};

export const reqResendVerify = async (body) => {
  const { data } = await axios.post('/users/verify', body);
  return data;
};

export const reqDeleteUser = async (body) => {
  console.log('body: ', body);
  const { data } = await axios.delete('/users/delete', {data: body});
  return data;
};

export const reqSignOut = async () => {
  const { data } = await axios.post('/users/signout');
  clearAuthHeader();
  return data;
};

export const reqUpdateUser = async (formData) => {
  const { data } = await axios.patch('users/', formData,
    {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    }
  );
  return data;
};
export const reqCurrent = async () => {
  const { data } = await axios.get('users/current');
  return data;
};

// ----------- water -------------------

export const reqTodayWater = async () => {
  const { data } = await axios.get('/trackers/today');
  return data[0];
};

export const reqMonthWater = async ({ currentYear, currentMonth }) => {
  const { data } = await axios.get(
    `/trackers/month/${currentYear}/${currentMonth}`
  );
  return data;
};

export const addWaterAmount = async (formData) => {
  const { data } = await axios.post('trackers/', formData);
  return data;
};

export const editWaterAmount = async (formData) => {
  const { _id, waterVolume, time } = formData;
  const { data } = await axios.patch(`trackers/waterEntries/${_id}`, {
    waterVolume,
    time,
  });
  return data;
};

export const deleteWaterAmount = async (_id) => {
  const { data } = await axios.delete(`trackers/waterEntry/${_id}`);
  return data;
};
