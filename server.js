// Create a basic express server


// import files
const express = require('express');
const path = require("path");

const app = express();

let PORT = process.env.PORT || 7777;

// Sets up the middleware for the  Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require('./routes/mockApiRoute')(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})