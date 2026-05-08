import express from 'express';
import userRouter from './routes/user.routes.js'; // import routes from user.routes.js
import userPost from './routes/post.routes.js';

const app = express(); // create an express app

app.use(express.json());
// routes declaration
app.use('/api/v1/users', userRouter); // example route: http://localhost:4000/api/v1/users
app.use('/api/v1/post', userPost)

export default app;