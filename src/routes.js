module.exports = function(app){


    // First page
    app.get('/', function(req, res){
        res.json({ page: "/" });
    });

    // Login Page
    app.get('/login', function(req, res) {
        res.json({ page: "/login" });
    });

}