
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import { formatToCurrency, getAddressString } from "./Utils";

describe(' Util Functions', () => {
  it('should format to currency', () => {
    const testNumber = 7
    const testNumber2 = 15.5
    expect(formatToCurrency(testNumber)).toBe("7.50")
    expect(formatToCurrency(testNumber2)).toBe("15.50")
  })
  it('should sanitise address', () => {
    const address = {
      address1: "813 Pacific Hwy",
      address2: null,
      country: "Australia",
      postcode: "2067",
      state: "NSW",
      suburb: "Chatswood"}
    expect(getAddressString(address)).toBe("813 Pacific Hwy, Chatswood, NSW, 2067, Australia")
  })
})