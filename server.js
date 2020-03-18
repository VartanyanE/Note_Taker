
const express = require('express');


const app = express();

let PORT = process.env.PORT || 7777;

// Sets up the middleware for the  Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiNotes')(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})