import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = (props) => <div>{props.value}</div>;

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("new value is", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset to zero" />
      <Button handleClick={() => setToValue(value + 1)} text="+1" />
    </div>
  );
};

export default App;
