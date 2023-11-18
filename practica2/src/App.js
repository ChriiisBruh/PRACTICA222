import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { FaUser } from 'react-icons/fa';

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
    <div class=".container">
      {profile &&(
        <div>
          <div className='App'>
            <div class="alert alert-success" role="alert">
              <FaUser size="7em" />
              <h1>{profile.name} {profile.lastName}</h1>
              <p>{profile.email} - {profile.city}, {profile.country}</p>
            </div>
          </div>

          <div class="alert alert-secondary" role="alert">
            <div className='App'>
              <h2>Información personal</h2>
              <p>  {profile.summary}</p>
            </div>


            <div className="row justify-content-center align-items-center">
              <div className="col-md-4">
                <h2>Frameworks:</h2>
                <ul>
                  {profile.frameworks && profile.frameworks.map((framework) => (
                    <li key={framework.name}>
                      {framework.name} - {framework.level}, {framework.year}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-4">
                <h2>Hobbies:</h2>
                <ul>
                  {profile.hobbies && profile.hobbies.map((hobby) => (
                    <li key={hobby.name}>
                      {hobby.name} - {hobby.description}
                    </li>
                  ))}
                </ul>
              </div>

            </div>






          </div>
        </div>
      )}
    </div>

  );

}

export default App;
