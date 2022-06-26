// require other routes
const authRoutes = require('./routes/authRoutes');
const {createProduct} =require('./model/firebase');

const express = require('express');
const app = express();

// sets view engine to ejs
app.set("view engine", "ejs");

// 
app.use(express.urlencoded({extended: false}))
app.use(express.json());

// declares file types as statics
app.use('/', express.static('public'));
// app.use('/scripts/', express.static('./views/scripts'));
app.use('/styles/', express.static('styles'));
app.use('/css/', express.static('css'));
app.use('/js/', express.static('js'));
app.use('/photos/', express.static('photos'));

// start server
const port = process.env.PORT || 5012;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/`);
});

app.get('/', (request, resolve) => {
    resolve.render('index')
});
app.get('/add', (request, resolve)=> {
    resolve.render('addproducts');
})

app.post('/add', async (request, resolve)=> {
    const {name, price, category } = request.body;
    // console.log(name, price, category);
    await createProduct(name, price, category);
    resolve.render('addproducts');
})
app.get('/products', (request, resolve)=> {
    resolve.render('products')
})

app.use('/auth', authRoutes)

app.get('*', (request, resolve) => {
    resolve.send('404');
});