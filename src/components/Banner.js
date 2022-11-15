import styled from 'styled-components';
import bannerImage from '../img/bannerImage.jpg';

const StyledBanner = styled.div`
    width: 100%;
    height: 230px !important;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;;
    }
`;

function Banner() {
    return (
        <StyledBanner>
            <img src={require("../img/bannerImage.jpg").default.src} />
            {/* <img src={bannerImage.src} /> */}
        </StyledBanner>
    );
};

export default Banner;