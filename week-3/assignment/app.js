const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'assignment/views')

app.use(express.static('assignment/public'));

app.get('/',(req, res)=>{
    res.send('<h1>Hello Server</h1>');
});

app.get('/getData',(req, res)=>{
    const { number } = req.query;
    const reg = /[^0-9]/;
    let text = '';
    console.log(number);
    if(!number){
        text = 'Lack of Parameter';
    }else if(number.match(reg)){
        text = 'Wrong Parameter';
    }else{
        let total = 0;
        for(let i = 1; i <= number; i++){
            total += i;
        }
        text = total;
    }
    res.render('getData', { text } );
});

app.listen(3000,()=>{
    console.log('the application is running on localhost:3000');
});