import express, { Request, Response } from 'express';
import { FinancialTabel, financial } from './db';


const router = express.Router();

router.get('/financialgetdata', (req: Request, res: Response) => {
    res.json(financial);
});

router.get('/financialgetdata/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financials = financial.find((p) => p.id === id);
    if (financials) {
        res.json(financials);
    } else {
        res.status(404).json({ message: 'Financial is Not Found' });
    }
});

router.post('/financialpostdata', (req: Request, res: Response) => {
    const newFinancial: FinancialTabel = {
        id: financial.length + 1,
        type: req.body.type,
        finance: req.body.finance,
        detail: req.body.detail,
        cash: req.body.cash,
    };
    financial.push(newFinancial);
    res.status(201).json(newFinancial);
});

router.put('/financialputdata/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financialIndex = financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial: FinancialTabel = {
            id,
            type: req.body.type,
            finance: req.body.finance,
            detail: req.body.detail,
            cash: req.body.cash,
        };
        financial[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    } else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});

router.patch('/financialpatchdata/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financialIndex = financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial: FinancialTabel = {
            ...financial[financialIndex],
            ...req.body,
        };
        financial[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    } else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});

router.delete('/financialdeletedata/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const financialIndex = financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const deletedFinancial = financial.splice(financialIndex, 1)[0];
        res.json(deletedFinancial);
    } else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});

export default router;
