import express from "express";
import { getDogs, addDog, updateDog, deleteDog } from "../repositories/dogsRepository.js";
import { dogSchema, dogUpdateSchema } from "../schemas/dogsSchema.js";

const router = express.Router();

// GET: get 강아지 리스트
router.get("/", async (req, res) => {
  res.json(await getDogs());
});

// POST: dogs 강아지 추가
router.post("/", (req, res) => {
  const { error, value } = dogSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const newDog = addDog(value);
  res.status(201).json({
    success: true,
    message: "강아지 추가 완료! 🐶✨",
    data: newDog,
  });
});

// PUT: dogs 개
router.put("/:index", async (req, res) => {
  const { index } = req.params;
  const { error, value } = dogUpdateSchema.validate(req.body); // 수정된 스키마 사용
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const updatedDog = await updateDog(parseInt(index, 10), value);
    res.json({
      success: true,
      message: "강아지 정보가 성공적으로 수정되었습니다! 🐶✨",
      data: updatedDog,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "해당 강아지는 존재하지 않습니다 🐕‍🦺❌",
    });
  }
});

// DELETE: dogs 개삭
router.delete("/:index", async (req, res) => {
  const { index } = req.params;
  const id = parseInt(index, 10); // index를 정수로 변환

  try {
    const deletedDog = await deleteDog(id);
    res.json({
      success: true,
      message: "강아지가 성공적으로 삭제되었습니다! 🐶🗑️✨",
      data: deletedDog,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "삭제하려는 강아지가 존재하지 않습니다 🐕‍🦺❌",
    });
  }
});

export default router;
