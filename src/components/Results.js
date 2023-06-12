import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import questions from "./Questions";
import rootReducer from "../reducers/rootReducer";
import classes from "./style.module.css";

const Results = ({ props }) => {
  const scoreCount = useSelector((state) => state.scoreCount);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/Quiz");
    dispatch({ type: "ERROR" });
  };

  return (
    <div className={classes["final-results"]}>
      <h1>Final Results</h1>
      <h2>
        {scoreCount} out of 5 is correct - (
        {(scoreCount / questions.length) * 100}
        %)
      </h2>

      <button className={classes.button} onClick={handleRetry}>
        Retry
      </button>
    </div>
  );
};

export default Results;
