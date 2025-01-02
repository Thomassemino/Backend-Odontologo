const mongoose = require("mongoose");
const mongoAtlasUri = `mongodb://localhost:27017/thomasdb`;


async function mongooseConnection() {
    try {
        // Conectar al clúster de MongoDB sin las opciones obsoletas
        await mongoose.connect(mongoAtlasUri);

        console.log("Mongoose is connected");
        const dbConnection = mongoose.connection;

        dbConnection.on("error", (err) => console.log(`Connection error: ${err}`));
        dbConnection.once("open", () => console.log("Connected to DB!"));
    } catch (e) {
        console.error("Could not connect to MongoDB:", e);
        process.exit(1); // Salir del proceso con código de falla
    }
}

module.exports = mongooseConnection;
