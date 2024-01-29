// Desc: This file contains the functions to flash data to the session and get the session data
function flashDataToSession(req, data, action){
    req.session.flashedData = data;
    req.session.save(action)
}

//function to get the session data
function getSessioData(req){
    const sessionData = req.session.flashedData;

    req.session.flashedData = null;
    return sessionData;

}

module.exports = {
    flashDataToSession: flashDataToSession,
    getSessioData: getSessioData
}