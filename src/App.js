import React, {Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

class App extends Component {
  state ={
    showBlogs: true
  }
  blogArr = [
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

  
  blogCards = isArrayEmpty(this.blogArr) ? [] :   this.blogArr.map((item,pos)=>{
    console.log(item)
    return (
      <BlogCard  key={pos} id=  {item.id}title = {item.title} description ={item.description}/>   
    )
  })

  onHideBtnClick =()=>{
    //let updateState = !this.state.showBlogs;
    //alert('ButtonClicked')
    this.setState((prevState,prevProps)=>{
      return {showBlogs: !prevState.showBlogs}
    });
  }

render(){
  return (
    <div className="App">
      <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List': 'Show List' }</button>
      <br></br>
      {
        this.state.showBlogs ? this.blogCards : null
      }
      
    </div>
  );
}
}

export default App;
