module.exports = function(app, path){

    // First page
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    // Login Page
    app.get('/login', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/login.html'));
    });

}