import { useState } from "react";
import questions from "./data/questions";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  };

  return (
    <div>
      <h1>Quiz App</h1>

      <ProgressBar current={current} total={questions.length} />

      {current < questions.length ? (
        <QuestionCard
          data={questions[current]}
          onAnswer={handleAnswer}
        />
      ) : (
        <h2>Your Score: {score}/{questions.length}</h2>
      )}
    </div>
  );
}

export default App;