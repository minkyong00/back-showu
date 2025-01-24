import { model, Schema } from "mongoose"

const optionSchema = new Schema({
  optionId: { type: Schema.Types.ObjectId, ref: 'Md'},
  optionName: { type: String, required: true }, // 옵션명
  additionalPrice: { type: Number, required: true }, // 옵션별 추가 금액
});

export default model("Option", optionSchema, "option");