import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import { ImLoop2 } from "react-icons/im";

const initialState = {
    questions: [
      {
        id: 1,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Perth"],
        answer: "Canberra",
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        answer: "Pacific Ocean",
      },
      {
        id: 4,
        question: "What is the result of 1 x 7 + 7 x 10?",
        options: ["27", "77", "90", "87"],
        answer: "77",
      },
      {
        id: 5,
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2",
      },
      {
        id: 6,
        question: "What is H2O commonly known as?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        answer: "Water",
      },
      {
        id: 7,
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
    ],
    currentQuestion: 0,
    selectedOption: " ",
    score: 0,
    showScore: false,
    highestScore: localStorage.getItem("highestScore") || 0,
  };
  

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };

    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const newScore = isCorrect ? state.score + 1 : state.score;

      // Cập nhật điểm cao nhất nếu có
      const updatedHighestScore =
        newScore > state.highestScore ? newScore : state.highestScore;
      localStorage.setItem("highestScore", updatedHighestScore);

      return {
        ...state,
        score: newScore,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
        highestScore: updatedHighestScore,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
        highestScore: state.highestScore, // Giữ điểm cao nhất khi reset quiz
      };

    default:
      return state;
  }
}

// Component chính
function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, highestScore } = state;

  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(10); // Reset thời gian khi đổi câu hỏi
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>Your Score: {score} / {questions.length}</h2>
            <h4>Highest Score: {highestScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>Restart Quiz  <ImLoop2/></Button>
          </div>
        ) : (
          <div>
            <h4>
              Question {currentQuestion + 1}/{questions.length}:<br />
              {questions[currentQuestion].question}
            </h4>

            {/* Hiển thị tiến trình làm bài */}
            <ProgressBar now={((currentQuestion + 1) / questions.length) * 100} className="my-3" />

            {/* Đồng hồ đếm ngược */}
            <TfiAlarmClock />
            <h5 className={timeLeft < 5 ? "text-danger" : "text-dark"}>
              Time Left: {timeLeft}s
            </h5>

            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? option === questions[currentQuestion].answer
                        ? "success"
                        : "danger"
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!selectedOption} // Ngăn chọn nhiều lần
                >
                  {option}
                </Button>
              ))}
            </div>

            {/* Phản hồi đúng/sai */}
            {selectedOption && (
              <h5 className="mt-3">
                {selectedOption === questions[currentQuestion].answer ? (
                  <span className="text-success">
                    <FaCheckCircle /> Correct! 🎉
                  </span>
                ) : (
                  <span className="text-danger">
                    <FaTimesCircle /> Incorrect! The correct answer is:{" "}
                    {questions[currentQuestion].answer}
                  </span>
                )}
              </h5>
            )}

            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : <><TfiAngleDoubleRight /> Next Question <TfiAngleDoubleRight /> </>}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;