import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
function App() {

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchData =  async () => {
      try {
        const response = await axios.get('http://localhost:3003/api/profile');
        setProfile(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  console.log(profile);

  return (
    <><><header>
      {profile.length > 0 && (
        <div>
          <h1>Nombre: {profile[0].name} {profile[0].lastName}</h1>
        </div>
      )}
    </header><><><div>
    </div><div>
        {profile.length > 0 && (
          <div>
            <p>Email: {profile[0].email}</p>
            <p>Origen: {profile[0].city},{profile[0].country}</p>
          </div>
        )}
        {profile.length > 0 && (
          <div>
            <h1>Informacion personal</h1>
          <p>{profile[0].summary}</p>
          </div>
        )}
        {profile.length > 0 && (
          <div>
            <h1>Frameworks</h1>
          <p>{profile[0].frameworks[0].name}, {profile[0].frameworks[0].level}</p>
          <p>{profile[0].frameworks[0].year}</p>
          <h1></h1>
          <p>{profile[0].frameworks[1].name}, {profile[0].frameworks[1].level}</p>
          <p>{profile[0].frameworks[1].year}</p>
          </div>
        )}
        {profile.length > 0 && (
          <div>
            <h1>Hobbies</h1>
          <p>{profile[0].hobbies[0].name}, {profile[0].hobbies[0].description}</p>
          <h1></h1>
          <p>{profile[0].hobbies[1].name}, {profile[0].hobbies[1].description}</p>
          </div>
        )}
      </div></><div>
          
        </div></></><div>
          
          <h1></h1>
        
      </div></>
        
    );

}

export default App;
