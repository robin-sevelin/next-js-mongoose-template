import { ItemInterface } from '@/app/db/models/item';
import React from 'react';

const ItemView = ({ name }: ItemInterface) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default ItemView;
