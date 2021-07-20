const express = require('express')
const app = express();
const PORT= 3000;
const connectDB=require('./config/db');

connectDB();

app.set('view engine',"ejs");
app.use(express.static('public'))
app.use(express.json())
// Routes
app.use('/api/files',require('./routes/files'))

app.use('/files',require("./routes/show"));
app.use("/files/download",require('./routes/download'))

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})