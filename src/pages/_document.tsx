import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Barlow+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Barlow:wght@100;200;300;400;500;600;700;800;900&family=Bodoni+Moda:ital,wght@0,400;1,400;1,500&family=Caveat&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link rel="icon" href="favicon.png" type="image/png" />
          <link
            rel="icon"
            sizes="32x32"
            href="favicon-32.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="64x64"
            href="favicon-64.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="favicon-96.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="196x196"
            href="favicon-196.png"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="apple-touch-icon.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="apple-touch-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="apple-touch-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="apple-touch-icon-144x144.png"
          />
          <meta name="msapplication-TileImage" content="favicon-144.png"></meta>
          <meta name="msapplication-TileColor" content="#FFFFFF"></meta>
        </Head>
        <body id="root">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
