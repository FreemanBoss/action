const express = require('express')
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, '/frontends/build')));

app.get('/names', (req, res) => {
	res.send("Habeeb");
})

app.listen(5000, () => {
	console.log("server is running at port 500");
});
