const express = require("express");
const cors = require("cors");
const placeRoute = require("./router/place-router");
const app = express();
const connectDb = require("./utils/db");


const corsOptions = {
    // origin: "http://localhost:5173",
    origin: (origin, callback) => {
        // Check if the origin is allowed
        const allowedOrigins = [
            "http://localhost:5173",

        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());


app.use("/api/desti", placeRoute);




const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});