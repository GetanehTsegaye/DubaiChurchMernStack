import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

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
