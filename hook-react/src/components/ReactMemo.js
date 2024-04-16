import React, { useState } from 'react';

const ListItem = React.memo(({ item, onDelete }) => {
  console.log('Рендер ListItem:', item);
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <li>
      {item.text} <button onClick={handleDelete}>Видалити</button>
    </li>
  );
});

const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
  ]);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Список елементів</h2>
      <ul>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default List;


