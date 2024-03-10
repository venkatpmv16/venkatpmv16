import './App.css';

function App() {
  const blogArr = [
    {
      id:1,
      title: 'React Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    {
      id:2,
      title: 'React Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    { 
      id:3,
      title: 'React Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    {
      id:4,
      title: 'React Application',
      description:'This blog speaks all about creating react application from scrap'
    }
  ]

  const blogCards = blogArr.map((item,pos)=>{
    console.log(item)
    return (
      <div className='BlogCard' key={item.id}>
      <p>{item.id}</p>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      </div>   
    )
  })
  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
