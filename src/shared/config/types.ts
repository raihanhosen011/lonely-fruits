import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

// _app page layout
export type AppPropsWithLayout = AppProps & {
    Component: NextPage & {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};


// button props
export type ButtonProps = {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    loading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    href?: string;
    targetBlank?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    icon?: string;
}


// menu props
export type MenuProps = {
    src: string;
    className: string;
    label: string;
    to : string
}


// core data types
export type CoreDataTypes = {
    label: string,
    description: {
        __html: string;
    }
}