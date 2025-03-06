function FindOldestYoungest() {
    const people = [
      { id: 1, name: "anh Bao", age: 18 },
      { id: 2, name: "anh Vy", age: 19 },
      { id: 3, name: "anh Thu", age: 20 },
    ];
  
    const oldest = people.reduce((prev, curr) => (curr.age > prev.age ? curr : prev));
    const youngest = people.reduce((prev, curr) => (curr.age < prev.age ? curr : prev));
  
    return (
      <div>
        <h2>Oldest and Youngest Person</h2>
        <p>
          <strong>Oldest:</strong> {oldest.name} ({oldest.age} years old)
        </p>
        <p>
          <strong>Youngest:</strong> {youngest.name} ({youngest.age} years old)
        </p>
      </div>
    );
  }
  
  export default FindOldestYoungest;
  