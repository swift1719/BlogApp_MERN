import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Blogs from './components/blogs';
import AddBlog from './components/addBlog';
import Blog from './components/blog';
import EditBlog from './components/editBlog';

function App() {
	const [ posts, setPosts ] = useState([]);
	useEffect(() => {
		axios.get('/blogs').then((res) => setPosts(res.data)).catch((error) => console.log(error));
	});
	return (
		<div className="App">
			<Navbar />
			<Route exact path="/" render={() => <Blogs posts={posts} />} />
			<Route path="/add" component={AddBlog} />
			<Route path="/blog/:id" render={(props) => <Blog {...props} posts={posts} />} />
			<Route path="/update/:id" render={(props) => <EditBlog {...props} posts={posts} />} />
		</div>
	);
}

export default App;
