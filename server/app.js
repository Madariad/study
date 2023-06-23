const express = require('express');
const userRouter = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lessonRoutes = require('./routes/lessonRoutes');
const sublessonsRoutes= require('./routes/sublessonsRoutes');



const bodyParser = require('body-parser');

//middleware
const authenticateToken = require('./middleware/authenticateToken')



//cors import
const cors = require('cors');

require('dotenv').config()

const app = express()

app.use(bodyParser.json());




//middleware use

// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route', user: req.user });
// });

//cors use
app.use(cors());

app.use(express.json())



//User router
app.use('/api/v1/users', userRouter)
app.use('/api/v1/course', courseRoutes)
app.use('/api/v1/lesson', lessonRoutes)
app.use('/api/v1/sublessons', sublessonsRoutes)



const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server started in port ${PORT}`);
})
