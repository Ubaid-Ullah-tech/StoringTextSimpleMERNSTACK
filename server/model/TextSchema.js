import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({

    content: {
        type: String,
        require:true
    },
});

const Text = mongoose.model('Text' ,  TextSchema);

export default Text;