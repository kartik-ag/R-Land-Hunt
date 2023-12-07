const db = require('../data/database');


class dataSet{
    constructor(clue, location, hint){
        this.clue = clue;
        this.location = location;
        this.hint = hint;
    }

}


class Hunt {
    constructor(huntname,data) {
        this.huntname = huntname;
        this.data  = data;
    }

    
    async Save(){
        await db.getDb().collection('hunts').insertOne({
            huntname: this.huntname,
            data: this.data
        });
    }

        
    
}


module.exports = {
    Hunt: Hunt,
    dataSet: dataSet
};