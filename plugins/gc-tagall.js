let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `➡️ Todos: ${pesan}`
let teks = `𝐋𝐎𝐒 𝐈𝐍𝐕𝐎𝐂𝐎 ♨️\n\n❏ ${oi}\n\n❏ ➡️ Mensaje :\n`
for (let mem of participants) {
teks += `ᘛ @${mem.id.split('@')[0]}\n`}
teks += `➥𝐂𝐨𝐬𝐩𝐫𝐢𝐭𝐞`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    
