const discordcs = require('discordcs')
const config = require('./config.json')
const client = new discordcs.Client({
    prefixes: config.prefix,
    token: config.token,
    readylib: true
})

client.on('ready', () =>{
    client.CommandsRegister.registerCommands(__dirname+'/./commands')
    client.user.setPresence({ game: { name: 'DiscordCS', type: 0 } })
    console.log(`- ${client.user.tag}`)
})