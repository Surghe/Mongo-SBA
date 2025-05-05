import express from 'express';
import Car from '../models/carSchema.mjs';

const router = express.Router();

// Create

router.post('/', async (req, res) => {
    const newCar = await Car.create(req.body);

    res.json(newCar);
});

// Read

router.get('/', async (req, res) => {
    const allCar = await Car.find({});

    res.json(allCar);
});

// Update

router.put('/:id', async (req, res) => {
    const editCar = await Car.findByIdAndUpdate(req.params.id,
        req.body,
        { new: true }
    );

    if (!editCar) {
        res.status(400).json({ msg: "Car is not found" });
    };

    res.json(editCar);

});

// Delete

router.delete('/:id', async (req, res) => {
    const deleteCar = await Car.findByIdAndDelete(req.params.id);

    if (!deleteCar) {
        res.status(400).json({ msg: "Car was deleted" });
    };

    res.json(deleteCar);
});

export default router;