export type BillableItemsType = 'MATERIALS' | 'SERVICE'

export interface Address {
  address1?: string,
  address2?: string | null,
  suburb?: string,
  state?: string,
  country?: string,
  postcode?: string,
}

export interface QuotePreview {
  recipientName?: string,
  recipientEmail?: string | null,
  recipientPhone?: string | null,
  address?: Address,
  quoteNumber?: string,
  reference?: string | null,
  total?: number,
  dateCaptured?: string,
  expiry?: string,
  lineItems: Array<LineItem>,
  orgHeader: OrgHeader
}

export interface LineItem {
  name: string,
  saleCost:number,
  salesDescription:string,
  subtotal:number,
  taxTotal:number,
  total:number,
  type:string,
  unitAmount:number
}

export interface OrgHeader {
  address: Address,
  email: string,  
  orgLogoUrl?: string | null, 
  orgName: string,  
  phone?: string | null
}