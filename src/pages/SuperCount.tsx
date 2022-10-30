import { useState } from "react";
import { Link } from "react-router-dom";
import "./SuperCount.scss";

function SuperCount() {
  const [count, setCount] = useState(0);

  return (
    <div className="SuperCount">
      <h1>Super Count</h1>
      <h2>Bounus! 5x 🎉</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
      </div>
      <div className="margin-30" />
      <Link to="/">👉 Normal Count</Link>
    </div>
  );
}

export default SuperCount;
