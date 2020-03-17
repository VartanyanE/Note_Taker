var path = require("path");



module.exports = function (app) {




    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    })

    // app.get('/tables', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/tables.html'))
    // })


    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
