import mongoose from "mongoose";

export const connectDB = () => {
  // mongoose
  //   .connect(process.env.MONGO_URI,
  //   //    {
  //   //   dbName: "backendapi",
  //   // }
  //   )
  //   .then((c) => console.log(`Database Connected with ${c.connection.host}`))
  //   .catch((e) => console.log(e));
  mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database connected successfully`);
  })

};


// const connectDatabase  =()=>{

//   mongoose.connect(process.env.DB_URI).then(()=>{
//       console.log('Database connected successfully');
//   })
// }

// module.exports = connectDatabase;
