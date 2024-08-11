import { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  const [isTestActive, setIsTestActive] = useState(true);

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    if (!isTestActive) return;

    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch, isTestActive]);

  const resetTimer = () => {
    setIsTestActive(false);
    dispatch({ type: "restart" });
    setIsTestActive(true);
  };

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
