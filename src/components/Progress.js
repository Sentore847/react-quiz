import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p>
        Question <storng>{index + 1}</storng> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}{" "}
      </p>
    </header>
  );
}
export default Progress;
