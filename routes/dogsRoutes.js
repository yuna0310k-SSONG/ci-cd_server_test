import express from "express";
import { getDogs, addDog, updateDog, deleteDog } from "../repositories/dogsRepository.js";
import dogSchema from "../schemas/dogsSchema.js";

const router = express.Router();

// GET: get 강아지 리스트
router.get("/", (req, res) => {
  res.json(getDogs());
});

// POST: dogs 개추
router.post("/", (req, res) => {
  const { error, value } = dogSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const newDog = addDog(value);
  res.status(201).json(newDog);
});

// PUT: dogs 개수
router.put("/:index", (req, res) => {
  const { index } = req.params;
  const { error, value } = dogSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const updatedDog = updateDog(index, value);
  if (!updatedDog) {
    return res.status(404).json({ error: "Dog not found" });
  }
  res.json(updatedDog);
});

// DELETE: dogs 개삭
router.delete("/:index", (req, res) => {
  const { index } = req.params;
  const deletedDog = deleteDog(index);
  if (!deletedDog) {
    return res.status(404).json({ error: "Dog not found" });
  }
  res.json(deletedDog);
});

export default router;
