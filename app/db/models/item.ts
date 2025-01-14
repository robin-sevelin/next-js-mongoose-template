import mongoose, { Model, Schema } from 'mongoose';

export interface ItemInterface {
  name: string;
}

const ItemSchema: Schema<ItemInterface> = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const Item: Model<ItemInterface> =
  mongoose.models.Item || mongoose.model<ItemInterface>('Item', ItemSchema);

export default Item;
