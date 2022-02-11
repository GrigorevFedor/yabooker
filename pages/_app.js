import '../styles/globals.css'
import '../styles/datepicker.css'
import '../styles/carousel.css'
import {Provider} from "react-redux"
import {store, persistor} from "../store";
import {PersistGate} from "redux-persist/integration/react";
import Script from 'next/script'
import {YMInitializer} from 'react-yandex-metrika';
import moment from "moment";
import 'moment/locale/ru';
moment.locale('ru')

function App({Component, pageProps}) {

    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-HXHK04XGSJ`}
            />

            <Script strategy="lazyOnload">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-HXHK04XGSJ');
                `}
            </Script>
            <YMInitializer accounts={[84966967]} options={{
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true,
                trackHash: true
            }} version="2"/>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </>
    )
}

export default App
