import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddBlog = () => {
	const [ title, setTitle ] = useState('');
	const [ blog, setBlog ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ msg, setMsg ] = useState('');

	const changeOnClick = (e) => {
		e.preventDefault();

		const blogs = {
			title,
			blog,
			author
		};
		setTitle('');
		setBlog('');
		setAuthor('');

		axios
			.post('/blogs/add', blogs)
			.then((res) => setMsg('Blog Added successfully!!!'))
			.catch((err) => console.log(err));
	};

	return (
		<AddBlogc>
			<div className="container">
				<h1>Add New Blog</h1>
				<span className="message">{msg}</span>

				<form onSubmit={changeOnClick} encType="multipart/form-data">
					<div className="form-group">
						<label htmlFor="author">Author </label>
						<input
							type="text"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							className="form-control"
							id="author"
							placeholder="author name"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="title">Title </label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							id="title"
							className="form-control"
							placeholder="title"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="blog">Blog </label>
						<textarea
							value={blog}
							onChange={(e) => setBlog(e.target.value)}
							id="blog"
							className="form-control"
							rows="3"
						/>
					</div>
					<button type="submit" className="btn btn-primary mx-5 my-0">
						Post Blog
					</button>
					<Link to="/" className="btn btn-primary  my-0">
						Back to Home
					</Link>
				</form>
			</div>
		</AddBlogc>
	);
};
export default AddBlog;
//addblog container
const AddBlogc = styled.div`
	margin: 3rem auto;
	padding: 4rem;
	width: 31.25rem;

	h1 {
		font-weight: 900;
	}
	.btn-primary {
		margin-top: 2rem;
		background: var(--dark-green);
		border: none;
		&:hover {
			background: var(--light-green);
		}
	}
	.message {
		font-weight: 900;
		color: tomato;
		padding: 1.1rem 0;
		margin: 1rem;
	}
`;
