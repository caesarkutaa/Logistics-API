import express, { Request, Response } from 'express';
import Package from '../models/package.model';


const router = express.Router();


router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, status, pickupDate } = req.body;
    const newPackage = await Package.create({ name, status, pickupDate });
    res.status(201).json(newPackage);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/:id', async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const packageInfo = await Package.findByPk(id);
      
      if (!packageInfo) {
        return res.status(404).json({ error: 'Package not found' });
      }
  
      res.status(200).json(packageInfo);
    } catch (error) {
      console.error('Error retrieving package:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
export default router;