// by https://github.com/elrebelde21
 
let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"5215625060788@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "5215625060788@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;

if (/^menu de ventas|menú de ventas|Compra|Comprar bot|ventas$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Descubre nuestra increíble selección! 🤖✨ 

CapiBot Premium 💥 
Bot personalizado 🎨
Chatbot 💬
Hosting para tus bots! 🌐💼

Para obtener más información, sólo escribe el que te interesa

Ejemplo: Chatbot

 ¡Haz tu elección y lleva tu experiencia al siguiente nivel! 🚀`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^capi bot|capibot|capi$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Descubre CapiBot Premium! 💼🌟 Especialmente diseñado para potenciar tus grupos de Ventas. 🛍️ Los comandos más comunes incluyen stickers, menciones, bienvenidas, despedidas, música y juegos. 🎶🎮 ¡Un Bot activo las 24 horas, los 7 días de la semana! 🕒

¡Todo esto por un precio increíble! 💼🌟 Solo 50 MXN al mes, ¡y con soporte 24/7! 💰🔒`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^disney|disneyplus|disney+$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Descubre CapiBot Ventas! 🤖✨ Especialmente diseñado para potenciar tus grupos de Ventas. 🛍️ Los comandos más comunes incluyen stickers, menciones, bienvenidas, despedidas, música y juegos. 🎶🎮 ¡Un Bot activo las 24 horas, los 7 días de la semana! 🕒

¡Todo esto por un precio increíble! 💼🌟 ventas de plataformas de disney disponibles y su precio por cuenta es $60 mxn al mes, ¡y con garantía! 💰🔒`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^ventas de net|netflix|net$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Descubre Capibot Ventas! 💼🌟Especialmente diseñado para potenciar tus grupos de Ventas. 🛍️ Los comandos más comunes incluyen stickers, menciones, bienvenidas, despedidas, música y juegos. 🎶🎮 ¡Un Bot activo las 24 horas, los 7 días de la semana! 🕒

¡Todo esto por un precio increíble! 💼🌟 Netflix completa a Solo 160 MXN o perfíl a 60 MXN al mes, ¡y con garantía! 💰🔒`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^bot personalizado|botpersonalizado|personalizado$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Obtén tu bot personalizado ahora mismo! 🤖✨ Con nuestro servicio, puedes editar el bot a tu gusto 👅 ¡Cambia su nombre, la foto del menú y tu número como dueño! ¡incluso obtienes 1 semana de host gratis! 🎉

Todo esto por un increíble precio de 250 MXN(pago unico) y para rentar host por tan solo desde 100 MXN al mes. 💼💰 ¡No te lo pierdas!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^chatbot|chat bot|ventas bot|ventasbot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Haz que tus ventas sean más fáciles que nunca con nuestro ChatBot! 💬🛍️ Diseñado para que puedas hacer tus ventas de manera autónoma. ¡Solo envía la información de tus productos y deja que haga todo el trabajo por ti! 🌟

¡Todo esto por solo 250 MXN (pago unico)! 💼💰 ¡No esperes más para simplificar tu proceso de ventas!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^host|hosting|hosting para tus bots$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Optimiza el rendimiento de tu bot con nuestro Hosting! 🌐🚀 ¡Mantén tu bot funcionando sin interrupciones y siempre en la cima! 🥇

🔹 Plan 1: 100 MXN
- 1GB de RAM
- 3 GB de disco
- 150% de CPU

🔹 Plan 2: 160 MXN
- 2 GB de RAM
- 5 GB de disco
- 200% de CPU

🔹 Plan 3: 220 MXN
- 4 GB de RAM
- 10 GB de disco
- 300% de CPU

¡Elige el plan que se adapte mejor a tus necesidades y lleva tu bot al siguiente nivel! 💼💥`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^capi bot|capiybot|capi$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^disney|disneyplus|disney+$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^venta de net|netflix|net$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^bot personalizado|botpersonalizado|personalizado$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}
if (/^chatbot|chat bot|ventas bot|ventasbot$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^host|hosting|hosting para tus bots$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Decide ahora mismo! 🛍️🎉 ¿Quieres continuar con la compra? ¡Entonces escribe "¡Lo quiero!" 🌟 ¿No estás listo todavía? No hay problema, simplemente pon "En este momento no" 🙅‍♂️ ¡Tú decides!`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^¡Lo quiero!|lo quiero$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Selecciona tu método de pago por favor:
México🇲🇽
Paypal🇺🇸`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^en este momento no|ahora no|no gracias$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡Gracias por tu interés en nuestro producto! Si necesitas ayuda o tienes alguna pregunta en el futuro, ¡no dudes en contactarnos! Estamos aquí para ayudarte en lo que necesites. 🚀🙌`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¡No te pierdas! 💳 Para nuestros amigos en México, aceptamos pagos a través de Banco BBVA. 🇲🇽 ¡Aquí tienes los detalles: 4152 3142 0627 5300 a nombre de Anthony Mendivil! 🎉 Recuerda incluir "Pago Bot" en el concepto.`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paypal|estados unidos🇺🇸|🇺🇸|estados unidos$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`¿Estás en otro lugar del mundo? ¡No te preocupes! 💼 Aceptamos PayPal. 🌎 Simplemente haz clic en este enlace para más información con mi creador:
https://www.wa.me/5215625060788`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^mexico|méxico|mexico🇲🇽|méxico🇲🇽|🇲🇽$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*Una vez que hayas completado tu transferencia, ¡envía una foto del pago y mi dueño te atenderá en un abrir y cerrar de ojos! 📸✨*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^paypal|estados unidos🇺🇸|🇺🇸|estados unidos$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`*Una vez que hayas completado tu transferencia, ¡envía una foto del pago y mi dueño te atenderá en un abrir y cerrar de ojos! 📸✨*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^¿que es un bot?|Que es un bot$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩?::☆
┆——————«•»——————
┆ 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬
┆ 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
┆ 𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 
┆ 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 
┆ 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 
┆ 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
┆ 𝐏𝐚𝐫𝐚 𝐯𝐞𝐫 𝐞𝐥 𝐦𝐞𝐧𝐮́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
┆ 
┆ 「 CapiBot 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}