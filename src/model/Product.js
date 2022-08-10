import mongoose from 'mongoose';

function validator (val) {
  return val === 'something';
}
const custom = [validator, 'Uh oh, {PATH} does not equal "something".']


// validate: custom
const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true},
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", ProductSchema);