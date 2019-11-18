const app = require('./app');

const PORT = process.env.PORT || 90;

app.listen(PORT,() => {
    console.log(`Server started on ${ PORT }`);
});