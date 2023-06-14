import axios from 'axios';

export const createBookingRequestApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://seminar.rohankm.online/api/booking/create_booking',
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