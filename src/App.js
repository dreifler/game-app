import React, { useState, useEffect } from 'react';
import './App.css';
import { API, Auth} from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetchFighters();
    Auth.currentSession()
        .then(data => {
            Auth.currentSession().then((user) => {
                setUser(user.accessToken.payload.username);
            });
        })
        .catch(err => console.log(err));
  }, []);

  async function fetchFighters() {
    const apiData = await API.graphql({ query: listFighters });
    setFighters(apiData.data.listFighters.items);
  }

  async function createFighter() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ query: createFighterMutation, variables: { input: formData } });
    setNotes([ ...fighters, formData ]);
    setFormData(initialFormState);
  }

  async function deleteFighter({ id }) {
    const newFightersArray = notes.filter(fighter => fighter.id !== id);
    setNotes(newFightersArray);
    await API.graphql({ query: deleteFighterMutation, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>{user}&apos;s Gym</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="Fighter Name"
        value={formData.name}
      />
      <button onClick={createFighter}>Create Fighter</button>

      <div style={{marginBottom: 30}}>
        {
          notes.map(note => (
            <div key={fighter.id || fighter.name}>
              <h2>{fighter.name}</h2>
              <button onClick={() => deleteFighter(fighter)}>Delete </button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
