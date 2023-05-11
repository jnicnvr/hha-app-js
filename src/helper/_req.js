import axios from "axios";

export const addPatient = async (payload) => {
  const endpoint = "http://localhost:50001/api/insertPatient";
  try {
    const res = await axios.post(endpoint, payload);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const getByKey = async (key, collection, payload) => {
  const endpoint = "http://localhost:50002/api/getByKey";
  try {
    const res = await axios.post(endpoint, payload);
    return res.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
