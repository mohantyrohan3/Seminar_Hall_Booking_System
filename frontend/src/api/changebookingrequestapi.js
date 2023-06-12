import axios from 'axios';

export const changeBookingRequestApi = async (inputData) => {
  try {
    const options = {
        method: 'POST',
        url: 'https://seminar.rohankm.online/api/booking/change_booking_request',
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