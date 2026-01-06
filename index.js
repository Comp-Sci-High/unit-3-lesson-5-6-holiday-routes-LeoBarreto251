const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))
//This is the default page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

//This is a GET route for the Christmas page
app.get("/christmas", (req, res) => {
  res.sendFile(__dirname + "/public/christmas.html");
})
//This is a GET route for the Summer page
app.get("/summer", (req, res) => {
  res.sendFile(__dirname + "/public/summer.html");
})
//This is a GET route for the Halloween page
app.get("/halloween", (req, res) => {
  res.sendFile(__dirname + "/public/halloween.html");
})

//Setting up the server to listen on port 3000
app.listen(3000, () => {
  console.log(`Holiday Server is Running!`)
});
