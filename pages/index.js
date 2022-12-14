import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    //console.log(config.playlists);

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Banner></Banner>
                <Header></Header>
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}></Timeline>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return(
//         <div>
//             Menu
//         </div>
//     );
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            {/* <img src="banner"/> */}
            <section className="user-info">
                <img src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    );
}

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {
                playlistNames.map((playlistName) => {
                    const videos = props.playlists[playlistName];

                    //console.log(videos);
                    return (
                        <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {videos
                                    .filter((video) => {
                                        const titleNormalized = video.title.toLowerCase();
                                        const searchValueNormalized = searchValue.toLowerCase();
                                        return titleNormalized.includes(searchValueNormalized)
                                    })
                                    .map((video) => {
                                        return (
                                            <a key={video.url} href={video.url}>
                                                <img src={video.thumb}></img>
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })}
                            </div>
                        </section>
                    );
                })
            }
        </StyledTimeline>
    );
}