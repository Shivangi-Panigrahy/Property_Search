const mongoose = require('mongoose');
const Property = require('../models/Property'); 

const properties = [
  {
    id: "10025",
    title: "JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG",
    type: "Haus",
    location: "3400 Klosterneuburg",
    rooms: "6 Zimmer",
    bathrooms: "3 Bad",
    size: "215,96 m²",
    transactionType: "Kaufen",
    price: "750.000,00 €",
    views: "171",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_1_oyagm3.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10125",
    title: "DACHGESCHOSSWOHNUNG MIT BALKON NAHE COTTAGE VIERTEL",
    type: "Wohnung",
    location: "1180 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "606.000,00 €",
    views: "152",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_2_dmhr5v.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10506",
    title: "MODERNE DG-MAISONETTE MIT BALKON AM AUMANNPLATZ",
    type: "Wohnung",
    location: "1180 Wien",
    rooms: "2 Zimmer",
    bathrooms: "1 Bad",
    size: "61,68 m²",
    transactionType: "Kaufen",
    price: "650.000,00 €",
    views: "95",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_3._fyjboc.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10001",
    title: "MODERNE DACHGESCHOSSWOHNUNG NÄHE AKH WIEN UND KUTSCHKERMARKT",
    type: "Wohnung",
    location: "1180 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "111,20 m²",
    transactionType: "Kaufen",
    price: "690.000,00 €",
    views: "53",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_4_nuwp4c.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10004",
    title: "GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.300.000,00 €",
    views: "49",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_5_nok066.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10023",
    title: "EXQUISITE VILLA MIT WELLNESSBEREICH UND INDOOR-POOL",
    type: "Haus",
    location: "3400 Klosterneuburg",
    rooms: "7 Zimmer",
    bathrooms: "4 Bad",
    size: "460,07 m²",
    transactionType: "Kaufen",
    price: "2.900.000,00 €",
    views: "37",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_6_ohotko.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10018",
    title:
      "SANIERTE 5 ZIMMER DOPPELHAUSHÄLFTE MITSAMT GARTEN UND GEMAUERTEM KAMINOFEN AUF EIGENGRUND",
    type: "Doppelhaus",
    location: "1210 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "115,00 m²",
    transactionType: "Kaufen",
    price: "495.000,00 €",
    views: "32",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_7_u2qccn.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10126",
    title: "HOCHWERTIGE DG-WOHNUNG AUF 2 EBENEN",
    type: "Wohnung",
    location: "1150 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "548.000,00 €",
    views: "26",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_8_izhvag.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10507",
    title: "GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.300.000,00 €",
    views: "21",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_9_mgb4pe.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10508",
    title: "ELEGANTE STADTVILLA IN RUHIGER TOPLAGE VON WIEN",
    type: "Haus",
    location: "1130 Wien",
    rooms: "6 Zimmer",
    bathrooms: "3 Bad",
    size: "215,96 m²",
    transactionType: "Kaufen",
    price: "770.000,00 €",
    views: "143",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_1_oyagm3.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10517",
    title: "FAMILIENFREUNDLICHE VILLA MIT AUSBAUPOTENZIAL UND GARTEN",
    type: "Haus",
    location: "2340 Mödling",
    rooms: "6 Zimmer",
    bathrooms: "3 Bad",
    size: "215,96 m²",
    transactionType: "Kaufen",
    price: "765.000,00 €",
    views: "119",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_1_oyagm3.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10518",
    title: "STILVOLLE ALTBAUWOHNUNG MIT BALKON",
    type: "Wohnung",
    location: "1030 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "620.000,00 €",
    views: "104",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_2_dmhr5v.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10519",
    title: "NEU SANIERTE MAISONETTE IN RUHIGER LAGE",
    type: "Wohnung",
    location: "1200 Wien",
    rooms: "2 Zimmer",
    bathrooms: "1 Bad",
    size: "61,68 m²",
    transactionType: "Kaufen",
    price: "660.000,00 €",
    views: "82",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_3._fyjboc.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10520",
    title: "PENTHOUSE MIT MODERNER EINBAUKÜCHE UND GROSSEM BALKON",
    type: "Wohnung",
    location: "1050 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "111,20 m²",
    transactionType: "Kaufen",
    price: "680.000,00 €",
    views: "59",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_4_nuwp4c.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10521",
    title: "TRAUMHAFTE GARTENWOHNUNG MIT EIGENEM POOL UND VIEL PRIVATSPHÄRE",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.295.000,00 €",
    views: "47",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_5_nok066.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10522",
    title: "MODERNE VILLA MIT FITNESSRAUM UND DESIGNERKÜCHE",
    type: "Haus",
    location: "3400 Klosterneuburg",
    rooms: "7 Zimmer",
    bathrooms: "4 Bad",
    size: "460,07 m²",
    transactionType: "Kaufen",
    price: "2.950.000,00 €",
    views: "36",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_6_ohotko.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10523",
    title: "CHARMANTE DOPPELHAUSHÄLFTE MIT TERRASSE UND GARTEN",
    type: "Doppelhaus",
    location: "1210 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "115,00 m²",
    transactionType: "Kaufen",
    price: "490.000,00 €",
    views: "31",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_7_u2qccn.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10524",
    title: "DACHGESCHOSSWOHNUNG AUF 2 EBENEN MIT TRAUMAUSBLICK",
    type: "Wohnung",
    location: "1150 Wien",
    rooms: "4 Zimmer",
    bathrooms: "1 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "565.000,00 €",
    views: "23",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_8_izhvag.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10525",
    title: "EXKLUSIVE GARTEN-MAISONETTE MIT SWIMMINGPOOL UND TERRASSE",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.310.000,00 €",
    views: "19",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_9_mgb4pe.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10526",
    title: "FAMILIENWOHNUNG MIT GARTENZUGANG UND MODERNER AUSSTATTUNG",
    type: "Wohnung",
    location: "1140 Wien",
    rooms: "4 Zimmer",
    bathrooms: "2 Bad",
    size: "120,00 m²",
    transactionType: "Kaufen",
    price: "680.000,00 €",
    views: "29",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_1_oyagm3.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10509",
    title: "BALKONWOHNUNG IM HERZEN DES 18. BEZIRKS",
    type: "Wohnung",
    location: "1180 Wien",
    rooms: "3 Zimmer",
    bathrooms: "1 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "615.000,00 €",
    views: "138",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_2_dmhr5v.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10510",
    title: "HELLE MAISONETTE MIT TERRASSE IN ZENTRALER LAGE",
    type: "Wohnung",
    location: "1070 Wien",
    rooms: "2 Zimmer",
    bathrooms: "1 Bad",
    size: "61,68 m²",
    transactionType: "Kaufen",
    price: "640.000,00 €",
    views: "91",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_3._fyjboc.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10511",
    title: "NEUBAUWOHNUNG MIT FERNBLICK ÜBER WIEN",
    type: "Wohnung",
    location: "1090 Wien",
    rooms: "4 Zimmer",
    bathrooms: "2 Bad",
    size: "111,20 m²",
    transactionType: "Kaufen",
    price: "705.000,00 €",
    views: "65",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_4_nuwp4c.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10512",
    title: "MAISONETTE MIT PRIVATPOOL UND GARTEN IN DÖBLING",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.310.000,00 €",
    views: "55",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866150/Property_5_nok066.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10513",
    title: "LUXUSVILLA MIT INDOOR-POOL UND SAUNABEREICH",
    type: "Haus",
    location: "3400 Klosterneuburg",
    rooms: "7 Zimmer",
    bathrooms: "4 Bad",
    size: "460,07 m²",
    transactionType: "Kaufen",
    price: "2.920.000,00 €",
    views: "41",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_6_ohotko.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10514",
    title: "DOPPELHAUSHÄLFTE AUF EIGENGRUND MIT MODERNEM KAMIN",
    type: "Doppelhaus",
    location: "1210 Wien",
    rooms: "4 Zimmer",
    bathrooms: "2 Bad",
    size: "115,00 m²",
    transactionType: "Kaufen",
    price: "510.000,00 €",
    views: "39",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866151/Property_7_u2qccn.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10515",
    title: "DG-WOHNUNG MIT GALERIE UND PANORAMABLICK",
    type: "Wohnung",
    location: "1150 Wien",
    rooms: "4 Zimmer",
    bathrooms: "2 Bad",
    size: "98,51 m²",
    transactionType: "Kaufen",
    price: "558.000,00 €",
    views: "28",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_8_izhvag.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
  {
    id: "10516",
    title: "EXKLUSIVE MAISONETTE MIT POOL UND GARTEN",
    type: "Wohnung",
    location: "1190 Wien",
    rooms: "5 Zimmer",
    bathrooms: "5 Bad",
    size: "200,00 m²",
    transactionType: "Kaufen",
    price: "2.320.000,00 €",
    views: "24",
    image:
      "https://res.cloudinary.com/dlcstojtc/image/upload/v1743866152/Property_9_mgb4pe.png",
    heartIcon:
      "https://c.animaapp.com/m92rahviqX0WO8/img/heart-symbols---iconly-pro.svg",
    eyeIcon: "https://c.animaapp.com/m92rahviqX0WO8/img/eye---iconly-pro.svg",
  },
];

const parseNumber = (str) => {
  if (!str) return 0;
  const cleaned = str.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(',', '.');
  return parseFloat(cleaned);
};

const extractZipCity = (location) => {
  const match = location.match(/(\d{4,5})\s+(.+)/);
  return match ? { zipCode: match[1], city: match[2] } : { zipCode: '', city: '' };
};

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await Property.deleteMany();

    const formatted = properties.map((p) => {
      const priceNumeric = parseNumber(p.price);
      const sizeNumeric = parseNumber(p.size);
      const roomsNumeric = parseNumber(p.rooms);
      const { zipCode, city } = extractZipCity(p.location);

      return {
        ...p,
        priceNumeric,
        sizeNumeric,
        roomsNumeric,
        zipCode,
        city,
        state: "Wien" 
      };
    });

    await Property.insertMany(formatted);
    console.log("✅ Properties seeded successfully");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding properties:", err);
  }
};

seedData();
