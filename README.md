
# SEMINAR HALL BOOKING SYSTEM

The major goal of the Seminar Hall Booking System is to keep track of all seminar hall
booking dates, history, and availability for all departments. The project is completely
restricted at the administrative level, and department members can only request access
from the administrator, who will guarantee it. The goal of the project is to create a
mobile app that will reduce manual labor in managing seminar room bookings. It keeps
track of all the facts about the booking's approval, rejection, or amendment. It keeps
track of all the details regarding the seminar room. Production of the report: It creates a
report on the status and history of seminar halls


## Admin

- Create Department
- View All Booking
- Approval/Reject
- Update Booking Status
- Send notification to Department

## Department
- Book Seminar Halls , depending on vacancy
## Tech Stack

**Client:** React, Redux-Toolkie, Material UI

**Server:** Node, Express , Mongo DB , Mongoose


**Deployment:** Azure Virtual Machine

## Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/A_uFV_WdiH0/0.jpg)](https://www.youtube.com/watch?v=A_uFV_WdiH0)

Try Out Here
https://seminar.rohankm.online/

## Admin Credentials
email - admin@gmail.com
password - 1234


# Setup

## Frontend

1. Open the frontend folder in cmd
2. Install everything using `npm install`
3. Start using `npm run start`

## Backend

1. Open the frontend folder in cmd
2. Install everything using `npm install`
3. Build the frontend site using `npm run build`
4. Open the backend folder in cmd
5. Install everything using `npm install`
6. Create the constants.js file inside backend/routes folder
7. Start using `npm run start`

## contants.js file

Path: `backend/routes`

Content:

```
EMAIL : "your email whose 2 step verification is done"
PASSWORD : "App Password Generated "
MONGO_Password : "Mongo DB Atlas Password"
```
Get Your App Password from your account after going to security settings after enabling 2 step verification.Put the App passord inside PASSWORD

