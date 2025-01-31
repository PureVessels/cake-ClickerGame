// İstatistikler
let toplamKek = 0;
let toplamSatilanKek = 0;
let toplamPara = 0;
let toplamMusteri = 0;
let pastaneAdi;
let kullaniciAdi;
let ilkMusteri = "false";

// İtemler
let kek = 0;
let para = 0;
let musteri = 0;
let masa = 4;
let aile = 0;
let okunanKitapSayisi = 0;

// Zaman
let timeoutId = null;
let kasaAcik = 'false';
let durum = "false";
let ayarDurumu = "false";

// Yükseltmeler
let kardes = 0;
let vergiGuncelleme = 0;
let ustalik = 0;
let vergiArtis = 0;

// Fiyat
let vergi = 0;
let kardesFiyat = 0;
let vergiGuncellemeFiyat = 0;
let masaFiyat = 0;
let kitapFiyat = 0;

// Başarımlar
let kitapUcretsizDegilmi = "false"; // Kitaplar hani ücretsizdi
let VergiOduyorsun = "false"; // Vergini ödedin
let SonsuzKardes = "false"; // Kaç tane kardeşim var?
let sonsuzMasa = "false"; // O kadar masayı napcan
let kekYaptim = "false"; // İlk kekin nasıldı
let kekinKokusu = "false"; // Kekin güzel kokuyor
let whygoMusteri = "false"; // Neden müşteriye bakmadın
let oIsimNe = "false"; // niye o kadar uzun ki
let otuzDokuzNick = "false"; // Ötüz Döküz
let otuzDokuzPara = "false"; // Ötüz Döküz para
let bosBasarim = "false"; // İsmin Neden yok?
let toplamBasarimSayisi = 11;
let basarimSayisi = 0;

// Sistem
function cihaz() {
  if (window.innerWidth <= 768) {
    document.getElementById("ProfileDiv").classList.add("istatistikMobil", "content", "center");
  } else {
    document.getElementById("ProfileDiv").classList.add("istatistik");
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    if (ayarDurumu == "true") {
      ayarlar();
    } else if (kasaAcik == 'true') {
      welcomeKasa();
    }
  }
});


function basarim(name, description, konum) {
  let basarimMesaj = `${name} <br>`;
  if (konum == "Game") {
    document.getElementById("basarimDiv").classList.remove("gizli");
    document.getElementById("basarimP").innerHTML = basarimMesaj + description;
  } else if (konum == "Profile") {
    document.getElementById("basarimNickName").classList.remove("gizli");
    document.getElementById("basarimNickNameP").innerHTML = basarimMesaj + description;
  }
  basarimSayisi += 1;

  setTimeout(() => {
    document.getElementById("basarimDiv").classList.add("gizli");
    document.getElementById("basarimNickName").classList.add("gizli");
  }, 5000);
}

function nickName() {
  const input = document.getElementById('pastaneName');
  kullaniciAdi = input.value;
  kullaniciAdi = kullaniciAdi.replace(/pastanesi|pastanem|pastane/gi, " ");
  console.log(kullaniciAdi);
  const length = input.value.length;

  if (kullaniciAdi.includes("Kürdistan") && bosBasarim == "false") {
    basarim(" ", " ", "Profile");
    bosBasarim = "true";
    document.getElementById("nicknameHata").classList.remove("gizli");
    getinnerHTML("nicknameHata", "Pastanen ismin neden yok");

    setTimeout(() => {
      document.getElementById("nicknameHata").classList.add("gizli");
    }, 5000);
    return;
  }

  if (length > 3 && length < 30) {
    kullaniciAdi = kullaniciAdi.replace("Kürdistan", " ");
    if (kullaniciAdi.includes("39") && bosBasarim == "false") {
      kullaniciAdi = input.value.replace("39", "ötüz döküz");
      basarim("Ötüz Döküz", "Ötüz Döküz", "Game");
      bosBasarim = "true";
    }

    pastaneAdi = kullaniciAdi + " Pastanesi";
    document.getElementById("profile").classList.add("gizli");
    document.getElementById("Gamethis").classList.remove("gizli");

    getinnerHTML("pastaneIsmi", pastaneAdi);
    SisterHelp();
    yenileme();
  } else {
    document.getElementById("nicknameHata").classList.remove("gizli");
    if (length <= 3) {
      getinnerHTML("nicknameHata", "Pastanen 3 harfli niye isteyesinki?");
    } else if (length > 30) {
      getinnerHTML("nicknameHata", "Nasıl isim öyle?");
      if (oIsimNe == "false") {
        basarim("O isim ne", "İsmin neden bu kadar uzun", "Profile");
        oIsimNe = "true";
      }
    }
    setTimeout(() => {
      document.getElementById("nicknameHata").classList.add("gizli");
    }, 5000);
  }
}

