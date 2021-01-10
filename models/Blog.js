const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:255,
    },
    body: {
        type:String,
        required:true,
    },
    status: {
        type: String,
        default:"عمومی",
        enum:["عمومی","خصوصی"],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Blog",blogSchema);