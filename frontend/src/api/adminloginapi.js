import axios from 'axios';

export const adminloginApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://seminar.post.rohankm.online/admin_login',
        headers: {
          'content-type': 'application/json',
        },
        data:inputData
    };


    let response = await axios(options);
    return response.data


  } catch (error) {
    console.error(error.response.data); 
  }
};