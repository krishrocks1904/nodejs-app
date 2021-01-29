const express = requires('express');

const app = express();

app.get('/',(req,res)=>{
res.send('<h1>My App </h1>');
});

app.listen(5000, ()=>{
console.log('App Listening on port 5000 !');
});
