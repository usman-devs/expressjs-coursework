const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

const data = [
    {
    id: 1,
    name: 'Usman latif',
    email: 'Usman2217093@gmail.com',
    },
    {
        id:2,
        name: 'Bassam hussain',
        email: 'bassam@gmail.com',
    },
     {
        id:3,
        name: 'Ahmed Raza',
        email: 'ahmed@gmail.com',
    },
]

app.get('/user',(req,res)=>{
    res.json({
        user:data,
    });
});


app.get('/',(req,res) => {
    res.json({
        message: 'Welcome usman to the fullstake backend.',
        status: 'Server is running successfully!',
        timestamp: new Date().toISOString()
    });
});


app.listen(PORT,()=>{
    console.log('Server is running  on port ',PORT);
    // console.log(`API available at http:localhost:${PORT}`);
    // console.log(`Health check at http://localhost:${PORT}/health`)
});