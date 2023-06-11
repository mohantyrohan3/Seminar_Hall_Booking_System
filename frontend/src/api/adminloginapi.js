import axios from 'axios';

export const adminloginApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'http://localhost:8000/admin_login',
        headers: {
          'content-type': 'application/json',
        },
        withCredentials: true,
        data:inputData
    };


    let response = await axios(options);
    return response


  } catch (error) {
    console.error(error.response.data); 
  }
};