import React, { useState } from "react";

import questions from "./Questions";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import classes from "./style.module.css";

const Quiz = (props) => {
  const scoreCount = useSelector((state) => state.scoreCount);

  const dispatch = useDispatch();
  // Properties

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);

      dispatch({ type: "INCREMENT" });
    }

    if (currentQuestion + 1 < questions.length) {
      console.log(currentQuestion + 1 < questions.length);
      console.log(questions.length);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/Results");
    }
  };

  /* Resets the game back to default */

  return (
    <div className={classes.App}>
      {/* 1. Header  */}
      <h1>Quiz on react</h1>

      <div className={classes["question-card"]}>
        {/* Current Question  */}
        <p>
          Question: {currentQuestion + 1} out of {questions.length}
        </p>
        <h3 className={classes["question-text"]}>
          {questions[currentQuestion].text}
        </h3>

        {/* List of possible answers  */}
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.isCorrect)}
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
