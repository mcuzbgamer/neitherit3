const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
 host:'ir.skyblock.uz',
 port: 25566,
 username: 'NETHERITE'
})
bot.on('messagestr', (message) => {
  if(message.includes("/log"))
  {
    bot.chat("/login 200506@@@")
  }
  

}


)

async function dig() {
  if (!bot.heldItem || !bot.heldItem.name.includes('pickaxe')) {
    var pickaxe = bot.inventory.items().filter(i => i.name.includes('pickaxe'))[0];
    if (pickaxe) await bot.equip(pickaxe, 'hand')
    if(!pickaxe) bot.quit();
  }
  var block = bot.blockAtCursor(6);
  if (!block) return setTimeout(function() {
    dig();
  }, 100);
  await bot.dig(block, 'ignore', 'raycast')
  dig()
}

bot.on('chat', (username, message) => {
  if(username=='MineCrafter') {
    if(message=='NETHERITE') {
      dig();
    }
  }
})
    bot.on('kicked', console.log)
bot.on('error', console.log)

bot.on('chat', (username, message) => {
    if (username === 'MineCrafter') {
    if (message.indexOf('!') !== -1) {
            var replacement = "!",
                toReplace = "",
                str = message

            str = str.replace(replacement, toReplace)
            bot.chat(str)
        }}})
