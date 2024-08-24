import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import educationalLevelRoute from "./routes/educationalLevelRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS POLICY
//Allow all origins
app.use(cors());

//Alow Custom Origins
// app.use(
//   cors({
//     origin:'http://localhost:3000/',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )

app.use("/educationalLevel", educationalLevelRoute);

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to Dubai Debremewi Admin Page");
});

mongoose
  .connect(process.env.mongoDB_URL)
  .then(() => {
    console.log("App Connected to the Database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
