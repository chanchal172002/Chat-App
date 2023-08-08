const mongoose = require('mongoose');

const url = `mongodb+srv://chanchal172002:Chan1703@cluster0.8s8npgn.mongodb.net/chat?retryWrites=true&w=majority`;

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))