var express = require('express');
var app = express();
const axios = require('axios');

app.listen(3001);
app.use(express.json());
app.use("/index.html", express.static("webapp/"));
console.log("you app is listening @http://localhost:3001");


app.get("/", (req, res) => {
    res.send("First microserver is up");
});

app.get("/Shashank", (req, res) => {
    res.json([{
        "name": "xyz"
    },
    {
        "name": "atvc"
    }]);
});

app.post("/post", (req, res) => {

    console.log(req.body);
    res.json({
        "msg": "records posted successfully"
    });
});



app.get("/index.html", (req, res) => {

    console.log(__dirname);
    res.sendFile(__dirname + '/webapp/index.html');

});



app.get("/Prods", async (req, res) => {

    let data;
    await axios.get('https://services.odata.org/northwind/northwind.svc/Products').then(
        (response) => {
            var result = response.data;
            console.log(result);
            data = result.value;
        },
        (error) => {
            console.log(error);
        }
    );

    res.json(data);


});





// Implement microservice for endpoint blank
//  app.use("/index.html", express.static("webapp/"));

// app.use(express.json());
