// Create a new component.
// Component should produce HTML

// How to import module: import Library from 'node module name';
import React from 'react';
import ReactDOM from 'react-dom';

//Import Searchbar from search_bar in components.
// No need to include file extension if it's a js file.
import SearchBar from './components/search_bar'; 


//Youtube Data v3 API Key
const API_KEY = 'AIzaSyB_2moz3XaEwAkG1a-iz8CPX8eVVm9MgL4';


//const -> constant. Cannot change value.
// This function returns JSX.
// JSX is a subset of javascript. Allows for HTML 
// Fat arrow (check for reason)
// => means 'function' (different syntax for Es6) 
//'this' keyword changes too.
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}


//Take this component's generated HTML and put it on the page (in the dom)
//Takes an instance of App (instance looks like such: <ClassName></ClassName> or <ClassName/>)
// ReactDOM.render takes two arguments. Instance of a class and then the target.
ReactDOM.render(<App/>, document.querySelector('.container')); 

//Error with React saying it's deprecated.
//React vs ReactDOM

//ReactDOM is used to interact with the DOM
//react is used for creating components.

