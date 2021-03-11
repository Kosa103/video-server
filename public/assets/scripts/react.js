// ---------------------------------------------------------------------------------------------------------------------
//                                             APP COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


function App() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    return (
        <>
            {
                isLoggedIn ? 
                <AppAuth /> : 
                <Login loginSuccess={() => setIsLoggedIn(true)}/>
            }       
        </>
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             LOGIN COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


function Login({ loginSuccess }) {
    const loginName = React.useRef(null);
    const loginPassword = React.useRef(null);

    async function attemptLogin() {
        const url = "http://borzalom.ddns.net:801/api/login";
        const body = {
            name: loginName.current.value,
            password: loginPassword.current.value
        };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }

        let responseStatus = 0;

        await fetch(url, options)
        .then(res => {
            responseStatus = res.status;
            return res.json();
        })
        .catch(err => console.log(err));

        if (responseStatus >= 200 && responseStatus < 300) {
            console.log("Login successful");
            loginSuccess();
        } else {
            console.log("Login failed");
        }
    }

    console.log("rendering...");

    return (
        <div className="login-container">
            <h3 className="input-label">Name:</h3>
            <input type="text" className="input-field" ref={loginName}></input>
            <h3 className="input-label">Password:</h3>
            <input type="password" className="input-field" ref={loginPassword}></input>
            <button className="button-login" onClick={() => attemptLogin()}>Login</button>
        </div>
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             APP AUTH COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


// Naming guide:
// key: referenced in code
// name: referenced in file system pathing
// title: shown to user
function AppAuth() {
    const series = {
        "desperate-housewives": {
            name: "desperatehouseviwes",
            title: "Született Feleségek",
            length: 8,
            seasons: {
                1: {
                    number: "1",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "Végzetes csütörtök" },
                        2: { number: "2", title: "Ó, de lent a mélyben!" },
                        3: { number: "3", title: "Szép kis látvány!" },
                        4: { number: "4", title: "Ki ez a nő?" },
                        5: { number: "5", title: "Jöjj be, idegen!" },
                        6: { number: "6", title: "Egy helyben toporogva" },
                        7: { number: "7", title: "Bármi megeshet!" },
                        8: { number: "8", title: "Bűnös" },
                        9: { number: "9", title: "Gyanakvó elmék" },
                        10: { number: "10", title: "Jöjj vissza hozzám!" },
                        11: { number: "11", title: "Lépj tovább!" },
                        12: { number: "12", title: "Halj meg egy kicsit minden nap!" },
                        13: { number: "13", title: "A te hibád!" },
                        14: { number: "14", title: "A szerelem a levegőben van" },
                        15: { number: "15", title: "Lehetetlen" },
                        16: { number: "16", title: "Hölgyek fehér asztal mellett" },
                        17: { number: "17", title: "Nem szólnak majd a harsonák" },
                        18: { number: "18", title: "Szófogadó gyerekek" },
                        19: { number: "19", title: "Élvezd a magányt!" },
                        20: { number: "20", title: "Ne félj!" },
                        21: { number: "21", title: "Vasárnap a parkban George-dzsal" },
                        22: { number: "22", title: "Ég veled!" },
                        23: { number: "23", title: "Egy szép napon…" }
                    },
                },
                2: {
                    number: "2",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Legközelebb" },
                        2: { number: "2", title: "Az őrületbe kergetsz!" },
                        3: { number: "3", title: "Sose szabadulsz tőlem!" },
                        4: { number: "4", title: "Az én szívem apuciért dobog" },
                        5: { number: "5", title: "Miért is hittem benned?!" },
                        6: { number: "6", title: "Bárcsak feledni tudnálak!" },
                        7: { number: "7", title: "Színek és fény, avagy ez csak egy rossz álom lehet!" },
                        8: { number: "8", title: "Veszteségek" },
                        9: { number: "9", title: "A jó, a rossz és a többiek" },
                        10: { number: "10", title: "Hazatérés" },
                        11: { number: "11", title: "Egy csók és más semmi" },
                        12: { number: "12", title: "Nem lesz semmi baj!" },
                        13: { number: "13", title: "A hadviselés művészete" },
                        14: { number: "14", title: "Ostoba ötletek" },
                        15: { number: "15", title: "Egy apró szívesség" },
                        16: { number: "16", title: "A helyes út" },
                        17: { number: "17", title: "Elválások" },
                        18: { number: "18", title: "Kísértések" },
                        19: { number: "19", title: "Ne nézz rám!" },
                        20: { number: "20", title: "Fohászok, fogadkozások" },
                        21: { number: "21", title: "Bosszú" },
                        22: { number: "22", title: "Nem vagy egyedül" },
                        23: { number: "23", title: "Emlékezz! - 1. rész" },
                        24: { number: "24", title: "Emlékezz! - 2. rész" }
                    },
                },
                3: {
                    number: "3",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "Eső kopog a tetőn" },
                        2: { number: "2", title: "Kettőn áll a vásár" },
                        3: { number: "3", title: "Egy hétvége vidéken" },
                        4: { number: "4", title: "Magántörténelem" },
                        5: { number: "5", title: "Gáncsoskodók" },
                        6: { number: "6", title: "Én igen nagy vétkem" },
                        7: { number: "7", title: "Bumm!" },
                        8: { number: "8", title: "Segítő kezek" },
                        9: { number: "9", title: "Királylányok és hercegek" },
                        10: { number: "10", title: "Varázsének" },
                        11: { number: "11", title: "Se had, se harc, se háború" },
                        12: { number: "12", title: "Csak a testemen keresztül" },
                        13: { number: "13", title: "Hátsó szándékok" },
                        14: { number: "14", title: "Emlékképek" },
                        15: { number: "15", title: "Az utolsó pillanatban" },
                        16: { number: "16", title: "A férjem, a disznó" },
                        17: { number: "17", title: "Ruha teszi az embert!" },
                        18: { number: "18", title: "Viszonyok" },
                        19: { number: "19", title: "Áramszünet" },
                        20: { number: "20", title: "Pletyka" },
                        21: { number: "21", title: "Fától az erdőt" },
                        22: { number: "22", title: "A nagy kérdés" },
                        23: { number: "23", title: "Ásó, kapa, nagyharang" }
                    },
                },
                4: {
                    number: "4",
                    length: 17,
                    episodes: {
                        1: { number: "1", title: "Most már tudod!" },
                        2: { number: "2", title: "Pite-csata" },
                        3: { number: "3", title: "Most mutasd meg!" },
                        4: { number: "4", title: "Kártevők" },
                        5: { number: "5", title: "Mű és ítészek" },
                        6: { number: "6", title: "Félelmek" },
                        7: { number: "7", title: "Ne ítélj külsőre!" },
                        8: { number: "8", title: "Távoli múlt" },
                        9: { number: "9", title: "Valami közeleg" },
                        10: { number: "10", title: "Késő bánat!" },
                        11: { number: "11", title: "Az Úr napja" },
                        12: { number: "12", title: "A barátok szemében" },
                        13: { number: "13", title: "Helló, kislány!" },
                        14: { number: "14", title: "Nyíló ajtók" },
                        15: { number: "15", title: "Majd a mama megmondja!" },
                        16: { number: "16", title: "Nomen est Omen" },
                        17: { number: "17", title: "Szabadon" }
                    },
                },
                5: {
                    number: "5",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Röpül az idő…" },
                        2: { number: "2", title: "Jó szomszédság" },
                        3: { number: "3", title: "Zsarnokok" },
                        4: { number: "4", title: "Újra a pályán" },
                        5: { number: "5", title: "Tükröm, tükröm" },
                        6: { number: "6", title: "Keresd a nőt!" },
                        7: { number: "7", title: "Mi vajon a szíved vágya?" },
                        8: { number: "8", title: "Ég a város" },
                        9: { number: "9", title: "Hamu és vér" },
                        10: { number: "10", title: "Látomások" },
                        11: { number: "11", title: "Otthon, édes otthon" },
                        12: { number: "12", title: "Újra együtt" },
                        13: { number: "13", title: "Egy ügyes kezű ezermester" },
                        14: { number: "14", title: "A pénz beszél" },
                        15: { number: "15", title: "Hadd menjen a munka!" },
                        16: { number: "16", title: "Nem a mosoly teszi a barátot!" },
                        17: { number: "17", title: "Kémek és kerítők" },
                        18: { number: "18", title: "Fény az éjszakában" },
                        19: { number: "19", title: "Búcsú" },
                        20: { number: "20", title: "Mindenki rejteget valamit" },
                        21: { number: "21", title: "Alkuk" },
                        22: { number: "22", title: "Végy egy kicsit feleségül!" },
                        23: { number: "23", title: "Bűnök és büntetések" },
                        24: { number: "24", title: "Képzelődsz…" }
                    },
                },
                6: {
                    number: "6",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "Vétkes kertváros" },
                        2: { number: "2", title: "Túlélés" },
                        3: { number: "3", title: "Ki a legszebb e vidéken?" },
                        4: { number: "4", title: "Mondd, miért szeretsz te mást?" },
                        5: { number: "5", title: "Ne ítélj, hogy ne ítéltess!" },
                        6: { number: "6", title: "Fűre lépni tilos!" },
                        7: { number: "7", title: "Bölcsességek könyve" },
                        8: { number: "8", title: "Egy csésze kávé" },
                        9: { number: "9", title: "Önvédelem" },
                        10: { number: "10", title: "Kő-kövön" },
                        11: { number: "11", title: "Mi lett volna, ha..." },
                        12: { number: "12", title: "A látszat csal" },
                        13: { number: "13", title: "Terápiás hatás" },
                        14: { number: "14", title: "Színház az egész világ" },
                        15: { number: "15", title: "Szemrevaló" },
                        16: { number: "16", title: "Hajtóvadászat" },
                        17: { number: "17", title: "Aki bújt, aki nem..." },
                        18: { number: "18", title: "Ki nyer ma?" },
                        19: { number: "19", title: "Eltűntek" },
                        20: { number: "20", title: "Született szörnyeteg" },
                        21: { number: "21", title: "Kis éji zene" },
                        22: { number: "22", title: "Zsaruballada" },
                        23: { number: "23", title: "Isten hozzád!" }
                    },
                },
                7: {
                    number: "7",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "Emlékeztek Paulra?" },
                        2: { number: "2", title: "Bemutatom a feleségem!" },
                        3: { number: "3", title: "Teljes elégedettség" },
                        4: { number: "4", title: "Csak a belbecs számít" },
                        5: { number: "5", title: "Veszélyes vállalkozások" },
                        6: { number: "6", title: "Félelem és reszketés Széplakon" },
                        7: { number: "7", title: "Egy megalázó ügy" },
                        8: { number: "8", title: "Hálás szívvel" },
                        9: { number: "9", title: "Kellemes Kiskirályság" },
                        10: { number: "10", title: "Zavargás a Lila akác közben" },
                        11: { number: "11", title: "Merénylők" },
                        12: { number: "12", title: "Hová tartozom?" },
                        13: { number: "13", title: "Még mindig itt vagyok!" },
                        14: { number: "14", title: "Pillantás a múltba" },
                        15: { number: "15", title: "Búcsúlevél" },
                        16: { number: "16", title: "Az élet értelme" },
                        17: { number: "17", title: "Minden különbözik, semmi sem változik!" },
                        18: { number: "18", title: "Nincs bocsánat!" },
                        19: { number: "19", title: "Rosszul leplezett hazugságok" },
                        20: { number: "20", title: "Mérget rá!" },
                        21: { number: "21", title: "Mindennapi rettegések" },
                        22: { number: "22", title: "Biztos, ami biztos" },
                        23: { number: "23", title: "Vacsorára fel!" }
                    },
                },
                8: {
                    number: "8",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "A titkok, melyekről jobb nem tudni..." },
                        2: { number: "2", title: "Kapcsolatfelvétel" },
                        3: { number: "3", title: "Légy óvatos!" },
                        4: { number: "4", title: "Az élet iskolája" },
                        5: { number: "5", title: "Mesterművészet" },
                        6: { number: "6", title: "Üldözési mánia" },
                        7: { number: "7", title: "A helyzet ura" },
                        8: { number: "8", title: "A gyanú árnyéka" },
                        9: { number: "9", title: "Kirakós játék" },
                        10: { number: "10", title: "Nem mondhatom el senkinek!" },
                        11: { number: "11", title: "Megmondóemberek" },
                        12: { number: "12", title: "Mire jó jónak lenni?" },
                        13: { number: "13", title: "Ezt nevezed szerelemnek?" },
                        14: { number: "14", title: "Tűnj el az életemből!" },
                        15: { number: "15", title: "Szükség van rá!" },
                        16: { number: "16", title: "Az élet ajándék" },
                        17: { number: "17", title: "Asszonyok és a halál" },
                        18: { number: "18", title: "Bármelyik pillanatban" },
                        19: { number: "19", title: "Ember tervez" },
                        20: { number: "20", title: "Hatalmi kérdés" },
                        21: { number: "21", title: "Nyitott fülek" },
                        22: { number: "22", title: "Engem hibáztass!" },
                        23: { number: "23", title: "Veszem a kalapomat..." }
                    },
                },
            }
        },
        friends: {
            name: "FRIENDS",
            title: "Jóbarátok",
            length: 10,
            seasons: {
                1: {
                    number: "1",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Randi vagy nem randi, ez itt a kérdés" },
                        2: { number: "2", title: "Ultrahang" },
                        3: { number: "3", title: "A hüvelykujj" },
                        4: { number: "4", title: "Hoki, avagy más pizzája" },
                        5: { number: "5", title: "Új német mosópor" },
                        6: { number: "6", title: "Fenekes karrier" },
                        7: { number: "7", title: "Áramszünet" },
                        8: { number: "8", title: "Nana kétszer hal meg" },
                        9: { number: "9", title: "Hálaadás ünnepe" },
                        10: { number: "10", title: "Szilveszter" },
                        11: { number: "11", title: "Szívtipró kómában" },
                        12: { number: "12", title: "A masszázs története" },
                        13: { number: "13", title: "Aki kíváncsi, mást fog látni" },
                        14: { number: "14", title: "A szerelmesek napja" },
                        15: { number: "15", title: "A tragikus karrierista" },
                        16: { number: "16", title: "Ursula, az ikertestvér" },
                        17: { number: "17", title: "A vészhelyzetes dokik kora" },
                        18: { number: "18", title: "Póker, a férfias játék" },
                        19: { number: "19", title: "Itt a majom, hol a majom" },
                        20: { number: "20", title: "A szemét szájsebész" },
                        21: { number: "21", title: "A felnőtt majom átka" },
                        22: { number: "22", title: "Az álmok mindent megkevernek" },
                        23: { number: "23", title: "Szülőszoba blues" },
                        24: { number: "24", title: "A szerelem elágazó ösvényei" },
                    },
                },
                2: {
                    number: "2",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "A kínai szuvenír" },
                        2: { number: "2", title: "Az anyatej íze" },
                        3: { number: "3", title: "Hecklesnek annyi" },
                        4: { number: "4", title: "Phoebe férje" },
                        5: { number: "5", title: "Öt szelet hús és egy padlizsán" },
                        6: { number: "6", title: "Bébi a buszon" },
                        7: { number: "7", title: "Ross rájön" },
                        8: { number: "8", title: "A lista" },
                        9: { number: "9", title: "Phoebe papája" },
                        10: { number: "10", title: "Russ felbukkan" },
                        11: { number: "11", title: "A leszbikus esküvő" },
                        12: { number: "12", title: "A szuperkupa után, 1. rész" },
                        13: { number: "13", title: "A szuperkupa után, 2. rész" },
                        14: { number: "14", title: "A családi videó" },
                        15: { number: "15", title: "Ross és Rachel… tudjátok" },
                        16: { number: "16", title: "Joey elköltözik" },
                        17: { number: "17", title: "Eddie beköltözik" },
                        18: { number: "18", title: "Dr. Ramoray halála" },
                        19: { number: "19", title: "Eddie nem ért a szóból" },
                        20: { number: "20", title: "Phoebe és a filmek" },
                        21: { number: "21", title: "Az izomagyú pasik" },
                        22: { number: "22", title: "Dupla parti" },
                        23: { number: "23", title: "A bárányhimlő" },
                        24: { number: "24", title: "Barry és Mindy esküvője" },
                    },
                },
                3: {
                    number: "3",
                    length: 25,
                    episodes: {
                        1: { number: "1", title: "A Leia Hercegnő fantázia" },
                        2: { number: "2", title: "Senki sincs készen" },
                        3: { number: "3", title: "A lekvár" },
                        4: { number: "4", title: "A metaforikus csatorna" },
                        5: { number: "5", title: "Phoebe öccse" },
                        6: { number: "6", title: "Régen volt" },
                        7: { number: "7", title: "A Forma 1-es ágy" },
                        8: { number: "8", title: "A Bökőszerszám" },
                        9: { number: "9", title: "Az Amerikai Futball" },
                        10: { number: "10", title: "Rachel felmond" },
                        11: { number: "11", title: "Chandlernek fogalma sincs" },
                        12: { number: "12", title: "A féltékenység" },
                        13: { number: "13", title: "Monica és Richard csak barátok" },
                        14: { number: "14", title: "Phoebe régi társa" },
                        15: { number: "15", title: "Ross és Rachel szakít" },
                        16: { number: "16", title: "Másnap reggel" },
                        17: { number: "17", title: "A sítúra" },
                        18: { number: "18", title: "A hipnózis kazetta" },
                        19: { number: "19", title: "A kinőtt póló" },
                        20: { number: "20", title: "A babaház" },
                        21: { number: "21", title: "A csibe és a kacsa" },
                        22: { number: "22", title: "Az ordítozós" },
                        23: { number: "23", title: "Ross izéje" },
                        24: { number: "24", title: "Az utcai harcos bajnok" },
                        25: { number: "25", title: "A tengerparton"}
                    },
                },
                4: {
                    number: "4",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "A medúza" },
                        2: { number: "2", title: "A macska" },
                        3: { number: "3", title: "A bilincs" },
                        4: { number: "4", title: "A táncóra" },
                        5: { number: "5", title: "Joey új barátnője" },
                        6: { number: "6", title: "A rendetlen lány" },
                        7: { number: "7", title: "Chandler átlépi a határvonalat" },
                        8: { number: "8", title: "Chandler a ládában" },
                        9: { number: "9", title: "Mindenkinek nehéz" },
                        10: { number: "10", title: "Egy lány Poughkeepsie-ből" },
                        11: { number: "11", title: "Phoebe méhe" },
                        12: { number: "12", title: "Az embriók" },
                        13: { number: "13", title: "Rachel bezsong" },
                        14: { number: "14", title: "Joey horgászik" },
                        15: { number: "15", title: "A rögbimeccs" },
                        16: { number: "16", title: "Az álparti" },
                        17: { number: "17", title: "Az ingyen pornó" },
                        18: { number: "18", title: "Rachel új ruhája" },
                        19: { number: "19", title: "Kapkodás" },
                        20: { number: "20", title: "Az esküvői ruhák" },
                        21: { number: "21", title: "A meghívó" },
                        22: { number: "22", title: "A világ legrosszabb esküvői tanúja" },
                        23: { number: "23", title: "Ross esküvője, 1. rész" },
                        24: { number: "24", title: "Ross esküvője, 2. rész" }
                    },
                },
                5: {
                    number: "5",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Miután Ross azt mondta, hogy Rachel" },
                        2: { number: "2", title: "A csókolozás" },
                        3: { number: "3", title: "A századik rész" },
                        4: { number: "4", title: "Phoebe gyűlöli a telefonos pénzgyűjtő műsorokat" },
                        5: { number: "5", title: "A dilemma" },
                        6: { number: "6", title: "A jeti" },
                        7: { number: "7", title: "Ross beköltözik" },
                        8: { number: "8", title: "A legrosszabb hálaadás" },
                        9: { number: "9", title: "Ross szendvicse" },
                        10: { number: "10", title: "A nemkívánatos húg" },
                        11: { number: "11", title: "Újévi fogadalmak" },
                        12: { number: "12", title: "Chandler munkahelyi nevetése" },
                        13: { number: "13", title: "Joey táskája" },
                        14: { number: "14", title: "Mindenki rájön" },
                        15: { number: "15", title: "A verekedős lány" },
                        16: { number: "16", title: "A zsaru" },
                        17: { number: "17", title: "Rachel véletlen puszija" },
                        18: { number: "18", title: "Rachel cigizik" },
                        19: { number: "19", title: "Ross nem tud flörtölni" },
                        20: { number: "20", title: "A járőrözés" },
                        21: { number: "21", title: "A labda" },
                        22: { number: "22", title: "Joey nagy kiugrása" },
                        23: { number: "23", title: "Las Vegasban, 1. rész" },
                        24: { number: "24", title: "Las Vegasban, 2. rész" }
                    },
                },
                6: {
                    number: "6",
                    length: 25,
                    episodes: {
                        1: { number: "1", title: "Vegas után" },
                        2: { number: "2", title: "Ross megöleli Rachelt" },
                        3: { number: "3", title: "Ross nem intézkedik" },
                        4: { number: "4", title: "Joey elveszti a biztosítását" },
                        5: { number: "5", title: "Joey Porsche-ja" },
                        6: { number: "6", title: "Az utolsó este" },
                        7: { number: "7", title: "Phoebe fut" },
                        8: { number: "8", title: "Ross foga" },
                        9: { number: "9", title: "Ross beszívása" },
                        10: { number: "10", title: "A kötelező gyakorlat" },
                        11: { number: "11", title: "A patikus asztalka" },
                        12: { number: "12", title: "A vicc" },
                        13: { number: "13", title: "Rachel húga" },
                        14: { number: "14", title: "Chandler nem tud sírni" },
                        15: { number: "15", title: "Mi lett volna, ha, 1. rész" },
                        16: { number: "16", title: "Mi lett volna, ha, 2. rész" },
                        17: { number: "17", title: "Unagi" },
                        18: { number: "18", title: "Ross egy diáklánnyal randizik" },
                        19: { number: "19", title: "Joey hűtője" },
                        20: { number: "20", title: "Mac & C.H.E.E.S.E." },
                        21: { number: "21", title: "Ross megismerkedik Elizabeth apjával" },
                        22: { number: "22", title: "Paul, a férfi" },
                        23: { number: "23", title: "A gyűrű" },
                        24: { number: "24", title: "A lánykérés, 1. rész" },
                        25: { number: "25", title: "A lánykérés, 2. rész"}
                    },
                },
                7: {
                    number: "7",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Monica nagy napja" },
                        2: { number: "2", title: "Rachel könyve" },
                        3: { number: "3", title: "Phoebe sütije" },
                        4: { number: "4", title: "Rachel asszisztense" },
                        5: { number: "5", title: "Az eljegyzési fénykép" },
                        6: { number: "6", title: "A hálótársak" },
                        7: { number: "7", title: "Ross könyvtári könyve" },
                        8: { number: "8", title: "Chandler nem szereti a kutyákat" },
                        9: { number: "9", title: "A karácsonyi bon-bon" },
                        10: { number: "10", title: "A karácsonyi tatu" },
                        11: { number: "11", title: "A túrótorta" },
                        12: { number: "12", title: "Az ébren töltött éjszaka" },
                        13: { number: "13", title: "Rosita kimúlik" },
                        14: { number: "14", title: "Betöltöttük a harmincat" },
                        15: { number: "15", title: "Joey új agya" },
                        16: { number: "16", title: "Ez történt Londonban" },
                        17: { number: "17", title: "Az olcsó menyasszonyi ruha" },
                        18: { number: "18", title: "Joey díja" },
                        19: { number: "19", title: "Ross és Monica unokatestvére" },
                        20: { number: "20", title: "Rachel nagy csókja" },
                        21: { number: "21", title: "A beszédek" },
                        22: { number: "22", title: "Chandler apja" },
                        23: { number: "23", title: "Monica és Chandler esküvője, 1. rész" },
                        24: { number: "24", title: "Monica és Chandler esküvője, 2. rész" }
                    },
                },
                8: {
                    number: "8",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Az igen után" },
                        2: { number: "2", title: "A piros pulcsi" },
                        3: { number: "3", title: "Rachel megmondja" },
                        4: { number: "4", title: "A videószalag" },
                        5: { number: "5", title: "Rachel randija" },
                        6: { number: "6", title: "A Halloween Parti" },
                        7: { number: "7", title: "A folt" },
                        8: { number: "8", title: "A sztriptíztáncosnő" },
                        9: { number: "9", title: "A pletyka" },
                        10: { number: "10", title: "Monica csizmája" },
                        11: { number: "11", title: "Ross nagy lépése" },
                        12: { number: "12", title: "Joey és Rachel randizik" },
                        13: { number: "13", title: "Chandler fürdőt vesz" },
                        14: { number: "14", title: "A titkok szekrénye" },
                        15: { number: "15", title: "A szülős videó" },
                        16: { number: "16", title: "Monica lelki társa" },
                        17: { number: "17", title: "A teafű" },
                        18: { number: "18", title: "Massapequa" },
                        19: { number: "19", title: "Joey interjúja" },
                        20: { number: "20", title: "A babaköszöntő" },
                        21: { number: "21", title: "A főzőtanfolyam" },
                        22: { number: "22", title: "Nem jön a baba" },
                        23: { number: "23", title: "Rachel gyereket szül, 1. rész" },
                        24: { number: "24", title: "Rachel gyereket szül, 2. rész" }
                    },
                },
                9: {
                    number: "9",
                    length: 23,
                    episodes: {
                        1: { number: "1", title: "Az el-nem-jegyzés" },
                        2: { number: "2", title: "Emma bömböl" },
                        3: { number: "3", title: "A gyerekorvos" },
                        4: { number: "4", title: "Cápák" },
                        5: { number: "5", title: "Phoebe születésnapi vacsorája" },
                        6: { number: "6", title: "A dajkabácsi" },
                        7: { number: "7", title: "Ross malac dala" },
                        8: { number: "8", title: "Rachel húga" },
                        9: { number: "9", title: "Rachel telefonszáma" },
                        10: { number: "10", title: "Karácsony Tulsa-ban" },
                        11: { number: "11", title: "Rachel újfent munkába áll" },
                        12: { number: "12", title: "Phoebe patkánykái" },
                        13: { number: "13", title: "Monica énekel" },
                        14: { number: "14", title: "A vakrandi" },
                        15: { number: "15", title: "Az útonálló" },
                        16: { number: "16", title: "Műmell" },
                        17: { number: "17", title: "Ross halotti tora" },
                        18: { number: "18", title: "Lottóőrület" },
                        19: { number: "19", title: "Rachel álma" },
                        20: { number: "20", title: "A szappanopera buli" },
                        21: { number: "21", title: "Meddőségi vizsgálat" },
                        22: { number: "22", title: "A donor" },
                        23: { number: "23-24", title: "Barbados" }
                    },
                },
                10: {
                    number: "10",
                    length: 17,
                    episodes: {
                        1: { number: "1", title: "Joey és Rachel csókja után" },
                        2: { number: "2", title: "Ross tök jól van" },
                        3: { number: "3", title: "Ross lebarnul" },
                        4: { number: "4", title: "A torta" },
                        5: { number: "5", title: "Amy, a bébiszitter" },
                        6: { number: "6", title: "Ross ösztöndíja" },
                        7: { number: "7", title: "A családlátogatás" },
                        8: { number: "8", title: "Elkésett hálaadás" },
                        9: { number: "9", title: "A vér szerinti anya" },
                        10: { number: "10", title: "Chandler lebukik" },
                        11: { number: "11", title: "A bömbölő sztriptíztáncos" },
                        12: { number: "12", title: "Phoebe esküvője" },
                        13: { number: "13", title: "Joey franciául tanul" },
                        14: { number: "14", title: "Consuela hercegnő" },
                        15: { number: "15", title: "Estelle meghal" },
                        16: { number: "16", title: "Rachel búcsúbulija" },
                        17: { number: "17-18", title: "Az utolsó" }
                    },
                }
            }
        },
        joey: {
            name: "JOEY",
            title: "Joey",
            length: 2,
            seasons: {
                1: {
                    number: "1",
                    length: 24,
                    episodes: {
                        1: { number: "1", title: "Joey és a bevezető Epizód" },
                        2: { number: "2", title: "Joey és a tanítványa" },
                        3: { number: "3", title: "Joey bulija" },
                        4: { number: "4", title: "Joey és a könyvklub" },
                        5: { number: "5", title: "Joey - összecsapnak a hullámok" },
                        6: { number: "6", title: "Joey és a nemezis" },
                        7: { number: "7", title: "Joey és a férj" },
                        8: { number: "8", title: "Joey és álmai asszonya, 1. rész" },
                        9: { number: "9", title: "Joey és álmai asszonya, 2. rész " },
                        10: { number: "10", title: "Joey és a nagy meghallgatás" },
                        11: { number: "11", title: "Joey és a nagy utazás" },
                        12: { number: "12", title: "Joey és a fordulat" },
                        13: { number: "13", title: "Joey és az ízteszt" },
                        14: { number: "14", title: "Joey és a premier" },
                        15: { number: "15", title: "Joey és az asszisztens" },
                        16: { number: "16", title: "Joey és a Tonight Show" },
                        17: { number: "17", title: "Joey és a valentin-napi randi" },
                        18: { number: "18", title: "Joey és a díjkiosztó" },
                        19: { number: "19", title: "Joey és a puccos húg" },
                        20: { number: "20", title: "Joey és a szomszéd lány" },
                        21: { number: "21", title: "Joey és a kémkedés" },
                        22: { number: "22", title: "Joey és a kísértés" },
                        23: { number: "23", title: "Joey és a szakítás" },
                        24: { number: "24", title: "Joey és az összeköltözés" }
                    },
                },
                2: {
                    number: "2",
                    length: 20,
                    episodes: {
                        1: { number: "1-2", title: "Joey nagy kiugrása" },
                        2: { number: "3", title: "Joey és az elfenekelés" },
                        3: { number: "4", title: "Joey és a kaszkadőr" },
                        4: { number: "5", title: "Joey és a ház" },
                        5: { number: "6", title: "Joey és az ESL" },
                        6: { number: "7", title: "Joey és a póker" },
                        7: { number: "8", title: "Joey és a szexkazetta" },
                        8: { number: "9", title: "Joey és a musical" },
                        9: { number: "10", title: "Joey és az agglegény hálaadás" },
                        10: { number: "11", title: "Joey és a középiskolai barát" },
                        11: { number: "12-13", title: "Joey és a tijuanai kirándulás" },
                        12: { number: "14", title: "Joey és a hógolyócsata" },
                        13: { number: "15", title: "Joey és az apák" },
                        14: { number: "16", title: "Joey és a féltékenység" },
                        15: { number: "17", title: "Joey és a nagy költözés" },
                        16: { number: "18", title: "Joey és az álkapcsolat" },
                        17: { number: "19", title: "Joey titkos utálója" },
                        18: { number: "20", title: "Joey a kulisszák mögött" },
                        19: { number: "21", title: "Joey és a tartós kapcsolat" },
                        20: { number: "22", title: "Joey és az esküvő" }
                    },
                }
            }
        },
        "melissa-and-joey": {
            name: "MELISSANJOEY",
            title: "Melissa és Joey",
            length: 4,
            seasons: {
                1: {
                    number: "1",
                    length: 30,
                    episodes: {
                        1: { number: "1", title: "Bevezető rész" },
                        2: { number: "2", title: "A továbblépés" },
                        3: { number: "3", title: "Dadusszerelem" },
                        4: { number: "4", title: "Rosszfiúk" },
                        5: { number: "5", title: "A tökéletes vihar" },
                        6: { number: "6", title: "Kémkedés" },
                        7: { number: "7", title: "Szemtől szemben" },
                        8: { number: "8", title: "Toledói táncest" },
                        9: { number: "9", title: "A szöuli" },
                        10: { number: "10", title: "Felsőbb körökben" },
                        11: { number: "11", title: "Rettenet a padláson" },
                        12: { number: "12", title: "Joe tudja" },
                        13: { number: "13", title: "Ellenség extrákkal" },
                        14: { number: "14", title: "Edzésben" },
                        15: { number: "15", title: "Kulturális rés" },
                        16: { number: "16", title: "Joe és az osztálytalálkozó" },
                        17: { number: "17", title: "Topmodell születik" },
                        18: { number: "18", title: "A leszbikus esküvő" },
                        19: { number: "19", title: "A kikiáltási tárgy" },
                        20: { number: "20", title: "Az igazira várva" },
                        21: { number: "21", title: "Ifjú szerelem" },
                        22: { number: "22", title: "A buli és az évforduló" },
                        23: { number: "23", title: "Hol zsarnokság van..." },
                        24: { number: "24", title: "Burke-ök harca" },
                        25: { number: "25", title: "A másik Longo" },
                        26: { number: "26", title: "Mentorok" },
                        27: { number: "27", title: "Ütős Longo" },
                        28: { number: "28", title: "Játék határok nélkül" },
                        29: { number: "29", title: "Buli hajnalig" },
                        30: { number: "30", title: "Megállapodás" },
                    },
                },
                2: {
                    number: "2",
                    length: 15,
                    episodes: {
                        1: { number: "1", title: "Majd én megmutatom!" },
                        2: { number: "2", title: "Konyhacirkusz" },
                        3: { number: "3", title: "Az első alkalom" },
                        4: { number: "4", title: "Csak az én dolgom" },
                        5: { number: "5", title: "A K.O." },
                        6: { number: "6", title: "Szakítani tudni kell" },
                        7: { number: "7", title: "Vegyes páros" },
                        8: { number: "8", title: "A donor" },
                        9: { number: "9", title: "Ízek, imák, randik" },
                        10: { number: "10", title: "Csinos nagy hazugságok" },
                        11: { number: "11", title: "Titkok és titkolózók" },
                        12: { number: "12", title: "Minden gond anyja" },
                        13: { number: "13", title: "Miért vagy te Lennox?" },
                        14: { number: "14", title: "Oroszországból szeretettel" },
                        15: { number: "15", title: "Mel megházasítja Joe-t" },
                    },
                },
                3: {
                    number: "3",
                    length: 37,
                    episodes: {
                        1: { number: "1", title: "Nekem jó!" },
                        2: { number: "2", title: "Mérgező szülők" },
                        3: { number: "3", title: "Bennfentes meló" },
                        4: { number: "4", title: "Nem bírok várni" },
                        5: { number: "5", title: "Ó, testvér!" },
                        6: { number: "6", title: "Az igazság fáj" },
                        7: { number: "7", title: "Egy nyissz és más semmi" },
                        8: { number: "8", title: "Törlés a barátok közül" },
                        9: { number: "9", title: "Valami történt" },
                        10: { number: "10", title: "Családban nem marad" },
                        11: { number: "11", title: "Rohan az idő" },
                        12: { number: "12", title: "Rossz hatás" },
                        13: { number: "13", title: "Tanulópénz" },
                        14: { number: "14", title: "Kiskarácsony-újkarácsony" },
                        15: { number: "15", title: "A Jersey-sztori - 1. rész" },
                        16: { number: "16", title: "A Jersey-stroti - 2. rész" },
                        17: { number: "17", title: "A lánykérés" },
                        18: { number: "18", title: "Függetlenség" },
                        19: { number: "19", title: "Újragondolva" },
                        20: { number: "20", title: "Ki itt a főnök?" },
                        21: { number: "21", title: "A kísérő" },
                        22: { number: "22", title: "A kutya" },
                        23: { number: "23", title: "Párterápia" },
                        24: { number: "24", title: "Az igazat megvallva" },
                        25: { number: "25", title: "Az én házam, az én szabályaim" },
                        26: { number: "26", title: "A felügyelők" },
                        27: { number: "27", title: "Nemes gesztus" },
                        28: { number: "28", title: "Sporthorgászok" },
                        29: { number: "29", title: "Kampányra született" },
                        30: { number: "30", title: "A fotel" },
                        31: { number: "31", title: "Ilyesmi megesik" },
                        32: { number: "32", title: "Jó időzítés" },
                        33: { number: "33", title: "Hívatlan vendég" },
                        34: { number: "34", title: "A harag is a múltba simul" },
                        35: { number: "35", title: "Csak te kellesz" },
                        36: { number: "36", title: "Távol az igazságtól" },
                        37: { number: "37", title: "Végre" },
                    },
                },
                4: {
                    number: "4",
                    length: 2,
                    episodes: {
                        1: { number: "1", title: "Nászutasok" },
                        2: { number: "2", title: "Másnap" },
                        3: { number: "3", title: "Vágjunk bele!" },
                        4: { number: "4", title: "Hiba a kapcsolatban" },
                        5: { number: "5", title: "Nincs benne köszönet" },
                        6: { number: "6", title: "Boszorkányok nincsenek" },
                        7: { number: "7", title: "Melanie és Josiah karácsonya" },
                        8: { number: "8", title: "Zene füleimnek" },
                        9: { number: "9", title: "A hálózat csapdájában" },
                        10: { number: "10", title: "A példakép" },
                        11: { number: "11", title: "Elveszett lány" },
                        12: { number: "12", title: "Babaprojekt" },
                        13: { number: "13", title: "Hív a kötelesség" },
                        14: { number: "14", title: "Az ördögbe is!" },
                        15: { number: "15", title: "A könyvklub" },
                        16: { number: "16", title: "Korai műszak" },
                        17: { number: "17", title: "Apád-anyád idejöjjön!" },
                        18: { number: "18", title: "Jégvarázs" },
                        19: { number: "19", title: "A gyűrű" },
                        20: { number: "20", title: "Kvíz show" },
                        21: { number: "21", title: "Okos enged..." },
                        22: { number: "22", title: "Dupla boldogság" },
                    },
                },
            }
        }
    } 
    
    const [selectedSeries, setSelectedSeries] = React.useState(series.friends);

    function renderSeriesButtons() {
        const seriesMap = Object.keys(series).map((seriesName, index) => {
            return (
                <div key={`series-key-${index}`}>
                    <button onClick={() => setSelectedSeries(series[seriesName])} className="button button-season">{series[seriesName].title}</button>
                </div>
            );
        });

        return seriesMap;
    }

    return (
        <div className="main-div">
            <h1>VIDEO SERVER</h1>
            <div className="buttons-div">
                <h3 className="selector-title">Sorozatok</h3>
                <div className="buttons-cointainer">
                    {renderSeriesButtons()}
                </div>
            </div>
            <Series selectedSeries={selectedSeries}/>
        </div>
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             SERIES COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


function Series({ selectedSeries }) {
    const [selectedEpisode, setSelectedEpisode] = React.useState(1);
    const [selectedSeason, setSelectedSeason] = React.useState(1);


    function renderSeasonButtons() {
        const representationArray = new Array(selectedSeries.length).fill(0);
        const seasonButtons = representationArray.map((se, index) => {
            const season = (index + 1).toString();

            return (
                <div key={`button-key-${index}`}>
                    <button 
                        onClick={() => setSelectedSeason(season)}
                        className="button button-season">
                            {selectedSeries.seasons[season].number}
                    </button>
                </div>
            );
        });

        return seasonButtons;
    }

    function renderEpisodeButtons() {
        const representationArray = new Array(selectedSeries.seasons[selectedSeason].length).fill(0);
        const episodeLinks = representationArray.map((ep, index) => {
            const episode = (index + 1).toString();

            return (
                <div key={`link-key-${index}`}>
                    <button 
                        onClick={() => setSelectedEpisode(episode)}
                        className="button button-episode">
                            {selectedSeries.seasons[selectedSeason].episodes[episode].number}
                    </button>
                </div>
            );
        });

        return episodeLinks;
    }

    return (
        <>
            <hr />
            <div className="buttons-div">
                <h3 className="selector-title">Évadok</h3>
                <div className="buttons-cointainer">
                    {renderSeasonButtons()}
                </div>
            </div>
            <div className="buttons-div">
                <h3 className="selector-title">Epizódok</h3>
                <div className="buttons-cointainer">
                    {renderEpisodeButtons()}
                </div>
            </div>
            <h2>{selectedSeries.title} - Évad: {selectedSeason} Epizód: {selectedSeries.seasons[selectedSeason].episodes[selectedEpisode].number}</h2>
            <h3 className="episode-title">{selectedSeries.seasons[selectedSeason].episodes[selectedEpisode].title}</h3>
            <div className="video-div">
                <Video seriesName={selectedSeries.name.toLowerCase()} season={selectedSeason} episode={selectedEpisode} />
            </div>
        </>    
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             VIDEO COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


function Video(props) {
    const season = props.season;
    const episode = convertToTwoDigitsString(props.episode);
    const seriesName = props.seriesName;
    const capitalSeriesName = seriesName.charAt(0).toUpperCase() + seriesName.slice(1)
    const videoSource = `./mediaLink/movies/${seriesName}/s${season}/${capitalSeriesName}${season}x${episode}.mp4`;
    const width = window.innerWidth * 0.8;
    const height = width * 0.57;


    function convertToTwoDigitsString(number) {
        if (number < 10) {
            const stringified = String(number);
            const result = "0" + stringified;

            return result;

        } else if (number >= 10 && number < 100) {
            return String(number);
        } else {
            throw new Error("Too many episodes! (100 or more)");
        }
    }

    return (
        <div>
            <video src={videoSource} type="video/mp4" width={width} height={height} controls>
            </video>
        </div>
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             BOOTSTRAPPING
// ---------------------------------------------------------------------------------------------------------------------



function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();
