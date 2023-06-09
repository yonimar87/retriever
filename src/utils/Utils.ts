import { Address } from "../types/types"

export function getAddressString(address?: Address) {
  const addressParts = [
    address?.address1,
    address?.address2,
    address?.suburb,
    address?.state,
    address?.postcode,
    address?.country,
  ].filter((s) => s !== null && s !== undefined && s !== '')
  return addressParts.join(', ')
}

export const formatToCurrency = (num?: number) =>{
  if (num) return (Math.round(num * 100) / 100).toFixed(2)
};