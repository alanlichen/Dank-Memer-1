exports.handle = async function (msg) {
  if (!msg.content || msg.embeds[0]) {
    return
  }
  this.redis.setAsync(`${msg.channel.guild.id}-${msg.channel.id}`, JSON.stringify({ userID: msg.author.id, content: msg.content, timestamp: msg.timestamp }), 'EX', 60 * 60)
}
