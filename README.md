# Booking_Backend

This repo is used as the backend part for a booking app.  
The frontend part can be found here: https://github.com/LucWag92/Booking_Frontend  
The frontend is connected to the backend via a GraphQL API. It also uses the JWT libary to hash the authorization interactions at sign up and log in.  
The backend is also connected to a MongoDB databank. The DB is hosted in a cloud and the backend has access via a limited DB user who can read and write with  
minimized rights.

## Start Project

1. npm install
2. npm start

If you want to start the backend on your local machine and connect to your own MongoDB you need to add a **nodemon.json** file in the main folder.

```
{
  "env": {
    "MONGO_USER": "XXX",
    "MONGO_PASSWORD": "XXX",
    "MONGO_DB": "XXX"
  }
}
```

If you get an error connecting to your MongoDB make sure you are not behind a firewall or proxy.

## Start Debug Modus

1.  Backend:  
    Use in VSCode.

- Create a new "JavaScrict Debug Terminal"
- Make sure you are in the "backend" folder.
- Run "npm start" inside of the new Terminal. The Debugger will be attached by itself.
- You can set breakpoints in VSCode directly.
