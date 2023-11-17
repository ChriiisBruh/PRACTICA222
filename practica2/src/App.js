import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
function App() {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/profile');
        setProfile(response.data[0]);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  console.log(profile);

  return (
    <div className="App">
      {profile && Object.keys(profile).length > 0 && (
        <div>
          <h1>{profile.name} {profile.lastName}</h1>
          <p>Email: {profile.email}</p>
          <p>City: {profile.city}</p>
          <p>Country: {profile.country}</p>
          <p>Summary: {profile.summary}</p>

          <h2>Frameworks:</h2>
          <ul>
            {profile.frameworks && profile.frameworks.map((framework) => (
              <li key={framework.name}>
                {`${framework.name} - Nivel: ${framework.level}, Año: ${framework.year}`}
              </li>
            ))}
          </ul>

          <h2>Hobbies:</h2>
          <ul>
            {profile.hobbies && profile.hobbies.map((hobby) => (
              <li key={hobby.name}>
                {`${hobby.name} - ${hobby.description}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );

}

export default App;
