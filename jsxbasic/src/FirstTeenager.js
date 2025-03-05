function FirstTeenager() {
    const people = [
      { name: "anh A", age: 18, occupation: "Software Developer" },
      { name: "anh B", age: 19, occupation: "Designer" },
      { name: "anh C", age: 20, occupation: "Student" },
    ];
  
  
    const firstTeenager = people.find((person) => person.age >= 13 && person.age <= 19);
  
    return (
      <div>
        <h2>First Teenager</h2>
        {firstTeenager ? (
          <div>
            <p><strong>Name:</strong> {firstTeenager.name}</p>
            <p><strong>Age:</strong> {firstTeenager.age}</p>
            <p><strong>Occupation:</strong> {firstTeenager.occupation}</p>
          </div>
        ) : (
          <p>No teenager found in the list.</p>
        )}
      </div>
    );
  }
  
  export default FirstTeenager;
