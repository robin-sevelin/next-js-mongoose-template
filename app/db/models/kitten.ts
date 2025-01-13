import mongoose, { Model, Schema } from 'mongoose';

export interface IKitten {
  name: string;
}

const KittenSchema: Schema<IKitten> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Kitten: Model<IKitten> =
  mongoose.models.Kitten || mongoose.model<IKitten>('Kitten', KittenSchema);

export default Kitten;
