import express from 'express';
import greetRoute from './routes/greetRoute.js'; 
import usersRoute from './routes/users.js';
const app = express();
app.use(express.json());
app.use('/greet',greetRoute); 
app.use('/users',usersRoute);
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

