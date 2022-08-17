require('./db/connect');
const app = require('./app');
// const app = require('./app');
const dotenv = require('dotenv');
//Database import



dotenv.config({path:"config/config.env"});


const server = app.listen(process.env.PORT,()=>{
    console.log(`server running on port http://localhost:${process.env.PORT}`);
});