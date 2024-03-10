import './App.css';

function App() {
  const blogObj = {
    title: 'React Application',
    description:'This blog speaks all about creating react application from scrap'
  }
  const styles = {
    margin: '16px',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 2px 5px #ccc'
  }
  return (
    <div className="App">
      <div style={styles}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>  
      <div style={styles}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div style={styles}>
      <h3>{blogObj.title}</h3>
      <p>{blogObj.description}</p>
      </div>
      
     
    </div>
  );
}

export default App;
