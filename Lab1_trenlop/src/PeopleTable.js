import React from 'react';

const PeopleTable = () => {
  const people = [
    { name: "anh Bao", age: 18, occupation: "Software Developer" },
      { name: "anh Vy", age: 19, occupation: "Designer" },
      { name: "chi Thu", age: 20, occupation: "Student" },
      
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: 'blue' }}>Danh sách người</h2>
      <table style={{ width: '80%', margin: '0 auto', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{person.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{person.age}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;
