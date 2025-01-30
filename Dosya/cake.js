// İstatistikler
let allKek = 0;
let allSellKek = 0;
let allMoney = 0;
let allMusteri = 0;
let nickNamePastanesi;

// İtemler
let kek = 0;
let para = 0;
let musteri = 0;
let masa = 4;
let aile = 0;
let okunanKitapSayi = 0;

// Zaman
let timeoutId = null;
let openKasa = 'false';
let durum = "false";

// Yukseltmeler
let kardes = 0;
let vergiUpdate = 0;
let ustalik= 0;
let vergiArtis = 0;

// Fiyat
let vergi = 0;
let kardesFiyat = 0;
let vergiUpdateFiyat = 0;
let masaFiyat = 0;
let kitapFiyat = 0;

// Basarimlar
let kitapUcretsizDegilmi = "false"; // Kitaplar hani ücretsizdi
let VergiOduyorsun = "false"; // Vergini ödedin
let SonsuzKardes = "false"; // Kaç tane kardeşim var?
let sonsuzMasa = "false" // O kadar masayı napcan
let kekYaptim = "false" // İlk kekin nasıldı
let kekinKokusu = "false" // Kekin güzel kokuyor
let whygoMusteri = "false" // Neden müşteriye bakmadın
let oIsimNe = "false" // niye o kadar uzun ki
let otuzDokuzNick = "fale" // Ötüz Döküz
let otuzDokuzPara = "false" // Ötüz Döküz para

// Sitem
function cihaz() {
  if (window.innerWidth <= 768) {
    document.getElementById("ProfileDiv").classList.add("istatistikMobil");
    document.getElementById("ProfileDiv").classList.add("content");
    document.getElementById("ProfileDiv").classList.add("center");
  } else {
   document.getElementById("ProfileDiv").classList.add("istatistik");
  }
}
// cihaz();

function basarim(name, description){
  let basarimMesaj = name + ' <br>'
  document.getElementById("basarimDiv").classList.remove("gizli");
  document.getElementById("basarimP").innerHTML = basarimMesaj + description ;

  setTimeout(() => {
    document.getElementById("basarimDiv").classList.add("gizli");
  }, 5000);
}

function nickName() {
  const input = document.getElementById('pastaneName'); 
  let  myNameis = input.value.replace("39", "ötüz döküz");
  myNameis = myNameis.replace(/pastanesi|pastanem/gi, " ");
  myNameis = myNameis.replace("Kürdistan", " ");
  console.log(myNameis);
  const lenght = input.value.length; 

  if (lenght > 3 && lenght < 30) {
    nickNamePastanesi = myNameis + " Pastanesi";
    document.getElementById("profile").classList.add("gizli");
    document.getElementById("Gamethis").classList.remove("gizli");

    getinnerHTML("pastaneIsmi", nickNamePastanesi);
  } else {
    document.getElementById("nicknameHata").classList.remove("gizli"); 
    if (lenght <= 3) {
      document.getElementById("nicknameHata").innerHTML = "Pastanen 3 harfli niye isteyesinki?"; 
    } else if (lenght > 30) {
      document.getElementById("nicknameHata").innerHTML = "Nasıl isim öyle?"; 
    }
    setTimeout(() => {
      document.getElementById("nicknameHata").classList.add("gizli"); 
    }, 5000);
  }
}

function getinnerHTML (Girilen, Yazilan){
  document.getElementById(Girilen).innerHTML = Yazilan;
}

function yenileme() {
  kardesFiyat = 200 + kardes * 100;
  vergiUpdateFiyat = 500 + vergiUpdate * 300;
  masaFiyat = (10 * masa ) / 2
  kitapFiyat = 20 + (20 * okunanKitapSayi)
  // profileUpdate();

  // Menu
  getinnerHTML("kekim", "🍰"+ kek)
  getinnerHTML("param", "💰" + para + "TL")

  // Kardes
  getinnerHTML("kardesSayisi", "Sana yardım eden kardeş sayısı: " + kardes)
  getinnerHTML("kardesFiyati", "Kardeşini iknta etmen için gereken para: " + kardesFiyat)

  // Vergi
  getinnerHTML("vergiAlma", "Aldığın vergi: " + vergiUpdate)
  getinnerHTML("vergiFiyat", "Vergiyi artırman için ödemen gereken vergi: " + vergiUpdateFiyat +"kek")

  // Masa 
  getinnerHTML("masaNumber", "Sahip olduğun masa: " +  masa)
  getinnerHTML("masaFiyat", "4 kişilik masa alman için gereken para: " + masaFiyat)

  // Müşteri
  getinnerHTML("MusteriNumber", "👤" + musteri)

  // Kitap
  getinnerHTML("kitapSayisi", "Okuduğun kitap sayısı: " + okunanKitapSayi)
  getinnerHTML("kitapFiyati", "Kitap alman için gereken para: " + kitapFiyat)

}
//



function rip(islem, x) {
  if (islem === "para") {
    para -= x;
  } else if (islem === "kek") {
    kek -= x;
  }
  yenileme();
}

function sellKek() {
  if (kek >= 1 && musteri >= 1) {
    vergi = 0.8 * vergiArtis;
    let satilanKek = Math.floor(Math.random() * (kek - 1 + 1)) + 1;

    if(satilanKek != 0){
      if(aile >= 1){
        musteri -= 4;
        aile -=1;
      } else {
        musteri -=1;
      }

      let kazanilanPara = satilanKek * 0.5 + vergi;
      rip("kek", satilanKek);
      para += kazanilanPara;
      allMoney += kazanilanPara;
      
      
      yenileme();
    }
  }
}

