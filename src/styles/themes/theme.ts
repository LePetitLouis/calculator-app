import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBg: string;
    toggleBg: string;
    screenBg: string;

    keyBg: string;
    keyShadow: string;
    keyBgToggle: string;
    keyShadowToggle: string;
    keyText: string;
    keyTextShadow: string;

    colorText: string;
    colorSecondary?: string;
    colorTextRevert: string;
  }
}

export const firstTheme: DefaultTheme = {
    mainBg: "#3a4764",
    toggleBg: "#232c43",
    screenBg: "#182034",

    keyBg: "#637097",
    keyShadow: "#404e72",
    keyBgToggle: "#d03f2f",
    keyShadowToggle: "#93261a",
    keyText: "#eae3dc",
    keyTextShadow: "#b4a597",

    colorText: "#444b5a",
    colorTextRevert: "#ffffff",
};

export const secondTheme: DefaultTheme = {
    mainBg: "#e6e6e6",
    toggleBg: "#d1cccc",
    screenBg: "#ededed",

    keyBg: "#377f86",
    keyShadow: "#1b5f65",
    keyBgToggle: "#ca5502",
    keyShadowToggle: "#893901",
    keyText: "#e5e4e1",
    keyTextShadow: "#a69d91",

    colorText: "#35352c",
    colorTextRevert: "#ffffff",
};

export const thirdTheme: DefaultTheme = {
    mainBg: "#160628",
    toggleBg: "#1d0934",
    screenBg: "#ededed",

    keyBg: "#58077d",
    keyShadow: "#bc15f4",
    keyBgToggle: "#00e0d1",
    keyShadowToggle: "#6cf9f2",
    keyText: "#341c4f",
    keyTextShadow: "#871c9c",

    colorText: "#ffe53d",
    colorSecondary: "#1b2428",
    colorTextRevert: "#ffffff",
};