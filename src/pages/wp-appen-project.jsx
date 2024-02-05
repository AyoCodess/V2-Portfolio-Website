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
        extra={false}
        title="Elevate your organizations work efficiency"
        intro="WP Appen, a WP Tech internal employee management application.  Designed for both employees and employers, a platform that allows you to manage your work and employees in one place."
      >
        <article className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <h2 className="mt-4 text-2xl font-bold dark:text-white">
            My Contribution
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            I lead the front-end development, implemented ci/cd, wrote
            documentation and contributed to the API layer.
          </p>
          <h2 className="mt-4 text-2xl font-bold dark:text-white">
            Time Log Feature
          </h2>
          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            <b>Time log </b>enables the ability to track when field workers
            check in and out, allowing for accurate salary calculations. It also
            tracks the location of the employee when they sign in and out. The
            feature provides the total reported time for the employee, showing
            how many hours they’ve worked that day and their current session.
          </p>

          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            <b>Time overview:</b> Groups all of the field workers’ sessions by
            today, yesterday, this week, this month, and last month. It provides
            a clear breakdown of how the field worker has worked. Managers can
            also see the same data on their dashboard.
          </p>

          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            <b>Notify absence: </b>If a field worker is sick, they can notify
            their absence through the app. They have an hour to cancel their
            sick leave if they decide they can work.
          </p>

          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            <b>Employee Status:</b> If you’re an admin, you can see the employee
            status, which shows which field workers are checked in, when and
            where they checked in, and the last time they checked in. This is
            important for managers to keep track of their staff.
          </p>

          <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
            Watch the video below to see the features in action and more.
          </p>

          <div className="mt-6">
            <LazyYoutube videoId="eIbGL6ETWXM" />
          </div>

          <div className="mt-6">
            <p className="mb-6 mt-10 text-xl font-bold text-black dark:text-white">
              Report Availability Feature
            </p>
            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              An automated system for organizations to gather monthly schedules
              from their on-hours staff within a few clicks
            </p>

            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              <b>Report availability:</b> Allows managers to send a monthly
              schedule to field workers. The schedule starts on the 20th of a
              given month and ends on the 19th of the next month. Field workers
              can set their availability for dates outside a 7-day grace period.
            </p>

            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              Field workers can select their available dates and times. They can
              also select all dates at once or change their availability for
              individual dates. If they want to change the time for a date, they
              can do so by clicking the edit button.
            </p>

            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              Once a field worker is happy with their schedule, They can then
              report their availability and all dates without a selected
              availability will be marked as unavailable. They can always make
              changes to individual dates, provided it does not fall within the
              7-day time grace period.
            </p>

            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              <b>Challenges:</b> Grouping weeks by swedish standards, the data
              structure sent from the Lime Api not being ideal for the feature.
            </p>

            <p className="mt-6 text-base  text-zinc-600 dark:text-zinc-400">
              Watch the video below to see the features in action and more.
            </p>

            <div className="mt-6">
              <LazyYoutube videoId="ZuUezwzy-xE" />
            </div>
          </div>
        </article>
      </SimpleLayout>
    </>
  )
}
