import Profile from './profile/Profile';
import picture from './imageInSrc.png';

function App() {

  const handlerEvent = (n) => alert (`My name is ${n}`);
 
  return (

    <div className="App" style={{
      height: '100vh', display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', textAlign: 'center',
      backgroundColor: 'rgb(242, 215, 213) '
    }}>

      <Profile handleName = {handlerEvent} image = {picture}  />

    </div>
  );
   
}

export default App;
