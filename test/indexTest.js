require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("<table>", () => {
  it("exists in the HTML document", () => {
    // Find the table in the HTML
    const table = document.querySelector("table");
    const hint = "The document should have a <table> element";

    expect(table, hint).to.exist;
  });

  it("has five rows", () => {
    const table = document.querySelector("table");
    const hint = "Your <table> tag needs five <tr> tags, one for each row";

    expect(table, hint).to.have.descendants("tr").and.have.length(5);
  });

  it("has the correct headers", () => {
    const table = document.querySelector("table");
    const hint1 = "The first <tr> should have three <th> elements";
    expect(table, hint1).to.have.descendants("tr > th").and.have.length(3);

    const [header1, header2, header3] = table.querySelectorAll("tr > th");

    expect(header1).to.contain.text("City");
    expect(header2).to.contain.text("State");
    expect(header3).to.contain.text("2017 estimate");
  });

  it("has the correct information about New York City", () => {
    const nyRow = document.querySelectorAll("table tr")[1];

    const hint1 = "Each <tr> after the first should have three <td> elements";
    expect(nyRow, hint1).to.have.descendants("td").and.have.length(3);

    const [cell1, cell2, cell3] = nyRow.querySelectorAll("td");
    expect(cell1).to.contain.text("New York");
    expect(cell2).to.contain.text("New York");
    expect(cell3).to.contain.text("8,622,698");
  });

  it("has the correct information about Los Angeles", () => {
    const laRow = document.querySelectorAll("table tr")[2];

    const hint1 = "Each <tr> after the first should have three <td> elements";
    expect(laRow, hint1).to.have.descendants("td").and.have.length(3);

    const [cell1, cell2, cell3] = laRow.querySelectorAll("td");
    expect(cell1).to.contain.text("Los Angeles");
    expect(cell2).to.contain.text("California");
    expect(cell3).to.contain.text("3,999,759");
  });

  it("has the correct information about Chicago", () => {
    const chicagoRow = document.querySelectorAll("table tr")[3];

    const hint1 = "Each <tr> after the first should have three <td> elements";
    expect(chicagoRow, hint1).to.have.descendants("td").and.have.length(3);

    const [cell1, cell2, cell3] = chicagoRow.querySelectorAll("td");
    expect(cell1).to.contain.text("Chicago");
    expect(cell2).to.contain.text("Illinois");
    expect(cell3).to.contain.text("2,716,450");
  });

  it("has the correct information about Houston", () => {
    const houstonRow = document.querySelectorAll("table tr")[4];

    const hint1 = "Each <tr> after the first should have three <td> elements";
    expect(houstonRow, hint1).to.have.descendants("td").and.have.length(3);

    const [cell1, cell2, cell3] = houstonRow.querySelectorAll("td");
    expect(cell1).to.contain.text("Houston");
    expect(cell2).to.contain.text("Texas");
    expect(cell3).to.contain.text("2,312,717");
  });
});
