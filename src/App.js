import './App.css';

function App() {
  const blogObj = {
    title: 'React Application',
    description:'This blog speaks all about creating react application from scrap'
  }
  return (
    <div className="App">
      <div>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>  
      <hr></hr>
      <div>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      
     
    </div>
  );
}

export default App;
