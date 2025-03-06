

function PeopleList() {

    const people = [
      { id: 1, name: 'anh Bao', age: 18 },
      { id: 2, name: 'anh Vy', age: 19 },
      { id: 3, name: 'anh Thu', age: 20 },
    ];
  
    return (
      <div>
        <h1>Danh sách người</h1>
        <ul>
          {people.map((person) => (
            <li key={person.id}>
              {person.name} - {person.age} age
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PeopleList;