import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// to create a newbookmark 
export default class NewBookmark extends Component {
      
          state = {
              title : '',
              url : ''
          }
      

      handleChange = (e) => {
          this.setState({
              [e.target.name] : e.target.value
          })
    
      }

      handleSubmit = (e) => {
          console.log('handle submit');
          e.preventDefault();
          
             if( this.state.title.trim() && this.state.url.trim())
             {  
                alert ('Bookmark Added successfully   ');
                 this.props.passBookMark(this.state); //passing the state date to the container 'AddBookmark'
             }          
            

          }
      


    render() {      
        return (
            <>
            {
             /*
             custom css : formcss , menu , footer ( in App.css )
             other css are from bootstrap
             */
            }    
            <div>
        
                <h3 className = "formcss"> <i>Enter the bookmark details</i></h3>
                <form  className = "formcss" onSubmit = {this.handleSubmit}>
                    <div >
                        <label className = "control-label col-sm-2"> TITLE </label>
                        <input 
                         type = "text"
                   name = "title"
                   className = "form-control"
                   onChange = {this.handleChange}>
                   </input>
                    </div>
                
                   
                   <div >
                <label className = "control-label col-sm-2"> URL </label>
            
                   <input type = "text"
                   name = "url"
                   className = "form-control"
                   onChange = {this.handleChange}>
                    
                   </input>
                   </div>
                   
                       <br/>
                 <button className = "btn btn-primary" type = "submit" >AddBookmark</button>
                    <br/>
                   </form>
                  
            </div>
            </ >
        )
    }
}

