const RedNotification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="RedNotification">{message}</div>;
};

export default RedNotification;
