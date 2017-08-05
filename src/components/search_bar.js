//Import React and set React.Component to Component (ES6 Functionality)
import React, {Component} from 'react';



// Class Component. Gives this class all functionality access
// from React.Component class
class SearchBar extends Component {
  //Class always requires a render method and return.

  //Component constructure. This is the way to initialise a state. 
  //Only class-based components have a state.
  constructor(props){
    super(props); //Calls parent method. 
    this.state = {term:''};//initialises state. New object. term will be our search term property.
  }

  render(){
    //Sets the state property 'term' based on the value of the input in real-time.
    //When a change happens. It will re-renders the component which gives us real-time updates.
    //input value = {this.state.term} will bind the value to the target value
    return(
      <div className="search-bar">
        
        <input value={this.state.term} 
        //Calls onInput change and sets the event value to event.target.value
         onChange={event=>this.onInputChange(event.target.value)}/>
        <br/>
        Value of the input: {this.state.term} 
      </div>
    );


  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

//Export statement. 
export default SearchBar;


/*

Fat arrows
event=>console.log(event.target.value)

same as onChange(event){
  console.log(event.target.value);
}
*/

// State is a plain javascript object has a use to record and react 
// to user events.
// Components have state
// Once a component's state has changed, it will re-render