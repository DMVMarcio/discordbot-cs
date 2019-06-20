const {Command} = require('discordcs')

class ping extends Command{
    constructor(client){
        super(client, {
            command: 'ping',
            description: 'lantencia da api'
        })
        this.client = client
    }

    async startCommand(message, agrs){
        message.channel.send(`:ping_pong: Pong: **${parseInt(this.client.ping)}**ms`);
    }
}
module.exports = ping