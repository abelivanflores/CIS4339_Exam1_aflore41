//const uuid = require('uuid');
const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({

    name: {
      type: String, 
      required: true, 
    },
    type: {
        type: String,
        required: true,
        enum: ['type1','type2','type3'] //this allows us to ensure one of the three types of events is chosen 
    },
    date:{
        type: Date,  
        required: true,
    },


  });

const Event = mongoose.model("event", EventSchema);

module.exports = Event;

