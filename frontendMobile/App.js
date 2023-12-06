import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [profile, setProfile] = useState({});
  const [editedProfile, setEditedProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.3:3003/api/profile');
        setProfile(response.data[0]);
        setEditedProfile(response.data[0]);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (key, value) => {
    setEditedProfile((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleFrameworkChange = (index, key, value) => {
    setEditedProfile((prevState) => ({
      ...prevState,
      frameworks: prevState.frameworks.map((framework, i) =>
        i === index ? { ...framework, [key]: value } : framework
      ),
    }));
  };

  const handleHobbyChange = (index, key, value) => {
    setEditedProfile((prevState) => ({
      ...prevState,
      hobbies: prevState.hobbies.map((hobby, i) =>
        i === index ? { ...hobby, [key]: value } : hobby
      ),
    }));
  };

  const handleEdit = async () => {
    if (isEditing) {
      try {
        await axios.put('http://192.168.0.3:3003/api/profile', editedProfile);
        setProfile(editedProfile);
      } catch (error) {
        console.error('Error al guardar los cambios:', error);
      }

      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {profile && (
        <View>
          <View style={styles.alertSuccess}>
          <Ionicons name="person" size={70} color="black" />
            <Text style={styles.name}>{profile.name} {profile.lastName}</Text>
            <Text>{profile.email} - {profile.city}, {profile.country}</Text>
          </View>
          <View style={styles.alertSecondary}>
            {isEditing ? (
              <React.Fragment>
                <Text style={styles.heading}>Editar información personal</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Resumen"
                  value={editedProfile.summary}
                  onChangeText={(text) => handleInputChange('summary', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  value={editedProfile.name}
                  onChangeText={(text) => handleInputChange('name', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Apellido"
                  value={editedProfile.lastName}
                  onChangeText={(text) => handleInputChange('lastName', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Correo Electrónico"
                  value={editedProfile.email}
                  onChangeText={(text) => handleInputChange('email', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Ciudad"
                  value={editedProfile.city}
                  onChangeText={(text) => handleInputChange('city', text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="País"
                  value={editedProfile.country}
                  onChangeText={(text) => handleInputChange('country', text)}
                />
                <View style={styles.frameworksContainer}>
                  <Text style={styles.heading}>Frameworks:</Text>
                  {editedProfile.frameworks &&
                    editedProfile.frameworks.map((framework, index) => (
                      <React.Fragment key={index}>
                        <TextInput
                          style={styles.input}
                          placeholder={`Framework ${index + 1}`}
                          value={framework.name}
                          onChangeText={(text) =>
                            handleFrameworkChange(index, 'name', text)
                          }
                        />
                        <TextInput
                          style={styles.input}
                          placeholder={`Level ${index + 1}`}
                          value={framework.level}
                          onChangeText={(text) =>
                            handleFrameworkChange(index, 'level', text)
                          }
                        />
                        <TextInput
                          style={styles.input}
                          placeholder={`Year ${index + 1}`}
                          value={framework.year}
                          onChangeText={(text) =>
                            handleFrameworkChange(index, 'year', text)
                          }
                        />
                      </React.Fragment>
                    ))}
                </View>
                <View style={styles.hobbiesContainer}>
                  <Text style={styles.heading}>Hobbies:</Text>
                  {editedProfile.hobbies &&
                    editedProfile.hobbies.map((hobby, index) => (
                      <React.Fragment key={index}>
                        <TextInput
                          style={styles.input}
                          placeholder={`Hobby ${index + 1}`}
                          value={hobby.name}
                          onChangeText={(text) =>
                            handleHobbyChange(index, 'name', text)
                          }
                        />
                        <TextInput
                          style={styles.input}
                          placeholder={`Descripción Hobby ${index + 1}`}
                          value={hobby.description}
                          onChangeText={(text) =>
                            handleHobbyChange(index, 'description', text)
                          }
                        />
                      </React.Fragment>
                    ))}
                </View>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Text style={styles.heading}>Información personal</Text>
                <Text>{profile.summary}</Text>
                <View style={styles.row}>
                  <View style={styles.column}>
                    <Text style={styles.heading}>Frameworks:</Text>
                    <View>
                      {profile.frameworks &&
                        profile.frameworks.map((framework) => (
                          <Text key={framework.name}>
                            {framework.name} - {framework.level}, {framework.year}
                          </Text>
                        ))}
                    </View>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.heading}>Hobbies:</Text>
                    <View>
                      {profile.hobbies &&
                        profile.hobbies.map((hobby) => (
                          <Text key={hobby.name}>
                            {hobby.name} - {hobby.description}
                          </Text>
                        ))}
                    </View>
                  </View>
                </View>
              </React.Fragment>
            )}
          </View>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <Text style={styles.editButtonText}>
              {isEditing ? 'Guardar' : 'Editar'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertSuccess: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20,
    marginBottom: 10,
  },
  alertSecondary: {
    padding: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  frameworksContainer: {
    marginBottom: 10,
  },
  hobbiesContainer: {
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
