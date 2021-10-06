const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('index.ejs', {
    nombre:'Mayra'
})
});

router.get('/saludo', (req, res)=>{
    res.send('Hola, Este es el saludo')
});

router.get('/login', (req, res)=>{
    res.render('login.ejs')
});

module.exports = router;
