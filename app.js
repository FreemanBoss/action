const express = require('express')
const app = express();

app.get('/names', (req, res) => {
	res.send("Habeeb");
})

app.listen(5000, () => {
	console.log("server is running at port 500");
});
