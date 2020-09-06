import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const EditBlog = (props) => {
	const [ title, setTitle ] = useState('');
	const [ blog, setBlog ] = useState('');
	const [ author, setAuthor ] = useState('');
	const [ message, setMessage ] = useState('');

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
			.put(`/blogs/update/${props.match.params.id}`, blogs)
			.then((res) => {
				setMessage('Blog updated successfully!!!');
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		axios
			.get(`/blogs/${props.match.params.id}`)
			.then((res) => [ setTitle(res.data.title), setAuthor(res.data.author), setBlog(res.data.blog) ])
			.catch((err) => console.log(err));
	}, []);

	return (
		<EditBlogc>
			<div className="container">
				<h1>Update Blog</h1>
				<span className="message">{message}</span>
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
						Update
					</button>
					<Link to="/" className="btn btn-primary  my-0">
						Back to Home
					</Link>
				</form>
			</div>
		</EditBlogc>
	);
};

export default EditBlog;

//editblog container
const EditBlogc = styled.div`
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
		padding: 1rem 1rem 1rem 0;
	}
`;
