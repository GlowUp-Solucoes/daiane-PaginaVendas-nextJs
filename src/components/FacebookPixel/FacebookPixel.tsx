'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import * as pixel from '../../lib/fpixel.js'




const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!loaded) return

    pixel.pageview()
  }, [pathname, loaded])

  return (
    <div>
      <Script
        id="fb-pixel"
        src={'../../../public/scripts/pixel.js'}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
        data-pixel-id={961240518486621}
      />
    </div>
  )
}

export default FacebookPixel