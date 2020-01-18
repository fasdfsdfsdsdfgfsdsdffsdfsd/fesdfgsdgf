const Discord = require("discord.js");
const bot = new Discord.Client()
let prefix = "-"; // هنا العلامة الي قبل البداية

bot.on("ready", () => {
console.log(Logged in with name: ${bot.user.username})
bot.user.setGame(${prefix}bc | Brodcast., "https://twitch.tv/Erike#5662%22)
})

//StartCommands
bot.on("message", message => {
let messageArray = message.content.split(" ")
let content = messageArray.slice(prefix.length).join(" ")
let chat = messageArray[0].toLowerCase()
 if(message.author.id === bot.user.id) return;
 if(message.channel.type === "dm") return message.channel.send("Send command in server please")

  if(chat === prefix + "bc"){
  if(!content[0]) return message.reply("there is no brodcast to send :)")
  message.guild.members.forEach(member => {
  let messagecontent = ${message.guild.name} Brodcast ! \n \n------------- \n \n${content} \n \n------------- \n \nمع تحيات ادارة السيرفر لكم <3;
member.send(${messagecontent}).catch(console.error)

  })
return message.reply("Done ! its sended only for online users :)")
}

})
//EndCommands

bot.login("NjY3NDI1OTg5OTM2MTUyNjEw.XiJxxw.Tr7h5cdhVgMcCafju8KNZNJRVj8")
