
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
//                                             SERIES COMPONENT
// ---------------------------------------------------------------------------------------------------------------------


function Series({ selectedSeries }) {
    const [selectedEpisode, setSelectedEpisode] = React.useState(1);
    const [selectedSeason, setSelectedSeason] = React.useState(1);
    
    const episodesBySeason = selectedSeries.episodes;

    function renderSeasonButtons() {
        const representationArray = new Array(Object.keys(selectedSeries.episodes).length).fill(0);
        const seasonButtons = representationArray.map((ep, index) => {
            const season = index + 1;

            return (
                <div key={`button-key-${index}`}>
                    <button onClick={() => setSelectedSeason(season)} className="button button-season">{season}</button>
                </div>
            );
        });

        return seasonButtons;
    }

    function renderEpisodeLinks() {
        const representationArray = new Array(episodesBySeason[selectedSeason]).fill(0);
        const episodeLinks = representationArray.map((ep, index) => {
            const episode = index + 1;

            return (
                <div key={`link-key-${index}`}>
                    <button onClick={() => setSelectedEpisode(episode)} className="button button-episode">{episode}</button>
                </div>
            );
        });

        return episodeLinks;
    }

    return (
        <>
            <h1>{selectedSeries.name}</h1>
            <h2>Season {selectedSeason} Episode {selectedEpisode}</h2>
            <hr />
            <div className="buttons-div">
                <h3 className="selector-title">Seasons</h3>
                {renderSeasonButtons()}
            </div>
            <br />
            <div className="buttons-div">
                <h3 className="selector-title">Episodes</h3>
                {renderEpisodeLinks()}
            </div>
            <div className="video-div">
                <Video seriesName={selectedSeries.name.toLowerCase()} season={selectedSeason} episode={selectedEpisode} />
            </div>
        </>    
    );
}


// ---------------------------------------------------------------------------------------------------------------------
//                                             APP COMPONENT
// ---------------------------------------------------------------------------------------------------------------------



function App() {
    const series = {
        friends: {
            name: "FRIENDS",
            episodes: {
                1: 24,
                2: 24,
                3: 25,
                4: 24,
                5: 24,
                6: 25,
                7: 24,
                8: 24,
                9: 23,
                10: 17
            }
        },
        joey: {
            name: "JOEY",
            episodes: {
                1: 24,
                2: 22
            }
        }
    } 
    
    const [selectedSeries, setSelectedSeries] = React.useState(series.friends);

    function renderSeriesButtons() {
        const seriesMap = Object.keys(series).map((seriesName, index) => {
            return (
                <div key={`series-key-${index}`}>
                    <button onClick={() => setSelectedSeries(series[seriesName])} className="button button-episode">{series[seriesName].name}</button>
                </div>
            );
        });

        return seriesMap;
    }

    return (
        <div className="main-div">
            
            <div className="buttons-div">
                <h3 className="selector-title">Seasons</h3>
                {renderSeriesButtons()}
            </div>
            <br />
            <Series selectedSeries={selectedSeries}/>
        </div>
    );
}


function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();
