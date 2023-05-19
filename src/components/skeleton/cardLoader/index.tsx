import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader: FC<any> = props => {
    let screenWidht = window.screen.width;
    let height = props.height as any;

    return (
        <ContentLoader
            viewBox={`0 0 ${screenWidht} ${height}`}
            height={height}
            width={screenWidht}
            backgroundColor="#f3f3f3"
            foregroundColor="#85acd5"
            {...props}
        >
            <rect x="20" y="20" rx="10" ry="10" width="120" height="80" />
            <rect x="150" y="25" rx="5" ry="5" width={screenWidht - 150 - 20} height="20" />
            <rect x="150" y="55" rx="5" ry="5" width={screenWidht - 150 - 40} height="15" />
            <rect x="150" y="80" rx="5" ry="5" width={screenWidht - 150 - 60} height="10" />
        </ContentLoader>
    );
};

export default CardLoader;