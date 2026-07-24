import jsPDF from "jspdf";

import type { ReceiptTransaction } from "../types/receipt";

export const generateReceipt = (
    transaction: ReceiptTransaction
) => {
    const pdf = new jsPDF();

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);

    pdf.text("FabPay", 20, 20);

    pdf.setFontSize(16);

    pdf.text("Payment Receipt", 20, 32);

    pdf.setDrawColor(180);

    pdf.line(20, 38, 190, 38);

    pdf.setFont("helvetica", "normal");

    pdf.setFontSize(12);

    let y = 52;

    const addRow = (
        label: string,
        value: string
    ) => {
        pdf.setFont("helvetica", "bold");

        pdf.text(label, 20, y);

        pdf.setFont("helvetica", "normal");

        pdf.text(value, 70, y);

        y += 12;
    };

    addRow(
        "Amount",
        `Rs. ${transaction.amount.toLocaleString("en-IN")}`
    );

    addRow(
        "Recipient",
        `${transaction.receiver.firstName} ${transaction.receiver.lastName}`
    );

    addRow(
        "Email",
        transaction.receiver.email
    );

    addRow(
        "Status",
        transaction.status
    );

    addRow(
        "Transaction ID",
        transaction.id
    );

    addRow(
        "Date",
        new Date(
            transaction.createdAt
        ).toLocaleString("en-IN")
    );

    addRow(
        "Note",
        transaction.note || "-"
    );

    pdf.line(20, y + 5, 190, y + 5);

    pdf.setFontSize(10);

    pdf.text(
        "Thank you for using FabPay.",
        20,
        y + 18
    );

    pdf.save(
        `FabPay-Receipt-${transaction.id}.pdf`
    );
};