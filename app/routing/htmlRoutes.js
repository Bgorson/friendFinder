// Routes
// ===========================================================

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "survey.html"));
//   });
var routes = [{
    routeName: 'home',
    info: {
        webPath: "/",
        dirPath: "home.html"
    }
}, {
    routeName: 'survey',
    info: {
        webPath: "/survey",
        dirPath: "survey.html"
    }
}]


module.exports = routes