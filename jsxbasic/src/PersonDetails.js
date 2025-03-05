function PersonDetails() {
    const people = [
      { name: "Võ Đại Vỹ", age: 20, occupation: "Software Developer" },
     
    ];
  
    return (
      <div>
        <h2>People Details</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>
              <p><strong>Name:</strong> {person.name}</p>
              <p><strong>Age:</strong> {person.age}</p>
              <p><strong>Occupation:</strong> {person.occupation}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PersonDetails;
