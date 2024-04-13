const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors")
dotenv.config();

const categoryRoutes = require("./routes/Categories");

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected mongo");
    } catch (error) {
        throw error;
    }
}

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use("/api/categories", categoryRoutes);

app.get('/', (req, res) => {
    res.send("Api working");
})
app.listen(2000 || process.env.PORT, () => {
    connect();
    console.log("Listen ", process.env.PORT);
})