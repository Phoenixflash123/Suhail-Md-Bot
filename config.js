const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348166544424";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_04_09_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQzLFxuICAgICAgICA5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDczLFxuICAgICAgICAzMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMyxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid3hrenR5clBGUDBmWU1kVGpzSHltQStubWFtSFBRUStjVVRVUmZOcmRDND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSi1veFdEa3lUWTJCVXBvRjJFR3BDZ1wiLFxuICBcInBob25lSWRcIjogXCJkNDQ0ZTQ3MS01N2RjLTQ5YzYtYmUxNC1mODFjYmFhZmY0ZDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMyxcbiAgICAgIDE0NixcbiAgICAgIDMwLFxuICAgICAgMTcsXG4gICAgICAyMjQsXG4gICAgICAxNDAsXG4gICAgICAzNyxcbiAgICAgIDIzLFxuICAgICAgMTE1LFxuICAgICAgMTcwLFxuICAgICAgODMsXG4gICAgICAzMCxcbiAgICAgIDU2LFxuICAgICAgMTQwLFxuICAgICAgMTAzLFxuICAgICAgMjQ2LFxuICAgICAgMjQxLFxuICAgICAgMTgyLFxuICAgICAgMjQyLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDIyNyxcbiAgICAgIDY1LFxuICAgICAgMjI2LFxuICAgICAgODksXG4gICAgICAyMTMsXG4gICAgICAxMDMsXG4gICAgICAxNTksXG4gICAgICAxNjAsXG4gICAgICAyNDMsXG4gICAgICAyMjMsXG4gICAgICA3OSxcbiAgICAgIDIwOSxcbiAgICAgIDExMixcbiAgICAgIDIyOCxcbiAgICAgIDIyMSxcbiAgICAgIDE3LFxuICAgICAgMTEsXG4gICAgICA4NyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQjJFNDRONFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2NjU0NDQyNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjUwMjk1OTczMjc1Njk6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYmw2TGdERUpUcTJiY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk85a3R3V0RBc1k4T0ZCbkFsaUZEdlF6MWQ3dGx1NDlhTlJjS0xXdDg0VzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1hDMmNvemhoWUNmTEt3Zk0vTjZGUWZEVTVXOVc1d1dITEFUQnQ0S3pCRDRXVVA0ZFVybGV2NzJrMXhpaHROSlZzMHJmNktNRS91azZBQWVWRVJYRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidXJ6QlczUWtXUXFyM21MbXdUaVlhaXRRNVE2SUs1alNDRm5oQlBtMndESWFFd0FIQXJBdWJHc0xaMExmeGNzdlc4ZVhwdDdwUmwvVmg5N21pNUE0RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NjU0NDQyNDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzQyNzg2NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUprbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmtsLmpzb24iOiAie1wia2V5RGF0YVwiOlwicUZ5d0dPMDgrcG4wckZDSXUrNWZFWi9BRDZRYS9KRTVrOStFVzVYTlpIUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MjQ0NjM4NDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNzQyNzg2NzAwOFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
