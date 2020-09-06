const express = require('express');
const router = express.Router();
const Blogs = require('../models/blogs');

//get all blogs
router.get('/', (req, res) => {
	Blogs.find().then((blog) => res.json(blog)).catch((err) => res.status(400).json(`Error: ${err}`));
});

//find blog by id
router.get('/:id', (req, res) => {
	Blogs.findById(req.params.id).then((blog) => res.json(blog)).catch((err) => res.status(400).json(`Error: ${err}`));
});

//add new blog
router.post('/add', (req, res) => {
	Blogs.create(req.body)
		.then((blog) => res.json('Blog Posted!!!'))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

//update blog
router.put('/update/:id', (req, res) => {
	Blogs.findByIdAndUpdate(
		{ _id: req.params.id },
		{ title: req.body.title, blog: req.body.blog, author: req.body.author },
		{ useFindAndModify: false, new: true }
	)
		.then((blog) => {
			res.json('Blog Update!!!');
		})
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

//delete blog
router.delete('/:id', (req, res) => {
	Blogs.findByIdAndDelete(req.params.id)
		.then(() => res.json(`Blog deleted successfully!!!`))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});
module.exports = router;
