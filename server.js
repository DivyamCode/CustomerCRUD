require('./db/connect');
const app = require('./app');
// const app = require('./app');
const PORT = 4002||process.env.PORT;

const server = app.listen(PORT,()=>{
    console.log(`server running on port http://localhost:${PORT}`);
});
