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
    data: [
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
// console.log(news.onlyThaiPbsNews())



// https://jikan.moe/
//ตวรจสอบจาก API ว่า Anime ที่เราชอบมีการ On Air อยู่หรือไม่ ถ้า airing เป็น true คือ On Air อยู่ ถ้า falsh คือไม่ On Air
const myAnime = {
    data: [
        {
            "mal_id": 235,
            "url": "https://myanimelist.net/anime/235/Meitantei_Conan",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/75199.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/75199t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/75199l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/75199.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/75199t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/75199l.webp"
                }
            },
            "trailer": {
                "youtube_id": "iR2l9M0KzuQ",
                "url": "https://www.youtube.com/watch?v=iR2l9M0KzuQ",
                "embed_url": "https://www.youtube.com/embed/iR2l9M0KzuQ?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/iR2l9M0KzuQ/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/iR2l9M0KzuQ/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/iR2l9M0KzuQ/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/iR2l9M0KzuQ/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/iR2l9M0KzuQ/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン"
                },
                {
                    "type": "English",
                    "title": "Case Closed"
                },
                {
                    "type": "German",
                    "title": "Case Closed"
                }
            ],
            "title": "Meitantei Conan",
            "title_english": "Case Closed",
            "title_japanese": "名探偵コナン",
            "title_synonyms": [
                "Detective Conan"
            ],
            "type": "TV",
            "source": "Manga",
            "episodes": null,
            "status": "Currently Airing",
            "airing": true,
            "aired": {
                "from": "1996-01-08T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 8,
                        "month": 1,
                        "year": 1996
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Jan 8, 1996 to ?"
            },
            "duration": "24 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.17,
            "scored_by": 162142,
            "rank": 428,
            "popularity": 688,
            "members": 355230,
            "favorites": 15016,
            "synopsis": "Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child.\n\nPerfectly preserving his original intelligence, he hides his real identity from everyone, including his childhood friend Ran Mouri and her father, private detective Kogorou Mouri. To this end, he takes on the alias of Conan Edogawa, inspired by the mystery writers Arthur Conan Doyle and Ranpo Edogawa.\n\nShinichi, as Conan, starts secretly solving the senior Mouri's cases from behind the scenes with his still exceptional sleuthing skills, while covertly investigating the organization responsible for his current state, hoping to reverse the drug's effects someday.\n\n[Written by MAL Rewrite]",
            "background": "In 2003, FUNimation licensed the first 104 episodes of the series for North American production under the name Case Closed. They later decided to stop pursuing more episodes past episode 123 due to poor sales. In 2014, Crunchyroll obtained a license to stream simulcast episodes of Detective Conan on their website starting with episode 754. Winner of the Animation Award (DIVE Award) of the 2010 Japanese Movie Critics Awards.",
            "season": "winter",
            "year": 1996,
            "broadcast": {
                "day": "Saturdays",
                "time": "18:00",
                "timezone": "Asia/Tokyo",
                "string": "Saturdays at 18:00 (JST)"
            },
            "producers": [
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Yomiuri Telecasting",
                    "url": "https://myanimelist.net/anime/producer/76/Yomiuri_Telecasting"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https://myanimelist.net/anime/producer/1430/Shogakukan"
                },
                {
                    "mal_id": 1846,
                    "type": "anime",
                    "name": "Tokyo Movie",
                    "url": "https://myanimelist.net/anime/producer/1846/Tokyo_Movie"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                },
                {
                    "mal_id": 1468,
                    "type": "anime",
                    "name": "Crunchyroll",
                    "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 5460,
            "url": "https://myanimelist.net/anime/5460/Meitantei_Conan_Movie_13__Shikkoku_no_Chaser",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/22558.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/22558t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/22558l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/22558.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/22558t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/22558l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 13: Shikkoku no Chaser"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン漆黒の追跡者(チェイサー)"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 13: The Raven Chaser"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 13: Der nachtschwarze Jäger"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 13: El Perseguidor Negro"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 13: Le Chasseur Noir de Jais"
                }
            ],
            "title": "Meitantei Conan Movie 13: Shikkoku no Chaser",
            "title_english": "Detective Conan Movie 13: The Raven Chaser",
            "title_japanese": "名探偵コナン漆黒の追跡者(チェイサー)",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-04-18T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 4,
                        "year": 2009
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 18, 2009"
            },
            "duration": "1 hr 51 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.2,
            "scored_by": 34558,
            "rank": 380,
            "popularity": 2897,
            "members": 61149,
            "favorites": 77,
            "synopsis": "Kudou Shinichi is living his life as Edogawa Conan, but those days seem like they might end pretty soon. The Black Syndicate is coming dangerously close to learning the truth about Shinichi having survived. Conan and everybody around him may end up dead if he doesn't manage to find Irish—a member of the Black Organization who has infiltrated the police forces, currently investigating a big serial murder case.",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https://myanimelist.net/anime/producer/65/Tokyo_Movie_Shinsha"
                },
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1506,
            "url": "https://myanimelist.net/anime/1506/Meitantei_Conan_Movie_10__Tantei-tachi_no_Requiem",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1919/94322.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1919/94322t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1919/94322l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1919/94322.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1919/94322t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1919/94322l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 10: Tantei-tachi no Requiem"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 10: Requiem of the Detectives"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン　探偵たちの鎮魂歌[レクイエム]"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 10: The Private Eyes' Requiem"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 10: Das Requiem der Detektive"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 10: Le Requiem des Détectives"
                }
            ],
            "title": "Meitantei Conan Movie 10: Tantei-tachi no Requiem",
            "title_english": "Detective Conan Movie 10: The Private Eyes' Requiem",
            "title_japanese": "名探偵コナン　探偵たちの鎮魂歌[レクイエム]",
            "title_synonyms": [
                "Detective Conan Movie 10: Requiem of the Detectives"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2006-04-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 4,
                        "year": 2006
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 15, 2006"
            },
            "duration": "1 hr 51 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.03,
            "scored_by": 33345,
            "rank": 598,
            "popularity": 2986,
            "members": 57609,
            "favorites": 53,
            "synopsis": "After receiving a strange invitation, Kogorou Mouri pays a visit to the Miracle Land theme park along with his daughter Ran, Conan Edogawa, and the Detective Boys. Once there, Kogorou and Conan are tasked with finishing an unsolved case by a mysterious stranger. Realizing that the invitations were actually an elaborate trap, the two have just 12 hours to solve the case or face grave danger.\n\nWith the help of familiar faces like Heiji Hattori, Kaitou Kid, and even Saguru Hakuba, the group of detectives must unravel the web of clues surrounding the case in order to find the culprit and bring them to justice before it's too late.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 28479,
            "url": "https://myanimelist.net/anime/28479/Meitantei_Conan_Movie_19__Gouka_no_Himawari",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/73618.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/5/73618t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/5/73618l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/5/73618.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/5/73618t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/5/73618l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 19: Gouka no Himawari"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 19: The Hellfire Sunflowers"
                },
                {
                    "type": "Japanese",
                    "title": "映画 名探偵コナン 業火の向日葵"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 19: The Sunflowers of Inferno"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 19: Die Sonnenblume des Infernos"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 19: Los Girasoles del Infierno"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 19: Les tournesols des flammes infernales"
                }
            ],
            "title": "Meitantei Conan Movie 19: Gouka no Himawari",
            "title_english": "Detective Conan Movie 19: The Sunflowers of Inferno",
            "title_japanese": "映画 名探偵コナン 業火の向日葵",
            "title_synonyms": [
                "Detective Conan Movie 19: The Hellfire Sunflowers"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2015-04-18T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 4,
                        "year": 2015
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 18, 2015"
            },
            "duration": "1 hr 52 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.73,
            "scored_by": 23468,
            "rank": 1171,
            "popularity": 3589,
            "members": 40966,
            "favorites": 54,
            "synopsis": "Kaitou Kid and Vincent van Gogh's artworks feature heavily in the movie, according to an interview with Gosho Aoyama. The teaser preview at the end of Dimensional Sniper included references to van Gogh's \"Sunflowers\" series.\n\n(Source: Wikipedia)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https://myanimelist.net/anime/producer/467/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 35798,
            "url": "https://myanimelist.net/anime/35798/Meitantei_Conan_Movie_22__Zero_no_Shikkounin",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/90104.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/90104t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/90104l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/12/90104.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/12/90104t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/12/90104l.webp"
                }
            },
            "trailer": {
                "youtube_id": "UJQgvjLozlg",
                "url": "https://www.youtube.com/watch?v=UJQgvjLozlg",
                "embed_url": "https://www.youtube.com/embed/UJQgvjLozlg?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/UJQgvjLozlg/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/UJQgvjLozlg/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/UJQgvjLozlg/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/UJQgvjLozlg/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/UJQgvjLozlg/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 22: Zero no Shikkounin"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 22: Zero's Executioner"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版 名探偵コナン ゼロの執行人"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 22: Zero the Enforcer"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 22: Zero der Vollstrecker"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 22: Zero the Enforcer"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 22 : L'Exécutant de Zero"
                }
            ],
            "title": "Meitantei Conan Movie 22: Zero no Shikkounin",
            "title_english": "Case Closed Movie 22: Zero the Enforcer",
            "title_japanese": "劇場版 名探偵コナン ゼロの執行人",
            "title_synonyms": [
                "Detective Conan Movie 22: Zero's Executioner"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2018-04-13T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 13,
                        "month": 4,
                        "year": 2018
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 13, 2018"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.85,
            "scored_by": 17433,
            "rank": 890,
            "popularity": 4056,
            "members": 32220,
            "favorites": 66,
            "synopsis": "In the film's story, there is a sudden explosion at Tokyo Summit's giant Edge of Ocean facility. The shadow of Tooru Amuro, who works for the National Police Agency Security Bureau as Zero, appears at the site. In addition, the \"triple-face\" character is known as Rei Furuya as a detective and Kogorou Mouri's apprentice, and he is also known as Bourbon as a Black Organization member. Kogorou is arrested as a suspect in the case of the explosion. Conan conducts an investigation to prove Kogorou's innocence, but Amuro gets in his way.\n\n(Source: ANN)",
            "background": "Detective Conan: Zero the Enforcer won the Animation of the Year award in the Film category at the Tokyo Anime Award Festival in 2019.",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Yomiuri Telecasting",
                    "url": "https://myanimelist.net/anime/producer/76/Yomiuri_Telecasting"
                },
                {
                    "mal_id": 245,
                    "type": "anime",
                    "name": "TOHO",
                    "url": "https://myanimelist.net/anime/producer/245/TOHO"
                },
                {
                    "mal_id": 1003,
                    "type": "anime",
                    "name": "Nippon Television Network",
                    "url": "https://myanimelist.net/anime/producer/1003/Nippon_Television_Network"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https://myanimelist.net/anime/producer/1430/Shogakukan"
                }
            ],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https://myanimelist.net/anime/producer/467/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 46,
                    "type": "anime",
                    "name": "Award Winning",
                    "url": "https://myanimelist.net/anime/genre/46/Award_Winning"
                },
                {
                    "mal_id": 8,
                    "type": "anime",
                    "name": "Drama",
                    "url": "https://myanimelist.net/anime/genre/8/Drama"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": []
        },
        {
            "mal_id": 49320,
            "url": "https://myanimelist.net/anime/49320/Meitantei_Conan_Movie_25__Halloween_no_Hanayome",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1744/120789.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1744/120789t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1744/120789l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1744/120789.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1744/120789t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1744/120789l.webp"
                }
            },
            "trailer": {
                "youtube_id": "HTRrw7S7KoI",
                "url": "https://www.youtube.com/watch?v=HTRrw7S7KoI",
                "embed_url": "https://www.youtube.com/embed/HTRrw7S7KoI?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/HTRrw7S7KoI/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/HTRrw7S7KoI/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/HTRrw7S7KoI/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/HTRrw7S7KoI/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/HTRrw7S7KoI/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 25: Halloween no Hanayome"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン ハロウィンの花嫁"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 25: The Bride of Halloween"
                }
            ],
            "title": "Meitantei Conan Movie 25: Halloween no Hanayome",
            "title_english": "Detective Conan Movie 25: The Bride of Halloween",
            "title_japanese": "名探偵コナン ハロウィンの花嫁",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-04-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 4,
                        "year": 2022
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 15, 2022"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.05,
            "scored_by": 8039,
            "rank": 577,
            "popularity": 5355,
            "members": 16620,
            "favorites": 94,
            "synopsis": "Shibuya, Tokyo, is bustling with the Halloween season. A wedding is being held at Shibuya Hikarie, where Sato is dressed in a wedding dress. While Conan and the other invited guests are watching, an assailant suddenly bursts in, and Takagi, who was trying to protect Sato, is injured. Takagi survived and the situation was settled, but in Sato's eyes, the image of the grim reaper that she had seen when Jinpei Matsuda, the man she had been in love with, had been killed in a series of bombings three years ago, overlapped with Takagi's.\n\nAt the same time, the perpetrator of the bombings escapes from prison. Rei Furuya/Toru Amuro, a member of the public safety police, is hunting down the man who killed his classmate, but a mysterious person in disguise suddenly appears and puts a collar bomb on him.\n\nConan visits the underground shelter where Amuro is hiding out to disarm the collar bomb, and hears about an incident three years ago when he and his now deceased classmates from the police academy encountered an unidentified virtual bomber named \"Plamya\" in Shibuya. As Conan and his team investigate, a disturbing shadow begins to loom over them.\n\n(Source: Detective Conan World)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 51782,
            "url": "https://myanimelist.net/anime/51782/Meitantei_Conan__Honchou_no_Keiji_Koi_Monogatari_-_Kekkon_Zenya",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1774/123682.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1774/123682t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1774/123682l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1774/123682.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1774/123682t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1774/123682l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan: Honchou no Keiji Koi Monogatari - Kekkon Zenya"
                },
                {
                    "type": "Japanese",
                    "title": "本庁の刑事恋物語～結婚前夜～"
                },
                {
                    "type": "English",
                    "title": "Detective Conan: Love Story at Police Headquarters - Wedding Eve"
                }
            ],
            "title": "Meitantei Conan: Honchou no Keiji Koi Monogatari - Kekkon Zenya",
            "title_english": "Detective Conan: Love Story at Police Headquarters - Wedding Eve",
            "title_japanese": "本庁の刑事恋物語～結婚前夜～",
            "title_synonyms": [],
            "type": "Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2022-04-15T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 15,
                        "month": 4,
                        "year": 2022
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 15, 2022"
            },
            "duration": "1 hr 34 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.05,
            "scored_by": 797,
            "rank": 3988,
            "popularity": 11615,
            "members": 1981,
            "favorites": 1,
            "synopsis": "The special contains the footage from episodes featuring Takagi and Sato, with a new narration from Conan and re-recorded line of Takagi and Sato.\n\nIn the end scene, Sato is preparing herself as the bride as Yumi approach her. Meanwhile, Takagi is waiting outside. Those scenes are leading to the events in The Bride of Halloween.\n\n(Source: DCW Wiki)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                },
                {
                    "mal_id": 22,
                    "type": "anime",
                    "name": "Romance",
                    "url": "https://myanimelist.net/anime/genre/22/Romance"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1365,
            "url": "https://myanimelist.net/anime/1365/Meitantei_Conan_Movie_06__Baker_Street_no_Bourei",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1400/94320.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1400/94320t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1400/94320l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1400/94320.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1400/94320t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1400/94320l.webp"
                }
            },
            "trailer": {
                "youtube_id": "W85AwzVtKEU",
                "url": "https://www.youtube.com/watch?v=W85AwzVtKEU",
                "embed_url": "https://www.youtube.com/embed/W85AwzVtKEU?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/W85AwzVtKEU/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/W85AwzVtKEU/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/W85AwzVtKEU/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/W85AwzVtKEU/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/W85AwzVtKEU/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 06: Baker Street no Bourei"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 06: The Phantom of Baker Street"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン　ベイカー街(ストリート)の亡霊"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 06: The Phantom of Baker Street"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 6: Das Phantom der Baker Street"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 6: El fantasma de Baker Street"
                },
                {
                    "type": "French",
                    "title": "Detektiv Conan Film 6: Le Fantôme de Baker Street"
                }
            ],
            "title": "Meitantei Conan Movie 06: Baker Street no Bourei",
            "title_english": "Case Closed Movie 06: The Phantom of Baker Street",
            "title_japanese": "名探偵コナン　ベイカー街(ストリート)の亡霊",
            "title_synonyms": [
                "Detective Conan Movie 06: The Phantom of Baker Street"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2002-04-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 4,
                        "year": 2002
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 20, 2002"
            },
            "duration": "1 hr 47 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.29,
            "scored_by": 47994,
            "rank": 281,
            "popularity": 2486,
            "members": 79662,
            "favorites": 267,
            "synopsis": "Noah's Ark—the latest in VR technology and a milestone of human innovation—is set for a showcase to Japan's privileged children. They have the honour of beginning a new revolution in gaming; however, their carefree fun is cut short when a company employee is found murdered, with his dying message pointing to a clue hidden within the Ark.\n\nAlong with the Detective Boys and Ran Mouri, Conan Edogawa enters Noah's Ark to solve this mystery and ensure the perpetrator is caught. But once they're inside the Ark, it takes on a mind of its own, imprisoning them and the children within its worlds. To escape and bring the murderer to justice, Conan and company must navigate a simulated 19th century London and track down the infamous Jack the Ripper—with the lives of 50 innocent children depending on them.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 779,
            "url": "https://myanimelist.net/anime/779/Meitantei_Conan_Movie_01__Tokei_Jikake_no_Matenrou",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/77131.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/77131t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/77131l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/3/77131.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/3/77131t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/3/77131l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 01: Tokei Jikake no Matenrou"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 01: The Timed Skyscraper"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 時計じかけの摩天楼"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 01: The Time Bombed Skyscraper"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan der Film: Der tickende Wolkenkratzer"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan la Película 1: El Rascacielos del Tiempo"
                },
                {
                    "type": "French",
                    "title": "Détective Conan le Film: Le Gratte-Ciel infernal"
                }
            ],
            "title": "Meitantei Conan Movie 01: Tokei Jikake no Matenrou",
            "title_english": "Case Closed Movie 01: The Time Bombed Skyscraper",
            "title_japanese": "名探偵コナン 時計じかけの摩天楼",
            "title_synonyms": [
                "Detective Conan Movie 01: The Timed Skyscraper"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1997-04-19T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 19,
                        "month": 4,
                        "year": 1997
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 19, 1997"
            },
            "duration": "1 hr 34 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.86,
            "scored_by": 46012,
            "rank": 866,
            "popularity": 2592,
            "members": 73884,
            "favorites": 110,
            "synopsis": "Conan Edogawa is facing a dilemma: Ran Mouri has asked Shinichi Kudou out to the movies and he is unable to provide a convincing excuse not to go. However, when the day of the date arrives, he has more pressing problems to worry about—a great amount of plastic explosives has recently been stolen and the culprit has challenged Shinichi to find and dispose of the bombs he has scattered across the city. Now forced in a race against time, Conan must not only protect the city, but also figure out who the mastermind is and his reason for confronting Shinichi.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 236,
                    "type": "anime",
                    "name": "YTV",
                    "url": "https://myanimelist.net/anime/producer/236/YTV"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 781,
            "url": "https://myanimelist.net/anime/781/Meitantei_Conan_Movie_03__Seikimatsu_no_Majutsushi",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1831/94317.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1831/94317t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1831/94317l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1831/94317.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1831/94317t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1831/94317l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 03: Seikimatsu no Majutsushi"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 03: The Last Wizard of the Century"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 世紀末の魔術師"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 03: The Last Wizard of the Century"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 3: Der Magier des letzten Jahrhunderts"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 3: Le Magicien de la fin du siècle"
                }
            ],
            "title": "Meitantei Conan Movie 03: Seikimatsu no Majutsushi",
            "title_english": "Case Closed Movie 03: The Last Wizard of the Century",
            "title_japanese": "名探偵コナン 世紀末の魔術師",
            "title_synonyms": [
                "Detective Conan Movie 03: The Last Wizard of the Century"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1999-04-17T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 4,
                        "year": 1999
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 17, 1999"
            },
            "duration": "1 hr 40 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.03,
            "scored_by": 41107,
            "rank": 596,
            "popularity": 2730,
            "members": 67779,
            "favorites": 85,
            "synopsis": "Kaitou Kid dares to challenge the police once more, setting his sights on the Russian Imperial Easter Egg. With the date, time, and place, the Osaka police force scrambles to stop him. But this time, Kid may have bitten off more than he can chew—Conan Edogawa, Heiji Hattori, and numerous others are also trying to get their hands on the jeweled egg.\n\nAs the race for possession of the egg escalates, a string of murders threatens those after it, and at the same time the tragic truth behind the Romanov Dynasty is finally revealed. At the center of these developments, it is up to Conan to solve the gruesome murders and catch Kid, all while protecting those close to him and concealing his identity.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 76,
                    "type": "anime",
                    "name": "Yomiuri Telecasting",
                    "url": "https://myanimelist.net/anime/producer/76/Yomiuri_Telecasting"
                },
                {
                    "mal_id": 156,
                    "type": "anime",
                    "name": "Polygram Japan",
                    "url": "https://myanimelist.net/anime/producer/156/Polygram_Japan"
                },
                {
                    "mal_id": 245,
                    "type": "anime",
                    "name": "TOHO",
                    "url": "https://myanimelist.net/anime/producer/245/TOHO"
                },
                {
                    "mal_id": 1430,
                    "type": "anime",
                    "name": "Shogakukan",
                    "url": "https://myanimelist.net/anime/producer/1430/Shogakukan"
                },
                {
                    "mal_id": 1506,
                    "type": "anime",
                    "name": "Audio Planning U",
                    "url": "https://myanimelist.net/anime/producer/1506/Audio_Planning_U"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 780,
            "url": "https://myanimelist.net/anime/780/Meitantei_Conan_Movie_02__14-banme_no_Target",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1900/94316.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1900/94316t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1900/94316l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1900/94316.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1900/94316t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1900/94316l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 02: 14-banme no Target"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 02: The Fourteenth Target"
                },
                {
                    "type": "Synonym",
                    "title": "Meitantei Conan Movie 02: Jyuuyonbanme no Target"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン １４番目の標的"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 02: The Fourteenth Target"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 2: Das 14. Ziel"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 2: La Decimocuarta Víctima"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 2: La Quatorzième Cible"
                }
            ],
            "title": "Meitantei Conan Movie 02: 14-banme no Target",
            "title_english": "Case Closed Movie 02: The Fourteenth Target",
            "title_japanese": "名探偵コナン １４番目の標的",
            "title_synonyms": [
                "Detective Conan Movie 02: The Fourteenth Target",
                "Meitantei Conan Movie 02: Jyuuyonbanme no Target"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "1998-04-18T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 18,
                        "month": 4,
                        "year": 1998
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 18, 1998"
            },
            "duration": "1 hr 39 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.88,
            "scored_by": 40178,
            "rank": 830,
            "popularity": 2781,
            "members": 65585,
            "favorites": 74,
            "synopsis": "A mysterious attacker has appeared and is assaulting people whose names contain a number from the standard deck of cards in descending order. When Conan Edogawa points out that all the victims are related to the now famous detective Kogorou Mouri, suspicion immediately falls upon the recently released convict Jou Murakami, as Kogorou was the one responsible for his arrest ten years prior.\n\nWith potential victims still at risk, Conan and the police are determined to catch the culprit. As the case gradually unfolds, both Conan and his friend Ran Mouri learn more about her parents' separation and the truth on what transpired a decade ago.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1506,
                    "type": "anime",
                    "name": "Audio Planning U",
                    "url": "https://myanimelist.net/anime/producer/1506/Audio_Planning_U"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1364,
            "url": "https://myanimelist.net/anime/1364/Meitantei_Conan_Movie_05__Tengoku_e_no_Countdown",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1144/92654.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1144/92654t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1144/92654l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1144/92654.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1144/92654t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1144/92654l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 05: Tengoku e no Countdown"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 05: Countdown to Heaven"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 天国へのカウントダウン"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 05: Countdown to Heaven"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 5: Countdown zum Himmel"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 5: Cuenta Regresiva al Cielo"
                },
                {
                    "type": "French",
                    "title": "Detektiv Conan Film 5: Décompte aux cieux"
                }
            ],
            "title": "Meitantei Conan Movie 05: Tengoku e no Countdown",
            "title_english": "Case Closed Movie 05: Countdown to Heaven",
            "title_japanese": "名探偵コナン 天国へのカウントダウン",
            "title_synonyms": [
                "Detective Conan Movie 05: Countdown to Heaven"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2001-04-21T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 4,
                        "year": 2001
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 21, 2001"
            },
            "duration": "1 hr 40 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.11,
            "scored_by": 39062,
            "rank": 490,
            "popularity": 2789,
            "members": 65218,
            "favorites": 63,
            "synopsis": "Conan Edogawa, the Detective Boys, and Professor Hiroshi Agasa decide to visit the Nishitamashi Twin Towers. There they run into Ran Mouri; her closest friend, Sonoko Suzuki, and Ran's father, the famous Kogorou Mouri. Learning the trio are attending the towers' grand opening, Conan and company tag along for a private tour of its floors.\n\nHowever, as preparations are finalized for the opening ceremony, their visit takes an unexpected turn—three brutal murders occur, seemingly linked to a mysterious Porsche 356A. Soon after, as Conan and the detectives dive deeper into the case, the towers are rocked by an explosion. With fire rapidly spreading and lives in danger, police desperately seek to evacuate everyone. But when the elevator, their only means to escape goes down, Conan and company are left behind. With help on its way, they frantically try to keep everyone safe, but time is running out if they want to bring the perpetrators to justice.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1363,
            "url": "https://myanimelist.net/anime/1363/Meitantei_Conan_Movie_04__Hitomi_no_Naka_no_Ansatsusha",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1196/94319.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1196/94319t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1196/94319l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1196/94319.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1196/94319t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1196/94319l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 04: Hitomi no Naka no Ansatsusha"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 04: Captured in Her Eyes"
                },
                {
                    "type": "Japanese",
                    "title": "瞳の中の暗殺者"
                },
                {
                    "type": "English",
                    "title": "Case Closed Movie 04: Captured In Her Eyes"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 4: Der Killer in ihren Augen"
                },
                {
                    "type": "French",
                    "title": "Detektiv Conan Film 4: L'assassins dans Ses Yeux"
                }
            ],
            "title": "Meitantei Conan Movie 04: Hitomi no Naka no Ansatsusha",
            "title_english": "Case Closed Movie 04: Captured In Her Eyes",
            "title_japanese": "瞳の中の暗殺者",
            "title_synonyms": [
                "Detective Conan Movie 04: Captured in Her Eyes"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2000-04-22T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 22,
                        "month": 4,
                        "year": 2000
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 22, 2000"
            },
            "duration": "1 hr 39 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.03,
            "scored_by": 38418,
            "rank": 597,
            "popularity": 2820,
            "members": 64034,
            "favorites": 97,
            "synopsis": "On a rainy afternoon, the Detective Boys witness a murder across the street. Barred by traffic, the culprit slips away and Conan Edogawa is left a single clue by a dying detective. Days later, another detective is found murdered in a parking lot, leaving the police rattled. Suspicious that the culprit is one of their own, everyone in the police department without an alibi is suspect. But despite being on high alert, they are outmaneuvered and suffer yet another attack—this time with Ran Mouri finding herself in the crossfire.\n\nTraumatized, Ran wakes in the hospital with retrograde amnesia, remembering nothing about her life. Soon released, she struggles to remember her past and grows fearful of not regaining her memories before being targeted by the killer for what she witnessed. As she is guarded by friends and family, it is up to Conan to piece together the clues and find who the murderer is before they strike again.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 156,
                    "type": "anime",
                    "name": "Polygram Japan",
                    "url": "https://myanimelist.net/anime/producer/156/Polygram_Japan"
                }
            ],
            "licensors": [
                {
                    "mal_id": 102,
                    "type": "anime",
                    "name": "Funimation",
                    "url": "https://myanimelist.net/anime/producer/102/Funimation"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 6467,
            "url": "https://myanimelist.net/anime/6467/Meitantei_Conan_Movie_14__Tenkuu_no_Lost_Ship",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/22312.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/22312t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/22312l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/7/22312.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/7/22312t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/7/22312l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 14: Tenkuu no Lost Ship"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 天空の難破船"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 14: The Lost Ship in the Sky"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 14: Das verlorene Schiff am Himmel"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 14: El Barco Perdido en el Cielo"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 14: L'Arche du Ciel"
                }
            ],
            "title": "Meitantei Conan Movie 14: Tenkuu no Lost Ship",
            "title_english": "Detective Conan Movie 14: The Lost Ship in the Sky",
            "title_japanese": "名探偵コナン 天空の難破船",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2010-04-17T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 4,
                        "year": 2010
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 17, 2010"
            },
            "duration": "1 hr 42 min",
            "rating": "G - All Ages",
            "score": 8.11,
            "scored_by": 33834,
            "rank": 491,
            "popularity": 2956,
            "members": 58532,
            "favorites": 68,
            "synopsis": "One night, the Tokyo National Institute of Microorganisms is attacked by a mysterious organization calling themselves the \"Red Siamese Cats.\" The group causes the explosion of a high-security lab storing a virus—said to have a mortality rate of 80% with no known cure. This act of terror dominates the headlines, overshadowing the unveiling of the world's biggest airship developed under Jirokichi Suzuki. Peculiarly, the unveiling has a note attached for Kaito \"Kaitou Kid\" Kuroba, challenging him to steal the jewel on display—the illustrious Lady Sky.\n\nConan Edogawa is permitted to board the airship along with Kogorou Mouri, Ran Mouri, Sonoko Suzuki, Professor Agasa, and the Detective Boys. However, their fun comes to a halt when an unknown caller contacts Jirokichi and declares that they have released a certain virus in the smoking room. Soon after, symptoms begin to appear among the passengers and chaos ensues. Seizing the opportunity, the Red Siamese Cats suddenly appear and hijack the airship! \n\nTo stop the assailants, Conan and Kaitou Kid, along with their allies, must work together to decipher the clues and discover the Red Siamese Cats' real objective before time runs out.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https://myanimelist.net/anime/producer/65/Tokyo_Movie_Shinsha"
                },
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1367,
            "url": "https://myanimelist.net/anime/1367/Meitantei_Conan_Movie_08__Ginyoku_no_Magician",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/20982.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/20982t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/20982l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/2/20982.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/2/20982t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/2/20982l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 08: Ginyoku no Magician"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 銀翼の奇術師[マジシャン]"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 08: Magician of the Silver Sky"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 8: Der Magier mit den Silberschwingen"
                },
                {
                    "type": "French",
                    "title": "Detektiv Conan Film 8: Le Magicien aux Ailes D'Argenté"
                }
            ],
            "title": "Meitantei Conan Movie 08: Ginyoku no Magician",
            "title_english": "Detective Conan Movie 08: Magician of the Silver Sky",
            "title_japanese": "名探偵コナン 銀翼の奇術師[マジシャン]",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2004-04-17T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 17,
                        "month": 4,
                        "year": 2004
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 17, 2004"
            },
            "duration": "1 hr 48 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.06,
            "scored_by": 34149,
            "rank": 558,
            "popularity": 2965,
            "members": 58193,
            "favorites": 42,
            "synopsis": "Once again, Kaitou Kid crosses swords with Conan Edogawa in this annual installment of the Detective Conan movie franchise. After receiving a letter from the thief, famous actress Juri Maki seeks the help of private detective Kogorou Mouri to protect the Star Sapphire—the \"Jewel of Destiny,\" said to represent faith, fate, and hope. Thinking he has deciphered Kid's riddle, Kogorou personally shows up to the newly constructed space theater where Juri is acting in the play \"Josephine\" in order to catch Kid in the act.\n \nThe next day, Conan and the gang are invited by Juri to her holiday home, to celebrate the thwarting of Kid's plan and the success of the play. However, their triumph crumbles when a murder occurs during the flight there. Although unintentional, this sets off a series of events that escalate to catastrophic results. Conan and Kid, unlikely allies that they are, must work together to save both their friends and every other passenger aboard the plane.\n \n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1366,
            "url": "https://myanimelist.net/anime/1366/Meitantei_Conan_Movie_07__Meikyuu_no_Crossroad",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/20984.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/20984t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/20984l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/20984.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/20984t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/20984l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 07: Meikyuu no Crossroad"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 迷宮の十字路(クロスロード)"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 07: Crossroad in the Ancient Capital"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 7: Die Kreuzung des Labyrinths"
                },
                {
                    "type": "French",
                    "title": "Detektiv Conan Film 7: Croisement dans l'ancienne capitale"
                }
            ],
            "title": "Meitantei Conan Movie 07: Meikyuu no Crossroad",
            "title_english": "Detective Conan Movie 07: Crossroad in the Ancient Capital",
            "title_japanese": "名探偵コナン 迷宮の十字路(クロスロード)",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2003-04-19T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 19,
                        "month": 4,
                        "year": 2003
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 19, 2003"
            },
            "duration": "1 hr 48 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.79,
            "scored_by": 31671,
            "rank": 1023,
            "popularity": 3099,
            "members": 53500,
            "favorites": 38,
            "synopsis": "Under the cover of darkness, a masked samurai murders five men across the metropolis of Japan: three in Tokyo, one in Osaka, and the last in Kyoto. In their investigation, the police learn that each man was a member of the Genjibotaru—a thieves gang centered on the theft of Buddhist statues and artifacts and who go by the names of Minomoto no Yoshitune's servants.\n \nWithout a clear motive or clues to the other members' identities, the case runs dry until a Kyoto temple calls for the famous Kogorou Mouri. Having received an anonymous letter containing a peculiar puzzle, the temple monks ask for his assistance in solving it to recover their long lost statue. Meanwhile, Conan Edogawa and high school detective Heiji Hattori team up in order to solve the cryptic puzzle and find the murderer, as Hattori searches for his childhood love.\n \nWith Hattori's knowledge of Kyoto, the two scour the streets and gradually discover the truth, but not before the murderer strikes again—killing another Genjibotaru member and, after repeated attempts on Hattori's life, eventually kidnapping Hattori's childhood sweetheart. It is only by working together to bring buried clues to light can Conan and Hattori hope to end the rogue samurai's bloodshed and save Hattori's love.\n \n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 1505,
            "url": "https://myanimelist.net/anime/1505/Meitantei_Conan_Movie_09__Suihei_Senjou_no_Strategy",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/8/20983.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/8/20983t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/8/20983l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/8/20983.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/8/20983t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/8/20983l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 09: Suihei Senjou no Strategy"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン　水平線上の陰謀"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 09: Strategy Above the Depths"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 9: Das Komplott über dem Ozean"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 9: Stratégie en Profondeur"
                }
            ],
            "title": "Meitantei Conan Movie 09: Suihei Senjou no Strategy",
            "title_english": "Detective Conan Movie 09: Strategy Above the Depths",
            "title_japanese": "名探偵コナン　水平線上の陰謀",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2005-04-09T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 9,
                        "month": 4,
                        "year": 2005
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 9, 2005"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.79,
            "scored_by": 29770,
            "rank": 1024,
            "popularity": 3170,
            "members": 51177,
            "favorites": 21,
            "synopsis": "Fifteen years ago in a barren stretch of the Pacific, a cruise ship collided with an iceberg and was lost at sea. More than a decade later, Hideto Yashiro—a ship engineer—died in a fatal car accident. The unlikely connection between these events only comes to light on the luxury liner St. Aphrodite during her maiden voyage.\n\nAboard it on a much needed vacation, Kogorou Mouri, his daughter Ran, Conan Edogawa, and the Detective Boys enjoy a trip provided by Sonoko Suzuki's family. But their fun is soon cut short when a game of hide-and-seek leads to Sonoko's disappearance. Some time later, the CEO of the Yashiro group, who built the St. Aphrodite, is found stabbed to death and her father missing. While the police's investigation turns to a dead end, Conan closes in on the culprit. Unwilling to be apprehended, the culprit threatens to blow up the St. Aphrodite and sink all her passengers.\n\nAs the ship's hull rapidly fills with water, the truth behind the vengeful murders is finally revealed. With no place to escape, Conan and Kogorou must wrestle with the elusive culprit before everyone on board is dragged to the ocean floor.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 9963,
            "url": "https://myanimelist.net/anime/9963/Meitantei_Conan_Movie_15__Chinmoku_no_Quarter",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/32035.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/32035t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/32035l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/9/32035.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/9/32035t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/9/32035l.webp"
                }
            },
            "trailer": {
                "youtube_id": "_FzJB0xjbvQ",
                "url": "https://www.youtube.com/watch?v=_FzJB0xjbvQ",
                "embed_url": "https://www.youtube.com/embed/_FzJB0xjbvQ?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/_FzJB0xjbvQ/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/_FzJB0xjbvQ/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/_FzJB0xjbvQ/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/_FzJB0xjbvQ/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/_FzJB0xjbvQ/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 15: Chinmoku no Quarter"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 沈黙の15分"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 15: Quarter of Silence"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 15: Die 15 Minuten der Stille"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 15: 15 Minutos de Silencio"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 15: Les Quinze Minutes de Silence"
                }
            ],
            "title": "Meitantei Conan Movie 15: Chinmoku no Quarter",
            "title_english": "Detective Conan Movie 15: Quarter of Silence",
            "title_japanese": "名探偵コナン 沈黙の15分",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2011-04-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 4,
                        "year": 2011
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 16, 2011"
            },
            "duration": "1 hr 49 min",
            "rating": "G - All Ages",
            "score": 8,
            "scored_by": 28867,
            "rank": 638,
            "popularity": 3217,
            "members": 49950,
            "favorites": 53,
            "synopsis": "The momentous day of the opening of the new Tokyo subway, the Touto Line, has come, but a bombing incident puts all celebrations to a halt. The governor of Tokyo is caught in the blast while onboard the train, but he and everyone else present is fortunately saved by the quick thinking and actions of Conan Edogawa.\n\nIntrigued by the incident, Conan researches the governor's political history and discovers that the man was responsible for the destruction of a village in Niigata to build the Kitanosawa Dam. Believing the attack to be related to the construction of the dam, Conan, accompanied by Ran Mouri, Kogorou Mouri, Professor Agasa, Sonoko Suzuki, and the Detective Boys, decides to visit the village and investigate. \n\nThere, they meet a group of locals who lived in the old village before it was torn down. However, just as one mystery leads to another, one of the locals is murdered. Suspecting that something much more sinister is afoot, Conan vows to uncover the truth behind these two incidents before it is too late.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https://myanimelist.net/anime/producer/65/Tokyo_Movie_Shinsha"
                },
                {
                    "mal_id": 245,
                    "type": "anime",
                    "name": "TOHO",
                    "url": "https://myanimelist.net/anime/producer/245/TOHO"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 4447,
            "url": "https://myanimelist.net/anime/4447/Meitantei_Conan_Movie_12__Senritsu_no_Full_Score",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/22766.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/22766t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/22766l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/6/22766.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/6/22766t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/6/22766l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 12: Senritsu no Full Score"
                },
                {
                    "type": "Synonym",
                    "title": "Meitantei Conan: Senritsu no Gakufu [Full Score]"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 戦慄の楽譜（フルスコア）"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 12: Full Score of Fear"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 12: Die Partitur des Grauens"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 12: La mélodie de la Peur"
                }
            ],
            "title": "Meitantei Conan Movie 12: Senritsu no Full Score",
            "title_english": "Detective Conan Movie 12: Full Score of Fear",
            "title_japanese": "名探偵コナン 戦慄の楽譜（フルスコア）",
            "title_synonyms": [
                "Meitantei Conan: Senritsu no Gakufu [Full Score]"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2008-04-19T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 19,
                        "month": 4,
                        "year": 2008
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 19, 2008"
            },
            "duration": "1 hr 56 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.78,
            "scored_by": 28225,
            "rank": 1058,
            "popularity": 3258,
            "members": 48799,
            "favorites": 24,
            "synopsis": "Serial murders involving all kinds have happened. All the victims are from a Music School led by a famous pianist. Conan and company have been invited to a opening concert of the Music Hall built by the pianist. The biggest attraction of this concert is the world famous violin called \"Stradivarius\" and a special appearance of a singer who has perfect pitch. \n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 62,
                    "type": "anime",
                    "name": "Shogakukan-Shueisha Productions",
                    "url": "https://myanimelist.net/anime/producer/62/Shogakukan-Shueisha_Productions"
                },
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https://myanimelist.net/anime/producer/65/Tokyo_Movie_Shinsha"
                },
                {
                    "mal_id": 1157,
                    "type": "anime",
                    "name": "Big Bang",
                    "url": "https://myanimelist.net/anime/producer/1157/Big_Bang"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 2171,
            "url": "https://myanimelist.net/anime/2171/Meitantei_Conan_Movie_11__Konpeki_no_Jolly_Roger",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1765/94323.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1765/94323t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1765/94323l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1765/94323.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1765/94323t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1765/94323l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 11: Konpeki no Jolly Roger"
                },
                {
                    "type": "Synonym",
                    "title": "Meitantei Conan: Konpeki no Hitsugi [Jolly Roger]"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 紺碧の棺 （ジョリー・ロジャー）"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 11: Jolly Roger in the Deep Azure"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 11: Die azurblaue Piratenflagge"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 11: Jolly Roger et Le Cercueil Bleu Azur"
                }
            ],
            "title": "Meitantei Conan Movie 11: Konpeki no Jolly Roger",
            "title_english": "Detective Conan Movie 11: Jolly Roger in the Deep Azure",
            "title_japanese": "名探偵コナン 紺碧の棺 （ジョリー・ロジャー）",
            "title_synonyms": [
                "Meitantei Conan: Konpeki no Hitsugi [Jolly Roger]"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2007-04-21T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 21,
                        "month": 4,
                        "year": 2007
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 21, 2007"
            },
            "duration": "1 hr 45 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.43,
            "scored_by": 26668,
            "rank": 2140,
            "popularity": 3380,
            "members": 45749,
            "favorites": 10,
            "synopsis": "The luscious hills of Koumi Island are one of many reasons tourists pay its shores a visit—a reason that comes second only to its scenic coral reefs and the legend of Anne Bonnie and Mary Read. The museum that houses the cutlass and pistol of the daring pirate duo does wonders for the small island's tourism. \n\nOn a trip to the island, the famous Kogorou Mouri is joined by his daughter Ran, her best friend Sonoko Suzuki, the Detective Boys, and Conan Edogawa. Following a mix up at the hotel regarding their rooms, the group encounters treasure hunters and becomes acquainted with the island's treasure fever. Sent on a hunt of their very own, the Detective Boys scour the isle; while in far harsher waters, Conan discovers a murder. The police, following a clue from a recent robbery, arrive soon after, and Koumi is plunged into chaos. \n\nWhat follows is a mad dash by not only the treasure hunters but also the inhabitants of Koumi to secure Anne and Mary's long lost booty. All the while, however, Conan, Kogorou, and the police search for the one thing far greater than riches—justice.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 1157,
                    "type": "anime",
                    "name": "Big Bang",
                    "url": "https://myanimelist.net/anime/producer/1157/Big_Bang"
                }
            ],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 12117,
            "url": "https://myanimelist.net/anime/12117/Meitantei_Conan_Movie_16__11-ninme_no_Striker",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/8/37511.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/8/37511t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/8/37511l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/8/37511.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/8/37511t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/8/37511l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 16: 11-ninme no Striker"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版　名探偵コナン　11人目のストライカー"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 16: The Eleventh Striker"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 16: Der 11. Stürmer"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 16: El Undécimo Delantero"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 16: Le Onzième Attaquant"
                }
            ],
            "title": "Meitantei Conan Movie 16: 11-ninme no Striker",
            "title_english": "Detective Conan Movie 16: The Eleventh Striker",
            "title_japanese": "劇場版　名探偵コナン　11人目のストライカー",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2012-04-14T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 14,
                        "month": 4,
                        "year": 2012
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 14, 2012"
            },
            "duration": "1 hr 50 min",
            "rating": "G - All Ages",
            "score": 7.7,
            "scored_by": 26211,
            "rank": 1248,
            "popularity": 3404,
            "members": 45180,
            "favorites": 29,
            "synopsis": "In Touto Stadium, a J. League soccer match is taking place. During this, Detective Kogorou Mouri receives a bomb threat from an unknown caller and a mysterious riddle that points to its location. Conan Edogawa must now save the fans of the game before the time runs out.\n\nFortunately, with Conan's quick actions and clever thinking, the bomb is discovered and the explosion is evaded. The culprit does not stop there; Detective Kogorou is informed of another hidden bomb set to explode at a large event in the city. Forced into a race against time, with thousands of more lives at stake, Conan must decipher another riddle, discover the place of the bomb, and catch the culprit in order to escape a terrible tragedy.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                },
                {
                    "mal_id": 30,
                    "type": "anime",
                    "name": "Sports",
                    "url": "https://myanimelist.net/anime/genre/30/Sports"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                },
                {
                    "mal_id": 77,
                    "type": "anime",
                    "name": "Team Sports",
                    "url": "https://myanimelist.net/anime/genre/77/Team_Sports"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 21419,
            "url": "https://myanimelist.net/anime/21419/Meitantei_Conan_Movie_18__Ijigen_no_Sniper",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/60289.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/60289t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/60289l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/11/60289.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/11/60289t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/11/60289l.webp"
                }
            },
            "trailer": {
                "youtube_id": "XQG4DG7zCH0",
                "url": "https://www.youtube.com/watch?v=XQG4DG7zCH0",
                "embed_url": "https://www.youtube.com/embed/XQG4DG7zCH0?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/XQG4DG7zCH0/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/XQG4DG7zCH0/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/XQG4DG7zCH0/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/XQG4DG7zCH0/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/XQG4DG7zCH0/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 18: Ijigen no Sniper"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン　異次元の狙撃手（スナイパー）"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 18: The Sniper from Another Dimension"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 18: Der Scharfschütze aus einer anderen Dimension"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 18: El Francotirador Dimensional"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 18 : Le sniper dimensionnel"
                }
            ],
            "title": "Meitantei Conan Movie 18: Ijigen no Sniper",
            "title_english": "Detective Conan Movie 18: The Sniper from Another Dimension",
            "title_japanese": "名探偵コナン　異次元の狙撃手（スナイパー）",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2014-04-19T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 19,
                        "month": 4,
                        "year": 2014
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 19, 2014"
            },
            "duration": "1 hr 50 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 8.06,
            "scored_by": 25389,
            "rank": 559,
            "popularity": 3426,
            "members": 44741,
            "favorites": 39,
            "synopsis": "One morning, at the observation deck of the Bell Tree Tower, a man is suddenly shot dead by an unknown sniper. Conan Edogawa, who happened to be visiting as the murder occurred, rushes to apprehend the sniper but fails to do so. He later learns that the suspect for the incident, Timothy Hunter, is a former member of the Navy Special Ops squad and was already being investigated for a previous murder case. The FBI believes that there are at least three people Timothy wants dead. However, after the deaths of two of them, Timothy himself is killed, throwing the investigation into disarray.\n\nAs they lose their only lead, news about the assassinations spreads across Tokyo, leaving the city in a state of panic. It is up to Conan to find and catch the culprit in the hope of putting an end to this sniping spree terror.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 32005,
            "url": "https://myanimelist.net/anime/32005/Meitantei_Conan_Movie_20__Junkoku_no_Nightmare",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/78894.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/78894t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/78894l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/10/78894.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/10/78894t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/10/78894l.webp"
                }
            },
            "trailer": {
                "youtube_id": "bXkzfhqEKa8",
                "url": "https://www.youtube.com/watch?v=bXkzfhqEKa8",
                "embed_url": "https://www.youtube.com/embed/bXkzfhqEKa8?enablejsapi=1&wmode=opaque&autoplay=1",
                "images": {
                    "image_url": "https://img.youtube.com/vi/bXkzfhqEKa8/default.jpg",
                    "small_image_url": "https://img.youtube.com/vi/bXkzfhqEKa8/sddefault.jpg",
                    "medium_image_url": "https://img.youtube.com/vi/bXkzfhqEKa8/mqdefault.jpg",
                    "large_image_url": "https://img.youtube.com/vi/bXkzfhqEKa8/hqdefault.jpg",
                    "maximum_image_url": "https://img.youtube.com/vi/bXkzfhqEKa8/maxresdefault.jpg"
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 20: Junkoku no Nightmare"
                },
                {
                    "type": "Synonym",
                    "title": "Detective Conan Movie 20: Pitch Black Nightmare"
                },
                {
                    "type": "Japanese",
                    "title": "劇場版　名探偵コナン　純黒の悪夢（ナイトメア）"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 20: The Darkest Nightmare"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 20: Der dunkelste Albtraum"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 20: La Pesadilla más Oscura"
                },
                {
                    "type": "French",
                    "title": "Detective Conan Film 20: Le pire cauchemar"
                }
            ],
            "title": "Meitantei Conan Movie 20: Junkoku no Nightmare",
            "title_english": "Detective Conan Movie 20: The Darkest Nightmare",
            "title_japanese": "劇場版　名探偵コナン　純黒の悪夢（ナイトメア）",
            "title_synonyms": [
                "Detective Conan Movie 20: Pitch Black Nightmare"
            ],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2016-04-16T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 16,
                        "month": 4,
                        "year": 2016
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 16, 2016"
            },
            "duration": "1 hr 52 min",
            "rating": "G - All Ages",
            "score": 8.18,
            "scored_by": 24165,
            "rank": 401,
            "popularity": 3494,
            "members": 43099,
            "favorites": 98,
            "synopsis": "On a dark night, the Japanese police is raided by a spy. Different countries' intelligence agencies—such as England's MI6, Germany's BND, and America's CIA—as well as the FBI's secret files are going to be taken, but public safety officers lead by Tooru Amuro arrive just in time. The spy steals a car and escapes. The spy and Amuro are then locked in a dead heat on the highway, and just as it is about to cause an accident with multiple cars, the spy's car is hit by FBI agent Shuichi Akai's rifle bullet and falls of the roadway.\nThe next day, Conan and his friends go to a newly-remodeled aquarium in Tokyo. Under the main attraction, a Ferris wheel, Conan finds an attractive woman alone and injured. Her left and right eyes are different colors.\n\nBut the woman is in a state of amnesia where she doesn't even remember her own name, and the cellphone she's carrying is broken. Conan and his friends promise to help her regain her memory, so they stay with her.\n\nThroughout all this, Vermouth is watching behind the scenes. Afterwards, she pulls out a silencer and speaks into an attached intercom, \"It's as planned, Gin.\"",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https://myanimelist.net/anime/producer/467/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 14735,
            "url": "https://myanimelist.net/anime/14735/Meitantei_Conan_Movie_17__Zekkai_no_Private_Eye",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/47419.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/47419t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/47419l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/4/47419.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/4/47419t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/4/47419l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Meitantei Conan Movie 17: Zekkai no Private Eye"
                },
                {
                    "type": "Japanese",
                    "title": "名探偵コナン 絶海の探偵"
                },
                {
                    "type": "English",
                    "title": "Detective Conan Movie 17: Private Eye in the Distant Sea"
                },
                {
                    "type": "German",
                    "title": "Detektiv Conan Film 17: Detektiv auf hoher See"
                },
                {
                    "type": "Spanish",
                    "title": "Detective Conan Película 17: El Detective del Mar Lejano"
                },
                {
                    "type": "French",
                    "title": "Détective Conan Film 17: Un Détective Privé en Mer Lointaine"
                }
            ],
            "title": "Meitantei Conan Movie 17: Zekkai no Private Eye",
            "title_english": "Detective Conan Movie 17: Private Eye in the Distant Sea",
            "title_japanese": "名探偵コナン 絶海の探偵",
            "title_synonyms": [],
            "type": "Movie",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2013-04-20T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 20,
                        "month": 4,
                        "year": 2013
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Apr 20, 2013"
            },
            "duration": "1 hr 50 min",
            "rating": "G - All Ages",
            "score": 7.67,
            "scored_by": 22574,
            "rank": 1326,
            "popularity": 3618,
            "members": 40333,
            "favorites": 16,
            "synopsis": "The warship Aegis Destroyer is conducting public exercises in Maizuru Bay where, coincidentally, a suspicious foreign ship was recently spotted. Conan Edogawa, Ran Mouri, Kogorou Mouri, Sonoko Suzuki, and the Detective Boys all receive a ticket to attend this event. However, while the ongoing military operations are underway, one of the crew members comes across a lieutenant's severed left arm. Conan later discovers that a foreign spy may have infiltrated the warship to obtain classified information by any means necessary. If the information were to leak, Japan's line of defense would be exposed, leaving the country unprotected from hostile attack.\n\nWith the help of the police at sea while other friends and allies investigate on the mainland, Conan must now prevent this national crisis and identify the spy for the sake of Japan.\n\n[Written by MAL Rewrite]",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [],
            "licensors": [],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [
                {
                    "mal_id": 39,
                    "type": "anime",
                    "name": "Detective",
                    "url": "https://myanimelist.net/anime/genre/39/Detective"
                }
            ],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        },
        {
            "mal_id": 6115,
            "url": "https://myanimelist.net/anime/6115/Lupin_III_vs_Meitantei_Conan",
            "images": {
                "jpg": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1849/134190.jpg",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1849/134190t.jpg",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1849/134190l.jpg"
                },
                "webp": {
                    "image_url": "https://cdn.myanimelist.net/images/anime/1849/134190.webp",
                    "small_image_url": "https://cdn.myanimelist.net/images/anime/1849/134190t.webp",
                    "large_image_url": "https://cdn.myanimelist.net/images/anime/1849/134190l.webp"
                }
            },
            "trailer": {
                "youtube_id": null,
                "url": null,
                "embed_url": null,
                "images": {
                    "image_url": null,
                    "small_image_url": null,
                    "medium_image_url": null,
                    "large_image_url": null,
                    "maximum_image_url": null
                }
            },
            "approved": true,
            "titles": [
                {
                    "type": "Default",
                    "title": "Lupin III vs. Meitantei Conan"
                },
                {
                    "type": "Synonym",
                    "title": "Lupin Sansei vs Meitantei Conan"
                },
                {
                    "type": "Japanese",
                    "title": "ルパン三世 vs 名探偵コナン"
                },
                {
                    "type": "English",
                    "title": "Lupin III vs. Detective Conan"
                },
                {
                    "type": "German",
                    "title": "Lupin the 3rd vs. Detektiv Conan special"
                },
                {
                    "type": "Spanish",
                    "title": "Lupin III Vs Detective Conan Especial"
                }
            ],
            "title": "Lupin III vs. Meitantei Conan",
            "title_english": "Lupin III vs. Detective Conan",
            "title_japanese": "ルパン三世 vs 名探偵コナン",
            "title_synonyms": [
                "Lupin Sansei vs Meitantei Conan"
            ],
            "type": "TV Special",
            "source": "Manga",
            "episodes": 1,
            "status": "Finished Airing",
            "airing": false,
            "aired": {
                "from": "2009-03-27T00:00:00+00:00",
                "to": null,
                "prop": {
                    "from": {
                        "day": 27,
                        "month": 3,
                        "year": 2009
                    },
                    "to": {
                        "day": null,
                        "month": null,
                        "year": null
                    }
                },
                "string": "Mar 27, 2009"
            },
            "duration": "1 hr 44 min",
            "rating": "PG-13 - Teens 13 or older",
            "score": 7.76,
            "scored_by": 19608,
            "rank": 1087,
            "popularity": 3785,
            "members": 36874,
            "favorites": 44,
            "synopsis": "In a country called Vesparand, a new mineral with super stealth properties has been discovered which attracts Lupin's attention. At the same time the untimely deaths of Queen Sakura and her son, Prince Gill, leave Princess Mira next in succession to the throne. During a trip to Japan, Princess Mira finds her double in Ran and takes the opportunity to trade places, which ends with Ran being spirited away to Vesparand with Conan, Zenigata, Kogoro Mouri, Lupin and Fujiko in tow. There they meet a waiting Jigen and solve the mystery of the deaths of the Queen and Prince.\n\n(Source: ANN)",
            "background": "",
            "season": null,
            "year": null,
            "broadcast": {
                "day": null,
                "time": null,
                "timezone": null,
                "string": null
            },
            "producers": [
                {
                    "mal_id": 65,
                    "type": "anime",
                    "name": "Tokyo Movie Shinsha",
                    "url": "https://myanimelist.net/anime/producer/65/Tokyo_Movie_Shinsha"
                }
            ],
            "licensors": [
                {
                    "mal_id": 467,
                    "type": "anime",
                    "name": "Discotek Media",
                    "url": "https://myanimelist.net/anime/producer/467/Discotek_Media"
                }
            ],
            "studios": [
                {
                    "mal_id": 73,
                    "type": "anime",
                    "name": "TMS Entertainment",
                    "url": "https://myanimelist.net/anime/producer/73/TMS_Entertainment"
                }
            ],
            "genres": [
                {
                    "mal_id": 1,
                    "type": "anime",
                    "name": "Action",
                    "url": "https://myanimelist.net/anime/genre/1/Action"
                },
                {
                    "mal_id": 2,
                    "type": "anime",
                    "name": "Adventure",
                    "url": "https://myanimelist.net/anime/genre/2/Adventure"
                },
                {
                    "mal_id": 4,
                    "type": "anime",
                    "name": "Comedy",
                    "url": "https://myanimelist.net/anime/genre/4/Comedy"
                },
                {
                    "mal_id": 7,
                    "type": "anime",
                    "name": "Mystery",
                    "url": "https://myanimelist.net/anime/genre/7/Mystery"
                }
            ],
            "explicit_genres": [],
            "themes": [],
            "demographics": [
                {
                    "mal_id": 27,
                    "type": "anime",
                    "name": "Shounen",
                    "url": "https://myanimelist.net/anime/genre/27/Shounen"
                }
            ]
        }
    ], airing: function () {
        return this.data.filter(function (elemant, index) {
            return elemant.airing === true
        })
    }, notAiring: function () {
        return this.data.filter(function (elemant, index) {
            return elemant.airing === false
        })
    }
}

