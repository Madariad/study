const express = require('express');
const userRouter = require('./routes/userRoutes');

//middleware
const authenticateToken = require('./middleware/authenticateToken')



//cors import
const cors = require('cors');

require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('sdsdsd')
})

//middleware use

// app.get('/protected', authenticateToken, (req, res) => {
//     res.json({ message: 'Protected route', user: req.user });
// });

//cors use
app.use(cors());

app.use(express.json())

//User router
app.use('/api/v1/users', userRouter)


const PORT = process.env.SERVER_PORT || 5000
app.listen(PORT, (err) => {
    if(err) throw err

    console.log(`server started in port ${PORT}`);
})
