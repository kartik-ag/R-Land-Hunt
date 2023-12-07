const db = require('../data/database');
const bcrypt = require('bcryptjs');
class User{
    constructor(enrollementNo, password){
        this.enrollementNo = enrollementNo;
        this.password = password;
    }

    async signup(){
        const hashedPassword = bcrypt.hash(this.password, 12);
        
        await db.getDb().collection('users').insertOne({
            enrollementNo: this.enrollementNo,
            password: hashedPassword
        });
    }
}


module.exports = User;