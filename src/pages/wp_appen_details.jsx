import { NextSeo } from 'next-seo'

import LazyYoutube from '@/components/LazyYoutube'
import { SimpleLayout } from '@/components/SimpleLayout'

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects - Ayo Adesanya | Full-stack Developer, People Person & Team Builder "
        description="I’m Ayo, a full-stack developer, people person and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems."
        canonical="https://www.ayoadesanya.com/"
        openGraph={{
          url: 'https://www.ayoadesanya.com/',
          title:
            'Ayo Adesanya - Full-stack Developer, People Person & Team Builder',
          description:
            'I’m Ayo, a full-stack developer, people person and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems.',
          images: [
            {
              url: '/social-image.png',
              width: 800,
              height: 600,
              alt: 'Ayo Adesanya - Full-stack Developer, People Person & Team Builder',
              type: 'image/jpeg',
            },
            {
              url: '/social-image.png',
              width: 900,
              height: 800,
              alt: 'Ayo Adesanya - Full-stack Developer, People Person & Team Builder',
              type: 'image/jpeg',
            },
            { url: '/social-image.png' },
            { url: '/social-image.png' },
          ],
          siteName:
            'Ayo Adesanya - Full-stack Developer, People Person & Team Builder ',
        }}
        twitter={{
          handle: '@ayo_imagines',
          site: '@ayo_imagines',
          cardType: 'summary_large_image',
        }}
      />
      <SimpleLayout
        extra={false}
        title="Elevate your organizations work efficiency"
        intro="WP Appen, a WP Tech internal employee management application.  Designed for both employees and employers, a platform that allows you to manage your work and employees in one place."
      >
        <article>
          <section>
            <p className="mt-6 text-base  text-black dark:text-white"></p>

            <section className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              <p className="mb-6 mt-10 text-xl font-bold text-black dark:text-white">
                Time Log Feature
              </p>
              <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
                Time-log is a mobile application feature that enables
                organizations to automate and efficiently manage and prepare
                employee salary accounting, monitor overtime, and handle absence
                and internal issue reporting. The following videos below i talk
                about a 2 core features and my role in the project.
              </p>
              <div className="mt-6">
                <LazyYoutube videoId="eIbGL6ETWXM" />
              </div>
              <div className="mt-6">
                <p className="mb-6 mt-10 text-xl font-bold text-black dark:text-white">
                  Report Availability Feature
                </p>
                <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
                  An automated system for organizations to gather monthly
                  schedules from their on-hours staff within a few clicks
                </p>
                <div className="mt-6">
                  <LazyYoutube videoId="ZuUezwzy-xE" />
                </div>
              </div>
            </section>
          </section>
        </article>
      </SimpleLayout>
    </>
  )
}
