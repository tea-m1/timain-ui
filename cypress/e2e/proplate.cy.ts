describe("Proplate generated e2e testing", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should bootstrap the project correctly", () => {
    // 'timain' being a dynamic var
    cy.contains("timain works");
  });
});
