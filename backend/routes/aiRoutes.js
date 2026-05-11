const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/generate", async (req, res) => {

  const { style } = req.body;

  const prompt =
    `Generate a ${style} bamboo furniture design`;

  try {

    const response = await client.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024"
    });

    res.json(response.data);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI Image Generation Failed"
    });

  }

});

module.exports = router;