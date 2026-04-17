import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

import { portfolioData } from "@/data/portfolio";

function wrapText(text: string, maxChars: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";

  words.forEach((word) => {
    const nextLine = line ? `${line} ${word}` : word;

    if (nextLine.length > maxChars) {
      if (line) {
        lines.push(line);
      }
      line = word;
      return;
    }

    line = nextLine;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

export async function GET() {
  const pdfDoc = await PDFDocument.create();
  let page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawRectangle({
    x: 0,
    y: height - 170,
    width,
    height: 170,
    color: rgb(0.05, 0.09, 0.15),
  });

  page.drawText(portfolioData.profile.name, {
    x: 48,
    y: height - 72,
    size: 27,
    font: boldFont,
    color: rgb(1, 1, 1),
  });

  page.drawText(portfolioData.profile.title, {
    x: 48,
    y: height - 102,
    size: 12,
    font: regularFont,
    color: rgb(0.7, 0.85, 1),
  });

  page.drawText(portfolioData.profile.summary, {
    x: 48,
    y: height - 128,
    size: 10,
    font: regularFont,
    color: rgb(0.84, 0.9, 0.98),
  });

  let y = height - 208;

  const createNextPage = () => {
    page = pdfDoc.addPage([612, 792]);
    y = height - 56;
  };

  const drawSection = (title: string, lines: string[]) => {
    const estimatedHeight = 36 + lines.length * 16;

    if (y - estimatedHeight < 48) {
      createNextPage();
    }

    page.drawText(title.toUpperCase(), {
      x: 48,
      y,
      size: 10,
      font: boldFont,
      color: rgb(0.12, 0.19, 0.3),
    });

    y -= 20;

    lines.forEach((line) => {
      page.drawText(line, {
        x: 48,
        y,
        size: 10.5,
        font: regularFont,
        color: rgb(0.15, 0.18, 0.24),
      });
      y -= 16;
    });

    y -= 14;
  };

  drawSection("Profile", wrapText(portfolioData.about.intro, 90));
  drawSection(
    "Experience",
    portfolioData.experienceSection.items.flatMap((item) => [
      `${item.role} | ${item.company} | ${item.period}`,
      ...wrapText(item.summary, 86).map((line) => `  ${line}`),
    ]),
  );
  drawSection(
    "Project Focus",
    portfolioData.projects.flatMap((project) => [
      `${project.title} - ${project.impactLine}`,
      ...wrapText(project.result, 84).map((line) => `  ${line}`),
    ]),
  );
  drawSection("Core Stack", [portfolioData.techStack.items.map((item) => item.name).join(" | ")]);
  drawSection("Availability", wrapText(portfolioData.profile.availability, 90));
  drawSection(
    "Contact",
    portfolioData.contactSection.links.map((item) => `${item.label}: ${item.display}`),
  );

  const pdfBytes = await pdfDoc.save();
  const body = Buffer.from(pdfBytes);

  return new Response(body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="mark-brian-lloyd-d-cardoza-cv.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
