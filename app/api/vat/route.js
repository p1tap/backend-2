// File: /app/api/vat/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const amount = parseFloat(searchParams.get('amount') || '0');
  const rate = parseFloat(process.env.VAT_RATE || '0.07');
  const vat = amount * rate;

  return NextResponse.json({ rate, amount, vat });
}

export async function POST(request) {
  const { amount } = await request.json();
  const parsedAmount = parseFloat(amount || '0');
  const rate = parseFloat(process.env.VAT_RATE || '0.07');
  const vat = parsedAmount * rate;

  return NextResponse.json({ rate, amount: parsedAmount, vat });
}

// Note: This POST method can coexist with the GET method in the same file