import { deepFreeze } from "grommet/utils"
import styled from "styled-components";
import { Grommet, Heading, Tabs, Tab, Carousel, Footer } from "grommet";

export const theme = deepFreeze({
    global: {
        colors: {
            "brand": "#427FB8",
            "control": {
                "dark": "#00A8F0",
                "light": "#0096D6"
            },
            "focus": "#99d5ef",
            "accent-1": "#427FB8",
            "accent-2": "#E6C84B",
            "accent-3": "#915591",
            "dark-1": "#282c34",
            "dark-2": "#676767",
            "light-1": "#F2F2F2",
            "light-2": "#E8E8E8",
            "light-3": "#CCCCCC",
            "neutral-1": "#006996",
            "neutral-2": "#A65336",
            "neutral-3": "#A69136",
            "neutral-4": "#774677",
            "status-critical": "#F04B37",
            "status-warning": "#F0AA3C",
            "status-ok": "#509137",
            "status-unknown": "#848484",
            "status-disabled": "#848484"
        }
    },
    tab: {
        color: "#427FB8",
        pad: "1rem",
        active: {
            background: "dark-1",
            color: "white"
        },
        hover: {
            background: "accent-1"
        }
    }
});

export const AppHolder = styled(Grommet)`
    height:100vh;
    display: flex;
    flex-direction: column;
    color:#282c34;
    background-color: #282c34;
    cursor: default;
    overflow:auto;

    *::selection {
        outline: none;
    }

    *::-webkit-scrollbar {
        width: 1rem;
    }

    *::-webkit-scrollbar-track {
        margin: 1rem;
        box-shadow: inset 0 0 0.1rem rgb(39, 35, 35);
        border-radius: 1rem;
    }

    *::-webkit-scrollbar-thumb {
        background: #282c34;
        border-radius: 1rem;
    }

    *::-webkit-scrollbar-thumb:hover {
        background: rgb(66, 127, 184);
    }
`

export const AppHeader = styled(Heading)`
    padding: 0 3%;
    color: white;
`

export const AppTabHolder = styled(Tabs)`
    height: 90vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(109, 174, 235);
    z-index: 1;
    overflow: auto;
`

export const AppTab = styled(Tab)`
    background:rgb(109, 174, 235);
    margin:0 1rem;
`

export const AppCarousel = styled(Carousel)`
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
`

export const AppFooter = styled(Footer)`
    align-self: flex-end;
    padding: 1rem;
    color:white;
`