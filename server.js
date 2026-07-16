const express = require("express");

const app = express();

// Allow Express to read form data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Test page
app.get("/", (req, res) => {
    res.send("Umrah API Running");
});

// Flight search endpoint
app.post("/search-flights", (req, res) => {

    console.log("Form received!");
    console.log(req.body);

    const flights = [
        {
            airline: "Saudia",
            flightNumber: "SV819",
            from: req.body.from,
            to: req.body.to,
            departureDate: req.body.departureDate,
            departureTime: "08:15",
            arrivalTime: "16:30",
            price: 12000000
        },
        {
            airline: "Garuda Indonesia",
            flightNumber: "GA980",
            from: req.body.from,
            to: req.body.to,
            departureDate: req.body.departureDate,
            departureTime: "11:45",
            arrivalTime: "20:10",
            price: 13500000
        }
    ];

res.send(`
<!DOCTYPE html>
<html>

<head>

    <title>Hasil Pencarian Penerbangan</title>

    <style>

        body{
            font-family: Arial, sans-serif;
            background:#f4f4f4;
            padding:40px;
        }

        h1{
            text-align:center;
        }

        .card{
            background:white;
            border-radius:12px;
            padding:20px;
            margin-bottom:20px;
            box-shadow:0 4px 10px rgba(0,0,0,.1);
        }

        button{
            background:#1E88E5;
            color:white;
            border:none;
            padding:12px 20px;
            border-radius:8px;
            cursor:pointer;
        }

    </style>

</head>

<body>

<h1>🕋 Hasil Pencarian Penerbangan</h1>

${flights.map(flight => `
<div class="card">

<h2>${flight.airline}</h2>

<p><strong>Nomor Penerbangan:</strong> ${flight.flightNumber}</p>

<p><strong>Rute:</strong> ${flight.from} ➜ ${flight.to}</p>

<p><strong>Tanggal:</strong> ${flight.departureDate}</p>

<p><strong>Jam:</strong> ${flight.departureTime} - ${flight.arrivalTime}</p>

<h2>Rp ${flight.price.toLocaleString("id-ID")}</h2>

<button>Pilih Penerbangan</button>

</div>
`).join("")}

</body>

</html>
`);
    
}); //

app.listen(3000, () => {
    console.log("Server running on port 3000");
}); 