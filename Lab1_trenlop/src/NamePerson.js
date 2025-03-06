function NamePerson() {
    const names = ["Bao", "Vy", "Thu"];
    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={index}> {name}</li>
          ))}
        </ul>
      </div>
    );
  }
  export default NamePerson;
  