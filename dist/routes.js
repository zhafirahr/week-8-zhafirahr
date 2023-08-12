"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const router = express_1.default.Router();
router.get('/financialgetdata', (req, res) => {
    res.json(db_1.financial);
});
router.get('/financialgetdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const financials = db_1.financial.find((p) => p.id === id);
    if (financials) {
        res.json(financials);
    }
    else {
        res.status(404).json({ message: 'Financial is Not Found' });
    }
});
router.post('/financialpostdata', (req, res) => {
    const newFinancial = {
        id: db_1.financial.length + 1,
        type: req.body.type,
        finance: req.body.finance,
        detail: req.body.detail,
        cash: req.body.cash,
    };
    db_1.financial.push(newFinancial);
    res.status(201).json(newFinancial);
});
router.put('/financialputdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = db_1.financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial = {
            id,
            type: req.body.type,
            finance: req.body.finance,
            detail: req.body.detail,
            cash: req.body.cash,
        };
        db_1.financial[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    }
    else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});
router.patch('/financialpatchdata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = db_1.financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const updatedFinancial = Object.assign(Object.assign({}, db_1.financial[financialIndex]), req.body);
        db_1.financial[financialIndex] = updatedFinancial;
        res.json(updatedFinancial);
    }
    else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});
router.delete('/financialdeletedata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const financialIndex = db_1.financial.findIndex((p) => p.id === id);
    if (financialIndex !== -1) {
        const deletedFinancial = db_1.financial.splice(financialIndex, 1)[0];
        res.json(deletedFinancial);
    }
    else {
        res.status(404).json({ message: 'Financial  is Not Found' });
    }
});
exports.default = router;
