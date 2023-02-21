import mongoose from "mongoose";

function connectDB(uri) {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

export default connectDB;
