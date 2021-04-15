//START build link #GetURLlinkuntuk
var linkAN   = linkuntuk;
var linkTR   = "https://dashboard.sporadise.com/track/smartlink";
var paramBMB = '&in_linkuntuk='+linkuntuk+'&in_pixel='+pixel;
var param    = parameter+paramBMB

if(lander == "kuis") linkTrackAN = 'https://www.technolect.org'+param
else if(linkAN  == "apik"       || linkAN == "a001")    linkTrackAN = linkTR+"/source/APIK"+param
else if(linkAN  == "trisno"     || linkAN == "a002")    linkTrackAN = linkTR+"/source/TRISNO"+param
else if(linkAN  == "bmg"        || linkAN == "a003")    linkTrackAN = linkTR+"/source/BMG"+param
else if(linkAN  == "nurdin"     || linkAN == "a004")    linkTrackAN = linkTR+"/source/NURDIN"+param
else if(linkAN  == "janhadi"    || linkAN == "a005")    linkTrackAN = linkTR+"/source/JANHADI"+param
else if(linkAN  == "rizki"      || linkAN == "a006")    linkTrackAN = linkTR+"/source/RIZKI"+param
else if(linkAN  == "wasmin"     || linkAN == "a007")    linkTrackAN = linkTR+"/source/WASMIN"+param
else if(linkAN  == "asep"       || linkAN == "a008")    linkTrackAN = linkTR+"/source/ASEP"+param
else if(linkAN  == "ciki"       || linkAN == "a008a")   linkTrackAN = linkTR+"/CIKI/ASEP"+param
else if(linkAN  == "sihaloho"   || linkAN == "a009")    linkTrackAN = linkTR+"/source/SIHALOHO"+param
else if(linkAN  == "darsono"    || linkAN == "a010")    linkTrackAN = linkTR+"/source/DARSONO"+param
else if(linkAN  == "dirga"      || linkAN == "a011")    linkTrackAN = linkTR+"/source/DIRGA"+param        
else if(linkAN  == "iqbal"      || linkAN == "a012")    linkTrackAN = linkTR+"/source/IQBAL"+param
else if(linkAN  == "lani"       || linkAN == "a013")    linkTrackAN = linkTR+"/source/LANI"+param
else if(linkAN  == "indra"      || linkAN == "a014")    linkTrackAN = linkTR+"/source/INDRA"+param
else if(linkAN  == "rio"        || linkAN == "a015")    linkTrackAN = linkTR+"/source/RIO"+param
else if(linkAN  == "dodi"       || linkAN == "a016")    linkTrackAN = linkTR+"/source/DODI"+param
else if(linkAN  == "arif"       || linkAN == "a017")    linkTrackAN = linkTR+"/source/ARIF"+param
else if(linkAN  == "bagus"      || linkAN == "a018")    linkTrackAN = linkTR+"/source/BAGUS"+param
else if(linkAN  == "verel"      || linkAN == "a019")    linkTrackAN = linkTR+"/source/VEREL"+param
else if(linkAN  == "maman"      || linkAN == "a020")    linkTrackAN = linkTR+"/source/MAMAN"+param
else if(linkAN  == "dudi"       || linkAN == "a021")    linkTrackAN = linkTR+"/source/DUDI"+param
else if(linkAN  == "endra"      || linkAN == "a022")    linkTrackAN = linkTR+"/source/ENDRA"+param
else if(linkAN  == "wanda"      || linkAN == "a023")    linkTrackAN = linkTR+"/source/WANDA"+param
else if(linkAN  == "sigit"      || linkAN == "a024")    linkTrackAN = linkTR+"/source/SIGIT"+param
else if(linkAN  == "sendi"      || linkAN == "a025")    linkTrackAN = linkTR+"/source/SENDI"+param
else if(linkAN  == "karisa"     || linkAN == "a026")    linkTrackAN = linkTR+"/source/KARISA"+param
else if(linkAN  == "tito"       || linkAN == "a027")    linkTrackAN = linkTR+"/source/TITO"+param
else if(linkAN  == "andi"       || linkAN == "a028")    linkTrackAN = linkTR+"/source/ANDI"+param
else if(linkAN  == "dita"       || linkAN == "a029")    linkTrackAN = linkTR+"/source/DITA"+param
else if(linkAN  == "medi"       || linkAN == "a030")    linkTrackAN = linkTR+"/source/MEDI"+param
else if(linkAN  == "cahyudin"   || linkAN == "a031")    linkTrackAN = linkTR+"/source/CAHYUDIN"+param
else if(linkAN  == "tiko"       || linkAN == "a032")    linkTrackAN = linkTR+"/source/TIKO"+param
else if(linkAN  == "edi"        || linkAN == "a033")    linkTrackAN = linkTR+"/source/EDI"+param
else if(linkAN  == null || linkAN  == "" || linkAN  == "null" || linkAN  == "NULL")  linkTrackAN = linkTR+"/source/NYASAR"+param
else linkTrackAN = linkTR+"/source/"+linkAN.toUpperCase()+param
//END build link #GetURLlinkuntuk
