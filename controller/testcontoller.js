module.exports.getallmovies = (req, res, next) => {
    // check header or url parameters or post parameters for token
    var movies = {
        "test":"test123",
        "test1":"test321"
    };
    return res.status(200).json({data:movies});
}

