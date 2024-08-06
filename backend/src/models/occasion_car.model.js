import { model, Schema } from "mongoose";

export const occasioncarSchema = new Schema(
    {
        car_name: { type: String, required: true },
        year: { type: Number, required: true },
        price: { type: Number, required: true },
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

export const OccasionCarModel = model("occasioncar", occasioncarSchema)
