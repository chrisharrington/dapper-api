module.exports = function(app) {
    app.get("/twitter", function (req, res, next) {
        res.status(200).send("blah!");    
    });  
};