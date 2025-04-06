import { Helmet, HelmetProvider } from "react-helmet-async"
import { QuienesSomosInicio } from "../components/QuienesSomosInicio"

export const QuienesSomos = () => {
  return (
    <HelmetProvider>
      <div className="d-flex flex-column">
        <Helmet>
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '426764223030330');
          fbq('track', 'PageView');`}
          </script>
          <noscript>{`<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=426764223030330&ev=PageView&noscript=1"
          />`}</noscript>
          <title>Quienes Somos - Full Traslados</title>
          <meta name="description" content="sección quienes somos de fulltraslados" />
        </Helmet>
        <QuienesSomosInicio/>
      </div>
    </HelmetProvider>
  )
}
