import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from './firebase-config.js';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc,
  doc, 
 } from 'firebase/firestore';

function App() {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const res = await getDocs(usersCollectionRef);
      setUsers(res.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getUsers();
  }, [usersCollectionRef])

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
    });
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id);
    const newFields = { age: Number(age + 1)};
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async id => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
  };
  
  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Name.."
        onChange={(e) => setNewName(e.target.value)}
      />
      <input 
        type="number" 
        placeholder="Age.."
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button 
        onClick={() => createUser()}>
          Create User
      </button>
      {users.map((user) => (
        <div key={user.id}>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <button 
            onClick={() => updateUser(user.id, user.age)}>
            Increase Age
          </button>
          <br />
          <button 
            onClick={() => deleteUser(user.id)}>
              Delete User
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
