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
    return <input onChange={event=>console.log(event.target.value)}/>;
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