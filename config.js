const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jcvLxGhzf3aBBkP"
ALIVE_IMG : process.env.ALIVE_IMG || "https://i.ibb.co/Mx6XkM91/1c8e9724cdae1199.jpg",
ALIVE_MSG : process.env.ALIVE_MSG || "*🤖𝐇𝐞𝐲 𝐈'𝐦 💃𝐇𝐞𝐥𝐚 𝐗 𝐌𝐝 🤍 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰🎠*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ¢увєя ƒяσℓуᵀᴹ",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
