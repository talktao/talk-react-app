import ContentLoader from "react-content-loader";

const HomeLoader = (props) => {

    let screenWidht = window.screen.width;
    let screenHeight = window.screen.height;

    return <ContentLoader
        speed={2}
        width={screenWidht}
        height={screenHeight}
        viewBox={`0 0 ${screenWidht} ${screenHeight}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#85acd5"
        {...props}
    >
        <rect x="0" y="20" width={screenWidht} height="60" />
        <rect x="0" y="125" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="165" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="205" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="245" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="285" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="325" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="365" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="405" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="445" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="485" rx="5" ry="5" width={screenWidht} height="20" />
        <rect x="0" y="525" rx="5" ry="5" width={screenWidht} height="20" />

    </ContentLoader>;
};

export default HomeLoader;