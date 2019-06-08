import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
constructor(props){
  super(props);
  this.state ={
    selectedFile : null
  }
}


onChangeHandler=event=>{
  this.setState({
    selectedFile: event.target.files[0],
    loaded: 0,
  })
    

}
onClickHandler = () => {
  const data = new FormData()
  data.append('file', this.state.selectedFile)
  axios.post("http://localhost:8000/upload", data, { 
    
 })

.then(res => { 
   console.log(res.statusText)
})
}



render(){
  return (
    <div class = "container">
    <div class="form-group">
      <div class ="row">
          <div class ="col-md-6">
              <h1 class ="display-4">Upload file</h1>
          </div>
      </div>
    </div>
    <div class="form-group">
      <div class ="row">
        <div class ="col-md-3">
            <span>Choose file</span>
        </div>
        <div class ="col-md-3">
            <input type ="file" name="file" onChange={this.onChangeHandler}></input>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class ="row">
        <div class ="col-md-6">
          <button type="button" class="btn btn-outline-success btn-block" onClick={this.onClickHandler}>Upload</button>
        </div>
      </div>
    </div>
    
    </div>
  );

        
}
  
}

export default App;
