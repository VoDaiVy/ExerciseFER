import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { quizData } from '../data/QuizData'; 
import { QuizContext } from '../context/QuizContext';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { userAnswers, setUserAnswers } = useContext(QuizContext);

  useEffect(() => {
    setQuestions(quizData);
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setUserAnswers({ ...userAnswers, [questions[currentQuestionIndex].question]: index });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <Container className="quiz-container">
      {!quizCompleted ? (
        <div className="quiz-content">
          <h2 className="question">Question {currentQuestionIndex + 1}</h2>
          <p>{questions[currentQuestionIndex]?.question}</p>
          <ListGroup>
            {questions[currentQuestionIndex]?.answers.map((option, index) => (
              <ListGroup.Item
                key={index}
                className={`option ${selectedOption === index ? "selected" : ""}`}
                onClick={() => handleOptionClick(index)}
              >
                {option}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button className="next-button" onClick={handleNextQuestion}>Next</Button>
        </div>
      ) : (
        <div className="quiz-completed">
          <h1>Quiz Completed!</h1>
          <p>Your score: {Object.values(userAnswers).filter((ans, i) => ans === quizData[i].correctAnswer).length}</p>
        </div>
      )}
    </Container>
  );
};

export default Quiz;
