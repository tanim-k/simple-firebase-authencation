// remove logo 
import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
  signInWithPopup(auth, googleProvider)
  .then(result => {
    const user = result.user;
    setUser(user);
    console.log(user);
  })
  .catch(error => {
    console.log('error', error)
  })  
  }
  const handleGithubSignIn = () => {
  signInWithPopup(auth, githubProvider)
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
        user.uid ? <button onClick={handleGoogleSignOut}>google sign out</button> :       
        <>
          <button onClick={handleGoogleSignIn}>google sign in</button>
          <button onClick={handleGithubSignIn}>github sign in</button>
        </>

      }
      
      <h2>name:{user.displayName}</h2>
      <p>your email also: {user.email}</p>
      <h4> photo:<img src={user.photoURL} alt="" />
</h4>
      
    </div>
  );
}

export default App;
