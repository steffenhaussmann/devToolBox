describe("Beispiel-Test für DevToolbox", () => {
  it("prüft den Seitentitel", () => {
    cy.visit("http://localhost:4200");
    cy.title().should("eq", "DevToolbox"); // Titel deiner Seite prüfen
  });
});
