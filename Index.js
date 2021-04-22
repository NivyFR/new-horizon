const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "!";

Client.on("ready",() => {
    console.log("bot opérationnel");
    Client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'le grand Nivy',
            type: 'WATCHING',
        }
    });
});

Client.on("guildMemberAdd", member => {
    console.log("Un nouveau membre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "829063478286614528").send("Bienvenue sur le discord de la guilde New Horìzon " + member.displayName + " !");
    member.roles.add("829029476720705617").then(mbr => {
        console.log("Rôle attribué avec succès pour " + mbr.displayName);
    }).catch(() => {
        console.log("Le rôle n'a pas pu être attribué pour " + mbr.displayName);
    });
});

Client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "829063478286614528").send(member.displayName + " vient de quitter le discord...");
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    //!café
    if(message.content == prefix + "café"){
        message.reply("voilà ton café ! :coffee:");
    }

    //!thé
    if(message.content == prefix + "thé"){
        message.reply("un petit thé ? :tea:");
    }

    //!nivy
    if(message.content == prefix + "nivy"){
        message.reply("tu es le meilleur ! :smirk:");
    }

});

Client.login(process.env.TOKEN);