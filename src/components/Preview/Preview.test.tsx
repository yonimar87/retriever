import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import Preview from './Preview'

describe(' Preview', () => {

    const quote = {
        quoteNumber: "Q-0008",
        recipientName: "Anytime Fitness",
        recipientPhone: null,
        recipientEmail: "taylor.leffler@retrievercommunications.com",
        recipientBillTo: null,
        address: {
            address1: "813 Pacific Hwy",
            address2: null,
            suburb: "Chatswood",
            state: "NSW",
            postcode: "2067",
            country: "Australia"
           },
        reference: null,
        dateCaptured: "2023-06-05T23:05:59.423Z",
        expiry: "2024-12-31T13:00:00Z",
        lineItems: [
               {
                name: "Clean-100",
                type: "SERVICE",
                salesDescription: "Clean-100",
                unitAmount: 1,
                saleCost: 100,
                subtotal: 100.000000,
                taxTotal: 10.000000000000,
                total: 110.000000000000
               },
               {
                name: "Mop",
                type: "MATERIALS",
                salesDescription: "Mop",
                unitAmount: 1,
                saleCost: 30,
                subtotal: 30.000000,
                taxTotal: 3.000000000000,
                total: 33.000000000000
               },
               {
                name: "Cleaning cloths",
                type: "MATERIALS",
                salesDescription: "Cleaning cloths",
                unitAmount: 8,
                saleCost: 7.5,
                subtotal: 60.0000000,
                taxTotal: 6.0000000000000,
                total: 66.0000000000000
               },
               {
                name: "Cleaning spray",
                type: "MATERIALS",
                salesDescription: "Cleaning spray",
                unitAmount: 2,
                saleCost: 20,
                subtotal: 40.000000,
                taxTotal: 4.000000000000,
                total: 44.000000000000
               }
           ],
        subtotal: 230.0000000,
        taxTotal: 23.0000000000000,
        total: 253.0000000000000,
        notes: null,
        status: "AWAITING_APPROVAL",
        statusContext: null,
        statusCreationDate: "2023-06-05T23:19:34.771549Z",
        orgHeader: {
            orgLogoUrl: null,
            orgName: "Cleaners",
            address: {
                address1: "789 Pacific Hwy",
                address2: null,
                suburb: "Gordon",
                state: "NSW",
                postcode: "2072",
                country: "Australia"
               },
            email: "doruk.guner@retrievercommunications.com",
            phone: null
           }
       }
  it('should render successfully', () => {
    const { baseElement } = render(
      <Preview quote={quote}/>    
    )
    expect(baseElement).toBeTruthy()
  })
})