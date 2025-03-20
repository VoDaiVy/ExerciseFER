import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar, Badge } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 2,
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Carbon dioxide",
    },
    { 
      id: 3,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Pb", "Fe"],
      answer: "Au",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: "",
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      if (state.currentQuestion >= state.questions.length - 1) {
        return { ...state, showScore: true };
      }
      const isCorrect = state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: isCorrect
          ? <Badge bg="success"><FaCheckCircle /> Correct! 🎉</Badge>
          : <Badge bg="danger"><FaTimesCircle /> Incorrect! The correct answer is {state.questions[state.currentQuestion].answer}.</Badge>,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highScore: localStorage.getItem("highScore") || 0,
      };

    case "SET_HIGH_SCORE":
      return { ...state, highScore: action.payload };

    default:
      return state;
  }
}

function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, {
    ...initialState,
    highScore: localStorage.getItem("highScore") || 0,
  });
  const { questions, currentQuestion, selectedOption, score, showScore, feedback, highScore } = state;
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (showScore) return; //Dừng time khi kết thúc

    if (timeLeft === 0) {
      dispatch({ type: "NEXT_QUESTION" });
      setTimeLeft(10);
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showScore]); // Tránh lỗi khi quiz kết thúc

  useEffect(() => {
    if (showScore && score > highScore) {
      localStorage.setItem("highScore", score);
      dispatch({ type: "SET_HIGH_SCORE", payload: score });
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };
const handleNextQuestion = () => {
  dispatch({ type: "NEXT_QUESTION" });
  setTimeLeft(10);
};

const handleRestartQuiz = () => {
  dispatch({ type: "RESTART_QUIZ" });
  setTimeLeft(10);
};

return (
  <Container className="mt-4">
    <Card className="p-4 shadow-lg rounded">
      {showScore ? (
        <div className="text-center">
          <h2 className="mb-3">Your Score: <Badge bg="primary">{score} / {questions.length}</Badge></h2>
          <h4 className="text-muted">High Score: <Badge bg="warning">{highScore}</Badge></h4>
          <Button variant="primary" size="lg" onClick={handleRestartQuiz}>Restart Quiz</Button>
        </div>
      ) : (
        <div>
          <h4 className="text-center">Question {currentQuestion + 1} / {questions.length}:</h4>
          <h5 className="text-center text-primary">{questions[currentQuestion].question}</h5>

          {/* Progress Bar with dynamic color */}
          <ProgressBar
            now={(timeLeft / 10) * 100}
            variant={timeLeft > 5 ? "success" : timeLeft > 2 ? "warning" : "danger"}
            className="my-3"
          />

          <div className="d-grid gap-2 mt-3">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === option ? "success" : "outline-primary"}
                className="p-2 text-start"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          <div className={`mt-3 text-center ${timeLeft < 5 ? "text-danger fw-bold" : "text-dark"}`}>
            ⏳ Time Left: {timeLeft}s
          </div>

          <div className="mt-3 text-center">{feedback}</div>

          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              className="mt-4 px-5"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        </div>
      )}
    </Card>
  </Container>
);
}

export default Quiz;