function getinnerHTML(Girilen, Yazilan) {
  document.getElementById(Girilen).innerHTML = Yazilan;
}

function yenileme() {
  kardesFiyat = 200 + kardes * 100;
  vergiGuncellemeFiyat = 500 + vergiGuncelleme * 300;
  masaFiyat = (10 * masa) / 2;
  kitapFiyat = 20 + (20 * okunanKitapSayisi);

  // Menü
  getinnerHTML("kekim", "🍰" + kek);
  getinnerHTML("param", "💰" + para + "TL");

  // Kardeş
  getinnerHTML("kardesSayisi", "Sana yardım eden kardeş sayısı: " + kardes);
  getinnerHTML("kardesFiyati", "Kardeşini ikna etmen için gereken para: " + kardesFiyat);

  // Vergi
  getinnerHTML("vergiAlma", "Aldığın vergi: " + vergiGuncelleme);
  getinnerHTML("vergiFiyat", "Vergiyi artırman için ödemen gereken vergi: " + vergiGuncellemeFiyat + " kek");

  // Masa
  getinnerHTML("masaNumber", "Sahip olduğun masa: " + masa);
  getinnerHTML("masaFiyat", "4 kişilik masa alman için gereken para: " + masaFiyat);

  // Müşteri
  getinnerHTML("MusteriNumber", "👤" + musteri);

  // Kitap
  getinnerHTML("kitapSayisi", "Okuduğun kitap sayısı: " + okunanKitapSayisi);
  getinnerHTML("kitapFiyati", "Kitap alman için gereken para: " + kitapFiyat);
}

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

    if (satilanKek != 0) {
      if (aile >= 1) {
        musteri -= 4;
        aile -= 1;
      } else {
        musteri -= 1;
      }

      let kazanilanPara = satilanKek * 0.5 + vergi;
      rip("kek", satilanKek);
      para += kazanilanPara;
      toplamPara += kazanilanPara;
      toplamSatilanKek += satilanKek;

      if (para == 39 && otuzDokuzPara == "false") {
        basarim("Ötüz Döküz", "Ötüz Döküz Para", "Game");
        otuzDokuzPara = "true";
      }

      yenileme();
    }
  }
}

function profileUpdate() {
  getinnerHTML("toplamKek", "Toplam yaptığın kek: " + toplamKek);
  getinnerHTML("toplamSatilanKek", "Toplam sattığın kek: " + toplamSatilanKek);
  getinnerHTML("toplamPara", "Toplam kazandığın para: " + toplamPara);
  getinnerHTML("toplamMusteri", "Toplam müşteri sayısı: " + toplamMusteri);
  getinnerHTML("basarimSayisi", "Başarım Sayısı: " + basarimSayisi + "/" + toplamBasarimSayisi + " %" + Math.trunc((100 * basarimSayisi) / toplamBasarimSayisi) + " Tamamlandı");
}

function hata(hataMesaji) {
  let redError = 'HATA! <br>';
  document.getElementById("error").classList.remove("gizli");
  document.getElementById("errorP").innerHTML = redError + hataMesaji;

  setTimeout(() => {
    document.getElementById("error").classList.add("gizli");
  }, 5000);
}

