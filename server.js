const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017/mernBlogApp';

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Connected to mongoDB');
});

const blogsRouter = require('./routes/blogs');

app.use('/blogs', blogsRouter);

app.listen(port, () => console.log(`server started on port ${port}`));
