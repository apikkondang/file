//START build link #GetURLlinkuntuk
var linkAN   = linkuntuk;
var linkTR   = "https://dashboard.sporadise.com/track/smartlink";
var param1   = '/?in_linkuntuk='+linkuntuk+'in_pixel'+pixel+'&in_lang='+lang+'&produk='+produk+'&in_subacc='+img+'&in_subacc2='+account+'&in_subacc3='+adcopy;
var param2   = '&in_subacc5='+urlcustomfile+'&in_subacc6='+tanggal+'&in_plp='+plp;
var param3   = param1+'&in_subacc4=dirQUISyes'+param2;
var param4   = param1+'&in_subacc4='+lander+param2;

if(lander == "kuis") linkTrackAN = 'https://www.technolect.org'+param3
else if(linkAN  == "apik"       || linkAN == "a001")    linkTrackAN = linkTR+"/source/APIK"+param4
else if(linkAN  == "trisno"     || linkAN == "a002")    linkTrackAN = linkTR+"/source/TRISNO"+param4
else if(linkAN  == "bmg"        || linkAN == "a003")    linkTrackAN = linkTR+"/source/BMG"+param4
else if(linkAN  == "nurdin"     || linkAN == "a004")    linkTrackAN = linkTR+"/source/NURDIN"+param4
else if(linkAN  == "janhadi"    || linkAN == "a005")    linkTrackAN = linkTR+"/source/JANHADI"+param4
else if(linkAN  == "rizki"      || linkAN == "a006")    linkTrackAN = linkTR+"/source/RIZKI"+param4
else if(linkAN  == "wasmin"     || linkAN == "a007")    linkTrackAN = linkTR+"/source/WASMIN"+param4
else if(linkAN  == "asep"       || linkAN == "a008")    linkTrackAN = linkTR+"/source/ASEP"+param4
else if(linkAN  == "ciki"       || linkAN == "a008a")   linkTrackAN = linkTR+"/CIKI/ASEP"+param4
else if(linkAN  == "sihaloho"   || linkAN == "a009")    linkTrackAN = linkTR+"/source/SIHALOHO"+param4
else if(linkAN  == "darsono"    || linkAN == "a010")    linkTrackAN = linkTR+"/source/DARSONO"+param4
else if(linkAN  == "dirga"      || linkAN == "a011")    linkTrackAN = linkTR+"/source/DIRGA"+param4        
else if(linkAN  == "iqbal"      || linkAN == "a012")    linkTrackAN = linkTR+"/source/IQBAL"+param4
else if(linkAN  == "lani"       || linkAN == "a013")    linkTrackAN = linkTR+"/source/LANI"+param4
else if(linkAN  == "indra"      || linkAN == "a014")    linkTrackAN = linkTR+"/source/INDRA"+param4
else if(linkAN  == "rio"        || linkAN == "a015")    linkTrackAN = linkTR+"/source/RIO"+param4
else if(linkAN  == "dodi"       || linkAN == "a016")    linkTrackAN = linkTR+"/source/DODI"+param4
else if(linkAN  == "arif"       || linkAN == "a017")    linkTrackAN = linkTR+"/source/ARIF"+param4
else if(linkAN  == "bagus"      || linkAN == "a018")    linkTrackAN = linkTR+"/source/BAGUS"+param4
else if(linkAN  == "verel"      || linkAN == "a019")    linkTrackAN = linkTR+"/source/VEREL"+param4
else if(linkAN  == "maman"      || linkAN == "a020")    linkTrackAN = linkTR+"/source/MAMAN"+param4
else if(linkAN  == "dudi"       || linkAN == "a021")    linkTrackAN = linkTR+"/source/DUDI"+param4
else if(linkAN  == "endra"      || linkAN == "a022")    linkTrackAN = linkTR+"/source/ENDRA"+param4
else if(linkAN  == "wanda"      || linkAN == "a023")    linkTrackAN = linkTR+"/source/WANDA"+param4
else if(linkAN  == "sigit"      || linkAN == "a024")    linkTrackAN = linkTR+"/source/SIGIT"+param4
else if(linkAN  == "sendi"      || linkAN == "a025")    linkTrackAN = linkTR+"/source/SENDI"+param4
else if(linkAN  == "karisa"     || linkAN == "a026")    linkTrackAN = linkTR+"/source/KARISA"+param4
else if(linkAN  == "tito"       || linkAN == "a027")    linkTrackAN = linkTR+"/source/TITO"+param4
else if(linkAN  == "andi"       || linkAN == "a028")    linkTrackAN = linkTR+"/source/ANDI"+param4
else if(linkAN  == "dita"       || linkAN == "a029")    linkTrackAN = linkTR+"/source/DITA"+param4
else if(linkAN  == "medi"       || linkAN == "a030")    linkTrackAN = linkTR+"/source/MEDI"+param4
else if(linkAN  == "cahyudin"   || linkAN == "a031")    linkTrackAN = linkTR+"/source/CAHYUDIN"+param4
else if(linkAN  == "tiko"       || linkAN == "a032")    linkTrackAN = linkTR+"/source/TIKO"+param4
else if(linkAN  == "edi"        || linkAN == "a033")    linkTrackAN = linkTR+"/source/EDI"+param4
else linkTrackAN = linkTR+"/source/NYASAR"+param4
//END build link #GetURLlinkuntuk
