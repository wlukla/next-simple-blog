/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

import store from '../redux/store';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
    background-color: #fafafa;
    word-break: break-all;
  }
`;

class MyApp extends React.Component<any> {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <link rel="preload" href="/fonts/noto-sans-v9-latin-regular.woff2" as="font" />
        </Head>
        <Normalize />
        <GlobalFonts />
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
