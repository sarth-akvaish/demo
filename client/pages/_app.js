import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Router } from 'next/router'
import { parseCookies } from 'nookies'

export default function App({ Component, pageProps }) {
  return <><Navbar /><Component {...pageProps} /><Footer /></>
}

function redirectUser(ctx, location) {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: location,
      "Content-Type": "text/html"
    });
    ctx.res.end();
  }
  else {
    Router.push(location);
  }
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const jwt = parseCookies(ctx).jwt;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!jwt) {
    if (ctx.pathname === "/products") {
      redirectUser(ctx, "/login");
    }
  }

  return {
    pageProps
  }
}