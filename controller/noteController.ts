import { Request, Response } from "express";
import Note from "../models/noteModel";
//import { error } from "console";

export const createNote = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const note = await Note.create({
            title: req.body.title,
            content: req.body.content,
        });
        console.log(note);
        res.status(201).json({ message: "Note created Successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};

export const getAllNotes = async ( _req: Request, res: Response ) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    }
    catch (err) {
        res.status(500).json({ message: "Server error", error: err });  
    }
};

export const getNoteById = async (req: Request, res: Response) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note)  res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};

export const updateNote = async (req: Request, res: Response) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note)  res.status(400).json({ message: "Note not found" });
        else await note.update(req.body);
        res.json({ message: "Note updated successfully", note });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const note = await Note.findByPk(req.params.id);
        if (!note)  res.status(404).json({ message: "Note not found" });
        else await note.destroy();
        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
};