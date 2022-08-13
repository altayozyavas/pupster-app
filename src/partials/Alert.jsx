const Alert = ({ state }) => {
  return (
    <div
      className={`alert alert-success fade in`}
      style={{ width: "80%", margin: "18px auto 0px", opacity: state ? 1 : 0 }}
    >
      Yeah! One more friend!
    </div>
  );
};

export default Alert;
