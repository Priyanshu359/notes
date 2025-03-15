import express from "express";
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote } from "../controller/noteController";
import { noteValidator } from "../validators/noteValidator";
import { validate } from "../validators/middleware";

const router: express.Router = express.Router();

router.post("/notes", validate(noteValidator), createNote);
router.get("/notes", getAllNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", validate(noteValidator), updateNote);
router.delete("/notes/:id", deleteNote);

export default router;