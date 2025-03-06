import React from 'react';

const AreAllTeenagers = () => {

  const people = [
    { id: 1, name: 'anh Vy', age: 18 },
    { id: 2, name: 'anh Bao', age: 19 },
    { id: 3, name: 'chi Thu', age: 20 },
  ];


  const areAllTeenagers = people.every(person => person.age >= 13 && person.age <= 19);

  return (
    <div>
        <h2>Are All Teenagers?</h2>
        <p>{areAllTeenagers ? "yes" : "no"}</p>
      </div>
  );
};

export default AreAllTeenagers;