
Cypress.Commands.add('isValidateSAPhoneNumber', (phoneNumber) => {
    const saPhoneNumberRegex = /^(?:\+27|27)|0[0-8][0-9]{8}$/;
  
    if (saPhoneNumberRegex.test(phoneNumber)) {
      cy.log(`Cellphone number ${phoneNumber} is a valid.`);
    } else {
      cy.log(`Cellphone number ${phoneNumber} is invalid.`);
    }
  });
  