const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            {item.name} {item.phone}
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
