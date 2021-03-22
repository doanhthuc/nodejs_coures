const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Ket noi co so du lieu thanh cong!');
    } catch (error) {
        console.log('ket noi csdl that bai');
    }
}

module.exports = { connect };
