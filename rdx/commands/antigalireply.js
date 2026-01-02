/* 🔐 HARD NAME LOCK */
const __LOCK_NAME__ = "ARIF BABU";
const __LOCK_HASH__ = Buffer.from(__LOCK_NAME__).toString("base64");

module.exports.config = {
  name: "antigalireply",
  version: "1.2.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Bot abuses back if someone abuses the bot",
  usePrefix: false,
  commandCategory: "fun"
};

/* ❌ NAME / CREDITS LOCK CHECK */
try {
  const currentCredits = module.exports.config.credits;
  const currentHash = Buffer.from(currentCredits).toString("base64");
  if (currentHash !== __LOCK_HASH__) {
    throw new Error("LOCK");
  }
} catch (e) {
  module.exports.handleEvent = async () => {};
  module.exports.run = async () => {};
  return;
}

/* 🔒 OWNER UID (safe) */
const OWNER_UID = "100002392368552"; // apna UID daalo

/* 🚫 GALI WORDS (lowercase) */
const badWords = [
  "madarchod",  "behenchod",  "bhosdike", "bc", "tmkc", "bot bsdky", "bot teri maa ki chhut", "abby",  "chutiya",  "gandu",  "lund",  "loda",  "lawde",  "randi",  "bkl",  "mc",  "bc",  "fuck", "Teri maa ki", "gandu",  "fucker",  "bitch",  "shit"
];

/* 😈 BOT REPLIES */
const replyGali = [
  "😡 Zyada hero mat ban!",
 "😠 chal Nikal gandu!",
  "😂bkl oqat BNA baki pesh na kr!",
  "😘tu baji k Rishta Dena Chahta hai kiya mav!",
  "😏 Apni aukat me reh!",
  "😂 Khud pehle dekh le!",
  "🔥 Zyada mat bol warna bhool jayega!",
  "😈 Tameez seekh le pehle!",
"🙂🤔mane Suna Teri baji ki koi chut mar k chla GYA sach hai Kiya?!",
"😐Abby gandu chup 🤐 🤫 KR!",
"🙂 bsdky baji pesh na kr mujhe gali de gy",
  "🤡 Lagta hai dimaag ghar chhod ke aaya hai!",
  "👊 Keyboard ke piche sher mat ban!",
"TERI BEHEN KI IJAAT LUTU TERI BEHEN!",
"TERI BEHEN KO RANDI BNKAR CHODU",
"TERI BEHEN KO RANDI BNKAR CHODU!", "TERI BEHEN KI IJAAT LUTU TERI BEHEN!", "KO LODA CHUSAU TERI AMMI KI GAJB!", "CHUTT CHDOU TERI AMMI KI GULABI!", "CHUT ME LODA DALU TERI AMMI KI FATTI CHUT KA BOXDA BNAU!", "TERI AMMI KI MOTI CHUCHI PAR LODA JHADU!", "TERI AMMI KI CHUT ME LODA JHADU", "TERI AMMI KE MUH ME LODA JHAADU!", "TERI AMMI KO LUND CHUSAU!", "TERI AMMI KI KALI GAND MARU!", "TERI AMMI KI CHUT NAMAK LGAKAR CHODU!", "TERI AMMI KI BAASI CHUT ME LAL MIRCH DALU!", "TERI AMMI KI PYAASI CHUT KI PYAAS BUJHAU!", "TERI AMMI KI CHUTT KA TINNA KAATU!", "TERI AMMI KO RANDI KHANE ME LEJAR CHODU!", "TERI AMMI KO LUND CHUSAA CHUSAA KAR CHODU!", "TERI AMMI KI CHUT ME UNGLI DALU!", "TERI AMMI KI CHUT KA BOXDA BNAU!", "TERI AMMI KI CHUT PAR LAAT MARU", "TERI AMMI KI CHUT PAR CHAPPAL MARU", "TERI AMMI KI CHUT OYO ME LEJAR CHODU", "TERI AMMI KI NASILI CHUT CHODU", "TERI AMMI KO JUNGLE ME LEJKAR CHODU", "TERE BAJI KI GAND MARU", "TERE BAJI KO LODA CHUSAU", "TERE BAJI KI GAND ME LODA JHADU",  "MADER CHOD HE BOXDE KA BAJI KI GAND AK CHODEGE TU APNI GAND AK SE MARWATA HAI MC"

];

/* 🧠 Word boundary check */
function hasBadWord(msg) {
  return badWords.some(word => {
    const r = new RegExp(`(^|\\s)${word}(\\s|$)`, "i");
    return r.test(msg);
  });
}

module.exports.handleEvent = async function ({ api, event, Users }) {
  try {
    if (!event.body) return;

    const msg = event.body.toLowerCase().trim();
    const senderID = event.senderID;

    /* 🚫 COMMAND IGNORE */
    if (/^[\/!.#]/.test(msg)) return;

    /* OWNER SAFE */
    if (senderID === OWNER_UID) return;

    /* BAD WORD CHECK */
    if (!hasBadWord(msg)) return;

    const randomReply =
      replyGali[Math.floor(Math.random() * replyGali.length)];

    const name = await Users.getNameUser(senderID);

    return api.sendMessage(
      `😠 ${name}\n${randomReply}\n\n— ARIF BABU`,
      event.threadID,
      event.messageID
    );

  } catch (e) {
    console.log("ANTIGALI-REPLY ERROR");
  }
};

module.exports.run = async function () {};