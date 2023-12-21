const Filter = ({ value, onchange }) => {
  return (
    <div>
      Filter shown with <input value={value} onChange={onchange} />
    </div>
  );
};

export default Filter;
