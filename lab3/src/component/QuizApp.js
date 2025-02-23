import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";

const questions = [
    {
      question: "What is the capital of France?",
      options: [
        "Paris", 
        "London", 
        "Berlin", 
        "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: [
        "Earth", 
        "Mars", 
        "Jupiter", 
        "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      question: "Who is a cute and dedicated teacher who teaches Front - End web Development with React?",
      options: [
        "Teacher Nguyen Vy Rin",
        "Teacher Le Thi Bich Tra",
        "Teacher Nguyen Thi Hanh",
        "Teacher Nguyen Tran Quyen",
      ],
      correctAnswer: "Teacher Le Thi Bich Tra",
    },
  ];
  
  const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);
  
    const handleAnswerClick = (selectedAnswer) => {
      if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setIsQuizFinished(true);
      }
    };
  
    return (
      <div>
        <h1>Quiz App</h1>
        {isQuizFinished ? (
          <Score score={score} totalQuestions={questions.length} />
        ) : (
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            handleAnswerClick={handleAnswerClick}
          />
        )}
      </div>
    );
  };
  
  export default QuizApp;