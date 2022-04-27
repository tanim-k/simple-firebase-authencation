// remove logo 
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
  signInWithPopup(auth, provider)
  .then(result => {
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch(error => {
    console.log('error', error)
  })  
  }

  const handleGoogleSignOut = () =>{
    signOut(auth)
    .then( () => {
      setUser({});
    })
    .catch(error=> {
      setUser({});
    })
  }
  return (
    <div className="App">
      {/* {condition ? true: false} */}
      {
        user.email ? <button onClick={handleGoogleSignOut}>google sign out</button> :       
        <button onClick={handleGoogleSignIn}>google sign in</button>

      }
      
      <h2>name:{user.displayName}</h2>
      <p>hey i know your email also: {user.email}</p>
      <h4>see here is your photo:<img src={user.photoURL} alt="" />
</h4>
      
    </div>
  );
}

export default App;
