import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Question = ({ question, answers, correctAnswer, userAnswer, onAnswer }) => {
  return (
    <Card className="mb-3 p-3">
      <Card.Title>{question}</Card.Title>
      {answers.map((answer, idx) => (
        <Button
          key={idx}
          variant={userAnswer === answer ? 'primary' : 'outline-primary'}
          onClick={() => onAnswer(question, answer)}
          className="m-1"
        >
          {answer}
        </Button>
      ))}
      {userAnswer && (
        <p className={userAnswer === correctAnswer ? 'text-success' : 'text-danger'}>
          {userAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
        </p>
      )}
    </Card>
  );
};

export default Question;