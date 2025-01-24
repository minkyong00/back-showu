import { Schema, model } from "mongoose";

const upgradeSchema = new Schema({
  exportName : { type : Schema.Types.ObjectId, ref : 'User' },
  intro : { type : String, required : true },
  area : { type : String, required : true },
  field : { type : String, required : true },
  total : { type : String, required : true },
  career : { type : String, required : true },
  file : { type : String }
})

export default model("Upgrade", upgradeSchema, "upgrade")