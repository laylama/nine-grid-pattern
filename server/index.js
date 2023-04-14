const express = require('express');
const cors = require('cors');
const { Document, Packer, Paragraph } = require('docx');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/export', async (req, res) => {
  const { topic, questions, answers } = req.body;

  const doc = new Document();

  doc.addSection({
    children: [
      new Paragraph({ text: topic, heading: 'Heading1' }),
      ...questions.map((question, index) => new Paragraph({ text: `${index + 1}. ${question}` })),
      ...answers.map((answer, index) => new Paragraph({ text: `答案${index + 1}: ${answer}` })),
    ],
  });

  const buffer = await Packer.toBuffer(doc);

  res.setHeader('Content-Disposition', 'attachment; filename=export.docx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');

  res.send(buffer);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
