const express=require('express');
const cors=require('cors');

const moviesrouter=require('./router/moviesrouter');
  const membersrouter = require('./router/membersrouter');
  const subsrouter = require('./router/subsrouter');
  const usersrouter = require('./router/usersrouter');
const connectDB=require('./config/database');

const app= express();

connectDB();
const port=8000;
app.use(express.json());
app.use(cors());
app.use('/api/films',moviesrouter);
 app.use('/api/members',membersrouter);
  app.use('/api/subs',subsrouter);
  app.use('/api/users',usersrouter);
app.listen(port, ()=>{
    console.log(`app is listening at: http://localhost:${port}`)
})
