var Opponents = [];

register("command", (arg1) => {
  if (arg1 == "clear"){
    ChatLib.chat("")
    ChatLib.chat("&7[&cM&aO&6C&7]&b Cleared previous opponents.");
    ChatLib.chat("")
    Opponents = [];
  }else if(arg1 == "show"){
    Opponents.forEach(player => {
      ChatLib.chat("")
      ChatLib.chat("&7[&cM&aO&6C&7]&b Opponent: " + player)
    });
    if(!Opponents.length){
      ChatLib.chat("")
      ChatLib.chat("&7[&cM&aO&6C&7]&4 ERROR | No Opponents found!")
      ChatLib.chat("")
    }
  }else{
    ChatLib.chat("")
    ChatLib.chat("&6&l-------------------&7[&cM&aO&6C&7]&4&l H E L P&6&l-------------------")
    ChatLib.chat("&c/moc (or) /moc help | Returns this help list.")
    ChatLib.chat("&c/moc clear          | Clears opponent list.")
    ChatLib.chat("&c/moc show           | Returns opponent list.")
    ChatLib.chat("&6&l-------------------&7[&cM&aO&6C&7]&4&l H E L P&6&l-------------------")
    ChatLib.chat("")
  }
}).setName("moc").setAliases("mmoc", "opponents", "oc");

register("chat", (name, event) => {
    ChatLib.chat("&7[&cM&aO&6C&7]&b Collected Opponent: &6" + name);
    Opponents.push(name)
  }).setCriteria("&r&e Opponent: &r&c${name}&r").setContains();
