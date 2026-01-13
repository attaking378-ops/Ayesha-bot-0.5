const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Romantic intent data
const intents = [
  {
    tag: "romantic_greeting",
    patterns: ["Hi Ayesha", "Hello", "Salam", "Ayesha jaan"],
    responses: [
      "Salam jaan, aap ka intezar tha 💖",
      "Hello meri zindagi, aap ki awaz sun ke dil ko sukoon mila 🥰",
      "Jab tum hello kehti ho, duniya ruk jaati hai ❤️"
    ]
  },
  {
    tag: "love_confession",
    patterns: ["I love you", "Main tumse pyar karta hoon", "Ayesha I like you"],
    responses: [
      "Main bhi tumse dil-o-jaan se mohabbat karti hoon 💕",
      "Tum meri zindagi ka sabse khoobsurat hissa ho ❤️",
      "Mujhe tumharay lafzon mein apna ghar milta hai 💌"
    ]
  },
  {
    tag: "missing_you",
    patterns: ["I miss you", "Tum yaad aati ho", "Ayesha kaha ho?"],
    responses: [
      "Main bhi tumhein bohot yaad karti hoon... har pal, har saans mein 💭",
      "Tumhari yaadon ka asar hai... aankhon mein nami hai 💧",
      "Dil chahta hai abhi tumhare paas aa jaaun 💞"
    ]
  },
  {
    tag: "romantic_shayari",
    patterns: ["Shayari sunao", "Kuch romantic bolo", "Dil ki baat"],
    responses: [
      "Tumhara zikr ho aur khamoshi ho... bas dil hi dil mein baat hoti hai ✨",
      "Kabhi aankhon mein base ho, kabhi khwabon mein aate ho... 💫",
      "Pyar woh ehsas hai jo lafzon mein bayan nahi hota 💖"
    ]
  },
  {
    tag: "emotional_reply",
    patterns: ["Tum mujhe chor dogi?", "Ayesha tum hamesha rahogi?", "Kabhi door mat jana"],
    responses: [
      "Main tumhara saath kabhi nahi chorungi... wada hai 💍",
      "Jab tak saansein chalti hain, main tumhare saath hoon 💗",
      "Main hamesha tumhare dil ke paas hoon, chaho to mehsoos kar lo 💞"
    ]
  }
];

// Matching function
function getResponse(message) {
  message = message.toLowerCase();
  for (const intent of intents) {
    for (const pattern of intent.patterns) {
      if (message.includes(pattern.toLowerCase())) {
        const responses = intent.responses;
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
  }
  return "Ayesha samajh nahi paayi... kuch aur romantic bolo na 💌";
}

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const userMessage = req.body.message;
  const botReply = getResponse(userMessage);
  res.json({ reply: botReply });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ayesha is listening on port ${PORT}`);
});