// Desc: This file contains the functions to create and destroy the user session
function createUserSession(req, user,action){
    req.session.uid = user._id;
    req.session.save(action);
}

//function to destroy the user session
function destroyUserAuthSession(req){
    req.session.uid = null;
}

module.exports = {
    createUserSession : createUserSession,
    destroyUserAuthSession : destroyUserAuthSession
}