
describe("List", ()=>{
  beforeEach(()=>{
    cy.visit("/pages/layout/list")
    cy.get('nb-card.list-card').filter(':contains("Some Fruits")').as("container")
  })

  it("should contain particular item", ()=>{
    cy.get("@container").contains("Raspberries").should("be.visible")
  })

  it("should contain valid items", ()=>{
    const expectedFruits = [
      "Lemons",
      "Raspberries",
      "Strawberries",
      "Blackberries",
      "Kiwis",
      "Grapefruit",
      "Avocado",
      "Watermelon",
      "Cantaloupe",
      "Oranges",
      "Peaches"
    ]

    cy.get("@container").find("nb-list-item").as("items")
    cy.get("@items").should("have.length", 11)


    cy.get("@items").then(($elements)=>{
      const actualFruits = []

      cy.wrap($elements).each(($el)=>{
        const text = $el.text()
        actualFruits.push(text.trim())
      }).then(()=>{
        expect(expectedFruits).to.deep.equal(actualFruits)
      })
    })
  })

  it("should contain valid items 2", ()=>{
    const expectedFruits = [
      "Lemons",
      "Raspberries",
      "Strawberries",
      "Blackberries",
      "Kiwis",
      "Grapefruit",
      "Avocado",
      "Watermelon",
      "Cantaloupe",
      "Oranges",
      "Peaches"
    ]

    cy.get("@container").find("nb-list-item").should("have.length", 11).then(($elements)=>{
      const actualFruits = $elements.map((_, el) => Cypress.$(el).text().trim()).get()
      expect(expectedFruits).to.deep.equal(actualFruits)
    })
  })
})
