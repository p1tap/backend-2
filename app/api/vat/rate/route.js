// File: /app/api/vat/rate/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const rate = process.env.VAT_RATE || 0.07;
  return NextResponse.json({ rate: parseFloat(rate) });
}