function kekPartisi() {
  if (kasaAcik == 'false' && ayarDurumu == "false") {
    if (kekYaptim == "false") {
      basarim("Kek Yaptın", "İlk kekin nasıldı", "Game");
      kekYaptim = "true";
    }
    let kekPARTİSİ = 1 + ustalik;
    kek += kekPARTİSİ;
    toplamKek += kekPARTİSİ;
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

function welcomeKasa() {
  if (ayarDurumu == "false") {
    if (durum == "false") {
      durum = "true";
      kasaAcik = 'true';
      document.getElementById("KasaMagaza").classList.remove("gizli");
    } else if (durum == "true") {
      durum = "false";
      kasaAcik = 'false';
      document.getElementById("KasaMagaza").classList.add("gizli");
    }
  }
}

function ayarlar() {
  if (ayarDurumu == "false") {
    ayarDurumu = "true";
    document.getElementById("settings").classList.remove("gizli");
    profileUpdate();
  } else if (ayarDurumu == "true") {
    ayarDurumu = "false";
    document.getElementById("settings").classList.add("gizli");
  }
}

// Yükseltmeler

function helpSister() {
  if (ayarDurumu != "false") {
    return;
  }

  kardesFiyat = 200 + kardes * 100;
  if (para >= kardesFiyat) {
    rip("para", kardesFiyat);
    kardes += 1;
    if (kardes == 300 && SonsuzKardes == "false") {
      basarim("Kaç tane kardeşim var?", "Kardeşlerin sonsuz", "Game");
      SonsuzKardes = "true";
    }
    yenileme();
  } else {
    hata("Paranız Yetersiz. Gereken para: " + kardesFiyat);
  }
}

function vergiUpd() {
  if (ayarDurumu != "false") {
    return;
  }

  vergiGuncellemeFiyat = 500 + vergiGuncelleme * 300;
  if (kek >= vergiGuncellemeFiyat) {
    vergiGuncelleme += 1;
    vergiArtis += 0.1;
    rip("kek", vergiGuncellemeFiyat);

    if (VergiOduyorsun == "false") {
      basarim("Vergi Ödedin", "Vergini ödüyorsun", "Game");
      VergiOduyorsun = "true";
    }
  } else {
    hata("Kekiniz yetersiz. Ödemen gereken verginin kek miktarı: " + vergiGuncellemeFiyat);
  }
}

function masaUpgrade() {
  if (ayarDurumu != "false") {
    return;
  }

  masaFiyat = (10 * masa) / 2;
  if (para >= masaFiyat) {
    masa += 4;
    if (masa == 500 && sonsuzMasa == "false") {
      basarim("Masa Sayısı", "O kadar masayı napcan", "Game");
      sonsuzMasa = "true";
    }
    rip("para", masaFiyat);
  } else {
    hata("Paranız yetersiz. Gereken Para: " + masaFiyat);
  }
}

function kitapUpgrade() {
  if (ayarDurumu != "false") {
    return;
  }

  if (kitapUcretsizDegilmi == "false") {
    basarim("Kitaplar Ücretsiz Değilmi?", "Kitaplar hani ücretsizdi", "Game");
    kitapUcretsizDegilmi = "true";
  }
  kitapFiyat = 20 + (20 * okunanKitapSayisi);
  if (para >= kitapFiyat) {
    okunanKitapSayisi += 1;
    if (okunanKitapSayisi % 2 == 0 && okunanKitapSayisi != 0) {
      ustalik += 1;
    }
    rip("para", kitapFiyat);
  } else {
    hata("Paranız yetersiz. Gereken Para: " + kitapFiyat);
  }
}

// Müşteri

function musteriNumber() {
  if (Math.random() < 0.5) {
    if (kekinKokusu == "false") {
      basarim("Kekin Kokusu", "Kekin güzel kokuyor", "Game");
      kekinKokusu = "true";
    }

    if (ilkMusteri == "false") {
      ilkMusteri = "true";
      byMusteri();
    }

    if (musteri <= masa) {
      let yeniMusteri = Math.floor(Math.random() * (masa - 1 + 1)) + 1;
      if (yeniMusteri % 4 == 0) {
        aile += 1;
        document.getElementById("kasaButton").classList.remove("normalButton");
        document.getElementById("kasaButton").classList.add("hgAile");
        kasaButtonRenk("hgAile");
      } else {
        document.getElementById("kasaButton").classList.remove("normalButton");
        document.getElementById("kasaButton").classList.add("hgMusteri");
        kasaButtonRenk("hgMusteri");
      }
      toplamMusteri += yeniMusteri;
      musteri += yeniMusteri;
    }
  }
}

function byMusteri() {
  setTimeout(() => {
    if (musteri != 0) {
      if (ayarDurumu != "false") {
        return;
      }

      if (aile != 0) {
        musteri -= 4;
        aile -= 1;
        forMusteri();
      } else {
        musteri -= 1;
        forMusteri();
      }
      kasaButtonRenk("byMusteri");
      if (whygoMusteri == "false") {
        basarim("Sinirli Müşteri", "Müşteriye bakmadın", "Game");
        whygoMusteri = "true";
      }
    }
    byMusteri();
  }, 8000);
}

function forMusteri() {
  document.getElementById("kasaButton").classList.remove("normalButton");
  document.getElementById("kasaButton").classList.add("byMusteri");
}

function kasaButtonRenk(id) {
  if (timeoutId != null) {
    temizleme();
    clearTimeout(timeoutId);
    document.getElementById("kasaButton").classList.add(id);
  }
  timeoutId = setTimeout(() => {
    document.getElementById("kasaButton").classList.add("normalButton");
    document.getElementById("kasaButton").classList.remove(id);
  }, 3000);
}

function temizleme() {
  document.getElementById("kasaButton").classList.remove("normalButton");
  document.getElementById("kasaButton").classList.remove("hgMusteri");
  document.getElementById("kasaButton").classList.remove("hgAile");
  document.getElementById("kasaButton").classList.remove("byMusteri");
}

// Başlangıç
SisterHelp();
yenileme();
byMusteri();
