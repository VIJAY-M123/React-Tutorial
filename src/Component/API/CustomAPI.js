import React, { useState } from 'react';

function PersonDetails() {
  const [person, setPerson] = useState(null);

  function handleNameClick(name) {
    fetch(`https://api.example.com/persons/${name}`)
      .then(response => response.json())
      .then(data => setPerson(data))
      .catch(error => console.error(error));
  }

  if (!person) {
    return (
      <div>
        <h2>Select a person:</h2>
        <ul>
          <li onClick={() => handleNameClick('John')}>John</li>
          <li onClick={() => handleNameClick('Mary')}>Mary</li>
          <li onClick={() => handleNameClick('Bob')}>Bob</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{person.name} Details</h2>
        <p>Age: {person.age}</p>
        <p>Occupation: {person.occupation}</p>
        {/* Display other details here */}
      </div>
    );
  }
}

export default PersonDetails;