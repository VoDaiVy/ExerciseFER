

function PeopleList() {

  const people = [
    { id: 1, name: 'anh A', age: 18 },
    { id: 2, name: 'anh B', age: 19 },
    { id: 3, name: 'anh C', age: 20 },
  ];

  return (
    <div>
      <h1>Danh sách người</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} - {person.age} tuổi
          </li>
        ))}
      </ul>

      <h1>Thong tin nguoi dau tien la:
        id: {people[0].id} , name: {people[0].name} , age: {people[0].age}
      </h1>
      
      <h1>Nguoi co tuoi cao nhat:
       
      </h1>
    </div>
  );
};

export default PeopleList;