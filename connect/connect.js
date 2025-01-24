import mongoose from "mongoose";

const connection_url = `mongodb+srv://showU:1234@showu.ceinf.mongodb.net/`;

const connect = () => {
  if(process.env.NODE_ENV != "production"){
    mongoose.set("debug", true)
  }

  mongoose
    .connect(connection_url, {
      dbName : "showu" //프로젝트 이름
    })
    .then(( ) => {
      console.log("Connection to MongoDB") //연결 성공
    })
    .catch((error) => {
      console.error("Connected fail to MongoDB") //연결 실패
      console.error(error)
    })
}

export default connect;