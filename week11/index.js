const url = 'mongodb+srv://adelataniaaa:kelompok4@cluster0.w0g5p.mongodb.net/test?retryWrites=true&w=majority'
//const url ='mongodb://localhost:27017/<dbname>

/*var client = require('mongodb').MongoClient;

client.connect(url, (err, mongodb) => {
    if(err) throw err;

    const db = mongodb.db('test');
    db.collection('demo').find().toArray((error, data) => {
        if (error) throw error;
        console.log(data);
    })

    if (err) {
        console.log(err);
    } else {
        console.log("Connected!");
    }

    db.close();
});*/

const mongoose = require('mongoose');
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('open', () =>{
    console.log('Connected!');
});

//buat schema dari User
const userSchema = mongoose.Schema({
    username: String,
    email: String,
    fullname: String
});

const User = mongoose.model('User', userSchema);

//ganti data di schema
const findUser = User.updateOne({
    username : 'test'
}, {
    email: 'new.tester@gmail.com'
});

findUser.exec((err, user) => {
    if(user) {
        console.log(user)
    }
});

//select
/*const findUser = User.findOne({
    username : 'test'
});

findUser.exec((err,user) => {
    if(user) {
        console.log(user)
    }
});*/

/*//buat mode User
const User = mongoose.model('User', userSchema);

//insert User baru
const testUser = new User({
    username: 'john.doe',
    email: 'john.doe@gmai.com',
    fullname: 'John Doe'
});

testUser.save();*/
/*User.create({
    username: 'test',
    email: 'test@gmail.com',
    fullname: 'I am testing'
}, (error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument)
});*/