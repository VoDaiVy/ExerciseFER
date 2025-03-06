function SortByOccupationAndAge() {
    const people = [
      { name: "anh Bao", age: 18, occupation: "Software Developer" },
        { name: "anh Vy", age: 19, occupation: "Designer" },
        { name: "chi Thu", age: 20, occupation: "Student" },
    ];
  
   
    const sortedPeople = [...people].sort((a, b) => {
      if (a.occupation < b.occupation) return -1;
      if (a.occupation > b.occupation) return 1;
      return a.age - b.age; 
    });
  
    return (
      <div>
        <h2>Sorted People by Occupation and Age</h2>
        <ul>
          {sortedPeople.map((person, index) => (
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
  
  export default SortByOccupationAndAge;
  