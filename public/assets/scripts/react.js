function Video(props) {
    const season = props.season;
    const episode = convertToTwoDigitsString(props.episode);
    const videoSource = `./mediaLink/movies/friends/s${season}/Friends${season}x${episode}.mp4`;
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

function App() {
    const numberOfEpisodesBySeason = [24, 24, 25, 24, 24, 25, 24, 24, 23, 17];

    const [selectedEpisode, setSelectedEpisode] = React.useState(1);
    const [selectedSeason, setSelectedSeason] = React.useState(1);

    function renderSeasonButtons() {
        const representationArray = new Array(10).fill(0);
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
        const representationArray = new Array(numberOfEpisodesBySeason[selectedSeason - 1]).fill(0);
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
        <div className="main-div">
            <h1>FRIENDS</h1>
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
                <Video season={selectedSeason} episode={selectedEpisode} />
            </div>
        </div>
    );
}


function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();
