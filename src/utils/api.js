import axios from "axios";

const apiRoot = process.env.REACT_APP_BACKEND_URL;

export const getFightersList = async () => {
  return await axios.get(`${apiRoot}/fighters`);
};

export const getSingleFighter = async (id) => {
  return await axios.get(`${apiRoot}/fighters/${id}`);
};

export const deleteFighter = async (fighter) => {
  return await axios.delete(`${apiRoot}/fighters/${fighter.id}`);
};

export const postToFighters = async (body) => {
  try {
    await axios.post(`${apiRoot}/fighters`, body);
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image);

    const result = await axios.post(`${apiRoot}/fighters/upload`, formData);

    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const editFighter = async (data, getFighter, id) => {
  try {
    await axios.patch(`${apiRoot}/fighters`, { id, ...data });
    getFighter();
  } catch (error) {
    console.log(error);
  }
};

export const getGymsList = async () => {
  return await axios.get(`${apiRoot}/gyms`);
};

export const getSingleGym = async (id) => {
  return await axios.get(`${apiRoot}/gyms/${id}`);
};
