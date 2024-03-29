// Create a new component.
// Component should produce HTML

// How to import module: import Library from 'node module name';
// No need to include file extension if it's a js file.
import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'; 
import VideoDetail from './components/video_detail';


//Youtube Data v3 API Key
const API_KEY = 'AIzaSyB_2moz3XaEwAkG1a-iz8CPX8eVVm9MgL4';

// YT Search requires object(key, term), return data.


//const -> constant. Cannot change value.
// This function returns JSX.
// JSX is a subset of javascript. Allows for HTML 
// Fat arrow (check for reason)
// => means 'function' (different syntax for Es6) 
//'this' keyword changes too.

//Class Base component so that we can have a state.
class App extends Component {

    constructor(props){
			super(props);
			
			this.state={ 
				videos:[],
				selectedVideo:null 
			};
			this.videoSearch('headphones');
			
		}
		
		videoSearch(term){
			YTSearch({key:API_KEY, term:term}, (videos) => {
				console.log(videos); 
				//When key and value have same name. Can just put down the variable
				//name and that will apply. Same as videos:videos
				this.setState({
					videos:videos,
					selectedVideo:videos[0]
				});
			});
		}
    render(){
			const videoSearch =_.debounce((term) =>{this.videoSearch(term)},300);

        return (
                <div>
                    <SearchBar onSearchTermChange={videoSearch}/>
										<VideoDetail video={this.state.selectedVideo}/>
										<VideoList 
										//Takes video and defines it to app's state.
										onVideoSelect={selectedVideo => this.setState({selectedVideo})}
										videos={this.state.videos}/>
                </div>
            );
    };
}


//Take this component's generated HTML and put it on the page (in the dom)
//Takes an instance of App (instance looks like such: <ClassName></ClassName> or <ClassName/>)
// ReactDOM.render takes two arguments. Instance of a class and then the target.
ReactDOM.render(<App/>, document.querySelector('.container')); 

//Error with React saying it's deprecated.
//React vs ReactDOM

//ReactDOM is used to interact with the DOM
//react is used for creating components.

