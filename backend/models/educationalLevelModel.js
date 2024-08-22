import mongoose from "mongoose";
const educationalLevelSchema = mongoose.Schema(
  {
    eduLevelAmh: {
      type: String,
      required: true,
    },
    eduLevelEng: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const EducationalLevel = mongoose.model(
  "EducationalLevel",
  educationalLevelSchema
);
