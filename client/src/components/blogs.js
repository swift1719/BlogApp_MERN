import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import spinner from '../Spinner.gif';
import { Link } from 'react-router-dom';

const Blogs = ({ posts }) => {
	const [ blogs, setBlogs ] = useState([]);
	const [ message, setMessage ] = useState('');

	//Delete article by ID
	const deleteBlog = (id) => {
		axios.delete(`/blogs/${id}`).then((res) => setMessage('Deleted Successfully!!!'));

		setBlogs(blogs.filter((ele) => ele._id !== id));
	};

	return (
		<BlogContainer>
			<div className="container">
				<span className="message">{message}</span>
			</div>

			{posts &&
				posts.map((blog, key) => (
					<div className="container" key={blog._id}>
						<Link to={`/blog/${blog._id}`}>
							<h2>{blog.title}</h2>
						</Link>
						<p>{blog.blog}</p>
						<span className="badge py-0">~ {blog.author}</span>

						<div className="d-flex flex-row-reverse">
							<div className="p-2 ">
								<Link to={`/update/${blog._id}`} className="btn btn-outline-success">
									Edit
								</Link>
							</div>
							<div className="p-2 ">
								<Link
									to="/delete"
									onClick={() => deleteBlog(blog._id)}
									className="btn btn-outline-danger"
								>
									Delete
								</Link>
							</div>
						</div>

						<hr />
					</div>
				))}
		</BlogContainer>
	);
};
export default Blogs;
//blog container
const BlogContainer = styled.div`
	margin: 7rem 0;
	img{
		width:10rem;
		display:block;
		margin 0 auto;
	}
	h2{
		font-weight:700;
		font-size:2rem;
		text-decoration:underline;
		color:rgb(76, 172, 252);
		&:hover{
			color:blue;
		}
	}
	p{
		font-family: 'Courgette', cursive;
		font-size:16px;
	}	
	
	.message {
		font-size:2rem;
		font-weight: 900;
		color: tomato;
		padding: 1rem 1rem 1rem 0;
	}
	.badge{
		font-size:24px;
		font-family: 'Parisienne', cursive;
	}
`;