function profileUpdate() {
  vergi = 0.8 * vergiUpdate;
  kardesFiyat = 200 + kardes * 100;
  document.getElementById("kardesNumber").innerHTML =
    "Kardeş Sayısı: " + kardes;
  document.getElementById("kardesMoney").innerHTML =
    "Kardeş Çağırmak için gereken Para: " + kardesFiyat;
  document.getElementById("vergiNumber").innerHTML = "Aldığın Vergi: " + vergi;
  document.getElementById("vergiOdeme").innerHTML =
    "Vergi yükseltmen için gereken kek sayısı: " + vergiUpdateFiyat;
  document.getElementById("toplamKek").innerHTML =
    "Toplam yaptığın kek: " + allKek;
  document.getElementById("toplamSatilanKek").innerHTML =
    "Toplam sattığın kek: " + allSellKek;
  document.getElementById("toplamPara").innerHTML =
    "Toplam kazandığın para: " + allMoney;
}
function hata(hataMesaji) {
  let redError = 'HATA! <br>'
  document.getElementById("error").classList.remove("gizli");
  document.getElementById("errorP").innerHTML = redError + hataMesaji ;

  setTimeout(() => {
    document.getElementById("error").classList.add("gizli");
  }, 5000);
}

function kekPartisi() {
  if(openKasa == 'false'){
    if(kekYaptim == "false"){
      basarim("Kek Yaptın", "İlk kekin nasıldı");
      kekYaptim = "true"
    }
    let kekPARTİSİ = 1 + ustalik;
    kek += kekPARTİSİ
    allKek += kekPARTİSİ
    musteriNumber();
    yenileme();
  }
}

function SisterHelp() {
  setInterval(function () {
    kek += kardes;
    yenileme();
  }, 5000 + kardes * 50000);
}

function welcomeKasa(){
  if(durum == "false"){
    durum = "true";
    openKasa = 'true';
    document.getElementById("KasaMagaza").classList.remove("gizli");
  } else if(durum == "true"){
    durum = "false";
    openKasa = 'false';
    document.getElementById("KasaMagaza").classList.add("gizli");
  }
}


// Upgrade 

function helpSister() {
  kardesFiyat = 200 + kardes * 100;
  if (para >= kardesFiyat) {
    rip("para", kardesFiyat);
    kardes += 1;
    updates();
  } else {
    hata("Paranız Yetersiz. Gereken para: " + kardesFiyat);
  }
}

function vergiUpd() {
  vergiUpdateFiyat = 500 + vergiUpdate * 300;
  if (kek >= vergiUpdateFiyat) {
    vergiUpdate += 1;
    vergiArtis += 0.1;
    rip("kek", vergiUpdateFiyat);
  } else {
    hata(
      "Kekiniz yetersiz. Ödemen gereken verginin kek miktarı: " +vergiUpdateFiyat
    );
  }
}

function masaUpgrade(){
  masaFiyat = (10 * masa ) / 2
  if(para >= masaFiyat){
    masa += 4;
    rip("para", masaFiyat);
  } else {
    hata(
      "Paranız yetersiz. Gereken Para: " + masaFiyat
    );
  }
}

function kitapUpgrade(){
  kitapFiyat = 20 + (20 * okunanKitapSayi)
  if(para >= kitapFiyat){
    okunanKitapSayi += 1;
    if(okunanKitapSayi % 2 == 0 && okunanKitapSayi != 0){
      ustalik+=1;
    }
    rip("para", kitapFiyat);
  } else {
    hata(
      "Paranız yetersiz. Gereken Para: " + kitapFiyat
    );
  }
}
//

// Musteri

function musteriNumber(){
  if (Math.random() < 0.5) {
      if(musteri <= masa ){
      let newMusteri = Math.floor(Math.random() * (masa - 1 + 1)) + 1;
      if(newMusteri % 4 == 0){
        aile +=1;
        document.getElementById("kasaButton").classList.remove("normalButton");
        document.getElementById("kasaButton").classList.add("hgAile");
        kasaButtonRenk("hgAile");
      } else {
        document.getElementById("kasaButton").classList.remove("normalButton");
        document.getElementById("kasaButton").classList.add("hgMusteri");
        kasaButtonRenk("hgMusteri");
      }
      allMusteri += newMusteri;
      musteri += newMusteri;
    }
  }
}

function byMusteri(){
  setTimeout(() => {
    if(musteri != 0){
      if(aile != 0){
        musteri -= 4
        aile -= 1;
      } else{
        musteri -=1;
      }
      document.getElementById("kasaButton").classList.remove("normalButton");
      document.getElementById("kasaButton").classList.add("byMusteri");
      kasaButtonRenk("byMusteri");
    }
    byMusteri();
  }, 8000);
}

function kasaButtonRenk(id){
  if(timeoutId != null){
    temizleme();
    clearTimeout(timeoutId);
    document.getElementById("kasaButton").classList.add(id);
  }
  timeoutId = setTimeout(() => {
    document.getElementById("kasaButton").classList.add("normalButton");
    document.getElementById("kasaButton").classList.remove("id");
  }, 3000);
}

function temizleme(){
  document.getElementById("kasaButton").classList.remove("normalButton");
  document.getElementById("kasaButton").classList.remove("hgMusteri");
  document.getElementById("kasaButton").classList.remove("hgAile");
  document.getElementById("kasaButton").classList.remove("byMusteri");
}

//

SisterHelp();
yenileme();
byMusteri();
