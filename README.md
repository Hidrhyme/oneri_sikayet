# Merhabalar!

• Ben Hidrhyme   

• Ne kadar basit bir bot olsa da yapamayan veya destek almak isteyen arkadaşlar kullanabilir.

• v12 Öneri Şikayet Botu

-- Kullanımı --

• Main dosyası yani "öneri.js" de yapacağınız bir şey bulunmamaktadır herşeyi "config.json" dan ayarlayabilirsiniz.

• Bota dm den gelicek mesajları "config.json" dan ayarladığınız log kanalına atar.

• İsterseniz botu "config.json" da bulunan "SesKanalı" kısmının önüne botu istediğiniz ses kanalının id' sini girerek botu sese geçirebilirsiniz.

• Botu Ses'e geçirmek istemiyorsanız "config.json" dan "SesKanalı" kısmını ve "events" dosyasının içinde bulunan "ready.js" den "let channel = client.channels.cache.get(config.SesKanalı); channel.join()" kısmını silerek botun vericeği hatayı önleyebilirsiniz.

• Botu mobil görünümünden çıkarmak için "öneri.js" de bulunan ' Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android" ' bulunan kısmı silerek ve "config.json" da bulunan "ReadyStatus" kısmı değiştirebilirsiniz.

-- Yüklemeniz Gereken Modüller --

• npm i discord.js@12.5.1 --save

• npm i chalk

• npm i moment

-- Discord Sunucumuz --

• Sınırsız Linki (discord.gg/Eq6VacJ9az)
