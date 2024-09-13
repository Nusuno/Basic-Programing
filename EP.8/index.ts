//ทบทวน

const gamePrice = [
    {
        "gameID": "612",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "0f%2B4gT2VVUn4UcmFzPxXnuqoXKAOYoJ5mpFZRWNyohc%3D",
        "external": "LEGO Batman",
        "internalName": "LEGOBATMAN",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/105f34ca-7757-47ad-953e-7df7f016741e.jpeg"
    },
    {
        "gameID": "167613",
        "steamAppID": null,
        "cheapest": "15.95",
        "cheapestDealID": "2XSMlnYtPjLoKI9g2vhZch9deHZ%2BE%2BpL7IoBprkWtgM%3D",
        "external": "LEGO Batman 2",
        "internalName": "LEGOBATMAN2",
        "thumb": "https://cdn.fanatical.com/production/product/400x225/4cf0701e-77bf-4539-bda7-129ab3e81f8b.jpeg"
    },
    {
        "gameID": "167910",
        "steamAppID": "502820",
        "cheapest": "4.99",
        "cheapestDealID": "Vv2BkWU%2FEoIlHNbYtLBFjLJP8noeCUodfp1IXbQJZ6w%3D",
        "external": "Batman: Arkham VR",
        "internalName": "BATMANARKHAMVR",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/502820/capsule_sm_120.jpg?t=1684483128"
    },
    {
        "gameID": "136751",
        "steamAppID": null,
        "cheapest": "49.99",
        "cheapestDealID": "tWdHYhBxTi%2Boen9dGX6I0I%2BfklTJOHB0SykaLcbpsqk%3D",
        "external": "LEGO Batman Trilogy",
        "internalName": "LEGOBATMANTRILOGY",
        "thumb": "https://hb.imgix.net/fec566de2b11fbe22a542086fb3758652f790551.jpg?auto=compress,format&fit=crop&h=84&w=135&s=1159b53389e7c72d23ef72b5c883d725"
    },
    {
        "gameID": "107598",
        "steamAppID": "208650",
        "cheapest": "3.99",
        "cheapestDealID": "%2BRR8iNYa2ZB%2FIhfZml8B1USYGhQVeYAv0Tl8JPkZ8UM%3D",
        "external": "Batman: Arkham Knight",
        "internalName": "BATMANARKHAMKNIGHT",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/208650/capsule_sm_120.jpg?t=1702934528"
    },
    {
        "gameID": "97941",
        "steamAppID": "209000",
        "cheapest": "3.99",
        "cheapestDealID": "6YSaSYFA%2Bjmj9L4HsCBLThDoYEUhWPQ1ssIZ0t2k%2BnU%3D",
        "external": "Batman: Arkham Origins",
        "internalName": "BATMANARKHAMORIGINS",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/209000/capsule_sm_120.jpg?t=1681234740"
    },
    {
        "gameID": "198190",
        "steamAppID": null,
        "cheapest": "15.99",
        "cheapestDealID": "DnVEZriqpYWyJoC4CN2%2Fe07Su8RZ61DATyjmfNk%2FwKI%3D",
        "external": "Batman Arkham City GOTY",
        "internalName": "BATMANARKHAMCITYGOTY",
        "thumb": "https://us.gamesplanet.com/acache/15/46/1/us/packshot-92b3116edd0584b61a131fa716d0a766.jpg"
    },
    {
        "gameID": "198317",
        "steamAppID": "320795",
        "cheapest": "8.99",
        "cheapestDealID": "g5zcqhDot%2FhT5s%2BIfHgygYaagbxBH09cSgR5xdyVS5g%3D",
        "external": "Batman: Arkham Collection",
        "internalName": "BATMANARKHAMCOLLECTION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/subs/320795/capsule_sm_120.jpg?t=1636658684"
    },
    {
        "gameID": "2425",
        "steamAppID": "21000",
        "cheapest": "2.99",
        "cheapestDealID": "uCO441gpSEGJP6K9x66LeC7yi7ILolaTmvo8lOMCdIc%3D",
        "external": "LEGO Batman: The Videogame",
        "internalName": "LEGOBATMANTHEVIDEOGAME",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/21000/capsule_sm_120.jpg?t=1681923978"
    },
    {
        "gameID": "155074",
        "steamAppID": "498240",
        "cheapest": "5.99",
        "cheapestDealID": "uSsyxlu%2BfwGY%2FuhQ813YGUsHJmjOSI%2B7wANjAMlsbtw%3D",
        "external": "Batman - The Telltale Series",
        "internalName": "BATMANTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/498240/capsule_sm_120.jpg?t=1686747257"
    },
    {
        "gameID": "126255",
        "steamAppID": "313690",
        "cheapest": "2.99",
        "cheapestDealID": "%2BA3ge6nu7jMLKH1mWUj9rq6VYWRTsENzY%2B08DdMR1FE%3D",
        "external": "LEGO Batman 3: Beyond Gotham",
        "internalName": "LEGOBATMAN3BEYONDGOTHAM",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/313690/capsule_sm_120.jpg?t=1573510385"
    },
    {
        "gameID": "199261",
        "steamAppID": null,
        "cheapest": "39.98",
        "cheapestDealID": "vVlFdl8%2BVYZuEwKlNPy7iUrK49IXdqtNSKDgTrhw4sM%3D",
        "external": "Batman Game of the Year Pack",
        "internalName": "BATMANGAMEOFTHEYEARPACK",
        "thumb": "https://images.greenmangaming.com/9c282eceace145df99f76f0d08febdfe/1fbba96f5f8a4ffbb135e320bcc2346c.jpg"
    },
    {
        "gameID": "88269",
        "steamAppID": "213330",
        "cheapest": "2.99",
        "cheapestDealID": "PLK%2BInMYUooml%2FkEGWW%2Bw8MluNwy5q9ZSzKcLaciTU4%3D",
        "external": "LEGO Batman 2: DC Super Heroes",
        "internalName": "LEGOBATMAN2DCSUPERHEROES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/213330/capsule_sm_120.jpg?t=1681923916"
    },
    {
        "gameID": "262248",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "OKARgK1wBMW6W6Mod6tfJ%2FS582x6mmaZzcsrhKNN9zw%3D",
        "external": "HOT WHEELS - Batman Expansion",
        "internalName": "HOTWHEELSBATMANEXPANSION",
        "thumb": "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_HOTWHEELSBatmanExpansion_MilestoneSrl_DLC_S2_1200x1600-eb509c7f016c85c206fb702fe7483ebf"
    },
    {
        "gameID": "214905",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "OTJxScRuO1D3hoLSFDjrWKZKm%2FrcXvSACoDDGijZjrY%3D",
        "external": "Telltale Batman Shadows Mode",
        "internalName": "TELLTALEBATMANSHADOWSMODE",
        "thumb": "https://images.gog-statics.com/e60c4596e9f9a74ca587efcb561b94d0e61e80648bd478a7e74ec8f6cd93c44a_product_tile_117h.webp"
    },
    {
        "gameID": "89107",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "yPE8bI5eH%2FFwI0L7KaEUTfOzYmWLPj%2F76DHrJEnFWeY%3D",
        "external": "Batman: Arkham City GOTY Edition",
        "internalName": "BATMANARKHAMCITYGOTYEDITION",
        "thumb": "https://hb.imgix.net/08abd0c1b25f2ffc652ae7d6537443cee7eccf94.jpg?auto=compress,format&fit=crop&h=84&w=135&s=6ae6339224425ee6e7b7e48ddea68e1d"
    },
    {
        "gameID": "143771",
        "steamAppID": null,
        "cheapest": "5.00",
        "cheapestDealID": "N0aiUBib2nX52PNBU37BWWfDDD%2FhkbcYlPHCQUxmuQ8%3D",
        "external": "Batman: Arkham Knight - Season Pass",
        "internalName": "BATMANARKHAMKNIGHTSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/batmantm-arkham-knight-season-pass/cover-180-5d9655.jpg"
    },
    {
        "gameID": "214906",
        "steamAppID": null,
        "cheapest": "14.98",
        "cheapestDealID": "A3hjhaYvTj0ZcYKpdslQ4PASVGEwe0Zwfrd61gkWLXE%3D",
        "external": "Telltale Batman Shadows Edition",
        "internalName": "TELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://images.greenmangaming.com/bb1f86edd3be41e3bb8948c00523e5ef/bd6b538c1a7b4f138b862d3c825ff005.jpg"
    },
    {
        "gameID": "87778",
        "steamAppID": null,
        "cheapest": "16.99",
        "cheapestDealID": "uppD8xHMJiqlB88HAnAVeVuInMdQh8eIXN0r2eaC6VI%3D",
        "external": "Batman Arkham Asylum GOTY Edition",
        "internalName": "BATMANARKHAMASYLUMGOTYEDITION",
        "thumb": "https://hb.imgix.net/2a07e9e90c9af53c5120151c9ff4e0aa3771ce99.jpeg?auto=compress,format&fit=crop&h=84&w=135&s=0f42069b4949098d7d589d28a9f66311"
    },
    {
        "gameID": "246183",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "3VlwNpcd%2FDMETYgzpXd1WDzLWBTn9qHFBhtkSUbnCMs%3D",
        "external": "Batman Arkham City: Game of the Year",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/3e529338224949f280276fa6a5b75fec/933b9d36ea2d49b4b389899814729378.jpg"
    },
    {
        "gameID": "102510",
        "steamAppID": null,
        "cheapest": "14.99",
        "cheapestDealID": "%2BThIUJIoyxRy9u7NDjuvidcljQ6heP%2FiEmWT%2FkUc5aE%3D",
        "external": "Batman Arkham Origins Season Pass",
        "internalName": "BATMANARKHAMORIGINSSEASONPASS",
        "thumb": "https://images.greenmangaming.com/1c43fd1ff43744c08e854d6ff963c91d/2c8b09a294f4401ab3747b99b6d828f1.jpg"
    },
    {
        "gameID": "246576",
        "steamAppID": null,
        "cheapest": "29.99",
        "cheapestDealID": "Fi5iMIssmS3PtiA3m42zXTR22B9GvIcr2NE8Csb5kFw%3D",
        "external": "The Telltale Batman Shadows Edition",
        "internalName": "THETELLTALEBATMANSHADOWSEDITION",
        "thumb": "https://cdn1.epicgames.com/f2bfff793b224f6190a394f461c9a4b8/offer/TheTelltaleBatmanShadowsEdition-2560x1440-1ababb36a948b5c732ab85a330787e85.jpg"
    },
    {
        "gameID": "225758",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "PUPfxJiMyt4dbcslwvOVad0v%2BgtknEhy8c90qOpVp9w%3D",
        "external": "Telltale Batman Shadows Mode Bundle",
        "internalName": "TELLTALEBATMANSHADOWSMODEBUNDLE",
        "thumb": "https://hb.imgix.net/bcd6694f5442c730d3b16bdb07e956e52fe17b32.png?auto=compress,format&fit=crop&h=84&w=135&s=748daa2aa04096c42a24db2baf8320ff"
    },
    {
        "gameID": "250727",
        "steamAppID": null,
        "cheapest": "19.99",
        "cheapestDealID": "WT%2FMFjw1bIOhh5gs6slTqvwUdrGR2W4wEwyYGlT1G98%3D",
        "external": "Batman: Arkham Asylum Game of the Year",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAR",
        "thumb": "https://images.greenmangaming.com/0c2b457baa0a4e778c31771ead715300/88c9e725b8ff4610a2e1970e0f4a08f1.jpg"
    },
    {
        "gameID": "214907",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "lBW7zyO4rDYgP9peypdBSZC%2B6dp8bUJMtwXlUVt9ghY%3D",
        "external": "Batman Shadows Mode: The Enemy Within",
        "internalName": "BATMANSHADOWSMODETHEENEMYWITHIN",
        "thumb": "https://images.gog-statics.com/70d653226ede85bb70a8d4022a2d02b6c2e2bb9775e87b6a9ca5c30d6ac7f815_product_tile_117h.webp"
    },
    {
        "gameID": "221906",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "E7P6Oz50WDEWzQZZjj8b1l6e7C3S0sr43hOQnoDCtqk%3D",
        "external": "Batman - The Enemy Within Shadows Mode",
        "internalName": "BATMANTHEENEMYWITHINSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/85ad7081bac34a3cb4151daeb6540b50/9e93071c54604454974132c72bab146f.jpg"
    },
    {
        "gameID": "108605",
        "steamAppID": null,
        "cheapest": "8.49",
        "cheapestDealID": "1kwCcJiqxMJJyas58G3FQ4Od%2BbujQrxSF19FRSAmcPE%3D",
        "external": "Batman: Arkham Origins - Cold, Cold Heart",
        "internalName": "BATMANARKHAMORIGINSCOLDCOLDHEART",
        "thumb": "https://images.greenmangaming.com/ba8d4cd6e14e40fca132f346e2d0d3b4/44f1b54092f3498f88b3d7c1df88451b.jpg"
    },
    {
        "gameID": "143817",
        "steamAppID": null,
        "cheapest": "31.88",
        "cheapestDealID": "5Cwq5t9J3RKsRCP3EYIktz2QNQkzl%2FZ9ZvqHJz8N7Ik%3D",
        "external": "Batman: Arkham Knight - Premium Edition",
        "internalName": "BATMANARKHAMKNIGHTPREMIUMEDITION",
        "thumb": "https://images.greenmangaming.com/b47c3b1bc8a5468ab3ada8832be8355c/4de3b472f988463abf6a869bcdda44d7.jpg"
    },
    {
        "gameID": "136749",
        "steamAppID": null,
        "cheapest": "3.00",
        "cheapestDealID": "k1S33Cgc2ot%2BV%2BxJVUyBogaB0PxBSNK5mFY32oX8npU%3D",
        "external": "LEGO Batman 3: Beyond Gotham Season Pass",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMSEASONPASS",
        "thumb": "https://sttc.gamersgate.com/images/product/lego-batman-3-beyond-gotham-season-pass/cover-180-e8ad17.jpg"
    },
    {
        "gameID": "221904",
        "steamAppID": null,
        "cheapest": "4.99",
        "cheapestDealID": "oWzY%2BWDZExyELDQrL4xy3kd6P1p%2BOQMQ%2FIOeMaN0QaU%3D",
        "external": "Batman - The Telltale Series Shadows Mode",
        "internalName": "BATMANTHETELLTALESERIESSHADOWSMODE",
        "thumb": "https://images.greenmangaming.com/9cc80f2eb57e4588b159b818fed76288/7afd0ac5cde2472b8fde02a4720dc0ad.jpg"
    },
    {
        "gameID": "89095",
        "steamAppID": "200260",
        "cheapest": "3.99",
        "cheapestDealID": "RPqJV%2BI3Cw5NOoq%2B89MzssePMS%2BQgv2M1OnDzsdR0Jo%3D",
        "external": "Batman Arkham City Game of the Year Edition",
        "internalName": "BATMANARKHAMCITYGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/200260/capsule_sm_120.jpg?t=1702934622"
    },
    {
        "gameID": "178376",
        "steamAppID": null,
        "cheapest": "34.99",
        "cheapestDealID": "pTeQKzHuRK4TDqHYLY4xolVHA5s%2BVlwXQrlqzqnLCks%3D",
        "external": "LEGO Batman 3: Beyond Gotham Premium Edition",
        "internalName": "LEGOBATMAN3BEYONDGOTHAMPREMIUMEDITION",
        "thumb": "https://images.gog-statics.com/0d81cdadc840148cbd6e1f1a6897bdf9d38994b3045c7a394f8426a82775b9f4_product_tile_117h.webp"
    },
    {
        "gameID": "171102",
        "steamAppID": "675260",
        "cheapest": "5.99",
        "cheapestDealID": "O3R9Lb8H5%2FOde%2BYxvObV4bHESrZT7WooRK6Re4QKtLw%3D",
        "external": "Batman: The Enemy Within - The Telltale Series",
        "internalName": "BATMANTHEENEMYWITHINTHETELLTALESERIES",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/675260/capsule_sm_120.jpg?t=1686747613"
    },
    {
        "gameID": "146",
        "steamAppID": "35140",
        "cheapest": "3.99",
        "cheapestDealID": "HR5V6hEl39sGwYodeqwwWuo8dKtKukteV0W9we9pI7I%3D",
        "external": "Batman: Arkham Asylum Game of the Year Edition",
        "internalName": "BATMANARKHAMASYLUMGAMEOFTHEYEAREDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/35140/capsule_sm_120.jpg?t=1702934705"
    },
    {
        "gameID": "107869",
        "steamAppID": "267490",
        "cheapest": "3.99",
        "cheapestDealID": "6aW%2BsA5i2cZ8pb2wvI0kuSfspYxuaeFKWl2iWWoCU7k%3D",
        "external": "Batman: Arkham Origins Blackgate - Deluxe Edition",
        "internalName": "BATMANARKHAMORIGINSBLACKGATEDELUXEEDITION",
        "thumb": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/267490/capsule_sm_120.jpg?t=1651865751"
    },
    {
        "gameID": "250195",
        "steamAppID": null,
        "cheapest": "2.99",
        "cheapestDealID": "A2XgGTglsm6iTyN%2BzxnWqIrErGb1uxYlGt4vUZyeG0k%3D",
        "external": "LEGO DC Super-Villains Batman: The Animated Series Level Pack",
        "internalName": "LEGODCSUPERVILLAINSBATMANTHEANIMATEDSERIESLEVELPACK",
        "thumb": "https://images.gog-statics.com/7b55f49b5d2898986176e45d97391b263cc46b804ce7e8dc81ecb242c72f1e7d_product_tile_117h.webp"
    }
]

