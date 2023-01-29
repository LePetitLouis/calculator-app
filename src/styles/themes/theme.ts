import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    toggleBg: string;
    resultBg: string;

    keyNumberBg: string;
    keyNumberShadow: string;

    keyOperationBg: string;
    keyOperationShadow: string;

    keyResultBg: string;
    keyResultShadow: string;

    colorText: string;
    colorTextSecondary?: string;
    colorTextRevert?: string;
  }
}

export const firstTheme: DefaultTheme = {
    mainBg: "#3a4764",
    toggleBg: "#232c43",
    resultBg: "#182034",

    keyNumberBg: "#eae3dc",
    keyNumberShadow: "#b4a597",

    keyOperationBg: "#637097",
    keyOperationShadow: "#404e72",

    keyResultBg: "#d03f2f",
    keyResultShadow: "#93261a",

    colorText:"#ffffff",
    colorTextSecondary: "#444b5a",
};

export const secondTheme: DefaultTheme = {
    mainBg: "#e6e6e6",
    toggleBg: "#d1cccc",
    resultBg: "#ededed",

    keyNumberBg: "#e5e4e1",
    keyNumberShadow: "#a69d91",

    keyOperationBg: "#377f86",
    keyOperationShadow: "#1b5f65",
  
    keyResultBg: "#ca5502",
    keyResultShadow: "#893901",

    colorText: "#ffffff",
    colorTextSecondary: "#35352c",
};

export const thirdTheme: DefaultTheme = {
    mainBg: "#160628",
    toggleBg: "#1d0934",
    resultBg: "hsl(268, 71%, 12%)",

    keyNumberBg: "#341c4f",
    keyNumberShadow: "#871c9c",

    keyOperationBg: "#58077d",
    keyOperationShadow: "#bc15f4",

    keyResultBg: "#00e0d1",
    keyResultShadow: "#6cf9f2",

    colorText: "#ffffff",
    colorTextSecondary: "#ffe53d",
    colorTextRevert: "#1b2428",
};