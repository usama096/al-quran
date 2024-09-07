const base_url = "https://www.nooresunnat.com/Audio/Complete Quran/Shuraim-Sudais-Urdu";
let chapters = [
    {
        "id": 1,
        "revelation_place": "makkah",
        "revelation_order": 5,
        "bismillah_pre": false,
        "name_simple": "Al-Fatihah",
        "name_complex": "Al-Fātiĥah",
        "name_arabic": "الفاتحة",
        "verses_count": 7,
        "translated_name": {
            "language_name": "english",
            "name": "The Opener"
        },
        "audio_link": base_url+"/001s-fatiha.mp3"
    },
    {
        "id": 2,
        "revelation_place": "madinah",
        "revelation_order": 87,
        "bismillah_pre": true,
        "name_simple": "Al-Baqarah",
        "name_complex": "Al-Baqarah",
        "name_arabic": "البقرة",
        "verses_count": 286,
        "translated_name": {
            "language_name": "english",
            "name": "The Cow"
        },
        "audio_link": base_url+"/002s-Baqarah.mp3"
    },
    {
        "id": 3,
        "revelation_place": "madinah",
        "revelation_order": 89,
        "bismillah_pre": true,
        "name_simple": "Ali 'Imran",
        "name_complex": "Āli `Imrān",
        "name_arabic": "آل عمران",
        "verses_count": 200,
        "translated_name": {
            "language_name": "english",
            "name": "Family of Imran"
        },
        "audio_link": base_url+"/003s-Imran.mp3"
    },
    {
        "id": 4,
        "revelation_place": "madinah",
        "revelation_order": 92,
        "bismillah_pre": true,
        "name_simple": "An-Nisa",
        "name_complex": "An-Nisā",
        "name_arabic": "النساء",
        "verses_count": 176,
        "translated_name": {
            "language_name": "english",
            "name": "The Women"
        },
        "audio_link": base_url+"/004s-Nisa.mp3"
    },
    {
        "id": 5,
        "revelation_place": "madinah",
        "revelation_order": 112,
        "bismillah_pre": true,
        "name_simple": "Al-Ma'idah",
        "name_complex": "Al-Mā'idah",
        "name_arabic": "المائدة",
        "verses_count": 120,
        "translated_name": {
            "language_name": "english",
            "name": "The Table Spread"
        },
        "audio_link": base_url+"/005s-Maida.mp3"
    },
    {
        "id": 6,
        "revelation_place": "makkah",
        "revelation_order": 55,
        "bismillah_pre": true,
        "name_simple": "Al-An'am",
        "name_complex": "Al-'An`ām",
        "name_arabic": "الأنعام",
        "verses_count": 165,
        "translated_name": {
            "language_name": "english",
            "name": "The Cattle"
        },
        "audio_link": base_url+"/006sAnham.mp3"
    },
    {
        "id": 7,
        "revelation_place": "makkah",
        "revelation_order": 39,
        "bismillah_pre": true,
        "name_simple": "Al-A'raf",
        "name_complex": "Al-'A`rāf",
        "name_arabic": "الأعراف",
        "verses_count": 206,
        "translated_name": {
            "language_name": "english",
            "name": "The Heights"
        },
        "audio_link": base_url+"/007s-Aaraf.mp3"
    },
    {
        "id": 8,
        "revelation_place": "madinah",
        "revelation_order": 88,
        "bismillah_pre": true,
        "name_simple": "Al-Anfal",
        "name_complex": "Al-'Anfāl",
        "name_arabic": "الأنفال",
        "verses_count": 75,
        "translated_name": {
            "language_name": "english",
            "name": "The Spoils of War"
        },
        "audio_link": "https://www.nooresunnat.com/Audio/Complete%20Quran/Shuraim-Sudais-Urdu/008s-Anfal.mp3"
    },
    {
        "id": 9,
        "revelation_place": "madinah",
        "revelation_order": 113,
        "bismillah_pre": false,
        "name_simple": "At-Tawbah",
        "name_complex": "At-Tawbah",
        "name_arabic": "التوبة",
        "verses_count": 129,
        "translated_name": {
            "language_name": "english",
            "name": "The Repentance"
        },
        "audio_link": base_url+"/009s-Tobah.mp3"
    },
    {
        "id": 10,
        "revelation_place": "makkah",
        "revelation_order": 51,
        "bismillah_pre": true,
        "name_simple": "Yunus",
        "name_complex": "Yūnus",
        "name_arabic": "يونس",
        "verses_count": 109,
        "translated_name": {
            "language_name": "english",
            "name": "Jonah"
        },
        "audio_link": base_url+"/010s-Younus.mp3"
    },
    {
        "id": 11,
        "revelation_place": "makkah",
        "revelation_order": 52,
        "bismillah_pre": true,
        "name_simple": "Hud",
        "name_complex": "Hūd",
        "name_arabic": "هود",
        "verses_count": 123,
        "translated_name": {
            "language_name": "english",
            "name": "Hud"
        },
        "audio_link": base_url+"/011s-Hood.mp3"
    },
    {
        "id": 12,
        "revelation_place": "makkah",
        "revelation_order": 53,
        "bismillah_pre": true,
        "name_simple": "Yusuf",
        "name_complex": "Yūsuf",
        "name_arabic": "يوسف",
        "verses_count": 111,
        "translated_name": {
            "language_name": "english",
            "name": "Joseph"
        },
        "audio_link": base_url+"/012s-Yousuf.mp3"
    },
    {
        "id": 13,
        "revelation_place": "madinah",
        "revelation_order": 96,
        "bismillah_pre": true,
        "name_simple": "Ar-Ra'd",
        "name_complex": "Ar-Ra`d",
        "name_arabic": "الرعد",
        "verses_count": 43,
        "translated_name": {
            "language_name": "english",
            "name": "The Thunder"
        },
        "audio_link": base_url+"/013s-Raad.mp3"
    },
    {
        "id": 14,
        "revelation_place": "makkah",
        "revelation_order": 72,
        "bismillah_pre": true,
        "name_simple": "Ibrahim",
        "name_complex": "Ibrāhīm",
        "name_arabic": "ابراهيم",
        "verses_count": 52,
        "translated_name": {
            "language_name": "english",
            "name": "Abraham"
        },
        "audio_link": base_url+"/014s-Ibraheem.mp3"
    },
    {
        "id": 15,
        "revelation_place": "makkah",
        "revelation_order": 54,
        "bismillah_pre": true,
        "name_simple": "Al-Hijr",
        "name_complex": "Al-Ĥijr",
        "name_arabic": "الحجر",
        "verses_count": 99,
        "translated_name": {
            "language_name": "english",
            "name": "The Rocky Tract"
        },
        "audio_link": base_url+"/015s-Hijr.mp3"
    },
    {
        "id": 16,
        "revelation_place": "makkah",
        "revelation_order": 70,
        "bismillah_pre": true,
        "name_simple": "An-Nahl",
        "name_complex": "An-Naĥl",
        "name_arabic": "النحل",
        "verses_count": 128,
        "translated_name": {
            "language_name": "english",
            "name": "The Bee"
        },
        "audio_link": base_url+"/016s-Nihal.mp3"
    },
    {
        "id": 17,
        "revelation_place": "makkah",
        "revelation_order": 50,
        "bismillah_pre": true,
        "name_simple": "Al-Isra",
        "name_complex": "Al-'Isrā",
        "name_arabic": "الإسراء",
        "verses_count": 111,
        "translated_name": {
            "language_name": "english",
            "name": "The Night Journey"
        },
        "audio_link": base_url+"/017s-Bani-Israil.mp3"
    },
    {
        "id": 18,
        "revelation_place": "makkah",
        "revelation_order": 69,
        "bismillah_pre": true,
        "name_simple": "Al-Kahf",
        "name_complex": "Al-Kahf",
        "name_arabic": "الكهف",
        "verses_count": 110,
        "translated_name": {
            "language_name": "english",
            "name": "The Cave"
        },
        "audio_link": base_url+"/018s-Kahf.mp3"
    },
    {
        "id": 19,
        "revelation_place": "makkah",
        "revelation_order": 44,
        "bismillah_pre": true,
        "name_simple": "Maryam",
        "name_complex": "Maryam",
        "name_arabic": "مريم",
        "verses_count": 98,
        "translated_name": {
            "language_name": "english",
            "name": "Mary"
        },
        "audio_link": base_url+"/019s-Mariam.mp3"
    },
    {
        "id": 20,
        "revelation_place": "makkah",
        "revelation_order": 45,
        "bismillah_pre": true,
        "name_simple": "Taha",
        "name_complex": "Ţāhā",
        "name_arabic": "طه",
        "verses_count": 135,
        "translated_name": {
            "language_name": "english",
            "name": "Ta-Ha"
        },
        "audio_link": base_url+"/020s-Taha.mp3"
    },
    {
        "id": 21,
        "revelation_place": "makkah",
        "revelation_order": 73,
        "bismillah_pre": true,
        "name_simple": "Al-Anbya",
        "name_complex": "Al-'Anbyā",
        "name_arabic": "الأنبياء",
        "verses_count": 112,
        "translated_name": {
            "language_name": "english",
            "name": "The Prophets"
        },
        "audio_link": base_url+"/021s-Anbiyea.mp3"
    },
    {
        "id": 22,
        "revelation_place": "madinah",
        "revelation_order": 103,
        "bismillah_pre": true,
        "name_simple": "Al-Hajj",
        "name_complex": "Al-Ĥajj",
        "name_arabic": "الحج",
        "verses_count": 78,
        "translated_name": {
            "language_name": "english",
            "name": "The Pilgrimage"
        },
        "audio_link": base_url+"/022s-Haj.mp3"
    },
    {
        "id": 23,
        "revelation_place": "makkah",
        "revelation_order": 74,
        "bismillah_pre": true,
        "name_simple": "Al-Mu'minun",
        "name_complex": "Al-Mu'minūn",
        "name_arabic": "المؤمنون",
        "verses_count": 118,
        "translated_name": {
            "language_name": "english",
            "name": "The Believers"
        },
        "audio_link": base_url+"/023s-Mominoon.mp3"
    },
    {
        "id": 24,
        "revelation_place": "madinah",
        "revelation_order": 102,
        "bismillah_pre": true,
        "name_simple": "An-Nur",
        "name_complex": "An-Nūr",
        "name_arabic": "النور",
        "verses_count": 64,
        "translated_name": {
            "language_name": "english",
            "name": "The Light"
        },
        "audio_link": base_url+"/024s-Noor.mp3"
    },
    {
        "id": 25,
        "revelation_place": "makkah",
        "revelation_order": 42,
        "bismillah_pre": true,
        "name_simple": "Al-Furqan",
        "name_complex": "Al-Furqān",
        "name_arabic": "الفرقان",
        "verses_count": 77,
        "translated_name": {
            "language_name": "english",
            "name": "The Criterion"
        },
        "audio_link": base_url+"/025s-Furqaan.mp3"
    },
    {
        "id": 26,
        "revelation_place": "makkah",
        "revelation_order": 47,
        "bismillah_pre": true,
        "name_simple": "Ash-Shu'ara",
        "name_complex": "Ash-Shu`arā",
        "name_arabic": "الشعراء",
        "verses_count": 227,
        "translated_name": {
            "language_name": "english",
            "name": "The Poets"
        },
        "audio_link": base_url+"/026s-Shuaara.mp3"
    },
    {
        "id": 27,
        "revelation_place": "makkah",
        "revelation_order": 48,
        "bismillah_pre": true,
        "name_simple": "An-Naml",
        "name_complex": "An-Naml",
        "name_arabic": "النمل",
        "verses_count": 93,
        "translated_name": {
            "language_name": "english",
            "name": "The Ant"
        },
        "audio_link": base_url+"/027s-Namal.mp3"
    },
    {
        "id": 28,
        "revelation_place": "makkah",
        "revelation_order": 49,
        "bismillah_pre": true,
        "name_simple": "Al-Qasas",
        "name_complex": "Al-Qaşaş",
        "name_arabic": "القصص",
        "verses_count": 88,
        "translated_name": {
            "language_name": "english",
            "name": "The Stories"
        },
        "audio_link": base_url+"/028s-Qasas.mp3"
    },
    {
        "id": 29,
        "revelation_place": "makkah",
        "revelation_order": 85,
        "bismillah_pre": true,
        "name_simple": "Al-'Ankabut",
        "name_complex": "Al-`Ankabūt",
        "name_arabic": "العنكبوت",
        "verses_count": 69,
        "translated_name": {
            "language_name": "english",
            "name": "The Spider"
        },
        "audio_link": base_url+"/029s-Ankaboot.mp3"
    },
    {
        "id": 30,
        "revelation_place": "makkah",
        "revelation_order": 84,
        "bismillah_pre": true,
        "name_simple": "Ar-Rum",
        "name_complex": "Ar-Rūm",
        "name_arabic": "الروم",
        "verses_count": 60,
        "translated_name": {
            "language_name": "english",
            "name": "The Romans"
        },
        "audio_link": base_url+"/030s-Room.mp3"
    },
    {
        "id": 31,
        "revelation_place": "makkah",
        "revelation_order": 57,
        "bismillah_pre": true,
        "name_simple": "Luqman",
        "name_complex": "Luqmān",
        "name_arabic": "لقمان",
        "verses_count": 34,
        "translated_name": {
            "language_name": "english",
            "name": "Luqman"
        },
        "audio_link": base_url+"/031s-Luqmaan.mp3"
    },
    {
        "id": 32,
        "revelation_place": "makkah",
        "revelation_order": 75,
        "bismillah_pre": true,
        "name_simple": "As-Sajdah",
        "name_complex": "As-Sajdah",
        "name_arabic": "السجدة",
        "verses_count": 30,
        "translated_name": {
            "language_name": "english",
            "name": "The Prostration"
        },
        "audio_link": base_url+"/032s-Sajda.mp3"
    },
    {
        "id": 33,
        "revelation_place": "madinah",
        "revelation_order": 90,
        "bismillah_pre": true,
        "name_simple": "Al-Ahzab",
        "name_complex": "Al-'Aĥzāb",
        "name_arabic": "الأحزاب",
        "verses_count": 73,
        "translated_name": {
            "language_name": "english",
            "name": "The Combined Forces"
        },
        "audio_link": base_url+"/033s-Ahzab.mp3"
    },
    {
        "id": 34,
        "revelation_place": "makkah",
        "revelation_order": 58,
        "bismillah_pre": true,
        "name_simple": "Saba",
        "name_complex": "Saba",
        "name_arabic": "سبإ",
        "verses_count": 54,
        "translated_name": {
            "language_name": "english",
            "name": "Sheba"
        },
        "audio_link": base_url+"/034s-Saba.mp3"
    },
    {
        "id": 35,
        "revelation_place": "makkah",
        "revelation_order": 43,
        "bismillah_pre": true,
        "name_simple": "Fatir",
        "name_complex": "Fāţir",
        "name_arabic": "فاطر",
        "verses_count": 45,
        "translated_name": {
            "language_name": "english",
            "name": "Originator"
        },
        "audio_link": base_url+"/035s-Fatir.mp3"
    },
    {
        "id": 36,
        "revelation_place": "makkah",
        "revelation_order": 41,
        "bismillah_pre": true,
        "name_simple": "Ya-Sin",
        "name_complex": "Yā-Sīn",
        "name_arabic": "يس",
        "verses_count": 83,
        "translated_name": {
            "language_name": "english",
            "name": "Ya Sin"
        },
        "audio_link": base_url+"/036s-Yaseen.mp3"
    },
    {
        "id": 37,
        "revelation_place": "makkah",
        "revelation_order": 56,
        "bismillah_pre": true,
        "name_simple": "As-Saffat",
        "name_complex": "Aş-Şāffāt",
        "name_arabic": "الصافات",
        "verses_count": 182,
        "translated_name": {
            "language_name": "english",
            "name": "Those who set the Ranks"
        },
        "audio_link": base_url+"/037s-Saafaat.mp3"
    },
    {
        "id": 38,
        "revelation_place": "makkah",
        "revelation_order": 38,
        "bismillah_pre": true,
        "name_simple": "Sad",
        "name_complex": "Şād",
        "name_arabic": "ص",
        "verses_count": 88,
        "translated_name": {
            "language_name": "english",
            "name": "The Letter \"Saad\""
        },
        "audio_link": base_url+"/038s-Swad.mp3"
    },
    {
        "id": 39,
        "revelation_place": "makkah",
        "revelation_order": 59,
        "bismillah_pre": true,
        "name_simple": "Az-Zumar",
        "name_complex": "Az-Zumar",
        "name_arabic": "الزمر",
        "verses_count": 75,
        "translated_name": {
            "language_name": "english",
            "name": "The Troops"
        },
        "audio_link": base_url+"/039s-Zomar.mp3"
    },
    {
        "id": 40,
        "revelation_place": "makkah",
        "revelation_order": 60,
        "bismillah_pre": true,
        "name_simple": "Ghafir",
        "name_complex": "Ghāfir",
        "name_arabic": "غافر",
        "verses_count": 85,
        "translated_name": {
            "language_name": "english",
            "name": "The Forgiver"
        },
        "audio_link": base_url+"/040s-Momin.mp3"
    },
    {
        "id": 41,
        "revelation_place": "makkah",
        "revelation_order": 61,
        "bismillah_pre": true,
        "name_simple": "Fussilat",
        "name_complex": "Fuşşilat",
        "name_arabic": "فصلت",
        "verses_count": 54,
        "translated_name": {
            "language_name": "english",
            "name": "Explained in Detail"
        },
        "audio_link": base_url+"/041s-H-Sajda.mp3"
    },
    {
        "id": 42,
        "revelation_place": "makkah",
        "revelation_order": 62,
        "bismillah_pre": true,
        "name_simple": "Ash-Shuraa",
        "name_complex": "Ash-Shūraá",
        "name_arabic": "الشورى",
        "verses_count": 53,
        "translated_name": {
            "language_name": "english",
            "name": "The Consultation"
        },
        "audio_link": base_url+"/042s-Shoora.mp3"
    },
    {
        "id": 43,
        "revelation_place": "makkah",
        "revelation_order": 63,
        "bismillah_pre": true,
        "name_simple": "Az-Zukhruf",
        "name_complex": "Az-Zukhruf",
        "name_arabic": "الزخرف",
        "verses_count": 89,
        "translated_name": {
            "language_name": "english",
            "name": "The Ornaments of Gold"
        },
        "audio_link": base_url+"/043s-Zukhraf.mp3"
    },
    {
        "id": 44,
        "revelation_place": "makkah",
        "revelation_order": 64,
        "bismillah_pre": true,
        "name_simple": "Ad-Dukhan",
        "name_complex": "Ad-Dukhān",
        "name_arabic": "الدخان",
        "verses_count": 59,
        "translated_name": {
            "language_name": "english",
            "name": "The Smoke"
        },
        "audio_link": base_url+"/044s-Dukham.mp3"
    },
    {
        "id": 45,
        "revelation_place": "makkah",
        "revelation_order": 65,
        "bismillah_pre": true,
        "name_simple": "Al-Jathiyah",
        "name_complex": "Al-Jāthiyah",
        "name_arabic": "الجاثية",
        "verses_count": 37,
        "translated_name": {
            "language_name": "english",
            "name": "The Crouching"
        },
        "audio_link": base_url+"/045s-Jasia.mp3"
    },
    {
        "id": 46,
        "revelation_place": "makkah",
        "revelation_order": 66,
        "bismillah_pre": true,
        "name_simple": "Al-Ahqaf",
        "name_complex": "Al-'Aĥqāf",
        "name_arabic": "الأحقاف",
        "verses_count": 35,
        "translated_name": {
            "language_name": "english",
            "name": "The Wind-Curved Sandhills"
        },
        "audio_link": base_url+"/046s-Ahkaf.mp3"
    },
    {
        "id": 47,
        "revelation_place": "madinah",
        "revelation_order": 95,
        "bismillah_pre": true,
        "name_simple": "Muhammad",
        "name_complex": "Muĥammad",
        "name_arabic": "محمد",
        "verses_count": 38,
        "translated_name": {
            "language_name": "english",
            "name": "Muhammad"
        },
        "audio_link": base_url+"/047s-Mohammad.mp3"
    },
    {
        "id": 48,
        "revelation_place": "madinah",
        "revelation_order": 111,
        "bismillah_pre": true,
        "name_simple": "Al-Fath",
        "name_complex": "Al-Fatĥ",
        "name_arabic": "الفتح",
        "verses_count": 29,
        "translated_name": {
            "language_name": "english",
            "name": "The Victory"
        },
        "audio_link": base_url+"/048s-Fatah.mp3"
    },
    {
        "id": 49,
        "revelation_place": "madinah",
        "revelation_order": 106,
        "bismillah_pre": true,
        "name_simple": "Al-Hujurat",
        "name_complex": "Al-Ĥujurāt",
        "name_arabic": "الحجرات",
        "verses_count": 18,
        "translated_name": {
            "language_name": "english",
            "name": "The Rooms"
        },
        "audio_link": base_url+"/049s-Hujara.mp3"
    },
    {
        "id": 50,
        "revelation_place": "makkah",
        "revelation_order": 34,
        "bismillah_pre": true,
        "name_simple": "Qaf",
        "name_complex": "Qāf",
        "name_arabic": "ق",
        "verses_count": 45,
        "translated_name": {
            "language_name": "english",
            "name": "The Letter \"Qaf\""
        },
        "audio_link": base_url+"/050s-Qaaf.mp3"
    },
    {
        "id": 51,
        "revelation_place": "makkah",
        "revelation_order": 67,
        "bismillah_pre": true,
        "name_simple": "Adh-Dhariyat",
        "name_complex": "Adh-Dhāriyāt",
        "name_arabic": "الذاريات",
        "verses_count": 60,
        "translated_name": {
            "language_name": "english",
            "name": "The Winnowing Winds"
        },
        "audio_link": base_url+"/051s-Zaryeat.mp3"
    },
    {
        "id": 52,
        "revelation_place": "makkah",
        "revelation_order": 76,
        "bismillah_pre": true,
        "name_simple": "At-Tur",
        "name_complex": "Aţ-Ţūr",
        "name_arabic": "الطور",
        "verses_count": 49,
        "translated_name": {
            "language_name": "english",
            "name": "The Mount"
        },
        "audio_link": base_url+"/052s-Toor.mp3"
    },
    {
        "id": 53,
        "revelation_place": "makkah",
        "revelation_order": 23,
        "bismillah_pre": true,
        "name_simple": "An-Najm",
        "name_complex": "An-Najm",
        "name_arabic": "النجم",
        "verses_count": 62,
        "translated_name": {
            "language_name": "english",
            "name": "The Star"
        },
        "audio_link": base_url+"/053s-Najam.mp3"
    },
    {
        "id": 54,
        "revelation_place": "makkah",
        "revelation_order": 37,
        "bismillah_pre": true,
        "name_simple": "Al-Qamar",
        "name_complex": "Al-Qamar",
        "name_arabic": "القمر",
        "verses_count": 55,
        "translated_name": {
            "language_name": "english",
            "name": "The Moon"
        },
        "audio_link": base_url+"/054s-Qamar.mp3"
    },
    {
        "id": 55,
        "revelation_place": "madinah",
        "revelation_order": 97,
        "bismillah_pre": true,
        "name_simple": "Ar-Rahman",
        "name_complex": "Ar-Raĥmān",
        "name_arabic": "الرحمن",
        "verses_count": 78,
        "translated_name": {
            "language_name": "english",
            "name": "The Beneficent"
        },
        "audio_link": base_url+"/055s-Rahman.mp3"
    },
    {
        "id": 56,
        "revelation_place": "makkah",
        "revelation_order": 46,
        "bismillah_pre": true,
        "name_simple": "Al-Waqi'ah",
        "name_complex": "Al-Wāqi`ah",
        "name_arabic": "الواقعة",
        "verses_count": 96,
        "translated_name": {
            "language_name": "english",
            "name": "The Inevitable"
        },
        "audio_link": base_url+"/056s-Waqia.mp3"
    },
    {
        "id": 57,
        "revelation_place": "madinah",
        "revelation_order": 94,
        "bismillah_pre": true,
        "name_simple": "Al-Hadid",
        "name_complex": "Al-Ĥadīd",
        "name_arabic": "الحديد",
        "verses_count": 29,
        "translated_name": {
            "language_name": "english",
            "name": "The Iron"
        },
        "audio_link": base_url+"/057s-Hadeed.mp3"
    },
    {
        "id": 58,
        "revelation_place": "madinah",
        "revelation_order": 105,
        "bismillah_pre": true,
        "name_simple": "Al-Mujadila",
        "name_complex": "Al-Mujādila",
        "name_arabic": "المجادلة",
        "verses_count": 22,
        "translated_name": {
            "language_name": "english",
            "name": "The Pleading Woman"
        },
        "audio_link": base_url+"/058s-Mojadilah.mp3"
    },
    {
        "id": 59,
        "revelation_place": "madinah",
        "revelation_order": 101,
        "bismillah_pre": true,
        "name_simple": "Al-Hashr",
        "name_complex": "Al-Ĥashr",
        "name_arabic": "الحشر",
        "verses_count": 24,
        "translated_name": {
            "language_name": "english",
            "name": "The Exile"
        },
        "audio_link": base_url+"/059s-Hashar.mp3"
    },
    {
        "id": 60,
        "revelation_place": "madinah",
        "revelation_order": 91,
        "bismillah_pre": true,
        "name_simple": "Al-Mumtahanah",
        "name_complex": "Al-Mumtaĥanah",
        "name_arabic": "الممتحنة",
        "verses_count": 13,
        "translated_name": {
            "language_name": "english",
            "name": "She that is to be examined"
        },
        "audio_link": base_url+"/060s-Mumtahina.mp3"
    },
    {
        "id": 61,
        "revelation_place": "madinah",
        "revelation_order": 109,
        "bismillah_pre": true,
        "name_simple": "As-Saf",
        "name_complex": "Aş-Şaf",
        "name_arabic": "الصف",
        "verses_count": 14,
        "translated_name": {
            "language_name": "english",
            "name": "The Ranks"
        },
        "audio_link": base_url+"/061s-Saf.mp3"
    },
    {
        "id": 62,
        "revelation_place": "madinah",
        "revelation_order": 110,
        "bismillah_pre": true,
        "name_simple": "Al-Jumu'ah",
        "name_complex": "Al-Jumu`ah",
        "name_arabic": "الجمعة",
        "verses_count": 11,
        "translated_name": {
            "language_name": "english",
            "name": "The Congregation, Friday"
        },
        "audio_link": base_url+"/062s-Jumah.mp3"
    },
    {
        "id": 63,
        "revelation_place": "madinah",
        "revelation_order": 104,
        "bismillah_pre": true,
        "name_simple": "Al-Munafiqun",
        "name_complex": "Al-Munāfiqūn",
        "name_arabic": "المنافقون",
        "verses_count": 11,
        "translated_name": {
            "language_name": "english",
            "name": "The Hypocrites"
        },
        "audio_link": base_url+"/063s-Munafiqoon.mp3"
    },
    {
        "id": 64,
        "revelation_place": "madinah",
        "revelation_order": 108,
        "bismillah_pre": true,
        "name_simple": "At-Taghabun",
        "name_complex": "At-Taghābun",
        "name_arabic": "التغابن",
        "verses_count": 18,
        "translated_name": {
            "language_name": "english",
            "name": "The Mutual Disillusion"
        },
        "audio_link": base_url+"/064s-Taghabun.mp3"
    },
    {
        "id": 65,
        "revelation_place": "madinah",
        "revelation_order": 99,
        "bismillah_pre": true,
        "name_simple": "At-Talaq",
        "name_complex": "Aţ-Ţalāq",
        "name_arabic": "الطلاق",
        "verses_count": 12,
        "translated_name": {
            "language_name": "english",
            "name": "The Divorce"
        },
        "audio_link": base_url+"/065s-Talaq.mp3"
    },
    {
        "id": 66,
        "revelation_place": "madinah",
        "revelation_order": 107,
        "bismillah_pre": true,
        "name_simple": "At-Tahrim",
        "name_complex": "At-Taĥrīm",
        "name_arabic": "التحريم",
        "verses_count": 12,
        "translated_name": {
            "language_name": "english",
            "name": "The Prohibition"
        },
        "audio_link": base_url+"/066s-Tahreem.mp3"
    },
    {
        "id": 67,
        "revelation_place": "makkah",
        "revelation_order": 77,
        "bismillah_pre": true,
        "name_simple": "Al-Mulk",
        "name_complex": "Al-Mulk",
        "name_arabic": "الملك",
        "verses_count": 30,
        "translated_name": {
            "language_name": "english",
            "name": "The Sovereignty"
        },
        "audio_link": base_url+"/067s-Mulk.mp3"
    },
    {
        "id": 68,
        "revelation_place": "makkah",
        "revelation_order": 2,
        "bismillah_pre": true,
        "name_simple": "Al-Qalam",
        "name_complex": "Al-Qalam",
        "name_arabic": "القلم",
        "verses_count": 52,
        "translated_name": {
            "language_name": "english",
            "name": "The Pen"
        },
        "audio_link": base_url+"/068s-Qalm.mp3"
    },
    {
        "id": 69,
        "revelation_place": "makkah",
        "revelation_order": 78,
        "bismillah_pre": true,
        "name_simple": "Al-Haqqah",
        "name_complex": "Al-Ĥāqqah",
        "name_arabic": "الحاقة",
        "verses_count": 52,
        "translated_name": {
            "language_name": "english",
            "name": "The Reality"
        },
        "audio_link": base_url+"/069s-Haaqah.mp3"
    },
    {
        "id": 70,
        "revelation_place": "makkah",
        "revelation_order": 79,
        "bismillah_pre": true,
        "name_simple": "Al-Ma'arij",
        "name_complex": "Al-Ma`ārij",
        "name_arabic": "المعارج",
        "verses_count": 44,
        "translated_name": {
            "language_name": "english",
            "name": "The Ascending Stairways"
        },
        "audio_link": base_url+"/070s-Maarij.mp3"
    },
    {
        "id": 71,
        "revelation_place": "makkah",
        "revelation_order": 71,
        "bismillah_pre": true,
        "name_simple": "Nuh",
        "name_complex": "Nūĥ",
        "name_arabic": "نوح",
        "verses_count": 28,
        "translated_name": {
            "language_name": "english",
            "name": "Noah"
        },
        "audio_link": base_url+"/071s-Nooh.mp3"
    },
    {
        "id": 72,
        "revelation_place": "makkah",
        "revelation_order": 40,
        "bismillah_pre": true,
        "name_simple": "Al-Jinn",
        "name_complex": "Al-Jinn",
        "name_arabic": "الجن",
        "verses_count": 28,
        "translated_name": {
            "language_name": "english",
            "name": "The Jinn"
        },
        "audio_link": base_url+"/072s-Jin.mp3"
    },
    {
        "id": 73,
        "revelation_place": "makkah",
        "revelation_order": 3,
        "bismillah_pre": true,
        "name_simple": "Al-Muzzammil",
        "name_complex": "Al-Muzzammil",
        "name_arabic": "المزمل",
        "verses_count": 20,
        "translated_name": {
            "language_name": "english",
            "name": "The Enshrouded One"
        },
        "audio_link": base_url+"/073s-Muzammil.mp3"
    },
    {
        "id": 74,
        "revelation_place": "makkah",
        "revelation_order": 4,
        "bismillah_pre": true,
        "name_simple": "Al-Muddaththir",
        "name_complex": "Al-Muddaththir",
        "name_arabic": "المدثر",
        "verses_count": 56,
        "translated_name": {
            "language_name": "english",
            "name": "The Cloaked One"
        },
        "audio_link": base_url+"/074s-Mudasir.mp3"
    },
    {
        "id": 75,
        "revelation_place": "makkah",
        "revelation_order": 31,
        "bismillah_pre": true,
        "name_simple": "Al-Qiyamah",
        "name_complex": "Al-Qiyāmah",
        "name_arabic": "القيامة",
        "verses_count": 40,
        "translated_name": {
            "language_name": "english",
            "name": "The Resurrection"
        },
        "audio_link": base_url+"/075s-Qeamah.mp3"
    },
    {
        "id": 76,
        "revelation_place": "madinah",
        "revelation_order": 98,
        "bismillah_pre": true,
        "name_simple": "Al-Insan",
        "name_complex": "Al-'Insān",
        "name_arabic": "الانسان",
        "verses_count": 31,
        "translated_name": {
            "language_name": "english",
            "name": "The Man"
        },
        "audio_link": base_url+"/076s-Dahar.mp3"
    },
    {
        "id": 77,
        "revelation_place": "makkah",
        "revelation_order": 33,
        "bismillah_pre": true,
        "name_simple": "Al-Mursalat",
        "name_complex": "Al-Mursalāt",
        "name_arabic": "المرسلات",
        "verses_count": 50,
        "translated_name": {
            "language_name": "english",
            "name": "The Emissaries"
        },
        "audio_link": base_url+"/077s-Mursalat.mp3"
    },
    {
        "id": 78,
        "revelation_place": "makkah",
        "revelation_order": 80,
        "bismillah_pre": true,
        "name_simple": "An-Naba",
        "name_complex": "An-Naba",
        "name_arabic": "النبإ",
        "verses_count": 40,
        "translated_name": {
            "language_name": "english",
            "name": "The Tidings"
        },
        "audio_link": base_url+"/078s-Naba.mp3"
    },
    {
        "id": 79,
        "revelation_place": "makkah",
        "revelation_order": 81,
        "bismillah_pre": true,
        "name_simple": "An-Nazi'at",
        "name_complex": "An-Nāzi`āt",
        "name_arabic": "النازعات",
        "verses_count": 46,
        "translated_name": {
            "language_name": "english",
            "name": "Those who drag forth"
        },
        "audio_link": base_url+"/079s-Naziaat.mp3"
    },
    {
        "id": 80,
        "revelation_place": "makkah",
        "revelation_order": 24,
        "bismillah_pre": true,
        "name_simple": "'Abasa",
        "name_complex": "`Abasa",
        "name_arabic": "عبس",
        "verses_count": 42,
        "translated_name": {
            "language_name": "english",
            "name": "He Frowned"
        },
        "audio_link": base_url+"/080s-Abas.mp3"
    },
    {
        "id": 81,
        "revelation_place": "makkah",
        "revelation_order": 7,
        "bismillah_pre": true,
        "name_simple": "At-Takwir",
        "name_complex": "At-Takwīr",
        "name_arabic": "التكوير",
        "verses_count": 29,
        "translated_name": {
            "language_name": "english",
            "name": "The Overthrowing"
        },
        "audio_link": base_url+"/081s-Taqweer.mp3"
    },
    {
        "id": 82,
        "revelation_place": "makkah",
        "revelation_order": 82,
        "bismillah_pre": true,
        "name_simple": "Al-Infitar",
        "name_complex": "Al-'Infiţār",
        "name_arabic": "الإنفطار",
        "verses_count": 19,
        "translated_name": {
            "language_name": "english",
            "name": "The Cleaving"
        },
        "audio_link": base_url+"/082s-Infitaar.mp3"
    },
    {
        "id": 83,
        "revelation_place": "makkah",
        "revelation_order": 86,
        "bismillah_pre": true,
        "name_simple": "Al-Mutaffifin",
        "name_complex": "Al-Muţaffifīn",
        "name_arabic": "المطففين",
        "verses_count": 36,
        "translated_name": {
            "language_name": "english",
            "name": "The Defrauding"
        },
        "audio_link": base_url+"/083s-Mutafifeen.mp3"
    },
    {
        "id": 84,
        "revelation_place": "makkah",
        "revelation_order": 83,
        "bismillah_pre": true,
        "name_simple": "Al-Inshiqaq",
        "name_complex": "Al-'Inshiqāq",
        "name_arabic": "الإنشقاق",
        "verses_count": 25,
        "translated_name": {
            "language_name": "english",
            "name": "The Sundering"
        },
        "audio_link": base_url+"/084s-Inshiqaq.mp3"
    },
    {
        "id": 85,
        "revelation_place": "makkah",
        "revelation_order": 27,
        "bismillah_pre": true,
        "name_simple": "Al-Buruj",
        "name_complex": "Al-Burūj",
        "name_arabic": "البروج",
        "verses_count": 22,
        "translated_name": {
            "language_name": "english",
            "name": "The Mansions of the Stars"
        },
        "audio_link": base_url+"/085s-Burooj.mp3"
    },
    {
        "id": 86,
        "revelation_place": "makkah",
        "revelation_order": 36,
        "bismillah_pre": true,
        "name_simple": "At-Tariq",
        "name_complex": "Aţ-Ţāriq",
        "name_arabic": "الطارق",
        "verses_count": 17,
        "translated_name": {
            "language_name": "english",
            "name": "The Nightcommer"
        },
        "audio_link": base_url+"/"
    },
    {
        "id": 87,
        "revelation_place": "makkah",
        "revelation_order": 8,
        "bismillah_pre": true,
        "name_simple": "Al-A'la",
        "name_complex": "Al-'A`lá",
        "name_arabic": "الأعلى",
        "verses_count": 19,
        "translated_name": {
            "language_name": "english",
            "name": "The Most High"
        },
        "audio_link": base_url+"/087s-Aala.mp3"
    },
    {
        "id": 88,
        "revelation_place": "makkah",
        "revelation_order": 68,
        "bismillah_pre": true,
        "name_simple": "Al-Ghashiyah",
        "name_complex": "Al-Ghāshiyah",
        "name_arabic": "الغاشية",
        "verses_count": 26,
        "translated_name": {
            "language_name": "english",
            "name": "The Overwhelming"
        },
        "audio_link": base_url+"/088s-Ghashiah.mp3"
    },
    {
        "id": 89,
        "revelation_place": "makkah",
        "revelation_order": 10,
        "bismillah_pre": true,
        "name_simple": "Al-Fajr",
        "name_complex": "Al-Fajr",
        "name_arabic": "الفجر",
        "verses_count": 30,
        "translated_name": {
            "language_name": "english",
            "name": "The Dawn"
        },
        "audio_link": base_url+"/089s-Fajr.mp3"
    },
    {
        "id": 90,
        "revelation_place": "makkah",
        "revelation_order": 35,
        "bismillah_pre": true,
        "name_simple": "Al-Balad",
        "name_complex": "Al-Balad",
        "name_arabic": "البلد",
        "verses_count": 20,
        "translated_name": {
            "language_name": "english",
            "name": "The City"
        },
        "audio_link": base_url+"/090s-Balad.mp3"
    },
    {
        "id": 91,
        "revelation_place": "makkah",
        "revelation_order": 26,
        "bismillah_pre": true,
        "name_simple": "Ash-Shams",
        "name_complex": "Ash-Shams",
        "name_arabic": "الشمس",
        "verses_count": 15,
        "translated_name": {
            "language_name": "english",
            "name": "The Sun"
        },
        "audio_link": base_url+"/091s-Shams.mp3"
    },
    {
        "id": 92,
        "revelation_place": "makkah",
        "revelation_order": 9,
        "bismillah_pre": true,
        "name_simple": "Al-Layl",
        "name_complex": "Al-Layl",
        "name_arabic": "الليل",
        "verses_count": 21,
        "translated_name": {
            "language_name": "english",
            "name": "The Night"
        },
        "audio_link": base_url+"/092s-Lail.mp3"
    },
    {
        "id": 93,
        "revelation_place": "makkah",
        "revelation_order": 11,
        "bismillah_pre": true,
        "name_simple": "Ad-Duhaa",
        "name_complex": "Ađ-Đuĥaá",
        "name_arabic": "الضحى",
        "verses_count": 11,
        "translated_name": {
            "language_name": "english",
            "name": "The Morning Hours"
        },
        "audio_link": base_url+"/093s-Duha.mp3"
    },
    {
        "id": 94,
        "revelation_place": "makkah",
        "revelation_order": 12,
        "bismillah_pre": true,
        "name_simple": "Ash-Sharh",
        "name_complex": "Ash-Sharĥ",
        "name_arabic": "الشرح",
        "verses_count": 8,
        "translated_name": {
            "language_name": "english",
            "name": "The Relief"
        },
        "audio_link": base_url+"/094s-Alam-Nashrah.mp3"
    },
    {
        "id": 95,
        "revelation_place": "makkah",
        "revelation_order": 28,
        "bismillah_pre": true,
        "name_simple": "At-Tin",
        "name_complex": "At-Tīn",
        "name_arabic": "التين",
        "verses_count": 8,
        "translated_name": {
            "language_name": "english",
            "name": "The Fig"
        },
        "audio_link": base_url+"/095s-Teen.mp3"
    },
    {
        "id": 96,
        "revelation_place": "makkah",
        "revelation_order": 1,
        "bismillah_pre": true,
        "name_simple": "Al-'Alaq",
        "name_complex": "Al-`Alaq",
        "name_arabic": "العلق",
        "verses_count": 19,
        "translated_name": {
            "language_name": "english",
            "name": "The Clot"
        },
        "audio_link": base_url+"/096s-Alaq.mp3"
    },
    {
        "id": 97,
        "revelation_place": "makkah",
        "revelation_order": 25,
        "bismillah_pre": true,
        "name_simple": "Al-Qadr",
        "name_complex": "Al-Qadr",
        "name_arabic": "القدر",
        "verses_count": 5,
        "translated_name": {
            "language_name": "english",
            "name": "The Power"
        },
        "audio_link": base_url+"/097s-Qadar.mp3"
    },
    {
        "id": 98,
        "revelation_place": "madinah",
        "revelation_order": 100,
        "bismillah_pre": true,
        "name_simple": "Al-Bayyinah",
        "name_complex": "Al-Bayyinah",
        "name_arabic": "البينة",
        "verses_count": 8,
        "translated_name": {
            "language_name": "english",
            "name": "The Clear Proof"
        },
        "audio_link": base_url+"/098s-Bayina.mp3"
    },
    {
        "id": 99,
        "revelation_place": "madinah",
        "revelation_order": 93,
        "bismillah_pre": true,
        "name_simple": "Az-Zalzalah",
        "name_complex": "Az-Zalzalah",
        "name_arabic": "الزلزلة",
        "verses_count": 8,
        "translated_name": {
            "language_name": "english",
            "name": "The Earthquake"
        },
        "audio_link": base_url+"/099s-Zilzaal.mp3"
    },
    {
        "id": 100,
        "revelation_place": "makkah",
        "revelation_order": 14,
        "bismillah_pre": true,
        "name_simple": "Al-'Adiyat",
        "name_complex": "Al-`Ādiyāt",
        "name_arabic": "العاديات",
        "verses_count": 11,
        "translated_name": {
            "language_name": "english",
            "name": "The Courser"
        },
        "audio_link": base_url+"/100s-Aadiyeat.mp3"
    },
    {
        "id": 101,
        "revelation_place": "makkah",
        "revelation_order": 30,
        "bismillah_pre": true,
        "name_simple": "Al-Qari'ah",
        "name_complex": "Al-Qāri`ah",
        "name_arabic": "القارعة",
        "verses_count": 11,
        "translated_name": {
            "language_name": "english",
            "name": "The Calamity"
        },
        "audio_link": base_url+"/101s-Qariah.mp3"
    },
    {
        "id": 102,
        "revelation_place": "makkah",
        "revelation_order": 16,
        "bismillah_pre": true,
        "name_simple": "At-Takathur",
        "name_complex": "At-Takāthur",
        "name_arabic": "التكاثر",
        "verses_count": 8,
        "translated_name": {
            "language_name": "english",
            "name": "The Rivalry in world increase"
        },
        "audio_link": base_url+"/102s-Takasur.mp3"
    },
    {
        "id": 103,
        "revelation_place": "makkah",
        "revelation_order": 13,
        "bismillah_pre": true,
        "name_simple": "Al-'Asr",
        "name_complex": "Al-`Aşr",
        "name_arabic": "العصر",
        "verses_count": 3,
        "translated_name": {
            "language_name": "english",
            "name": "The Declining Day"
        },
        "audio_link": base_url+"/103s-Aasar.mp3"
    },
    {
        "id": 104,
        "revelation_place": "makkah",
        "revelation_order": 32,
        "bismillah_pre": true,
        "name_simple": "Al-Humazah",
        "name_complex": "Al-Humazah",
        "name_arabic": "الهمزة",
        "verses_count": 9,
        "translated_name": {
            "language_name": "english",
            "name": "The Traducer"
        },
        "audio_link": base_url+"/104s-Humaza.mp3"
    },
    {
        "id": 105,
        "revelation_place": "makkah",
        "revelation_order": 19,
        "bismillah_pre": true,
        "name_simple": "Al-Fil",
        "name_complex": "Al-Fīl",
        "name_arabic": "الفيل",
        "verses_count": 5,
        "translated_name": {
            "language_name": "english",
            "name": "The Elephant"
        },
        "audio_link": base_url+"/105s-feel.mp3"
    },
    {
        "id": 106,
        "revelation_place": "makkah",
        "revelation_order": 29,
        "bismillah_pre": true,
        "name_simple": "Quraysh",
        "name_complex": "Quraysh",
        "name_arabic": "قريش",
        "verses_count": 4,
        "translated_name": {
            "language_name": "english",
            "name": "Quraysh"
        },
        "audio_link": base_url+"/106s-Qureish.mp3"
    },
    {
        "id": 107,
        "revelation_place": "makkah",
        "revelation_order": 17,
        "bismillah_pre": true,
        "name_simple": "Al-Ma'un",
        "name_complex": "Al-Mā`ūn",
        "name_arabic": "الماعون",
        "verses_count": 7,
        "translated_name": {
            "language_name": "english",
            "name": "The Small kindnesses"
        },
        "audio_link": base_url+"/107s-Maoon.mp3"
    },
    {
        "id": 108,
        "revelation_place": "makkah",
        "revelation_order": 15,
        "bismillah_pre": true,
        "name_simple": "Al-Kawthar",
        "name_complex": "Al-Kawthar",
        "name_arabic": "الكوثر",
        "verses_count": 3,
        "translated_name": {
            "language_name": "english",
            "name": "The Abundance"
        },
        "audio_link": base_url+"/108s-Kusar.mp3"
    },
    {
        "id": 109,
        "revelation_place": "makkah",
        "revelation_order": 18,
        "bismillah_pre": true,
        "name_simple": "Al-Kafirun",
        "name_complex": "Al-Kāfirūn",
        "name_arabic": "الكافرون",
        "verses_count": 6,
        "translated_name": {
            "language_name": "english",
            "name": "The Disbelievers"
        },
        "audio_link": base_url+"/109s-Kafiroon.mp3"
    },
    {
        "id": 110,
        "revelation_place": "madinah",
        "revelation_order": 114,
        "bismillah_pre": true,
        "name_simple": "An-Nasr",
        "name_complex": "An-Naşr",
        "name_arabic": "النصر",
        "verses_count": 3,
        "translated_name": {
            "language_name": "english",
            "name": "The Divine Support"
        },
        "audio_link": base_url+"/110s-Nasr.mp3"
    },
    {
        "id": 111,
        "revelation_place": "makkah",
        "revelation_order": 6,
        "bismillah_pre": true,
        "name_simple": "Al-Masad",
        "name_complex": "Al-Masad",
        "name_arabic": "المسد",
        "verses_count": 5,
        "translated_name": {
            "language_name": "english",
            "name": "The Palm Fiber"
        },
        "audio_link": base_url+"/111s-Lahab.mp3"
    },
    {
        "id": 112,
        "revelation_place": "makkah",
        "revelation_order": 22,
        "bismillah_pre": true,
        "name_simple": "Al-Ikhlas",
        "name_complex": "Al-'Ikhlāş",
        "name_arabic": "الإخلاص",
        "verses_count": 4,
        "translated_name": {
            "language_name": "english",
            "name": "The Sincerity"
        },
        "audio_link": base_url+"/112s-Akhlaas.mp3"
    },
    {
        "id": 113,
        "revelation_place": "makkah",
        "revelation_order": 20,
        "bismillah_pre": true,
        "name_simple": "Al-Falaq",
        "name_complex": "Al-Falaq",
        "name_arabic": "الفلق",
        "verses_count": 5,
        "translated_name": {
            "language_name": "english",
            "name": "The Daybreak"
        },
        "audio_link": base_url+"/113s-Falaq.mp3"
    },
    {
        "id": 114,
        "revelation_place": "makkah",
        "revelation_order": 21,
        "bismillah_pre": true,
        "name_simple": "An-Nas",
        "name_complex": "An-Nās",
        "name_arabic": "الناس",
        "verses_count": 6,
        "translated_name": {
            "language_name": "english",
            "name": "Mankind"
        },
        "audio_link": base_url+"/114s-Naas.mp3"
    }
]
// Function to dynamically generate cards
function createSurahCards() {
    const container = document.getElementById('surah-container');

    chapters.forEach(surah => {
        // Create card div
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-6', 'col-lg-4', 'surah-card');

        // Create card HTML structure
        cardDiv.innerHTML = `
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <div class="surah-number"><span>${surah.id}</span></div>
                       ${surah.name_arabic} (${surah.name_simple})
                    </h5>
                    <audio controls>
                      <source src="${surah.audio_link}" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              `;

        // Append card to the container
        container.appendChild(cardDiv);
    });
}

// Call the function to generate cards on page load
createSurahCards();
