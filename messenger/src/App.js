import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    //run code here
    //if its black inside [], this code runs ONCE when the app component loads
    setUsername(prompt('Please enter your name'))
  }, [] ) //condition

  const sendMessage = (event ) => {
    // all the lofic to send a message goes here
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}])
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger App</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
          <Message username={username} message={message} />
        ))
      }    
    </div>
  );
}

export default App;
