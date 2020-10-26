import Discord = require('discord.js');
const client = new Discord.Client();

/* UTILITY FUNCTIONS */
async function get_board_id(board_url : URL) : Promise<string> {
    board_url.pathname += '.json';
    board_url.search = "";
    var board_details = await fetch(board_url.toString());
    if(board_details.status !== 200) throw Error(await board_details.text());
    return (await board_details.json()).id;
}

function get_prefixes() : Array<string> {
    return ["E?"];
}

function * get_command(message : string) : Generator<string> {
    console.log(message);
    var parts = message.trim().split(" ");
    if(get_prefixes().includes(parts[0])) {
        parts.slice(1).forEach((item) => yield item);
    }
}

function post_and_update_trello_board(board_id : string, channel : string, guild : string) : void {
    client.channels.get();
}

/* BOT MAIN */
client.on('ready', () => {
    console.log('Proud Mary keep on burnin\'');
});

client.on("message", (message) => {
    if(!message.guild || message.author.bot) return;
    var args = get_command(message.content);

    switch(args.next().value) {
        case "setup": // E? setup <url>
            var board = get_board_id(args.next().value);
            message.reply("Setting up shop in this channel...");
            /* POST TRELLO BOARD */
            
            break;
        default:
            break;
    }
})

/* START */
client.login(process.env.DISCORD_TOKEN);