// console.log(myAnime.airing())
// console.log(myAnime.notAiring())



//ตารางฟุตบอล
const footBall = {
    "league": {
        "id": 39,
        "name": "Premier League",
        "country": "England",
        "logo": "https://media.api-sports.io/football/leagues/39.png",
        "flag": "https://media.api-sports.io/flags/gb.svg",
        "season": 2022,
        "standings": [
                {
                    "rank": 1,
                    "team": {
                        "id": 50,
                        "name": "Manchester City",
                        "logo": "https://media.api-sports.io/football/teams/50.png"
                    },
                    "points": 89,
                    "goalsDiff": 61,
                    "group": "Premier League",
                    "form": "LDWWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 28,
                        "draw": 5,
                        "lose": 5,
                        "goals": {
                            "for": 94,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 17,
                        "draw": 1,
                        "lose": 1,
                        "goals": {
                            "for": 60,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 11,
                        "draw": 4,
                        "lose": 4,
                        "goals": {
                            "for": 34,
                            "against": 16
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 2,
                    "team": {
                        "id": 42,
                        "name": "Arsenal",
                        "logo": "https://media.api-sports.io/football/teams/42.png"
                    },
                    "points": 84,
                    "goalsDiff": 45,
                    "group": "Premier League",
                    "form": "WLLWW",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 26,
                        "draw": 6,
                        "lose": 6,
                        "goals": {
                            "for": 88,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 14,
                        "draw": 3,
                        "lose": 2,
                        "goals": {
                            "for": 53,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 12,
                        "draw": 3,
                        "lose": 4,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 3,
                    "team": {
                        "id": 33,
                        "name": "Manchester United",
                        "logo": "https://media.api-sports.io/football/teams/33.png"
                    },
                    "points": 75,
                    "goalsDiff": 15,
                    "group": "Premier League",
                    "form": "WWWWL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 23,
                        "draw": 6,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 43
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 15,
                        "draw": 3,
                        "lose": 1,
                        "goals": {
                            "for": 36,
                            "against": 10
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 3,
                        "lose": 8,
                        "goals": {
                            "for": 22,
                            "against": 33
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 4,
                    "team": {
                        "id": 34,
                        "name": "Newcastle",
                        "logo": "https://media.api-sports.io/football/teams/34.png"
                    },
                    "points": 71,
                    "goalsDiff": 35,
                    "group": "Premier League",
                    "form": "DDWDL",
                    "status": "same",
                    "description": "Promotion - Champions League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 14,
                        "lose": 5,
                        "goals": {
                            "for": 68,
                            "against": 33
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 11,
                        "draw": 6,
                        "lose": 2,
                        "goals": {
                            "for": 36,
                            "against": 14
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 8,
                        "lose": 3,
                        "goals": {
                            "for": 32,
                            "against": 19
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 5,
                    "team": {
                        "id": 40,
                        "name": "Liverpool",
                        "logo": "https://media.api-sports.io/football/teams/40.png"
                    },
                    "points": 67,
                    "goalsDiff": 28,
                    "group": "Premier League",
                    "form": "DDWWW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 19,
                        "draw": 10,
                        "lose": 9,
                        "goals": {
                            "for": 75,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 13,
                        "draw": 5,
                        "lose": 1,
                        "goals": {
                            "for": 46,
                            "against": 17
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 29,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 6,
                    "team": {
                        "id": 51,
                        "name": "Brighton",
                        "logo": "https://media.api-sports.io/football/teams/51.png"
                    },
                    "points": 62,
                    "goalsDiff": 19,
                    "group": "Premier League",
                    "form": "LDWLW",
                    "status": "same",
                    "description": "Promotion - Europa League (Group Stage: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 8,
                        "lose": 12,
                        "goals": {
                            "for": 72,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 4,
                        "lose": 5,
                        "goals": {
                            "for": 37,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 35,
                            "against": 32
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 7,
                    "team": {
                        "id": 66,
                        "name": "Aston Villa",
                        "logo": "https://media.api-sports.io/football/teams/66.png"
                    },
                    "points": 61,
                    "goalsDiff": 5,
                    "group": "Premier League",
                    "form": "WDWLL",
                    "status": "same",
                    "description": "Promotion - Europa Conference League (Qualification: )",
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 7,
                        "lose": 13,
                        "goals": {
                            "for": 51,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 2,
                        "lose": 5,
                        "goals": {
                            "for": 33,
                            "against": 21
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 25
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 8,
                    "team": {
                        "id": 47,
                        "name": "Tottenham",
                        "logo": "https://media.api-sports.io/football/teams/47.png"
                    },
                    "points": 60,
                    "goalsDiff": 7,
                    "group": "Premier League",
                    "form": "WLLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 18,
                        "draw": 6,
                        "lose": 14,
                        "goals": {
                            "for": 70,
                            "against": 63
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 12,
                        "draw": 1,
                        "lose": 6,
                        "goals": {
                            "for": 37,
                            "against": 25
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 6,
                        "draw": 5,
                        "lose": 8,
                        "goals": {
                            "for": 33,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 9,
                    "team": {
                        "id": 55,
                        "name": "Brentford",
                        "logo": "https://media.api-sports.io/football/teams/55.png"
                    },
                    "points": 59,
                    "goalsDiff": 12,
                    "group": "Premier League",
                    "form": "WWWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 14,
                        "lose": 9,
                        "goals": {
                            "for": 58,
                            "against": 46
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 10,
                        "draw": 7,
                        "lose": 2,
                        "goals": {
                            "for": 35,
                            "against": 18
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 23,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 10,
                    "team": {
                        "id": 36,
                        "name": "Fulham",
                        "logo": "https://media.api-sports.io/football/teams/36.png"
                    },
                    "points": 52,
                    "goalsDiff": 2,
                    "group": "Premier League",
                    "form": "LDWWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 15,
                        "draw": 7,
                        "lose": 16,
                        "goals": {
                            "for": 55,
                            "against": 53
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 5,
                        "lose": 6,
                        "goals": {
                            "for": 31,
                            "against": 29
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 7,
                        "draw": 2,
                        "lose": 10,
                        "goals": {
                            "for": 24,
                            "against": 24
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 11,
                    "team": {
                        "id": 52,
                        "name": "Crystal Palace",
                        "logo": "https://media.api-sports.io/football/teams/52.png"
                    },
                    "points": 45,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DDWLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 12,
                        "lose": 15,
                        "goals": {
                            "for": 40,
                            "against": 49
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 7,
                        "draw": 7,
                        "lose": 5,
                        "goals": {
                            "for": 21,
                            "against": 23
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 5,
                        "lose": 10,
                        "goals": {
                            "for": 19,
                            "against": 26
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 12,
                    "team": {
                        "id": 49,
                        "name": "Chelsea",
                        "logo": "https://media.api-sports.io/football/teams/49.png"
                    },
                    "points": 44,
                    "goalsDiff": -9,
                    "group": "Premier League",
                    "form": "DLLDW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 11,
                        "lose": 16,
                        "goals": {
                            "for": 38,
                            "against": 47
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 7,
                        "lose": 6,
                        "goals": {
                            "for": 20,
                            "against": 19
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 18,
                            "against": 28
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 13,
                    "team": {
                        "id": 39,
                        "name": "Wolves",
                        "logo": "https://media.api-sports.io/football/teams/39.png"
                    },
                    "points": 41,
                    "goalsDiff": -27,
                    "group": "Premier League",
                    "form": "LDLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 8,
                        "lose": 19,
                        "goals": {
                            "for": 31,
                            "against": 58
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 9,
                        "draw": 3,
                        "lose": 7,
                        "goals": {
                            "for": 19,
                            "against": 20
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 12,
                            "against": 38
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 14,
                    "team": {
                        "id": 48,
                        "name": "West Ham",
                        "logo": "https://media.api-sports.io/football/teams/48.png"
                    },
                    "points": 40,
                    "goalsDiff": -13,
                    "group": "Premier League",
                    "form": "LWLWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 7,
                        "lose": 20,
                        "goals": {
                            "for": 42,
                            "against": 55
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 4,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 3,
                        "draw": 3,
                        "lose": 13,
                        "goals": {
                            "for": 16,
                            "against": 31
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 15,
                    "team": {
                        "id": 35,
                        "name": "Bournemouth",
                        "logo": "https://media.api-sports.io/football/teams/35.png"
                    },
                    "points": 39,
                    "goalsDiff": -34,
                    "group": "Premier League",
                    "form": "LLLLW",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 11,
                        "draw": 6,
                        "lose": 21,
                        "goals": {
                            "for": 37,
                            "against": 71
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 4,
                        "lose": 9,
                        "goals": {
                            "for": 20,
                            "against": 28
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 5,
                        "draw": 2,
                        "lose": 12,
                        "goals": {
                            "for": 17,
                            "against": 43
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 16,
                    "team": {
                        "id": 65,
                        "name": "Nottingham Forest",
                        "logo": "https://media.api-sports.io/football/teams/65.png"
                    },
                    "points": 38,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "DWDWL",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 11,
                        "lose": 18,
                        "goals": {
                            "for": 38,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 8,
                        "draw": 6,
                        "lose": 5,
                        "goals": {
                            "for": 27,
                            "against": 24
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 1,
                        "draw": 5,
                        "lose": 13,
                        "goals": {
                            "for": 11,
                            "against": 44
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 17,
                    "team": {
                        "id": 45,
                        "name": "Everton",
                        "logo": "https://media.api-sports.io/football/teams/45.png"
                    },
                    "points": 36,
                    "goalsDiff": -23,
                    "group": "Premier League",
                    "form": "WDLWD",
                    "status": "same",
                    "description": null,
                    "all": {
                        "played": 38,
                        "win": 8,
                        "draw": 12,
                        "lose": 18,
                        "goals": {
                            "for": 34,
                            "against": 57
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 6,
                        "draw": 3,
                        "lose": 10,
                        "goals": {
                            "for": 16,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 9,
                        "lose": 8,
                        "goals": {
                            "for": 18,
                            "against": 30
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 18,
                    "team": {
                        "id": 46,
                        "name": "Leicester",
                        "logo": "https://media.api-sports.io/football/teams/46.png"
                    },
                    "points": 34,
                    "goalsDiff": -17,
                    "group": "Premier League",
                    "form": "WDLLD",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 9,
                        "draw": 7,
                        "lose": 22,
                        "goals": {
                            "for": 51,
                            "against": 68
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 4,
                        "lose": 10,
                        "goals": {
                            "for": 23,
                            "against": 27
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 3,
                        "lose": 12,
                        "goals": {
                            "for": 28,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 19,
                    "team": {
                        "id": 63,
                        "name": "Leeds",
                        "logo": "https://media.api-sports.io/football/teams/63.png"
                    },
                    "points": 31,
                    "goalsDiff": -30,
                    "group": "Premier League",
                    "form": "LLDLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 7,
                        "draw": 10,
                        "lose": 21,
                        "goals": {
                            "for": 48,
                            "against": 78
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 5,
                        "draw": 7,
                        "lose": 7,
                        "goals": {
                            "for": 26,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 2,
                        "draw": 3,
                        "lose": 14,
                        "goals": {
                            "for": 22,
                            "against": 41
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                },
                {
                    "rank": 20,
                    "team": {
                        "id": 41,
                        "name": "Southampton",
                        "logo": "https://media.api-sports.io/football/teams/41.png"
                    },
                    "points": 25,
                    "goalsDiff": -37,
                    "group": "Premier League",
                    "form": "DLLLL",
                    "status": "same",
                    "description": "Relegation - Championship",
                    "all": {
                        "played": 38,
                        "win": 6,
                        "draw": 7,
                        "lose": 25,
                        "goals": {
                            "for": 36,
                            "against": 73
                        }
                    },
                    "home": {
                        "played": 19,
                        "win": 2,
                        "draw": 5,
                        "lose": 12,
                        "goals": {
                            "for": 19,
                            "against": 37
                        }
                    },
                    "away": {
                        "played": 19,
                        "win": 4,
                        "draw": 2,
                        "lose": 13,
                        "goals": {
                            "for": 17,
                            "against": 36
                        }
                    },
                    "update": "2023-05-28T00:00:00+00:00"
                }
            ]
            
        
    }, champion: function() {
        return this.league.standings.filter(function(elemant, index){
            return elemant.rank === 1
        })
    }, top: function() {
        return this.league.standings.filter(function(elemant, index){
            return elemant.rank < 5
        })
    }, drop: function() {
        return this.league.standings.filter(function(elemant, index){
            return elemant.rank >= 18 && elemant.rank <= 20
        })
    }
}

console.log(footBall.champion())
console.log(footBall.top())
console.log(footBall.drop())