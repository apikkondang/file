//text quiz
var bhs = lang;
        if(bhs == "ID")         var Q1 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗔𝗻𝗱𝗮 𝘀𝗲𝗿𝗶𝗻𝗴 𝗺𝘂𝗱𝗮𝗵 𝘁𝗲𝗿𝗮𝗻𝗴𝘀𝗮𝗻𝗴 𝗻𝗮𝗺𝘂𝗻 𝘀𝗲𝗿𝗶𝗻𝗴 𝗽𝘂𝗹𝗮 𝗺𝘂𝗻𝗰𝗿𝗮𝘁 𝗱𝘂𝗹𝘂𝗮𝗻❓"   
        else if(bhs == "MY")    var Q1 = "𝗔𝗽𝗮 𝗮𝘄𝗮𝗸 𝗺𝘂𝗱𝗮𝗵 𝘁𝗲𝗿𝗮𝗻𝗴𝘀𝗮𝗻𝗴/𝗻𝗴𝗲 𝗮𝗻𝗱 𝘀𝗲𝗻𝗮𝗻𝗴 𝗸𝗲𝗹𝘂𝗮𝗿 𝗮𝘄𝗮𝗹❓"          
        else if(bhs == "IN")    var Q1 = "तुम कितने साल के हो?"          
        else if(bhs == "TH")    var Q1 = "คุณต้องการที่จะรู้สึกมีความสุขทางเพศ แต่คุณถึงจุดสุดยอดอย่างรวดเร็ว?"          
        else if(bhs == "IT")    var Q1 = "Facile l'erezione, ma l'eiaculazione precoce spesso?"          
        else if(bhs == "RO")    var Q1 = "𝗩𝗿𝗲𝗶 𝘀𝗮̆ 𝘁𝗲 𝘀𝗶𝗺𝘁̗𝗶 𝗳𝗲𝗿𝗶𝗰𝗶𝘁 𝘀𝗲𝘅𝘂𝗮𝗹❓ 𝗗𝗮𝗿 𝗰𝘂𝗹𝗺𝗲𝗮 𝗿𝗲𝗽𝗲𝗱𝗲❓"    
        else if(bhs == "PL")    var Q1 = "Czy łatwo się podniecasz, ale często najpierw wytryskujesz❓"    
        else if(bhs == "ES")    var Q1 = "¿Te excitas fácilmente pero a menudo eyacula primero?"    
        else                    var Q1 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗔𝗻𝗱𝗮 𝘀𝗲𝗿𝗶𝗻𝗴 𝗺𝘂𝗱𝗮𝗵 𝘁𝗲𝗿𝗮𝗻𝗴𝘀𝗮𝗻𝗴 𝗻𝗮𝗺𝘂𝗻 𝘀𝗲𝗿𝗶𝗻𝗴 𝗽𝘂𝗹𝗮 𝗺𝘂𝗻𝗰𝗿𝗮𝘁 𝗱𝘂𝗹𝘂𝗮𝗻❓"    

        if(bhs == "ID")         var Q2 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗮𝗻𝗱𝗮 𝗯𝗲𝗿𝗮𝗻𝗴𝗴𝗮𝗽𝗮𝗻 𝗯𝗮𝗵𝘄𝗮 𝗻𝗶𝗸𝗺𝗮𝘁 𝘆𝗮𝗻𝗴 𝗻𝘂𝗺𝗽𝗮𝗻𝗴 𝗹𝗲𝘄𝗮𝘁 𝗮𝗱𝗮𝗹𝗮𝗵 𝗱𝗮𝗺𝗽𝗮𝗸 𝗱𝗮𝗿𝗶 𝗽𝗲𝗻𝗶𝘀 𝘆𝗮𝗻𝗴 𝗸𝘂𝗿𝗮𝗻𝗴 𝗽𝗮𝗻𝗷𝗮𝗻𝗴❓"
        else if(bhs == "MY")    var Q2 = "𝗔𝗱𝗮𝗸𝗮𝗵 𝗮𝘄𝗮𝗸 𝗯𝗲𝗿𝗮𝗻𝗴𝗴𝗮𝗽𝗮𝗻 𝘁𝗶𝗱𝗮𝗸 𝗻𝗶𝗸𝗺𝗮𝘁𝗻𝘆𝗮 𝗕𝗲𝗿𝗵𝘂𝗯𝘂𝗻𝗴𝗮𝗻 𝗯𝗮𝗱𝗮𝗻 𝘀𝗲𝗯𝗮𝗯 𝗭𝗮𝗸𝗮𝗿 𝘁𝗮𝗸 𝗽𝗮𝗻𝗷𝗮𝗻𝗴❓"          
        else if(bhs == "IN")    var Q2 = "क्या आप शादीशुदा हैं?"          
        else if(bhs == "TH")    var Q2 = "อวัยวะเพศของคุณสั้นไหม?"          
        else if(bhs == "IT")    var Q2 = "Pensi che l'emozione del momento è il risultato di un pene che è troppo breve?"          
        else if(bhs == "RO")    var Q2 = "𝗘𝘀𝘁𝗲 𝗽𝗲𝗻𝗶𝘀𝘂𝗹 𝘁𝗮̆𝘂 𝘀𝗰𝘂𝗿𝘁❓"  
        else if(bhs == "PL")    var Q2 = "Czy uważasz, że chwilowa przyjemność jest wynikiem zbyt krótkiego penisa❓"  
        else if(bhs == "ES")    var Q2 = "¿Crees que el placer momentáneo es el resultado de un pene demasiado corto?"  
        else                    var Q2 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗮𝗻𝗱𝗮 𝗯𝗲𝗿𝗮𝗻𝗴𝗴𝗮𝗽𝗮𝗻 𝗯𝗮𝗵𝘄𝗮 𝗻𝗶𝗸𝗺𝗮𝘁 𝘆𝗮𝗻𝗴 𝗻𝘂𝗺𝗽𝗮𝗻𝗴 𝗹𝗲𝘄𝗮𝘁 𝗮𝗱𝗮𝗹𝗮𝗵 𝗱𝗮𝗺𝗽𝗮𝗸 𝗱𝗮𝗿𝗶 𝗽𝗲𝗻𝗶𝘀 𝘆𝗮𝗻𝗴 𝗸𝘂𝗿𝗮𝗻𝗴 𝗽𝗮𝗻𝗷𝗮𝗻𝗴❓"    
        
        if(bhs == "ID")         var Q3 = "𝗦𝗲𝘁𝘂𝗷𝘂𝗸𝗮𝗵 𝗔𝗻𝗱𝗮 𝗯𝗮𝗵𝘄𝗮 𝗽𝗲𝗻𝗶𝘀 𝘆𝗮𝗻𝗴 𝗯𝗲𝘀𝗮𝗿 𝗸𝘂𝗮𝘁 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝗮𝗸𝗮𝗻 𝗹𝗲𝗯𝗶𝗵 𝗺𝗮𝗺𝗽𝘂 𝗺𝗲𝗺𝘂𝗮𝘀𝗸𝗮𝗻 𝘃𝗮𝗴𝗶𝗻𝗮 𝘆𝗮𝗻𝗴 𝗸𝗲𝗹𝗮𝗽𝗮𝗿𝗮𝗻❓"
        else if(bhs == "MY")    var Q3 = "𝗦𝗲𝘁𝘂𝗷𝘂 𝗸𝗮𝗵 𝗮𝘄𝗮𝗸 𝗭𝗮𝗸𝗮𝗿 𝘆𝗮𝗻𝗴 𝗯𝗲𝘀𝗮𝗿 𝗸𝘂𝗮𝘁 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝗱𝗮𝗽𝗮𝘁 𝗯𝘂𝗮𝘁 𝗻𝗶𝗸𝗺𝗮𝘁 𝘃𝗮𝗴𝗶𝗻𝗮 𝘆𝗮𝗻𝗴 𝘁𝗲𝗻𝗴𝗮𝗵 𝗵𝗮𝘂𝘀 𝘀𝗲𝘅❓"          
        else if(bhs == "IN")    var Q3 = "क्या आप सहमत हैं कि यदि  <br/> बड़ा और लंबा लिंग <br/> बेहतर योनि को संतुष्ट?"          
        else if(bhs == "TH")    var Q3 = "คุณเห็นด้วยไหมถ้าอวัยวะเพศชายใหญ่แข็งแรงและยาว ทำให้ช่องคลอดมีความพึงพอใจมากขึ้นไหม?"          
        else if(bhs == "IT")    var Q3 = "Sei d'accordo se il pene è grande, forte e lunga? Farà la vagina più soddisfatti?"          
        else if(bhs == "RO")    var Q3 = "𝗦𝘂𝗻𝘁𝗲𝘁̗𝗶 𝗱𝗲 𝗮𝗰𝗼𝗿𝗱 𝗱𝗮𝗰𝗮̆ 𝗽𝗲𝗻𝗶𝘀𝘂𝗹 𝗲𝘀𝘁𝗲 𝗺𝗮𝗿𝗲, 𝗽𝘂𝘁𝗲𝗿𝗻𝗶𝗰 𝘀̗𝗶 𝗹𝘂𝗻𝗴❓ 𝗙𝗮𝗰𝗲𝘁̗𝗶 𝘃𝗮𝗴𝗶𝗻𝘂𝗹 𝗺𝗮𝗶 𝘀𝗮𝘁𝗶𝘀𝗳𝗮̆𝗰𝘂𝘁❓"
        else if(bhs == "PL")    var Q3 = "Czy zgodziłabyś się, że duży, silny i długi penis jest w stanie lepiej zaspokoić głodną pochwę❓"
        else if(bhs == "ES")    var Q3 = "¿Estaría de acuerdo en que un pene grande, fuerte y largo puede satisfacer mejor una vagina hambrienta?"
        else                    var Q3 = "𝗦𝗲𝘁𝘂𝗷𝘂𝗸𝗮𝗵 𝗔𝗻𝗱𝗮 𝗯𝗮𝗵𝘄𝗮 𝗽𝗲𝗻𝗶𝘀 𝘆𝗮𝗻𝗴 𝗯𝗲𝘀𝗮𝗿 𝗸𝘂𝗮𝘁 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝗮𝗸𝗮𝗻 𝗹𝗲𝗯𝗶𝗵 𝗺𝗮𝗺𝗽𝘂 𝗺𝗲𝗺𝘂𝗮𝘀𝗸𝗮𝗻 𝘃𝗮𝗴𝗶𝗻𝗮 𝘆𝗮𝗻𝗴 𝗸𝗲𝗹𝗮𝗽𝗮𝗿𝗮𝗻❓"    

        if(bhs == "ID")         var Q4 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗮𝗻𝗱𝗮 𝘀𝗲𝗻𝗮𝗻𝗴 𝗷𝗶𝗸𝗮 𝘂𝗸𝘂𝗿𝗮𝗻 𝗽𝗲𝗻𝗶𝘀 𝗔𝗻𝗱𝗮 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗯𝗲𝘀𝗮𝗿 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝘀𝗲𝗰𝗮𝗿𝗮 𝗽𝗲𝗿𝗺𝗮𝗻𝗲𝗻❓"
        else if(bhs == "MY")    var Q4 = "𝗔𝗱𝗮𝗸𝗮𝗵 𝗮𝘄𝗮𝗸 𝗵𝗮𝗽𝗽𝘆 𝗷𝗶𝗸𝗮 𝘀𝗶𝘇𝗲 𝗭𝗮𝗸𝗮𝗿 𝗮𝘄𝗮𝗸 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝘀𝗲𝗹𝗮𝗺𝗮 𝗹𝗮𝗺𝗮 / 𝗽𝗲𝗿𝗺𝗮𝗻𝗲𝗻❓"          
        else if(bhs == "IN")    var Q4 = "क्या आप खुश हैं अगर आपका लिंग बन जाता है<br/> बड़ा, लंबा, और मजबूत टिकाऊ?"          
        else if(bhs == "TH")    var Q4 = "คุณมีความสุขไหมถ้าอวัยวะเพศของคุณใหญ่ขึ้นเรื่อย ๆ ?"          
        else if(bhs == "IT")    var Q4 = "Sei felice se il vostro pene allargata?"          
        else if(bhs == "RO")    var Q4 = "𝗘𝘀̗𝘁𝗶 𝗳𝗲𝗿𝗶𝗰𝗶𝘁 𝗱𝗮𝗰𝗮̆ 𝗽𝗲𝗻𝗶𝘀𝘂𝗹 𝘁𝗮̆𝘂 𝗲𝘀𝘁𝗲 𝗱𝗶𝗻 𝗰𝗲 𝗶̂𝗻 𝗰𝗲 𝗺𝗮𝗶 𝗺𝗮𝗿𝗲❓"
        else if(bhs == "PL")    var Q4 = "Czy chciałbyś, żeby twój penis był trwale większy i dłuższy❓"
        else if(bhs == "ES")    var Q4 = "¿Le gustaría que su pene fuera permanentemente más grande y más largo?"
        else                    var Q4 = "𝗔𝗽𝗮𝗸𝗮𝗵 𝗮𝗻𝗱𝗮 𝘀𝗲𝗻𝗮𝗻𝗴 𝗷𝗶𝗸𝗮 𝘂𝗸𝘂𝗿𝗮𝗻 𝗽𝗲𝗻𝗶𝘀 𝗔𝗻𝗱𝗮 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗯𝗲𝘀𝗮𝗿 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝘀𝗲𝗰𝗮𝗿𝗮 𝗽𝗲𝗿𝗺𝗮𝗻𝗲𝗻❓"    

        if(bhs == "ID")         var Q5 = "𝗦𝗮𝗮𝘁 𝗽𝗲𝗻𝗶𝘀 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗯𝗲𝘀𝗮𝗿, 𝗯𝗲𝗿𝘀𝗲𝗱𝗶𝗮𝗸𝗮𝗵 𝗸𝗮𝗺𝘂 𝘂𝗻𝘁𝘂𝗸 𝘁𝗶𝗱𝗮𝗸 𝗺𝗲𝗻𝘆𝗮𝗹𝗮𝗵𝗴𝘂𝗻𝗮𝗸𝗮𝗻𝗻𝘆𝗮❓"
        else if(bhs == "MY")    var Q5 = "𝗠𝗮𝘀𝘀𝗮 𝗭𝗮𝗸𝗮𝗿 𝗮𝘄𝗮𝗸 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗯𝗲𝘀𝗮𝗿 𝗱𝗮𝗻 𝗽𝗮𝗻𝗷𝗮𝗻𝗴 𝗯𝗲𝗿𝘀𝗲𝗱𝗶𝗮 𝗸𝗮𝗵 𝗮𝘄𝗮𝗸 𝗮𝗴𝗮𝗿 𝗮𝘄𝗮𝗸 𝘁𝗮𝗸 𝗺𝗲𝗻𝘆𝗮𝗹𝗮𝗵𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗱𝗶𝗮❓"          
        else if(bhs == "IN")    var Q5 = "जब आप एक बड़े और लंबे लिंग के होने में सफल होते हैं <br/> कृपया मुझे वादा करो <br/> आप इसका दुरुपयोग नहीं करेंगे"          
        else if(bhs == "TH")    var Q5 = "เมื่อองคชาตของคุณใหญ่ขึ้น โปรดอย่าใช้มันในทางที่ผิด!"          
        else if(bhs == "IT")    var Q5 = "Quando i vostri ingrandisce pene, per favore non abusare!"          
        else if(bhs == "RO")    var Q5 = "𝗣𝗲 𝗺𝗮̆𝘀𝘂𝗿𝗮̆ 𝗰𝗲 𝗽𝗲𝗻𝗶𝘀𝘂𝗹 𝘁𝗮̆𝘂 𝗱𝗲𝘃𝗶𝗻𝗲 𝗺𝗮𝗶 𝗺𝗮𝗿𝗲 𝗩𝗮̆ 𝗿𝘂𝗴𝗮̆𝗺 𝘀𝗮̆ 𝗻𝘂-𝗹 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝘁̗𝗶 𝗶̂𝗻 𝗺𝗼𝗱 𝗴𝗿𝗲𝘀̗𝗶𝘁❗"
        else if(bhs == "PL")    var Q5 = "Kiedy twój penis jest duży, obiecaj, że go nie nadużyjesz❓❗"
        else if(bhs == "ES")    var Q5 = "Cuando tu pene sea grande, promete no abusar de él."
        else                    var Q5 = "𝗦𝗮𝗮𝘁 𝗽𝗲𝗻𝗶𝘀 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝘁𝗮𝗺𝗯𝗮𝗵 𝗯𝗲𝘀𝗮𝗿, 𝗯𝗲𝗿𝘀𝗲𝗱𝗶𝗮𝗸𝗮𝗵 𝗸𝗮𝗺𝘂 𝘂𝗻𝘁𝘂𝗸 𝘁𝗶𝗱𝗮𝗸 𝗺𝗲𝗻𝘆𝗮𝗹𝗮𝗵𝗴𝘂𝗻𝗮𝗸𝗮𝗻𝗻𝘆𝗮❓"    

    //text Lainnya
        if(bhs == "ID")         var Qiya = "𝗬𝗔"
        else if(bhs == "MY")    var Qiya = "𝗬𝗔"          
        else if(bhs == "IN")    var Qiya = "हाँ"          
        else if(bhs == "TH")    var Qiya = "ใช่"          
        else if(bhs == "IT")    var Qiya = "sì"          
        else if(bhs == "RO")    var Qiya = "da"
        else if(bhs == "PL")    var Qiya = "TAK"
        else if(bhs == "ES")    var Qiya = "SI"
        else                    var Qiya = "𝗬𝗔"    

        if(bhs == "ID")         var Qtidak = "𝗧𝗜𝗗𝗔𝗞"
        else if(bhs == "MY")    var Qtidak = "𝗧𝗜𝗗𝗔𝗞"          
        else if(bhs == "IN")    var Qtidak = "नहीं"          
        else if(bhs == "TH")    var Qtidak = "ไม่"          
        else if(bhs == "IT")    var Qtidak = "Non"          
        else if(bhs == "RO")    var Qtidak = "Nu"
        else if(bhs == "PL")    var Qtidak = "NIE"
        else if(bhs == "ES")    var Qtidak = "NO"
        else                    var Qtidak = "𝗧𝗜𝗗𝗔𝗞"   

        if(bhs == "ID")         var Qperhatian = "＊ＰＥＲＨＡＴＩＡＮ＊"
        else if(bhs == "MY")    var Qperhatian = "＊ＰＥＲＨＡＴＩＡＮ＊"          
        else if(bhs == "IN")    var Qperhatian = "＊ ध्यान ＊"          
        else if(bhs == "TH")    var Qperhatian = "* ข้อควรระวัง *"          
        else if(bhs == "IT")    var Qperhatian = "* avvertimento *"          
        else if(bhs == "RO")    var Qperhatian = "* PRUDENȚĂ *"
        else if(bhs == "PL")    var Qperhatian = "* UWAGA *"
        else if(bhs == "ES")    var Qperhatian = "* ATENCIÓN *"
        else                    var Qperhatian = "＊ＰＥＲＨＡＴＩＡＮ＊"              
  
        if(bhs == "ID")         var Qpastikan = "<span style='color:red'> 𝗣𝗔𝗦𝗧𝗜𝗞𝗔𝗡 𝗨𝗠𝗨𝗥 𝗔𝗡𝗗𝗔 𝟭𝟴+ <\/b><\/span>"
        else if(bhs == "MY")    var Qpastikan = "<span style='color:red'> 𝗣𝗔𝗦𝗧𝗜𝗞𝗔𝗡 𝗨𝗠𝗨𝗥 𝗔𝗡𝗗𝗔 𝟭𝟴+ <\/b><\/span>"          
        else if(bhs == "IN")    var Qpastikan = "सुनिश्चित करें कि आप पहले से ही हैं <span style='color:red'>𝗔𝗗𝗨𝗟𝗧 <\/b><\/span>"          
        else if(bhs == "TH")    var Qpastikan = "<span style='color:red'>ทำให้แน่ใจว่าอายุของคุณคือ 18 ปีขึ้นไป<\/b><\/span>"           
        else if(bhs == "IT")    var Qpastikan = "<span style='color:red'>Assicurati che la tua età già ''adulto'' <\/b><\/span>"          
        else if(bhs == "RO")    var Qpastikan = "<span style='color:red'>𝗔𝘀𝗶𝗴𝘂𝗿𝗮𝘁̗𝗶-𝘃𝗮̆ 𝗰𝗮̆ 𝘃𝗮̂𝗿𝘀𝘁𝗮 𝗱𝘃𝘀. 𝗲𝘀𝘁𝗲 𝗺𝗮𝗶 𝗺𝗮𝗿𝗲 𝗱𝗲 𝟭𝟴 𝗮𝗻𝗶.<\/b><\/span>" 
        else if(bhs == "PL")    var Qpastikan = "<span style='color:red'>UPEWNIJ SIĘ, ŻE JESTEŚ DOROSŁY<\/b><\/span>" 
        else if(bhs == "ES")    var Qpastikan = "<span style='color:red'>ASEGÚRESE DE SER ADULTO<\/b><\/span>" 
        else                    var Qpastikan = "<span style='color:red'> 𝗣𝗔𝗦𝗧𝗜𝗞𝗔𝗡 𝗨𝗠𝗨𝗥 𝗔𝗡𝗗𝗔 𝟭𝟴+ <\/b><\/span>"            
        
        if(bhs == "ID")         var QOKE = "OKE"
        else if(bhs == "MY")    var QOKE = "OKE"          
        else if(bhs == "IN")    var QOKE = "ठीक है"          
        else if(bhs == "TH")    var QOKE = "ตกลง"          
        else if(bhs == "IT")    var QOKE = "VA BENE"          
        else if(bhs == "RO")    var QOKE = "BINE"
        else if(bhs == "PL")    var QOKE = "okej"
        else if(bhs == "ES")    var QOKE = "bueno"
        else                    var QOKE = "OKE"               
    
        if(bhs == "ID")         var Qkhusus = "𝗞𝗵𝘂𝘀𝘂𝘀 𝟭𝟴+"
        else if(bhs == "MY")    var Qkhusus = "𝗞𝗵𝘂𝘀𝘂𝘀 𝟭𝟴+"          
        else if(bhs == "IN")    var Qkhusus = "विशेष रूप से 𝟭𝟴+"          
        else if(bhs == "TH")    var Qkhusus = "𝗢𝗻𝗹𝘆 𝟭𝟴+"          
        else if(bhs == "IT")    var Qkhusus = "ADULTI speciale"          
        else if(bhs == "RO")    var Qkhusus = "𝗠𝗮𝗶 𝗲𝘅𝗮𝗰𝘁 𝟭𝟴+"
        else if(bhs == "PL")    var Qkhusus = "Tylko dla dorosłych"
        else if(bhs == "ES")    var Qkhusus = "Solo para adultos"
        else                    var Qkhusus = "𝗞𝗵𝘂𝘀𝘂𝘀 𝟭𝟴+"            
        
        if(bhs == "ID")         var Qbaiklah = "BAIKLAH!"
        else if(bhs == "MY")    var Qbaiklah = "BAIKLAH!"          
        else if(bhs == "IN")    var Qbaiklah = "ठीक है!"          
        else if(bhs == "TH")    var Qbaiklah = "ตกลง!"          
        else if(bhs == "IT")    var Qbaiklah = "VA BENE!"          
        else if(bhs == "RO")    var Qbaiklah = "BINE!"
        else if(bhs == "PL")    var Qbaiklah = "W PORZĄDKU!"
        else if(bhs == "ES")    var Qbaiklah = "¡¡BUENO!!"
        else                    var Qbaiklah  = "BAIKLAH!"         
        
        if(bhs == "ID")         var Qberdasarkan = "𝗕𝗲𝗿𝗱𝗮𝘀𝗮𝗿𝗸𝗮𝗻 𝗷𝗮𝘄𝗮𝗯𝗮𝗻 𝗸𝗮𝗺𝘂, 𝗸𝗮𝗺𝗶 𝘀𝗮𝗿𝗮𝗻𝗸𝗮𝗻 𝗸𝗮𝗺𝘂 𝗺𝗲𝗻𝗰𝗼𝗯𝗮 𝗽𝗿𝗼𝗱𝘂𝗸 𝗽𝗲𝗺𝗯𝗲𝘀𝗮𝗿𝗮𝗻 𝗽𝗲𝗻𝗶𝘀 𝗽𝗮𝗹𝗶𝗻𝗴 𝗲𝗳𝗲𝗸𝘁𝗶𝗳 𝗶𝗻𝗶"
        else if(bhs == "MY")    var Qberdasarkan = "𝗕𝗲𝗿𝗱𝗮𝘀𝗮𝗿𝗸𝗮𝗻 𝗷𝗮𝘄𝗮𝗽𝗮𝗻 𝗮𝗻𝗱𝗮, 𝗸𝗮𝗺𝗶 𝗺𝗲𝗻𝗰𝗮𝗱𝗮𝗻𝗴𝗸𝗮𝗻 𝗮𝗻𝗱𝗮 𝗺𝗲𝗻𝗰𝘂𝗯𝗮 𝗽𝗿𝗼𝗱𝘂𝗸 𝗽𝗲𝗺𝗯𝗲𝘀𝗮𝗿𝗮𝗻 𝘇𝗮𝗸𝗮𝗿 𝘆𝗮𝗻𝗴 𝗽𝗮𝗹𝗶𝗻𝗴 𝗯𝗲𝗿𝗸𝗲𝘀𝗮𝗻 𝗶𝗻𝗶"          
        else if(bhs == "IN")    var Qberdasarkan = "आपके उत्तरों के आधार पर <br/> हमारा सुझाव है कि आप इस सबसे प्रभावी लिंग वृद्धि उत्पाद का प्रयास करें।"          
        else if(bhs == "TH")    var Qberdasarkan = "จากคำตอบของคุณเราขอแนะนำให้คุณลองผลิตภัณฑ์ขยายขนาดอวัยวะเพศที่มีประสิทธิภาพมากที่สุด"          
        else if(bhs == "IT")    var Qberdasarkan = "In base alle vostre risposte, vi consigliamo di provare uno dei prodotti più efficaci ingrandimento del pene."          
        else if(bhs == "RO")    var Qberdasarkan = "𝗣𝗲 𝗯𝗮𝘇𝗮 𝗿𝗮̆𝘀𝗽𝘂𝗻𝘀𝘂𝗿𝗶𝗹𝗼𝗿 𝗱𝘃𝘀., 𝘃𝗮̆ 𝘀𝘂𝗴𝗲𝗿𝗮̆𝗺 𝘀𝗮̆ 𝗶̂𝗻𝗰𝗲𝗿𝗰𝗮𝘁̗𝗶 𝗮𝗰𝗲𝘀𝘁 𝗽𝗿𝗼𝗱𝘂𝘀 𝗱𝗲 𝗺𝗮̆𝗿𝗶𝗿𝗲 𝗮 𝗽𝗲𝗻𝗶𝘀𝘂𝗹𝘂𝗶 𝗰𝗲𝗹 𝗺𝗮𝗶 𝗲𝗳𝗶𝗰𝗶𝗲𝗻𝘁"
        else if(bhs == "PL")    var Qberdasarkan = "Na podstawie Twoich odpowiedzi zalecamy wypróbowanie najlepszych produktów na powiększenie penisa"
        else if(bhs == "ES")    var Qberdasarkan = "Según sus respuestas, le recomendamos que pruebe los mejores productos de alargamiento del pene."
        else                    var Qberdasarkan = "𝗕𝗲𝗿𝗱𝗮𝘀𝗮𝗿𝗸𝗮𝗻 𝗷𝗮𝘄𝗮𝗯𝗮𝗻 𝗸𝗮𝗺𝘂, 𝗸𝗮𝗺𝗶 𝘀𝗮𝗿𝗮𝗻𝗸𝗮𝗻 𝗸𝗮𝗺𝘂 𝗺𝗲𝗻𝗰𝗼𝗯𝗮 𝗽𝗿𝗼𝗱𝘂𝗸 𝗽𝗲𝗺𝗯𝗲𝘀𝗮𝗿𝗮𝗻 𝗽𝗲𝗻𝗶𝘀 𝗽𝗮𝗹𝗶𝗻𝗴 𝗲𝗳𝗲𝗸𝘁𝗶𝗳 𝗶𝗻𝗶"            
        
        if(bhs == "ID")         var Qcatatan = "CATATAN!"
        else if(bhs == "MY")    var Qcatatan = "NOTA!"          
        else if(bhs == "IN")    var Qcatatan = "ध्यान दें!"          
        else if(bhs == "TH")    var Qcatatan = "หมายเหตุ!"          
        else if(bhs == "IT")    var Qcatatan = "NOTA!"          
        else if(bhs == "RO")    var Qcatatan = "NOTĂ!"
        else if(bhs == "PL")    var Qcatatan = "UWAGA!!"
        else if(bhs == "ES")    var Qcatatan = "¡¡ATENCIÓN!!"
        else                    var Qcatatan = "CATATAN!"              
           
        if(bhs == "ID")         var Qketika = "𝗞𝗲𝘁𝗶𝗸𝗮 𝗽𝗲𝗻𝗶𝘀 𝗸𝗮𝗺𝘂 𝘀𝘂𝗱𝗮𝗵 𝗯𝗲𝘀𝗮𝗿, 𝗸𝗮𝗺𝘂 𝗮𝗸𝗮𝗻 𝘀𝘂𝗹𝗶𝘁 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝘂𝗯𝗮𝗵 𝘂𝗸𝘂𝗿𝗮𝗻𝗻𝘆𝗮 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗸𝗲𝗰𝗶𝗹 𝗸𝗲𝗺𝗯𝗮𝗹𝗶"
        else if(bhs == "MY")    var Qketika = "𝗔𝗽𝗮𝗯𝗶𝗹𝗮 𝘇𝗮𝗸𝗮𝗿 𝗮𝗻𝗱𝗮 𝗯𝗲𝘀𝗮𝗿, 𝘀𝘂𝗸𝗮𝗿 𝗯𝗮𝗴𝗶 𝗮𝗻𝗱𝗮 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝘂𝗸𝗮𝗿 𝘂𝗸𝘂𝗿𝗮𝗻𝗻𝘆𝗮 𝗸𝗲𝗺𝗯𝗮𝗹𝗶 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗸𝗲𝗰𝗶𝗹"          
        else if(bhs == "IN")    var Qketika = "जब आपका लिंग बड़ा हो जाता है। <br/> आपको फिर से आकार बदलने में कठिनाई होगी।्पाद का प्रयास करें।"          
        else if(bhs == "TH")    var Qketika = "เมื่อองคชาตของคุณมีขนาดใหญ่จะเป็นการยากที่จะเปลี่ยนเป็นขนาดก่อนหน้า"          
        else if(bhs == "IT")    var Qketika = "Quando si dispone di un grande pene allora sarà difficile cambiare le dimensioni precedenti."          
        else if(bhs == "RO")    var Qketika = "𝗖𝗮̂𝗻𝗱 𝗽𝗲𝗻𝗶𝘀𝘂𝗹 𝘁𝗮̆𝘂 𝗲𝘀𝘁𝗲 𝗺𝗮𝗿𝗲, 𝗶̂𝘁̗𝗶 𝘃𝗮 𝗳𝗶 𝗴𝗿𝗲𝘂 𝘀𝗮̆-𝘁̗𝗶 𝘀𝗰𝗵𝗶𝗺𝗯𝗶 𝗺𝗮̆𝗿𝗶𝗺𝗲𝗮 𝗶̂𝗻𝗮𝗽𝗼𝗶"
        else if(bhs == "PL")    var Qketika = "Kiedy twój penis jest duży, trudno będzie go przywrócić do małego."
        else if(bhs == "ES")    var Qketika = "Cuando su pene es grande, será difícil volverlo pequeño."
        else                    var Qketika = "𝗞𝗲𝘁𝗶𝗸𝗮 𝗽𝗲𝗻𝗶𝘀 𝗸𝗮𝗺𝘂 𝘀𝘂𝗱𝗮𝗵 𝗯𝗲𝘀𝗮𝗿, 𝗸𝗮𝗺𝘂 𝗮𝗸𝗮𝗻 𝘀𝘂𝗹𝗶𝘁 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝘂𝗯𝗮𝗵 𝘂𝗸𝘂𝗿𝗮𝗻𝗻𝘆𝗮 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗸𝗲𝗰𝗶𝗹 𝗸𝗲𝗺𝗯𝗮𝗹𝗶"              
            
        if(bhs == "ID")         var Qteruskan = "𝗧𝗘𝗥𝗨𝗦𝗞𝗔𝗡"
        else if(bhs == "MY")    var Qteruskan = "𝗧𝗘𝗥𝗨𝗦𝗞𝗔𝗡!"          
        else if(bhs == "IN")    var Qteruskan = "जारी रखें"          
        else if(bhs == "TH")    var Qteruskan = "ดำเนินการต่อ"          
        else if(bhs == "IT")    var Qteruskan = "CONTINUA"          
        else if(bhs == "RO")    var Qteruskan = "CONTINUA"
        else if(bhs == "PL")    var Qteruskan = "Kontyntynuj"
        else if(bhs == "ES")    var Qteruskan = "CONTINUAR"
        else                    var Qteruskan = "𝗧𝗘𝗥𝗨𝗦𝗞𝗔𝗡"              
        

        var QPageStart = '<span class="1w"> '+Qperhatian+' <\/span><br><\/div><div class="fadein animated" id="box"><b> '+Qpastikan+'<p><button style="margin-top:20px;" class="show_hide btnnext fadeIn animated" rel="#q1" type="button"> '+QOKE+' <\/button> <br><div class="blink">'+Qkhusus+'<\/div>'
        var QPageEnd = '<img style="margin-top:-45px; width:90%; max-width: 425px;" alt="intro image" id="intro-image"; max-width:500px" src="'+imgQ4+'"\/><br/><b> '+Qbaiklah+'<\/b><br>'+Qberdasarkan+'<br><br/><div class="blink" style="color:red; font-weight:bold;">'+Qcatatan+'<\/div>'+Qketika+'<br/>'+Qteruskan+'❓<br><p><input type="button" onclick="window.open(`${linkTrackAN}`,`_parent`)" class="btnnext" value="'+Qteruskan+'"> </p>'
//END Quiz
