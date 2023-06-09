import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import DetailedHeader from "./DetailedHeader";

describe(" DetailedHeader", () => {
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
            country: "Australia",
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
                subtotal: 100.0,
                taxTotal: 10.0,
                total: 110.0,
            },
            {
                name: "Mop",
                type: "MATERIALS",
                salesDescription: "Mop",
                unitAmount: 1,
                saleCost: 30,
                subtotal: 30.0,
                taxTotal: 3.0,
                total: 33.0,
            },
            {
                name: "Cleaning cloths",
                type: "MATERIALS",
                salesDescription: "Cleaning cloths",
                unitAmount: 8,
                saleCost: 7.5,
                subtotal: 60.0,
                taxTotal: 6.0,
                total: 66.0,
            },
            {
                name: "Cleaning spray",
                type: "MATERIALS",
                salesDescription: "Cleaning spray",
                unitAmount: 2,
                saleCost: 20,
                subtotal: 40.0,
                taxTotal: 4.0,
                total: 44.0,
            },
        ],
        subtotal: 230.0,
        taxTotal: 23.0,
        total: 253.0,
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
                country: "Australia",
            },
            email: "doruk.guner@retrievercommunications.com",
            phone: null,
        },
    };
    it("should render successfully", () => {
        const { baseElement } = render(<DetailedHeader quote={quote} />);
        expect(baseElement).toBeTruthy();
    });
});
