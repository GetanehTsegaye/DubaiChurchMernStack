import express from "express";
import { EducationalLevel } from "../models/educationalLevelModel.js";

const router = express.Router();

//Route to save a new Educational Level /educationalLevel
router.post("/", async (request, response) => {
  try {
    if (!request.body.eduLevelAmh || !request.body.eduLevelEng) {
      return response.status(400).send({
        message: "Please fill all the required * fields.",
      });
    }
    const newEducationalLevel = {
      eduLevelAmh: request.body.eduLevelAmh,
      eduLevelEng: request.body.eduLevelEng,
    };

    const educationalLevel = await EducationalLevel.create(newEducationalLevel);
    return response.status(201).send(educationalLevel);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get all Educational Levels /educationalLevel
router.get("/", async (request, response) => {
  try {
    const educationalLevels = await EducationalLevel.find({});
    return response.status(200).json({
      count: educationalLevels.length,
      data: educationalLevels,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get one Educational Level by id /educationalLevel/:id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const educationalLevel = await EducationalLevel.find({});
    return response.status(200).json(educationalLevel);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for updating the Educational Level by id /educationalLevel/:id
router.put("/:id", async (request, response) => {
  try {
    if (!request.body.eduLevelAmh || !request.body.eduLevelEng) {
      return response.status(400).send({
        message: "Please fill all the required * fields.",
      });
    }
    const { id } = request.params;
    const result = await EducationalLevel.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response
        .status(404)
        .json({ message: "Educational Level not found" });
    }
    return response
      .status(200)
      .send({ message: "Educational Level updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Deleting Educational Level /educationalLevel/:id
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const result = await EducationalLevel.findByIdAndDelete(id);
    if (!result) {
      return response
        .status(404)
        .json({ message: "Educational Level not found" });
    }
    return response
      .status(200)
      .send({ message: "Educational Level deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
