module.exports = (req, res, next) => {
    // check header or url parameters or post parameters for token
    if(req.params.flag){
        console.log('Middleware works!');
        next();
    }
}