const informationGamePrice = gamePrice.filter(function (elemant, index) {
    return Number(elemant.cheapest) < 5
})

// console.log(informationGamePrice)

//JavaScript Object Method

const person = {
    firstName: 'Nuttawut',
    lastName: 'Chairit',
    age: 20,
    fullName: function () {
        return person.firstName + " " + this.lastName //การใช้ this. คือการดึงข้อมูลจาก Object ที่เรากำลังทำงานอยู่เช่น person.lastName ก็ใช้เป็น this.lastName
    }
}

// console.log(person.fullName())

const news = {
    "data": [
        {
            "article_id": "7f3649b74463116aac89a876f2961378",
            "title": "Why are Italian and European canned tomatoes so popular in Japanese supermarkets?",
            "link": "https://www.prnewswire.com/apac/news-releases/why-are-italian-and-european-canned-tomatoes-so-popular-in-japanese-supermarkets-302239667.html",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "Discover more about Red Gold Tomatoes from Europe @ AEON ITABASHI SHOPPING CENTER from the 5th to the 8th of September 2024 TOKYO, Sept. 5, 2024 /PRNewswire/ -- Italian and European Red Gold canned tomatoes – thanks to their guaranteed high quality and versatility in the kitchen – are a...",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:33:00",
            "pubDateTZ": "UTC",
            "image_url": "https://mma.prnewswire.com/media/2186813/VISUAL_ASIA.jpg?p=publish",
            "source_id": "prnewswire_apac",
            "source_priority": 1822,
            "source_name": "Pr Newswire Apac",
            "source_url": "https://www.prnewswire.com/apac",
            "source_icon": "https://i.bytvi.com/domain_icons/prnewswire_apac.png",
            "language": "english",
            "country": [
                "afghanistan",
                "india",
                "australia",
                "singapore",
                "fiji",
                "maldives",
                "japan",
                "malaysia",
                "china",
                "south korea",
                "thailand",
                "pakistan",
                "mongolia",
                "brunei",
                "new zealand",
                "indonesia",
                "bhutan",
                "philippines",
                "hong kong",
                "bangladesh",
                "nepal",
                "sri lanka",
                "cambodia"
            ],
            "category": [
                "business"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": true
        },
        {
            "article_id": "760aec296aeff09f1b5206fcb4ed4325",
            "title": "รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา",
            "link": "https://www.dailynews.co.th/news/3831928/",
            "keywords": [
                "breakingnews",
                "hot news"
            ],
            "creator": [
                "Tanomsri Jantong"
            ],
            "video_url": null,
            "description": "โยม-อดีตกรรมการวัด ลุยแฉเจ้าอาวาสวัดดัง เป็นหนี้โยม ไม่มีเงินคืน บอกให้ไปยึดโบสถ์ แถมเป็นคนตีหน้าเศร้าเล่าความเท็จเก่ง เจ้าอาวาสโฟนอินโต้ ถ้ายืมจริงต้องมีสัญญา ยอมรับเซ็นเอกสารรับสภาพหนี้จริงThe post รุมแฉเจ้าอาวาสวัดดังเป็นหนี้โยมไม่มีเงินคืน เจ้าตัวโต้ลั่นถ้ายืมจริงต้องมีสัญญา appeared first on เดลินิวส์.",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:25:17",
            "pubDateTZ": "UTC",
            "image_url": null,
            "source_id": "dailynews_co_th",
            "source_priority": 425309,
            "source_name": "Dailynews Co Th",
            "source_url": "https://www.dailynews.co.th",
            "source_icon": "https://i.bytvi.com/domain_icons/dailynews_co_th.png",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "other"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "369bb5cd5504da3fd3c83ef9659795bb",
            "title": "เปิดโผรางวัลคนทําหนัง ‘สุพรรณหงส์’ ครั้งที่ 32 ประจําปี 2566",
            "link": "https://www.thaipost.net/entertainment-news/651349/",
            "keywords": [
                "สุพรรณหงส์ ครั้งที่ 32",
                "บันเทิง",
                "หนังไทย",
                "สุพรรณหงส์"
            ],
            "creator": [
                "เพ้นท์"
            ],
            "video_url": null,
            "description": "สมาพันธ์สมาคมภาพยนตร์แห่งชาติ ร่วมกับ กระทรวงวัฒนธรรม (วธ.) จัดงานแถลงข่าว งานประกาศรางวัลภาพยนตร์แห่งชาติ สุพรรณหงส์ ครั้งที่ 32 ประจําปี 2566 จัดขึ้นที่ เอสเอฟ เวิลด์ ซีเนม่า โดยในปีนี้มาในคอนเซ็ปต์ แสงแห่งกันและกัน ซึ่งไอเดียมาจาก แสงแห่งศรัทธา ที่ผู้สร้างหนังและผู้ชมภาพยนตร์ต่างร่วมกันรักษา และสอดส่องดูแล เปรียบได้ดั่ง ความร่วมมือร่วมใจในกันและกัน เพื่อก้าวไปสู่ ยุคทอง ครั้งใหม่ของหนังไทยต่อไปThe post เปิดโผรางวัลคนทําหนัง ‘สุพรรณหงส์’ ครั้งที่ 32 ประจําปี 2566 appeared first on .",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:24:53",
            "pubDateTZ": "UTC",
            "image_url": "https://storage-wp.thaipost.net/2024/09/99-1.jpg",
            "source_id": "thaipost",
            "source_priority": 504046,
            "source_name": "Thai Post",
            "source_url": "https://www.thaipost.net",
            "source_icon": "https://i.bytvi.com/domain_icons/thaipost.jpg",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "top"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "70ce74a44b41a952334b5516922f0bca",
            "title": "แค่ปีเดียว! สหรัฐฯ เผย \"เหตุกราดยิง\" ในสถานศึกษามากกว่า 40 ครั้ง",
            "link": "https://www.thaipbs.or.th/news/content/343887",
            "keywords": [
                "ต่างประเทศ"
            ],
            "creator": [
                "https://www.thaipbs.or.th/news/rss/news/home",
                "webmaster@thaipbs.or.th"
            ],
            "video_url": null,
            "description": "สถานศึกษาไม่ต่ํากว่า 20 แห่งในสหรัฐอเมริกา ตกเป็นเป้าหมายของการใช้ความรุนแรงจากอาวุธปืน ตั้งแต่เริ่มต้นปี 2024 เกณฑ์ในการให้คํานิยามเหตุยิงในสถานศึกษาของสํานักข่าว CNN จะต้องมีคนถูกยิงอย่างน้อย 1 คน ไม่รวมผู้ก่อเหตุ การก่อเหตุจะต้องเกิดขึ้นในบริเวณสถานศึกษา ไม่ว่าจะเป็นอาคาร สนามหญ้า ลานจอดรถ สนามกีฬา และ รถโดยสาร เหตุยิงในโรงเรียนมัธยมอาปาลาชี ในเมืองวินเดอร์ รัฐจอร์เจียเมื่อวันที่ 4 ก.ย.ที่ผ่านมา ถือเป็นเหตุยิงในสถานศึกษาครั้งที่ 45 ของปี ขึ้นแท่นเหตุยิงในสถานศึกษาครั้งรุนแรงที่สุดของปีนี้ และเป็น 1 ใน 11 ครั้ง ที่มีผู้เสียชีวิต 4 คนขึ้นไปนับตั้งแต่ปี 2008 เหตุยิงในสถานศึกษาในสหรัฐฯ ที่ผ่านมา ส่งผลให้มีผู้เสียชีวิต 23 คน และบาดเจ็บ 62 คน เมื่อปี 2023 มีเหตุยิงในสถานศึกษาทั้งหมด 82 ครั้ง นับตั้งแต่สํานักข่าว CNN เก็บข้อมูลตั้งแต่ปี 2008 แบ่งเป็นเหตุยิงในโรงเรียน 52 ครั้ง และ สถาบันอุดมศึกษา 30 ครั้ง การก่อเหตุยิงในสถานศึกษาลดลงในปีแรกที่โควิด-19 ระบาด (ปี 2020) หลังจากสถานศึกษาต้องระงับการเรียนการสอนตามมาตรการควบคุมโรค การก่อเหตุกลับเพิ่มขึ้นอย่างก้าวกระโดดตั้งแต่ปี 2021-2023 โดยที่ปี 2022 ทําสถิติรุนแรงมากที่สุดปีหนึ่ง ด้วยจํานวนผู้เสียชีวิตมากถึง 46 คน 1 ในเหตุสะเทือนขวัญที่สุดคือเหตุยิงในโรงเรียนประถมในรัฐเท็กซัส ส่งผลให้ครูและนักเรียน 19 คนเสียชีวิต การใช้ความรุนแรงจากอาวุธปืนอาจเป็นวาระหนึ่งในการเลือกตั้งหลังจากมือปืนวัย 14 ปีก่อเหตุยิงในโรงเรียนมัธยมในรัฐจอร์เจีย เหตุการณ์นี้ มีผู้เสียชีวิต 4 คน เป็นครู 2 คน และ นักเรียน 2 คน ขณะที่ผู้ได้รับบาดเจ็บ 9 คนถูกส่งตัวไปรักษาที่โรงพยาบาลแล้วอ่านข่าว : เกิดเหตุยิงในโรงเรียนมัธยม สหรัฐฯ เสียชีวิต 4 เจ็บอีก 9 คนภาพมุมสูงแสดงให้เห็นตํารวจควบคุมสถานการณ์ภายในโรงเรียนในขณะที่นักเรียนและครูรวมตัวกันด้านนอกเพื่อความปลอดภัย ข้อความในแชตจากนักเรียนส่งมาบอกแม่ถึงเหตุการณ์ที่เกิดขึ้นจึงรีบออกจากสํานักงานและเดินทางไปหาลูกชายที่โรงเรียนทันที เจ้าหน้าที่สามารถจับกุม โคลต์ เกรย์ ผู้ต้องสงสัยก่อเหตุ วัย 14 ปี และอาวุธปืนไรเฟิล AR กึ่งอัตโนมัติที่ใช้ในการก่อเหตุได้ทันที คริส โฮเซย์ ผู้อํานวยการสํานักงานสอบสวนประจํารัฐจอร์เจียย้ําว่าผู้ต้องสงสัยก่อเหตุจะถูกตั้งข้อหาและพิจารณาคดีในฐานะผู้ใหญ่ ด้านโฆษกทําเนียบขาว ระบุว่า การก่อเหตุลักษณะนี้ไม่ใช่เรื่องปกติเนื่องจากสถานศึกษาควรเป็นพื้นที่ปลอดภัยให้ครูและนักเรียน วันนี้ชาวอเมริกันหลายร้อยคนรวมตัวกันที่สวนสาธารณะใจกลางเมือง เพื่อไว้อาลัยให้ผู้เสียชีวิตจากเหตุกราดยิงในโรงเรียนมัธยมครั้งนี้ ขณะที่เด็กนักเรียนบางส่วนของโรงเรียนมัธยมให้ข้อมูลนาทีเกิดเหตุ ที่สร้างความสูญเสียมากที่สุดครั้งหนึ่งนับตั้งแต่ปี 2008 เป็นต้นมามือปืนเคยถูกสอบฐานโพสต์คุกคามในออนไลน์ขณะที่สํานักงานสอบสวนกลางสหรัฐอเมริกา หรือ เอฟบีไอ เปิดเผยว่า ผู้ต้องสงสัย เคยถูกตํารวจสอบสวน เมื่อเดือนพฤษภาคม ปีที่แล้ว หลังจากเจ้าหน้าที่ทางการสหรัฐฯ ได้รับแจ้งเบาะแสเกี่ยวกับภัยคุกคามที่ถูกโพสต์ลงบนโลกออนไลน์เรื่องการก่อเหตุยิงภายในโรงเรียน ก่อนที่เจ้าหน้าที่จะระบุตําแหน่งและแจ้งเตือนเจ้าหน้าที่ท้องถิ่นแต่ผู้ต้องสงสัยปฏิเสธความเกี่ยวข้องใด ๆ กับโพสต์เตือนบนโลกออนไลน์ขณะที่พ่อของผู้ต้องสงสัยมีปืนล่าสัตว์ในบ้านพักแต่เก็บไว้อย่างปลอดภัยทําให้เจ้าหน้าที่ไม่ได้จับกุมตัว หรือ ดําเนินมาตรการใด ๆ ต่อไป เจ้าหน้าที่ยังอยู่ในระหว่างการสอบสวนเพื่อหาแรงจูงใจในการก่อเหตุ ซึ่งขณะนี้ยังไม่พบความเชื่อมโยง ระหว่างผู้ต้องสงสัย กับ ผู้ถูกยิง อ่านข่าวอื่น : นโยบายเพื่อไทย จาก \"เศรษฐา\" ถึง \"แพทองธาร\"\"6 ทุ่งรับน้ํา\" พื้นที่กันชน-กักน้ํา-ระบายน้ํา ของอยุธยา",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:21:43",
            "pubDateTZ": "UTC",
            "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlHN6pF5cDgScKdQovg9156HVyTLHzdyR7.jpg",
            "source_id": "thaipbs",
            "source_priority": 817643,
            "source_name": "Thai Pbs News",
            "source_url": "https://news.thaipbs.or.th",
            "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "top"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "79523f5bafd011ff85cc180443b83375",
            "title": "สภาผ่านฉลุย ร่าง พ.ร.บ.งบฯ ปี 68 วงเงิน 3.7 ล้านล้านบาท",
            "link": "https://www.thaipbs.or.th/news/content/343886",
            "keywords": [
                "การเมือง"
            ],
            "creator": [
                "https://www.thaipbs.or.th/news/rss/news/home",
                "webmaster@thaipbs.or.th"
            ],
            "video_url": null,
            "description": "วันนี้ (5 ก.ย.67) การประชุมสภาผู้แทนราษฎรเพื่อพิจารณาพิจารณาร่าง พ.ร.บ.งบประมาณรายจ่ายประจําปีงบประมาณ พ.ศ.2568 ที่คณะกรรมาธิการวิสามัญพิจารณาเสร็จแล้ว โดยมีการตั้งวงเงินงบประมาณ จํานวน 3,752,700 ล้านบาทที่ประชุมสภาฯ ใช้เวลาอภิปรายตลอด 3 วัน ระหว่างวันที่ 3-5 ก.ย. ก่อนลงมติเมื่อเวลา 21.48 น. โดยผลลงคะแนนเห็นด้วย 309 ต่อ 155 เสียง, งดออกเสียง 4 ไม่ลงคะแนน 1 จากจํานวนผู้ลงมติ 469 คน นายสุริยะ จึงรุ่งเรืองกิจ รองนายกรัฐมนตรีและ รมว.คมนาคม ในฐานะผู้แทนรัฐบาล กล่าวขอบคุณสภาฯ ที่ได้พิจารณาให้ความเห็นชอบร่าง พ.ร.บ.งบประมาณรายจ่ายประจําปีงบประมาณ พ.ศ.2568 ถือว่าเป็นเครื่องมือสําคัญที่จะใช้ขับเคลื่อนนโยบายของรัฐบาล ยุทธศาสตร์ชาติและแผนพัฒนาต่าง ๆ ทั้งนี้จะนําข้อคิดเห็น คําแนะนําและข้อเสนอแนะของสมาชิกไปประกอบการพิจารณาปรับปรุงหน่วยงานรับงบประมาณ เพื่อให้ประชาชนได้รับประโยชน์จากเงินงบประมาณที่มาจากภาษีของประชาชนนอกจากนี้ นายสุริยะ ยังกล่าวขอบคุณกรรมการวิสามัญทุกคนที่ให้ความสําคัญเสียสละเวลาและร่วมมือในการพิจารณาร่าง พ.ร.บ.งบประมาณรายจ่ายฉบับนี้อย่างเต็มที่ จนสําเร็จลุล่วงไปด้วยดี โดยข้อสังเกตของคณะกรรมการวิสามัญเป็นประโยชน์ต่อการบริหารราชการ รัฐบาลจะนําไปประกอบการพิจารณาปรับปรุงการดําเนินงาน เพื่อให้การจัดสรรทรัพยากรเป็นไปอย่างประหยัดและมีประสิทธิภาพตามหลักความคุ้มค่า และให้เกิดประโยชน์สูงสุดต่อประชาชนและประเทศชาติ พร้อมขอให้มั่นใจว่างบประมาณที่อนุมัติจะนําไปใช้ตามวัตถุประสงค์ ตามแผนงานที่กําหนด โดยรัฐบาลจะกํากับดูแลติดตามการใช้จ่ายงบให้มีความโปร่งใสและบรรลุผลสําเร็จตามนโยบายที่กําหนดไว้หลังจากสภาฯ ให้ความเห็นชอบแล้ว สํานักงานเลขาธิการสภาผู้แทนราษฎรจะส่งร่างไปยังวุฒิสภาเพื่อพิจารณา ซึ่งวุฒิสภาจะต้องพิจารณาให้แล้วเสร็จภายใน 20 วัน นับแต่วันรับร่าง โดยมีรายงานว่า ประธานวุฒิสภาจะบรรจุระเบียบวาระการประชุมในวันที่ 9-10 ก.ย.นี้อ่านข่าวจ่อแก้มาตรฐานทางจริยธรรม “ของแสลง” นักการเมืองนายกฯ ชี้ใช้คําแรงไป \"ครม.สืบสันดาน\" ย้ําตั้งใจทํางาน\"ชูศักดิ์\" คาดรับผิดชอบงานกฎหมาย เล็งแก้รัฐธรรมนูญ",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:21:43",
            "pubDateTZ": "UTC",
            "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlGRl6mNilWBIlNQnySTm2lolzSm6p4j5R.jpg",
            "source_id": "thaipbs",
            "source_priority": 817643,
            "source_name": "Thai Pbs News",
            "source_url": "https://news.thaipbs.or.th",
            "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "top"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "d6a213984cab8fb3da12830f1c5af7aa",
            "title": "\"โก๋ คาราบาว\" มือกลองประจําวง เสียชีวิต ในวัย 50 ปี",
            "link": "https://www.thaipbs.or.th/news/content/343888",
            "keywords": [
                "ศิลปะ-บันเทิง"
            ],
            "creator": [
                "https://www.thaipbs.or.th/news/rss/news/entertainment",
                "webmaster@thaipbs.or.th"
            ],
            "video_url": null,
            "description": "วันนี้ (5 ก.ย.2567) เพจเฟซบุ๊ก Carabao Official โพสต์ข้อความ แจ้งข่าวการเสียชีวิตของ \"โก๋ คาราบาว\" มือกลองประจําวง โดยระบุว่า \"ขอแสดงความเสียใจต่อการจากไปของคุณชวลิต ฉลองพงษ์ หรือ โก๋ คาราบาว ขอให้พี่โก๋เดินทางสู่ภพภูมิที่ดีครับ ด้วยรักและอาลัย\" ขณะที่มีคนมาคอมเมนต์แสดงความไว้อาลัยจํานวนมากสําหรับ โก๋ คาราบาว ชื่อจริง ชวลิต ฉลอมพงษ์ อายุ 50 ปี เป็นชาว จ.อุบลราชธานี โดยโก๋ คาราบาว ได้เข้าร่วมวงคาราบาว ในอัลบั้มชุดที่ 11 วิชาแพะ เมื่อปี 2534 จนถึงปัจจุบันทั้งนี้วงคาราบาว เป็นวงดนตเพลงเพื่อชีวิตที่มีชื่อเสียงมากที่สุดวงหนึ่งของของประเทศไทย มีผลงานตั้งแต่ปี พ.ศ.2524 จนถึงปัจจุบัน โดยมี แอ๊ด ยืนยง โอภากุล ศิลปินแห่งชาติ สาขาศิลปะการแสดง (นักร้อง-นักประพันธ์เพลงไทยสากล) พ.ศ.2556 เป็นหัวหน้าวงอ่านข่าว :ปิดตํานาน 50 ปี \"ต่วย'ตูน\" วางแผงเล่มสุดท้าย ก.ย.นี้อัปเดตสวัสดิการแห่งรัฐ เดือนกันยายน 2567 เงินเข้าวันไหนศาลอุทธรณ์ คุก 8 ปี ไม่รอลงอาญา \"ครูไพบูลย์\" คดีพรากผู้เยาว์อดีตภรรยา",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:21:43",
            "pubDateTZ": "UTC",
            "image_url": "https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAivNSpXlKLZ7kUDTf55OjDx3RYchUjVOEBx0zeb9.jpg",
            "source_id": "thaipbs",
            "source_priority": 817643,
            "source_name": "Thai Pbs News",
            "source_url": "https://news.thaipbs.or.th",
            "source_icon": "https://i.bytvi.com/domain_icons/thaipbs.jpg",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "entertainment"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "525cf138960f6c9ef02f10353ae468b2",
            "title": "Senate panel to question US semiconductor firms on Russian weapons",
            "link": "https://www.channelnewsasia.com/business/senate-panel-question-us-semiconductor-firms-russian-weapons-4589286",
            "keywords": [
                "business"
            ],
            "creator": null,
            "video_url": null,
            "description": null,
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:20:01",
            "pubDateTZ": "UTC",
            "image_url": "https://onecms-res.cloudinary.com/image/upload/s--yYS3puND--/c_fill,h_900,w_1600/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2024-09-05t152001z_2_lynxmpek840q4_rtroptp_3_usa-congress.jpg?itok=4WOYgFA7",
            "source_id": "channelnewsasia",
            "source_priority": 37829,
            "source_name": "Cna",
            "source_url": "https://www.channelnewsasia.com",
            "source_icon": "https://i.bytvi.com/domain_icons/channelnewsasia.jpg",
            "language": "english",
            "country": [
                "singapore",
                "georgia",
                "yemen",
                "afghanistan",
                "cyprus",
                "india",
                "saudi arabia",
                "maldives",
                "japan",
                "united arab emirates",
                "malaysia",
                "china",
                "south korea",
                "north korea",
                "taiwan",
                "thailand",
                "pakistan",
                "mongolia",
                "brunei",
                "lebanon",
                "indonesia",
                "kyrgyzstan",
                "syria",
                "israel",
                "bhutan",
                "iran",
                "turkey",
                "armenia",
                "qatar",
                "philippines",
                "hong kong",
                "kazakhstan",
                "iraq",
                "bangladesh",
                "laos",
                "vietnam",
                "timor-leste",
                "kuwait",
                "myanmar",
                "azerbaijan",
                "jordan",
                "nepal",
                "oman",
                "sri lanka",
                "uzbekistan",
                "turkmenistan",
                "macau",
                "bahrain",
                "cambodia",
                "tajikistan"
            ],
            "category": [
                "business"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": true
        },
        {
            "article_id": "8238277b10e9e79362d3c20443476550",
            "title": "สรุปเหรียญพาราลิมปิก 2024 ล่าสุด 5 ก.ย. 67 \"ไทย\" ลุ้นทองที่ 6 \"จีน\" นําที่ 2 ไม่เห็นฝุ่น",
            "link": "https://www.thairath.co.th/sport/worldsport/others/2812792",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "สรุปเหรียญพาราลิมปิก 2024 ล่าสุด 5 ก.ย. 67 \"ไทย\" ลุ้นเหรียญทองที่ 6 ต่อ \"จีน\" ทิ้งห่างที่ 2 ออกไปอีก",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:15:00",
            "pubDateTZ": "UTC",
            "image_url": "https://static.thairath.co.th/media/CiHZjUdJ5HPNXJ92O0egjcYhQlkebgWMMo.jpg",
            "source_id": "thairath",
            "source_priority": 44507,
            "source_name": "Thairath",
            "source_url": "https://www.thairath.co.th",
            "source_icon": "https://i.bytvi.com/domain_icons/thairath.png",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "sports"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "aec6df0b6f35f5dd0564b0c8b244157b",
            "title": "Valencia's Mir denies sexual assault allegations",
            "link": "https://www.channelnewsasia.com/sport/valencias-mir-denies-sexual-assault-allegations-4589281",
            "keywords": [
                "sport"
            ],
            "creator": null,
            "video_url": null,
            "description": null,
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:13:56",
            "pubDateTZ": "UTC",
            "image_url": "https://onecms-res.cloudinary.com/image/upload/s--XKp908SM--/c_fill,h_900,w_1600/fl_relative,g_south_east,l_mediacorp:cna:watermark:2024-04:reuters_1,w_0.1/f_auto,q_auto/v1/one-cms/core/2024-09-05t151356z_1_lynxmpek840q2_rtroptp_3_soccer-crime-spain.jpg?itok=9uvHOTj8",
            "source_id": "channelnewsasia",
            "source_priority": 37829,
            "source_name": "Cna",
            "source_url": "https://www.channelnewsasia.com",
            "source_icon": "https://i.bytvi.com/domain_icons/channelnewsasia.jpg",
            "language": "english",
            "country": [
                "singapore",
                "georgia",
                "yemen",
                "afghanistan",
                "cyprus",
                "india",
                "saudi arabia",
                "maldives",
                "japan",
                "united arab emirates",
                "malaysia",
                "china",
                "south korea",
                "north korea",
                "taiwan",
                "thailand",
                "pakistan",
                "mongolia",
                "brunei",
                "lebanon",
                "indonesia",
                "kyrgyzstan",
                "syria",
                "israel",
                "bhutan",
                "iran",
                "turkey",
                "armenia",
                "qatar",
                "philippines",
                "hong kong",
                "kazakhstan",
                "iraq",
                "bangladesh",
                "laos",
                "vietnam",
                "timor-leste",
                "kuwait",
                "myanmar",
                "azerbaijan",
                "jordan",
                "nepal",
                "oman",
                "sri lanka",
                "uzbekistan",
                "turkmenistan",
                "macau",
                "bahrain",
                "cambodia",
                "tajikistan"
            ],
            "category": [
                "sports"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        },
        {
            "article_id": "519b2e0a5ad9d82b680d5154141982f2",
            "title": "ผ่านสบายๆ มติสภา 309 เสียง โหวตเห็นชอบร่างงบประมาณ 2568 วาระ 3",
            "link": "https://www.thairath.co.th/news/politic/2812794",
            "keywords": null,
            "creator": null,
            "video_url": null,
            "description": "ผ่านแบบสบาย ๆ ที่ประชุมสภามีมติเห็นชอบร่างงบประมาณ 2568 จํานวน 3.7 ล้านล้านบาท ในวาระ 3 ด้วยคะแนน 309 ต่อ 155 เสียง",
            "content": "ONLY AVAILABLE IN PAID PLANS",
            "pubDate": "2024-09-05 15:13:00",
            "pubDateTZ": "UTC",
            "image_url": "https://static.thairath.co.th/media/Kg2lj2gY7z4zNnRd7SuCeZPSyu0Q3r7wSJv.jpg",
            "source_id": "thairath",
            "source_priority": 44507,
            "source_name": "Thairath",
            "source_url": "https://www.thairath.co.th",
            "source_icon": "https://i.bytvi.com/domain_icons/thairath.png",
            "language": "thai",
            "country": [
                "thailand"
            ],
            "category": [
                "top"
            ],
            "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
            "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS",
            "ai_org": "ONLY AVAILABLE IN CORPORATE PLANS",
            "duplicate": false
        }
    ], onlyThai: function () {
        return this.data.filter(function (elemant, index) {
            return elemant.language === 'thai'
        })
    }, onlyEnglish: function () {
        return this.data.filter(function (elemant, index) {
            return elemant.language === 'english'
        })
    }, onlyThaiPbsNews: function () {
        return this.data.filter(function (elemant, index) {
            return elemant.source_name === 'Thai Pbs News'
        })
    }
}

// console.log(news.onlyThai())
console.log(news.onlyThaiPbsNews())