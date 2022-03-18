let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat,`${pickRandom(global.shiraori)}`, m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = //i
handler.command = new RegExp
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.shiraori = [
'halo anjing',
'knp Ngentod',
'kak jalan yuk>_<',
'jangan ganggu Raffi lagi sibuk',
'bentar ewe dulu ama ilman',
'Raffi lagi Coly',
'Raffi Botz disini',
'Donasi dulu',
'Raffi pengen punya adik, tapi gk dibolehin ama Evania:(',
'bagi duit dulu/',
'Silahkan ketik .menu ya Anjing',
'Shiraori istirahat dulu',
]
