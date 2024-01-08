import { useEffect, useRef } from 'react'
import { DefaultSeo } from 'next-seo'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <DefaultSeo
        openGraph={{
          title:
            'Ayo Adesanya - Full-stack Developer, People Connector & Stellar Team Player',
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.ayoadesanya.com',
          siteName: 'Ayo Adesanya - Full-stack Developer',
        }}
        twitter={{
          handle: '@ayo_imagines',
          site: '@ayo_imagines',
          cardType: 'summary_large_image',
        }}
      />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
