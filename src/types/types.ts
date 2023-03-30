// TODO add other fields

export type BillableItemsType = 'MATERIALS' | 'SERVICE'

export interface Address {
  address1?: string,
  address2?: string,
  suburb?: string,
  state?: string,
  country?: string,
  postcode?: string,
}

export interface QuotePreview {
  recipientName?: string,
  recipientEmail?: string,
  recipientPhone?: string,
  address?: Address,
  quoteNumber?: string,
  reference?: string,
  total?: number,
  dateCaptured?: string,
  expiry?: string,
  // TODO
}