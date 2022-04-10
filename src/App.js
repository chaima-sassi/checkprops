
import './App.css';
import Compo from './profile/Compo';
import cat from './cat.jpg'

function App() {
  var fullName="chaima sassi";
  var bio="cat lover";
  var profession="student";

  const handleName=(name)=>{
    alert(name);
  }
  
  return (
    <div className="App">
      <Compo fullName={fullName} bio={bio} profession={profession} handleName={handleName} > {cat} </Compo> 
       
      
     
    </div>
  );
}

export default App;
