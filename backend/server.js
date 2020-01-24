const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  keepAlive: true,
  useUnifiedTopology:true,
  useNewUrlParser: true 
});
mongoose.connection.once('open', () =>{
   console.log('MongoDB database connection established successfully');
}).on('error', ()=>{
   console.log("MongoDB connection error")
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const discussionsRouter = require('./routes/discussions');
const commentsRouter = require('./routes/comments');


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/discussions',discussionsRouter);
app.use('/comments',commentsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
