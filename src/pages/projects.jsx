import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAyoda from '@/images/logos/ayoda.jpeg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoTailwind from '@/images/logos/tailwind.png'
import wpappenLogo from '@/images/logos/wpappen.png'
import wptechLogo from '@/images/logos/wptech.jpeg'

const projects = [
  {
    name: 'WP Appen (IOS)',
    description:
      'Built the front-end and contributed to API and backend for the WP Appen internal app for managing employees.',
    link: {
      href: 'https://apps.apple.com/se/app/wp-appen/id6463141468',
      label: 'App Store',
    },
    logo: wpappenLogo,
    details: {
      href: '/wp-appen-project',
      label: 'Read more',
    },
  },
  {
    name: 'WP Appen (Android)',
    description:
      'Built the front-end and contributed to API and backend for the WP Appen internal app for managing employees.',
    link: {
      href: 'https://play.google.com/store/search?q=wp+appen&c=apps',
      label: 'Play Store',
    },
    logo: wpappenLogo,
    details: {
      href: '/wp-appen-project',
      label: 'Read more',
    },
  },
  {
    name: 'WP Tech Website',
    description:
      'A Next.js 13 website for WP Tech. The design was handed to me by our UX Designer. I Built website from the ground up. It has support for English and Swedish and blog like features.',
    link: {
      href: 'https://www.wptech.se',
      label: 'https://wptech.se/en',
    },
    logo: wptechLogo,
    details: null,
  },
  {
    name: 'AC Component Library (Early Alpha)',
    description:
      'A hobby project compiling a small list of frequently used basic Tailwind, Framer Motion and swiper.js components for React projects.',
    link: {
      href: 'https://aclibrary.vercel.app/',
      label: 'aclibrary.vercel.app',
    },
    logo: logoTailwind,
    details: null,
  },
  {
    name: 'V.1 Portfolio Website',
    description:
      'The first version of my portfolio website built with vanilla HTML, CSS and JavaScript.',
    link: { href: 'https://v1.ayoadesanya.com', label: 'v1.ayoadesanya.com' },
    logo: logoAyoda,
    details: null,
  },
  {
    name: 'Facebook Clone',
    description: 'A Facebook clone built with React, Zustand and Firebase.',
    link: {
      href: 'https://leaveyourmark.vercel.app/',
      label: 'leaveyourmark.vercel.app',
    },
    logo: logoFacebook,
    details: null,
  },

  // {
  //   name: 'cosmOS',
  //   description:
  //     'The operating system that powers our Planetaria space shuttles.',
  //   link: { href: '#', label: 'github.com' },
  //   logo: logoCosmos,
  // },
  // {
  //   name: 'OpenShuttle',
  //   description:
  //     'The schematics for the first rocket I designed that successfully made it to orbit.',
  //   link: { href: '#', label: 'github.com' },
  //   logo: logoOpenShuttle,
  // },
]

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
        title="Projects - Ayo Adesanya | Full-stack Developer, People Connector & Stellar Team Player "
        description="I’m Ayo, a full-stack developer, people connector and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems."
        canonical="https://www.ayoadesanya.com/"
        openGraph={{
          url: 'https://www.ayoadesanya.com/',
          title:
            'Ayo Adesanya - Full-stack Developer, People Connector & Stellar Team Player',
          description:
            'I’m Ayo, a full-stack developer, people connector and team builder when I have the time. I work across the stack but primally work on the front-end at WP Tech (Sweden), building internal integration systems.',
          images: [
            {
              url: '/social-image.png',
              width: 800,
              height: 600,
              alt: 'Ayo Adesanya - Full-stack Developer, People Connector & Stellar Team Player',
              type: 'image/jpeg',
            },
            {
              url: '/social-image.png',
              width: 900,
              height: 800,
              alt: 'Ayo Adesanya - Full-stack Developer, People Connector & Stellar Team Player',
              type: 'image/jpeg',
            },
            { url: '/social-image.png' },
            { url: '/social-image.png' },
          ],
          siteName:
            'Ayo Adesanya - Full-stack Developer, People Connector & Stellar Team Player ',
        }}
        twitter={{
          handle: '@ayo_imagines',
          site: '@ayo_imagines',
          cardType: 'summary_large_image',
        }}
      />
      <SimpleLayout
        title="These are just a few of my recent projects."
        intro="Here's a sneak peek into my recent projects. Keep in mind that the bulk of my work is confidential and can't be showcased here. For a deeper dive, my GitHub is the place to go."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className=" flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <p>{project.name}</p>
              </h2>
              <Card.Description>{project.description}</Card.Description>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href={project.link.href}
                className="relative z-10 mt-6 flex cursor-pointer text-sm font-medium text-zinc-400 transition  dark:text-zinc-200"
              >
                <div className="flex hover:text-teal-500">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2 ">{project.link.label}</span>
                </div>
              </a>

              {project.details && (
                <Link
                  href={project.details.href}
                  className="mt-6 flex cursor-pointer text-sm font-medium text-zinc-400 transition dark:text-zinc-200"
                >
                  <span className="hover:text-teal-500">
                    {project.details.label}
                  </span>
                </Link>
              )}
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
