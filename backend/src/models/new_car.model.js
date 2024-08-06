import { model, Schema } from "mongoose";

export const newcarSchema = new Schema(
    {
        car_name: { type: String, required: true },
        year: { type: Int32Array, required: true },
        price: { type: Int32Array, required: true },
        imageUrl: { type: String, required: true },
        tags: { type: [String], required: true },
        brand: { type: String, required: true }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        }
    }
)

export const NewCarModel = model("newcar", newcarSchema)
