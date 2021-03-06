// ---------------------------------------------------------------------------------------------------------------------
//                                             APP COMPONENT
// ---------------------------------------------------------------------------------------------------------------------



function App() {
    const series = {
        friends: {
            name: "FRIENDS",
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
        }
    } 
    
    const [selectedSeries, setSelectedSeries] = React.useState(series.friends);

    function renderSeriesButtons() {
        const seriesMap = Object.keys(series).map((seriesName, index) => {
            return (
                <div key={`series-key-${index}`}>
                    <button onClick={() => setSelectedSeries(series[seriesName])} className="button button-season">{series[seriesName].name}</button>
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
                {renderSeriesButtons()}
            </div>
            <br />
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
                {renderSeasonButtons()}
            </div>
            <br />
            <div className="buttons-div">
                <h3 className="selector-title">Epizódok</h3>
                {renderEpisodeButtons()}
            </div>
            <br />
            <br />
            <br />
            <h2>{selectedSeries.name} - Évad: {selectedSeason} Epizód: {selectedEpisode}</h2>
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
    
    // ./mediaLink/movies/friends/Friends${season}x${episode}.mp4
    // ./assets/videos/Friends${season}x${episode}.mp4

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
            <video width="624" height="352" src={videoSource} type="video/mp4" width={width} height={height} controls>
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
