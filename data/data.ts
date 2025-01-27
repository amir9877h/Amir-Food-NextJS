export const DATABASE = {
    "services":[
        { "service": "رستوران", "img": "/images/images-home/service-food.png" },
        { "service": "سویرمارکت", "img": "/images/images-home/service-supermarket.png" },
        { "service": "کافه", "img":  "/images/images-home/service-cafe.png"},
        { "service": "شیرینی", "img":  "/images/images-home/service-sweet.png" },
        { "service": "نانوایی", "img":  "/images/images-home/service-bakery.png" },
        { "service": "میوه", "img":  "/images/images-home/service-fruit.png" },
        { "service": "آبمیوه بستنی", "img":  "/images/images-home/service-icecream.png"},
        { "service": "آجیل", "img":  "/images/images-home/service-nut.png" },
        { "service": "پروتئین", "img":  "/images/images-home/service-meat.png"},
        { "service": "سایر", "img":  "/images/images-home/service-other2.png"}
    ],
    "cats": [
        { "id": 1, "title": "ایرانی", "img": "/images/irani.jpg" , "logo":"/images/irani-logo.png"},
        { "id": 2, "title": "فست فود", "img": "/images/fastfood.jpg" , "logo":"/images/fastfood-logo.png"},
        { "id": 3, "title": "کباب", "img": "/images/kebab.jpg" , "logo":"/images/kebab-logo.png"},
        { "id": 4, "title": "پیتزا", "img": "/images/pizza.jpg" , "logo":""},
        { "id": 5, "title": "برگر", "img": "/images/burger.jpg" , "logo":""},
        { "id": 6, "title": "ساندویچ", "img": "/images/sandwich.jpg" , "logo":""},
        { "id": 7, "title": "سوخاری", "img": "/images/sokhari.jpg" , "logo":""},
        { "id": 8, "title": "پاستا", "img": "/images/italy.jpg" , "logo":""},
        { "id": 9, "title": "سالاد", "img": "/images/salad.jpg" , "logo":"/images/salad-logo.png"},
        { "id": 10, "title": "دریایی", "img": "/images/seafood.jpg" , "logo":"/images/sea-logo.png"},
        { "id": 11, "title": "بین الملل", "img": "/images/asian.jpg" , "logo":"/images/international-logo.png"},
        { "id": 12, "title": "گیلانی", "img": "/images/gilani.jpg" , "logo":""}
    ],
    "subCats": [
        { "id": 1, "catId": [1, 3], "title": "کباب" },
        { "id": 2, "catId": [1], "title": "سنتی" },
        { "id": 3, "catId": [1], "title": "پلوی ایرانی" },
        { "id": 4, "catId": [1], "title": "خورشت" },
        { "id": 5, "catId": [1], "title": "مرغ" },
        { "id": 6, "catId": [2, 4], "title": "پیتزا" },
        { "id": 7, "catId": [2, 6], "title": "ساندویچ" },
        { "id": 8, "catId": [2, 5], "title": "برگر" },
        { "id": 9, "catId": [2, 7], "title": "سوخاری" },
        { "id": 10, "catId": [2, 8], "title": "پاستا" },
        { "id": 11, "catId": [1, 3], "title": "کباب گوشت" },
        { "id": 12, "catId": [1, 3], "title": "جوجه کباب" }
    ],
    "restCats": [
        { "id": 1, "restId": 1, "title": "چلوکباب" },
        { "id": 2, "restId": 1, "title": "خوراک" },
        { "id": 3, "restId": 1, "title": "غذای ایرانی" },
        { "id": 4, "restId": 1, "title": "خورشت" },
        { "id": 5, "restId": 1, "title": "پیش غذا" },
        { "id": 6, "restId": 2, "title": "چلوکباب" },
        { "id": 7, "restId": 2, "title": "خوراک" },
        { "id": 8, "restId": 2, "title": "غذای ایرانی" },
        { "id": 9, "restId": 2, "title": "پیش غذا" },
        { "id": 10, "restId": 2, "title": "نوشیدنی" },
        { "id": 11, "restId": 3, "title": "چلوکباب" },
        { "id": 12, "restId": 3, "title": "خوراک" },
        { "id": 13, "restId": 3, "title": "غذای ایرانی" },
        { "id": 14, "restId": 3, "title": "پیش غذا" },
        { "id": 15, "restId": 3, "title": "نوشیدنی" },
        { "id": 16, "restId": 4, "title": "ساندویچ رست بیف" },
        { "id": 17, "restId": 4, "title": "ساندویچ سنتی" },
        { "id": 18, "restId": 4, "title": "نوشیدنی" },
        { "id": 19, "restId": 5, "title": "غذای اصلی" },
        { "id": 20, "restId": 5, "title": "نوشیدنی" },
        { "id": 21, "restId": 6, "title": "پیتزا" },
        { "id": 22, "restId": 6, "title": "برگر" },
        { "id": 23, "restId": 6, "title": "ساندویچ" },
        { "id": 24, "restId": 6, "title": "نوشیدنی" },
        { "id": 25, "restId": 7, "title": "پیتزا" },
        { "id": 26, "restId": 7, "title": "برگر" },
        { "id": 27, "restId": 7, "title": "ساندویچ" },
        { "id": 28, "restId": 7, "title": "نوشیدنی" },
        { "id": 29, "restId": 8, "title": "پیتزا آمریکایی" },
        { "id": 30, "restId": 8, "title": "پیش غذا" },
        { "id": 31, "restId": 8, "title": "نوشیدنی" },
        { "id": 32, "restId": 9, "title": "پیتزا آمریکایی" },
        { "id": 33, "restId": 9, "title": "برگر" },
        { "id": 34, "restId": 9, "title": "ساندویچ" },
        { "id": 35, "restId": 9, "title": "سوخاری" },
        { "id": 36, "restId": 9, "title": "سالاد" }
    ],
    "restaurants": [
        {
            "id": 1,
            "catId": [1,3],
            "otherCats": ["ایرانی, کباب, مرغ, سنتی"],
            "name": "تهیه غذای کانی کرد",
            "star": 4.2,
            "rate": 82,
            "logo": "/images/deflogo-1.jpg",
            "image": "/images/irani-1.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 20000
            },
            "address": "شهرک فجر(خیابان اول)، کوچه شهید محمدرضا سورانی، بن بست هشتم، طبقه یک، تهیه غذای کانی کرد",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "80,000"
        },
        {
            "id": 2,
            "catId": [1,3],
            "otherCats": ["ایرانی, کباب, مرغ, پیش‌غذای ایرانی"],
            "name": "تهیه غذای لوکس زرین",
            "star": 4.3,
            "rate": 632,
            "logo": "/images/deflogo-2.jpg",
            "image": "/images/irani-2.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 15000
            },
            "address": "شهرک معلم، کوچه نیروی انتظامی، بلوار رودکی، طبقه همکف، تهیه غذای لوکس زرین",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "60,000"
        },
        {
            "id": 3,
            "catId": [1,3],
            "otherCats": ["ایرانی, کباب, سنتی, گوشت"],
            "name": "رضایی",
            "star": 4,
            "rate": 1939,
            "logo": "/images/rezaee-logo.jpg",
            "image": "/images/irani-3.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 20000
            },
            "address": "طاقبستان، جنب شهر شادی، رضایی",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "200,000"
        },
        {
            "id": 4,
            "catId": [1,3],
            "otherCats": ["فست‌فود, ساندویچ, کباب"],
            "name": "کره کباب",
            "star": 4,
            "rate": 3243,
            "logo": "/images/deflogo-1.jpg",
            "image": "/images/irani-4.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 25000
            },
            "address": "بلوار نوبهار، نبش کوی ۱۱۶، کره کباب",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "21,000"
        },
        {
            "id": 5,
            "catId": [1,3],
            "otherCats": ["ایرانی, سنتی"],
            "name": "طباخی کاخ",
            "star": 4,
            "rate": 94,
            "logo": "/images/deflogo-1.jpg",
            "image": "/images/irani-5.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 40000
            },
            "address": "میدان طاق بستان، به سمت جاده قدیم، نرسیده به پارک شرقی، طباخی کاخ",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "30,000"
        },
        {
            "id": 6,
            "catId": [2,4],
            "otherCats": ["سالاد و پیش غذا", "پیش غذا", "پیتزا"],
            "name": "کافه چی",
            "star": 4,
            "rate": 1000,
            "logo": "/images/deflogo-1.jpg",
            "image": "/images/fastfood-1.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 25000
            },
            "address": "سی متری دوم، کوچه ۱۲۱ (معتمدی)، کافه چی",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "45,000"
        },
        {
            "id": 7,
            "catId": [2,4,5,6,7,8,9],
            "otherCats": ["فست فود", "برگر", "ساندویچ"],
            "name": "فست فود بی بی جون",
            "star": 4,
            "rate": 885,
            "logo": "/images/deflogo-2.jpg",
            "image": "/images/fastfood-2.jpg",
            "delivery": {
                "icon": "/images/delivery.svg",
                "type": "پیک فروشنده",
                "price": 25000
            },
            "address": " سی متری دوم، کوچه ۱۲۱ (معتمدی)، فست فود بی بی جون",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "45,000"
        },
        {
            "id": 8,
            "catId": [2,4,5,6,7,8,9],
            "otherCats": ["فست فود", "پیتزا", "ساندویچ"],
            "name": "فست فود گلد مام",
            "star": 4.3,
            "rate": 885,
            "logo": "/images/goldmom-logo.jpg",
            "image": "/images/fastfood-3.jpg",
            "delivery": {
                "icon": "/images/express.svg",
                "type": "ارسال اکسپرس",
                "price": 20500
            },
            "address": "خیابان ۲۲ بهمن، میدان مرکزی، خیابان نهم، نبش کوچه ۱۰۹، فست فود گلد مام (شعبه برق باباخانی)",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "75,000"
        },
        {
            "id": 9,
            "catId": [2,4,5,6,7,8,9],
            "otherCats": ["فست‌فود, پیتزا, ساندویچ, برگر, پیش غذا"],
            "name": "فست فود استاف",
            "star": 4.1,
            "rate": 360,
            "logo": "/images/deflogo-2.jpg",
            "image": "/images/fastfood-5.jpg",
            "delivery": {
                "icon": "/images/express.svg",
                "type": "ارسال اکسپرس",
                "price": 18500
            },
            "address": "میدان مرکزی، نبش کوچه ۱۳۹، فست فود استاف",
            "worktime": "باز امروز از ساعت ۱۰:۳۰ تا ۲۲:۰۰",
            "pay": "آنلاین، اعتبار جایزه خرید",
            "tax": 0.09,
            "basketminimum": "ندارد"
        }
    ],
    "foods": [
        {
            "id": 1,
            "catId": [1, 3],
            "subCatId": [1, 2, 3, 5],
            "restId": 1,
            "restCatId": 1,
            "name": "چلو کباب میکس",
            "image": "/images/kabab-mix.jpg",
            "price": 180000,
            "rate": 5,
            "desc":"۲ سیخ کباب میکس، ترکیب ۶۰ گرم کباب چنجه گوساله، ۶۰ گرم جوجه کباب ترش، ۶۰ گرم جوجه کباب سینه مرغ، ۶۰ گرم کباب ترش گوشت فیله گوساله، ۴۰۰ گرم برنج ایرانی، گوجه کبابی، کره"
        },
        {
            "id": 2,
            "catId": [10],
            "subCatId": [],
            "restId": 1,
            "restCatId": 2,
            "name": "خوراک ماهی قزل آلا سرخ شده",
            "image": "/images/mahi-sorkh-shode.jpg",
            "price": 210000,
            "rate": "جدید",
            "desc":"۳۰۰ گرم ماهی قزل آلا سرخ شده"
        },
        {
            "id": 3,
            "catId": [1],
            "subCatId": [1, 2, 3, 11],
            "restId": 1,
            "restCatId": 3,
            "name": "چلو ماهیچه",
            "image": "/images/mahiche.jpg",
            "price": 260000,
            "rate": 4.5,
            "desc":"      "

        },
        {
            "id": 4,
            "catId": [1, 11],
            "subCatId": [2, 3, 4],
            "restId": 1,
            "restCatId": 4,
            "name": "چلو خورشت خلال",
            "image": "/images/khalal.jpg",
            "price": 150000,
            "rate": 4.5,
            "desc":""
        },
        {
            "id": 5,
            "catId": [1, 9],
            "subCatId": [],
            "restId": 1,
            "restCatId": 5,
            "name": "سالاد فصل",
            "image": "/images/salad-fasl.jpg",
            "price": 20000,
            "rate": 5
        },
        {
            "id": 6,
            "catId": [1, 3],
            "subCatId": [1, 2, 3, 11],
            "restId": 2,
            "restCatId": 6,
            "name": "چلوکباب کوبیده",
            "image": "/images/kubide.jpg",
            "price": 90000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 7,
            "catId": [1, 3],
            "subCatId": [1, 2, 11],
            "restId": 2,
            "restCatId": 7,
            "name": "خوراک کباب کوبیده",
            "image": "/images/kubide.jpg",
            "price": 270000,
            "rate": 5,
            "desc":"دوسیخ کباب کوبیده ۱۰۰ گرمی به همراه ۳۰۰ گرم برنج خارجی و گوجه"
        },
        {
            "id": 8,
            "catId": [1],
            "subCatId": [2, 3, 5],
            "restId": 2,
            "restCatId": 8,
            "name": "زرشک پلو با مرغ سس پز",
            "image": "",
            "price": 90000,
            "rate": 5,
            "desc":" برنج خارجی به همراه ۱/۸ مرغ ۱۸۰ تا ۲۰۰ گرمی وسس و زرشک"
        },
        {
            "id": 9,
            "catId": [1, 9],
            "subCatId": [],
            "restId": 2,
            "restCatId": 9,
            "name": "سالاد فصل",
            "image": "/images/salad-fasl.jpg",
            "price": 17000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 10,
            "catId": [],
            "subCatId": [],
            "restId": 2,
            "restCatId": 10,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 11,
            "catId": [1, 3],
            "subCatId": [1, 2, 3, 5],
            "restId": 3,
            "restCatId": 11,
            "name": "چلو جوجه کباب با استخوان",
            "image": "/images/juje.jpg",
            "price": 190000,
            "rate": 5,
            "desc":"  یک سیخ جوجه کباب سینه مرغ بدون استخوان ۱۵۰ گرمی، ۳۰۰ گرم برنج ایرانی، یک عدد گوجه کبابی، کره  "
        },
        {
            "id": 12,
            "catId": [1, 3],
            "subCatId": [1, 2, 11],
            "restId": 3,
            "restCatId": 12,
            "name": " خوراک کباب وزیری",
            "image": "/images/juje.jpg",
            "price": 440000,
            "rate": "جدید",
            "desc":"یک سیخ کباب کوبیده ۱۰۰ گرمی گوشت چرخ شده مخلوط گوساله و گوسفندی، یک سیخ جوجه کباب سینه ۲۰۰ گرم، دورچین: یک عدد گوجه کبابی"
        },
        {
            "id": 13,
            "catId": [1],
            "subCatId": [3],
            "restId": 3,
            "restCatId": 13,
            "name": "خوراک دنده کباب مخصوص",
            "image": "/images/juje.jpg",
            "price": 440000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 14,
            "catId": [1, 9],
            "subCatId": [],
            "restId": 3,
            "restCatId": 14,
            "name": "سالاد فصل",
            "image": "/images/salad-fasl.jpg",
            "price": 17000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 15,
            "catId": [],
            "subCatId": [],
            "restId": 3,
            "restCatId": 15,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 16,
            "catId": [2, 6],
            "subCatId": [7],
            "restId": 4,
            "restCatId": 16,
            "name": "ساندویچ رست بیف کوبیده",
            "image": "/images/roastbeef.jpg",
            "price": 140000,
            "rate": 5,
            "desc":" یک عدد هات داگ مجاری ۵۵٪، گوشت رست بیف گوساله، کاهو، گوجه، خیارشور، سس مخصوص، نان باگت"
        },
        {
            "id": 17,
            "catId": [6],
            "subCatId": [7, 11],
            "restId": 4,
            "restCatId": 17,
            "name": "ساندویچ کباب لقمه",
            "image": "/images/loghme.jpg",
            "price": 105000,
            "rate": 5,
            "desc":" یک عدد هات داگ مجاری ۵۵٪، گوشت رست بیف گوساله، کاهو، گوجه، خیارشور، سس مخصوص، نان باگت"

        },
        {
            "id": 18,
            "catId": [],
            "subCatId": [],
            "restId": 4,
            "restCatId": 18,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 19,
            "catId": [1],
            "subCatId": [2],
            "restId": 5,
            "restCatId": 19,
            "name": "یک دست کامل کله پاچه",
            "image": "/images/kale-pache.jpg",
            "price": 380000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 20,
            "catId": [],
            "subCatId": [],
            "restId": 5,
            "restCatId": 20,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 21,
            "catId": [2, 4],
            "subCatId": [6],
            "restId": 6,
            "restCatId": 21,
            "name": "پیتزا پپرونی دو نفره",
            "image": "/images/peperoni.jpg",
            "price": 80000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 22,
            "catId": [2, 5],
            "subCatId": [8],
            "restId": 6,
            "restCatId": 22,
            "name": "تاپ برگر",
            "image": "/images/top-burger.jpg",
            "price": 55000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 23,
            "catId": [2, 6],
            "subCatId": [7],
            "restId": 6,
            "restCatId": 23,
            "name": "ساندویچ هات داگ مخصوص",
            "image": "",
            "price": 45000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 24,
            "catId": [],
            "subCatId": [],
            "restId": 6,
            "restCatId": 24,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 25,
            "catId": [2, 4],
            "subCatId": [6],
            "restId": 7,
            "restCatId": 25,
            "name": "پیتزا پپرونی دو نفره",
            "image": "/images/peperoni.jpg",
            "price": 80000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 26,
            "catId": [2, 5],
            "subCatId": [8],
            "restId": 7,
            "restCatId": 26,
            "name": "تاپ برگر",
            "image": "/images/top-burger.jpg",
            "price": 55000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 27,
            "catId": [2, 6],
            "subCatId": [7],
            "restId": 7,
            "restCatId": 27,
            "name": "ساندویچ هات داگ مخصوص",
            "image": "",
            "price": 45000,
            "rate": 5
        },
        {
            "id": 28,
            "catId": [],
            "subCatId": [],
            "restId": 7,
            "restCatId": 28,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 29,
            "catId": [2, 4],
            "subCatId": [6],
            "restId": 8,
            "restCatId": 29,
            "name": "پیتزا قارچ و گوشت آمریکایی",
            "image": "/images/amricaee.jpg",
            "price": 103000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 30,
            "catId": [2],
            "subCatId": [],
            "restId": 8,
            "restCatId": 30,
            "name": "سیب زمینی ساده",
            "image": "/images/potato.jpg",
            "price": 50000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 31,
            "catId": [],
            "subCatId": [],
            "restId": 8,
            "restCatId": 31,
            "name": "نوشابه بطری",
            "image": "/images/nushabe.jpg",
            "price": 11000,
            "rate": 5
        },
        {
            "id": 32,
            "catId": [2, 4],
            "subCatId": [6],
            "restId": 9,
            "restCatId": 32,
            "name": "پیتزا قارچ و گوشت آمریکایی",
            "image": "/images/amricaee.jpg",
            "price": 157000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 33,
            "catId": [2, 5],
            "subCatId": [8],
            "restId": 9,
            "restCatId": 33,
            "name": "تاپ برگر",
            "image": "/images/top-burger.jpg",
            "price": 74000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 34,
            "catId": [2, 6],
            "subCatId": [7],
            "restId": 9,
            "restCatId": 34,
            "name": "ساندویچ هات داگ مخصوص",
            "image": "",
            "price": 45000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 35,
            "catId": [2, 7],
            "subCatId": [9],
            "restId": 9,
            "restCatId": 35,
            "name": "فیله سوخاری (سه تکه)",
            "image": "/images/sokhari-2.jpg",
            "price": 153000,
            "rate": 5,
            "desc":""
        },
        {
            "id": 36,
            "catId": [1, 7],
            "subCatId": [],
            "restId": 9,
            "restCatId": 36,
            "name": "سالاد سزار با مرغ سوخاری (بزرگ)",
            "image": "/images/saladsezar.jpg",
            "price": 136000,
            "rate": 5,
            "desc":""
        }
    ],
    "rComments": [
        {
            "id": 1,
            "restId": 1,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 2,
            "restId": 1,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 3,
            "restId": 2,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 4,
            "restId": 2,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 5,
            "restId": 3,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 6,
            "restId": 3,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 7,
            "restId": 4,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 8,
            "restId": 4,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 9,
            "restId": 5,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 10,
            "restId": 5,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 11,
            "restId": 6,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 12,
            "restId": 6,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 13,
            "restId": 7,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 14,
            "restId": 7,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 15,
            "restId": 8,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 16,
            "restId": 8,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 17,
            "restId": 9,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        },
        {
            "id": 18,
            "restId": 9,
            "name": "shima",
            "date": "16/4/2023",
            "rate": "5",
            "desc": "بسیار عالی بود حجم و کیفیت غذا بالا با قیمت مناسب ممنونم ازتون",
            "stuff": "چیز برگر"
        }, {
            "id": 12,
            "catId": [1, 3],
            "subCatId": [1, 2, 11],
            "restId": 10,
            "restCatId": 12,
            "name": " خوراک کباب وزیری",
            "image": "/images/juje.jpg",
            "price": 440000,
            "rate": "جدید",
            "desc":"یک سیخ کباب کوبیده ۱۰۰ گرمی گوشت چرخ شده مخلوط گوساله و گوسفندی، یک سیخ جوجه کباب سینه ۲۰۰ گرم، دورچین: یک عدد گوجه کبابی"
        },
        {
            "id": 13,
            "catId": [1],
            "subCatId": [3],
            "restId": 10,
            "restCatId": 13,
            "name": "خوراک دنده کباب مخصوص",
            "image": "/images/juje.jpg",
            "price": 440000,
            "rate": 5,
            "desc":""
        }
    ],
    "fcomments": [
        {
            "id": 1,
            "fId": 1,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 2,
            "fId": 1,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 3,
            "fId": 2,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 4,
            "fId": 2,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 5,
            "fId": 3,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 6,
            "fId": 3,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 7,
            "fId": 4,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 8,
            "fId": 4,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 9,
            "fId": 5,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 10,
            "fId": 5,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 11,
            "fId": 6,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 12,
            "fId": 6,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 13,
            "fId": 7,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 14,
            "fId": 7,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 15,
            "fId": 8,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 16,
            "fId": 8,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 17,
            "fId": 9,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 18,
            "fId": 9,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 19,
            "fId": 10,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 20,
            "fId": 10,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 21,
            "fId": 11,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 22,
            "fId": 11,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 23,
            "fId": 12,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 24,
            "fId": 12,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 25,
            "fId": 13,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 26,
            "fId": 13,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 27,
            "fId": 14,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 28,
            "fId": 14,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 29,
            "fId": 15,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 30,
            "fId": 15,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 31,
            "fId": 16,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 32,
            "fId": 16,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 33,
            "fId": 17,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 34,
            "fId": 17,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 35,
            "fId": 18,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 36,
            "fId": 18,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 37,
            "fId": 19,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 38,
            "fId": 19,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 39,
            "fId": 20,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 40,
            "fId": 20,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 41,
            "fId": 21,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 42,
            "fId": 21,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 43,
            "fId": 22,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 44,
            "fId": 22,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 45,
            "fId": 23,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 46,
            "fId": 23,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 47,
            "fId": 24,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 48,
            "fId": 24,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 49,
            "fId": 25,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 50,
            "fId": 25,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 51,
            "fId": 26,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 52,
            "fId": 26,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 53,
            "fId": 27,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 54,
            "fId": 27,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 55,
            "fId": 28,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 56,
            "fId": 28,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 57,
            "fId": 29,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 58,
            "fId": 29,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 59,
            "fId": 30,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 60,
            "fId": 30,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 61,
            "fId": 31,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 62,
            "fId": 31,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 63,
            "fId": 32,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 64,
            "fId": 32,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 65,
            "fId": 33,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 66,
            "fId": 33,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 67,
            "fId": 34,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 68,
            "fId": 34,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 69,
            "fId": 35,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 70,
            "fId": 35,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 71,
            "fId": 36,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        },
        {
            "id": 72,
            "fId": 36,
            "name": "مریم",
            "date": "12/6/2023",
            "rate": 5,
            "desc": "اولین بار بود سفارش دادم کیفیت بالا عالی بود خدا قوت مشتری ثابت شدم",
            "stuff": "چلو ماهیچه"
        }
    ]
}