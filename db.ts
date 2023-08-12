interface FinancialTabel {
    id: number;
    type: string;
    finance: string;
    detail: string;
    cash: number;
}

let financial: FinancialTabel[] = [
    { id: 1, type: 'Cash In', finance: 'Gaji', detail: 'Gaji Bulan Agustus', cash: 7000000 },
    { id: 2, type: 'Cash Out', finance: 'Jajan', detail: 'Jajan Merchandise', cash: 400000 },
    { id: 3, type: 'Cash Out', finance: 'Bayar Kost', detail: 'Bayar Sewa Kost', cash: 1200000 },
];

export {FinancialTabel,financial}
