# Booking_Backend
This repo is used as the backend part for a booking app.  
The frontend part can be found here: https://github.com/LucWag92/Booking_Frontend  
The frontend is connected to the backend via a GraphQL API. It also uses the JWT libary to hash the authorization interactions at sign up and log in.  
The backend is also connected to a MongoDB databank. The DB is hosted in a cloud and the backend has access via a limited DB user who can read and write with  
minimized rights.

## Start Project
1. npm install
2. npm start


## Start Debug Modus
Backend:  
Use in VSCode. 
- Create a new "JavaScrict Debug Terminal" 
- Make sure you are in the "backend" folder.
- Run "npm start" inside of the new Terminal. The Debugger will be attached by itself.
- You can set breakpoints in VSCode directly.
