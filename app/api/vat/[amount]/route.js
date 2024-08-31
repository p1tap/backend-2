// File: /app/api/vat/[amount]/route.js
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const amount = parseFloat(params.amount || '0');
  const rate = parseFloat(process.env.VAT_RATE || '0.07');
  const vat = amount * rate;

  return NextResponse.json({ rate, amount, vat });
}