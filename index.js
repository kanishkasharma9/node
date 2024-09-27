const express = require('express')
const app = express()
const PORT=3000
const route=require('./routes/login')


const path = require('path') 
const connectToMongodb=require('./connect')
connectToMongodb()

app.use('/',route) 
app.use(express.static(path.join(__dirname,'public')));



app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server is running on ${PORT}`);
    }
})