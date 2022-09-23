import Campus from '../models/Campus';
import { Request, Response } from 'express';

const gettAllCampus = async (req: Request, res: Response) => {
  try {
    const campus = await Campus.find();
    res.json(campus);
  } catch (error) {
    res.json(error);
  }
};

const createCampus = async (req: Request, res: Response) => {
  const { nameImg, campusName, campusPlace, campusDirection, _id } = req.body;
  const newCampus = new Campus({
    _id,
    nameImg,
    campusName,
    campusPlace,
    campusDirection,
  });
  try {
    const campus = await newCampus.save();
    res.json(campus);
  } catch (error) {
    res.json(error);
  }
}

export { gettAllCampus, createCampus };
