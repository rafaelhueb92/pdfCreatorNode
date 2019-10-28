const PDFKit = require("pdfkit");
const fs = require("fs");
require("dotenv/config");
const pdf = new PDFKit();

pdf
  //.font("Verdana")
  .fontSize("13")
  .fillColor("#6155a4")
  .text("Título", {
    align: "center"
  });

pdf.text(`Autor:${process.env.AUTHOR}`, {
  align: "left"
});

pdf.image("src/images/images.jpg", 300, 300);

pdf.pipe(fs.createWriteStream("output.pdf"));
pdf.end();
