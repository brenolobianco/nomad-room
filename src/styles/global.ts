import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  :root {
    --color-primary: #40C057;
    --color-bg-like-active: #D3FFDB;
    --color-bg-headline: rgba(35, 35, 35, 0.65);

    --color-gray1: #313131;
    --color-gray2: #666666;
    --color-gray3: #817E7E;
    --color-gray4: #D9D9D9;
    --color-gray5: #E6E6E6;

    --color-white: #ffffff;
    --color-error: #ff6161;

    --font-weg1: 700;
    --font-weg2: 600;
    --font-weg3: 500;
    --font-weg4: 400;

    --sz-title1: 32px;
    --sz-title2: 24px;
    --sz-title3: 20px;
    --sz-title4: 18px;
    --sz-text1: 16px;
    --sz-text2: 14px;

    --bd-radius: 10px;

    --shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: var(--color-gray1);
  }
`;


