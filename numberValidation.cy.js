describe("South African Phone Number Validator", () => {
  it("Test Invalid > 10 digits South African phone number", () => {
    const phoneNumber = "+123456789001";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Invalid without +27 prefix - South African phone number", () => {
    const phoneNumber = "8888888888888888888";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Valid South African phone number", () => {
    const phoneNumber = "+27833331938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Invalid Characters a South African phone number", () => {
    const phoneNumber = "(+27)00000";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Valid without +27 prefix a South African phone number", () => {
    const phoneNumber = "0833331938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Invalid <10 Digits  South African phone number", () => {
    const phoneNumber = "083333162";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Valid Vodacom South African phone number", () => {
    const phoneNumber = "0833331938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Valid Telkom South African phone number", () => {
    const phoneNumber = "0833331938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });

  it("Test Valid Cell C South African phone number", () => {
    const phoneNumber = "0843331938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });
  it("Test Valid MTN South African phone number", () => {
    const phoneNumber = "+2833881938";
    cy.isValidateSAPhoneNumber(phoneNumber);
  });
});
