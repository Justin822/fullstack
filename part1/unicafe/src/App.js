import { useState } from "react";

const FeedbackButton = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.total) {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.total} />
            <StatisticLine text="average" value={props.calculateAverage()} />
            <StatisticLine
              text="positive"
              value={props.calculatePositive() + "%"}
            />
          </tbody>
        </table>
      </div>
    );
  } else
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good;
    setGood(updatedGood + 1);
    setTotal(total + 1);
    calculateAverage();
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral;
    setNeutral(updatedNeutral + 1);
    setTotal(total + 1);
    calculateAverage();
  };

  const handleBadClick = () => {
    const updatedBad = bad;
    setBad(updatedBad + 1);
    setTotal(total + 1);
    calculateAverage();
  };

  const calculateAverage = () => {
    const average = (good - bad) / total;
    return Math.round(average * 100) / 100;
  };

  const calculatePositive = () => {
    const positive = (good / total) * 100;
    return Math.round(positive * 100) / 100;
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <FeedbackButton handleClick={handleGoodClick} text="good" />
        <FeedbackButton handleClick={handleNeutralClick} text="neutral" />
        <FeedbackButton handleClick={handleBadClick} text="bad" />
      </div>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        calculateAverage={calculateAverage}
        calculatePositive={calculatePositive}
      />
    </>
  );
};

export default App;
