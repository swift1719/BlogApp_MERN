import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spinner from '../Spinner.gif';

const Blog = (props) => {
	const [ title, setTitle ] = useState('');
	const [ blog, setBlog ] = useState('');
	const [ author, setAuthor ] = useState('');

	useEffect(
		() => {
			axios
				.get(`/blogs/${props.match.params.id}`)
				.then((res) => [ setTitle(res.data.title), setAuthor(res.data.author), setBlog(res.data.blog) ])
				.catch((err) => console.log(err));
		},
		[ props ]
	);

	return (
		<BlogContainer>
			{!title || !blog || !author ? (
				<img src={spinner} alt="loading..." />
			) : (
				<div className="container">
					<h2>" {title} "</h2>
					<p>{blog}</p>
					<p className="badge px-2">~ {author}</p>
					<br />
					<Link to="/" type="submit" className="btn btn-primary">
						Back to Home
					</Link>
				</div>
			)}
		</BlogContainer>
	);
};
export default Blog;
//Blog container
const BlogContainer = styled.div`
	margin: 6rem auto;
	padding: 3rem 14rem;
	h2 {
		text-align: center;
		font-weight: 900;
		color: var(--dark-green);
	}
	.badge {
		font-size: 1.1rem;
		font-weight: 400;
	}
	img {
		display: block;
		margin: auto;
	}
	.btn-primary {
		background: var(--dark-green);
		border: none;
		&:hover {
			background: var(--light-green);
		}
	}
`;
