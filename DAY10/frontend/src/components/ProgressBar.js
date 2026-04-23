const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div style={{ width: "100%", background: "#ddd" }}>
      <div
        style={{
          width: `${percentage}%`,
          background: "green",
          height: "10px",
        }}
      />
    </div>
  );
};

export default ProgressBar;