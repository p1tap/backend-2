"use client"

import { useForm } from 'react-hook-form';

export default function VatCalculator() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const vat = data.amount * 0.2; // Assuming 20% VAT
    alert(`VAT for ${data.amount} is ${vat.toFixed(2)}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        {...register("amount", { required: true, min: 0 })}
        placeholder="Enter amount"
      />
      {errors.amount && <span>This field is required and must be non-negative</span>}
      <button type="submit">Calculate VAT</button>
    </form>
  );
}