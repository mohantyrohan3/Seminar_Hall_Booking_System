import axios from 'axios';

export const departmentLoginApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://seminar.rohankm.online/api/department_login',
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