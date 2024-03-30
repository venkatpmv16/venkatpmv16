import './App.css';
import BlogCard from './BlogCard';

function App() {
  const blogArr = [
    {
      id:1,
      title: 'React Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    {
      id:2,
      title: 'Sample Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    { 
      id:3,
      title: 'Mock Application',
      description:'This blog speaks all about creating react application from scrap'
    },
    {
      id:4,
      title: 'React POC',
      description:'This blog speaks all about creating react application from scrap'
    }
  ]

  const blogCards = blogArr.map((item,pos)=>{
    console.log(item)
    return (
      <BlogCard  key={pos} id=  {item.id}title = {item.title} description ={item.description}/>   
    )
  })
  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
