import { FC, useEffect } from "react";
import { ReactComponentProps } from "@/type/reactComponent";
import useSetTitle from "@/hooks/useSetTitle";

interface LayoutType extends ReactComponentProps {
    title: string,
};

const Layout: FC<LayoutType> = (props) => {

    const { title, className = '', children } = props;

    useSetTitle(title);

    return <>
        {children}
    </>;
};

export default Layout;