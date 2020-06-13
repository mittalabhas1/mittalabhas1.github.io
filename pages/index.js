import Head from 'next/head'

import Home from '../components/home';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Abhas Mittal</title>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: `
          'use strict';
            !(function() {
            if (!(window.ChatGen || []).loaded) {
            var t = document.createElement('script');
            (t.type = 'text/javascript'),
            (t.async = !0),
            (t.src = 'https://app.chatgen.ai/cmp/chat-widget/bot.js');
            var e = document.getElementsByTagName('script')[0];
            e.parentNode.insertBefore(t, e),
            (t.onload = function() {
            ChatGen.init({ widget_key: 'LAAZjU7C' });
          });
          }
          })();
        `}}>
        </script>
      </Head>

      <Home />

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
