var fs = require("fs");
var path = require('path');

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../db/db.json"));
    })



    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
            if (err) throw err;
            let dbJSON = JSON.parse(data);
            dbJSON.push(newNote);
            var idNum = 0

            for (i = 0; i < dbJSON.length; i++) {
                dbJSON[i].id = idNum++;
            }
            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(dbJSON), function (err) {
                if (err) throw err;
                console.log("note added");
            });
        })
    });
    app.delete("/api/notes/:id", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
            if (err) throw err;

            let db = JSON.parse(data);
            var noteID = parseInt(req.params.id);
            console.log(db);
            console.log(noteID);

            var newDB = db.filter(num => num.id != noteID);

            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newDB), function (err) {
                if (err) throw err;
                console.log("note deleted");

            })
        })
    });

};
