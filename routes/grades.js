import express, { json } from "express";
import db from "../db/conn.js";
import { ObjectId } from "mongodb";
import Grades from "../models/Grades.js"
const router = express.Router();

// Get all grade enteries
router.get("/", async (req, res) => {
  try {
    const grades = await Grades.find();
    res.status(200.)json(grades);
  } catch (e) {
    res.status(500).send(error.message);
  }
})

// Get a single grade entry by ID
router.get("/:id", async (req, res) => {
  let collection = await db.collection("grades");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

router.post("/", (req, res) => {
  const grade = new Grades(req.body)
  const savedGrade = grade.save()
  res.json(savedGrade)
})

export default router;