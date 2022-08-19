
const fs = require("fs")
const chalk = require("chalk")
/*Ubah Nama & Dll Cukup Dari sini(Udah Di set biar smua nama & wm Bisa diubah dari sini) 
Biar Newbie Gapusing ubah nama² 
Other*/
global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/thumb.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6289531704997','6281646829895','6285624823115']
//-[Dari sini]
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 
//-[Sampai sini jangan di otak atik]
global.footer = "Alfarabotz"
global.fake = "Alfarabotz"
global.namebot = "Alfarabotz"
global.packname = "Rhapsody"
global.packname2 = "BY Irfaan ~ Abdul Hafiizh"
global.author = "Irfaan Official"
global.email = "irfaanabdulhafidzh10@gmail.com"
global.game = "Rhapsody Game"
global.nameown = "©Irfaan Official"
global.resultwibu = "Nih kak Resultnya, Dasar Wibu"
global.nameyt = "HimHia Channel"
global.instagram = "irfaanabdulhafizh"
global.sessionName = "session"
global.linkgrupss = "https://chat.whatsapp.com/JoOb7t2PVMv08w4dlfwJBH"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
