# Cake Clicker Game

Bu oyun bir tıklama oyunudur ve her tıkladığınızda kek yaparsınız!Yaptığınız kekleri satabilir veya biriktirebilirsiniz.Oyunun bir sonu yoktur ve sürekli geliştirilmeye devam edilmektedir.

Bu projede HTML, CSS ve JavaScript kullanılmıştır.

# 🎮 Oyun Mekanikleri

# 📌 Kek Yapma Mekaniği

Kek yapmak için pasta görseline tıklamanız yeterlidir.

Kek artış miktarı: 1 + ustalik

# 📌 Kek Satma Mekaniği

Keklerinizi yalnızca müşterilere satarak para kazanabilirsiniz.

Müşteri gelme ihtimali: Her keke tıkladığınızda %5 ihtimalle müşteri gelir.

Müşteriler, 8 saniye sonra giderler.

Eğer müşteri sayısı masa sayınızı geçerse, yeni müşteri gelmez.

Kek satış miktarı: satilanKek * 0.5 + vergi

Müşteri geliş miktarı: Math.floor(Math.random() * (masa - 1 + 1)) + 1

# ⚡ Yükseltmeler

Oyunda 4 farklı yükseltme bulunmaktadır: Kitap, Kardeş, Vergi, MasaHer yükseltmenin kendine özgü bir işlevi ve fiyat artış mekaniği vardır.

# 📚 Kitap Yükseltmesi

Satın aldığınız her kitabı okudukça ustalığınız artar.

2 kitap okuduğunuzda ustalığınız +1 artar ve daha fazla kek yapabilirsiniz.

# 👨‍👦 Kardeş Yükseltmesi

Kardeşinizi pasta yapmaya ikna ettiğiniz yükseltmedir.

Kardeşler, belli sürelerde sizin için otomatik olarak kek yapar.

Fiyat artış miktarı: 200 + (kardes * 100)

(kardes = İkna ettiğiniz kardeş sayısı)

# 💰 Vergi Yükseltmesi

Oyunda bir vergi sistemi bulunmaktadır.

Daha fazla vergi ödeyerek, satılan keklerden alınan vergi oranını artırabilirsiniz.

Fiyat artış miktarı: 500 + (vergiUpdate * 300)

(vergiUpdate = Aldığınız vergi yükseltmesi sayısı)

Vergi artış miktarı: +0.1

# 🍽️ Masa Yükseltmesi

Oyuna 4 masa ile başlarsınız.

Her yeni masa satın aldığınızda, müşteri kapasiteniz 4 artar.

Fiyat artış miktarı: (10 * masa) / 2

(masa = Sahip olduğunuz toplam masa sayısı)

Bu proje hala geliştirilmeye devam etmektedir.Geri bildirimleriniz ve önerileriniz için teşekkürler! 🎂



