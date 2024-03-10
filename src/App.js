import './App.css';

function App() {
  const firstName = 'Venkatesh'
  const lastName = 'PM'
  const age = 30
  const job = 'LTIM'
const getFullName = (firstName,lastName)=>{
  return `${firstName} ${lastName}`
}
  return (
    <div className="App">
      <h3>{getFullName(firstName,lastName)} </h3>
      <p>{age} </p>
      <p>{job} </p>
    </div>
  );
}

export default App;
