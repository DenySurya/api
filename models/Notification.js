import mongoose from "mongoose";
import {Timestamp} from "bson";

// Notification{
//     reqID:'res-001',
//     title:"Pemesanan Baru Oleh Deny",
//     description: [
//         {
//             id:"mi-001",
//             productName:'ice tea',
//             price:5000
//         },
//         {
//             id:"mi-002",
//             productName:'lalapan',
//             price:10000
//         },
//     ],
//     userID:12;
//     file:'path...'
// }
const Notification = mongoose.Schema({
    reqID:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        // require:true
    },
    userID:{
        type:Number,
        require:true
    },
    file:{
        type:String,
        
    }

},
{
    timestaps: true,
});

export default mongoose.model("Notifications",Notification);