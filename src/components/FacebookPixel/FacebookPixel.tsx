'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import * as pixel from '../../../lib/fpixel'
import { useRouter } from 'next/router'

const FacebookPixel = () => {
  const router = useRouter()

  useEffect(() => {
    pixel.pageview()

    const handleRouteChange = () => {
      pixel.pageview()
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:`
          <script>
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${pixel.FB_PIXEL_ID}); 
          </script>
          `,
        }}
      />
    </>
  )
}

export default FacebookPixel