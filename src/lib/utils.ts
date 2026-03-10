import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: { amount: string, currencyCode: string }) {
  return `${new Intl.NumberFormat(undefined, { style: "currency", currency: price.currencyCode, currencyDisplay: "narrowSymbol", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(parseFloat(price.amount))} ${price.currencyCode}`
}