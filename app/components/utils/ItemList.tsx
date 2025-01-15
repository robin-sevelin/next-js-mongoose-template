import { ItemInterface } from '@/app/db/models/item';

import React from 'react';
import ItemView from './ItemView';

const ItemList = async () => {
  const response = await fetch('http://localhost:3000/api');
  const data = await response.json();
  const itemList: ItemInterface[] = data.items;

  return (
    <div>
      <h3>My stuff from API</h3>
      {itemList.map((item, index) => (
        <ItemView key={index} name={item.name} />
      ))}
    </div>
  );
};

export default ItemList;
