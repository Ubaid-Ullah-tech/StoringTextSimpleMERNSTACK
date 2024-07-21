import mongoose from 'mongoose';

const TextDb = async() =>{
    try {
          await mongoose.connect('mongodb+srv://ubaidullahuoh:ubaidullahuoh123@cluster0.byuajro.mongodb.net/',{
            // usenewUrlParser : 'true',
            // useUnifiedTopology:'true'
          })
          console.log('you are connected')
    } catch (error) {
        console.log('you are not connected')
    }
};

export default  TextDb;
