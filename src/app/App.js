import React, { Component, Fragment } from 'react';
import About from "./About";
import Posts from "./Posts";
import PostsInfo from "./PostInfo";
import Authors from "./Authors";
import Contact from "./Contact";
import { Switch, Route } from 'react-router-dom';
import Header from './partials/Header';
import Footer from "./partials/Footer";
import NewPost from "./posts/new"

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				
				{/* <Switch> */}
				<Route exact path='/' component={Posts} />
            	 <Route exact path='/PostInfo' component={PostsInfo} />,
                <Route exact path='/Authors' component={Authors} />,
                <Route exact path='/Contact' component={Contact} />,
				<Route exact path='/About' component={About} />,
				<Route exact path='/posts/new' component={NewPost} />,
				
				{/* </Switch> */}
				
				<Footer />
			</Fragment>
		);
	}
}

export default App;
