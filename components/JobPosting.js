import Head from 'next/head'
import Layout from '@/components/Layout'
import Header from '@/components/Header'
import { format } from 'date-fns'

export default function JobPosting({ children, job: { metadata, body } }) {
  return (
    <Layout>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tailwindcss" />
        <meta name="twitter:title" content={`${metadata.title} – Tailwind Jobs`} />
        <meta name="twitter:description" content={metadata.subtitle} />
        <meta name="twitter:image" content="https://jobs.tailwindui.com/social.png" />
        <meta name="twitter:creator" content="@tailwindcss" />
        <meta property="og:url" content="https://jobs.tailwindui.com/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${metadata.title} – Tailwind Jobs`} />
        <meta property="og:description" content={metadata.subtitle} />
        <meta property="og:image" content="https://jobs.tailwindui.com/social.png" />
        <title>{metadata.title} - Tailwind Jobs</title>
      </Head>

      <div className="max-w-2xl lg:max-w-6xl mx-auto px-6 py-8">
        <Header />
      </div>
      <main className="max-w-2xl lg:max-w-6xl mx-auto px-6">
        <article className="border-t-2 border-gray-100 grid py-12 lg:grid-cols-3 lg:gap-16">
          <div className="hidden lg:block">
            <aside className="sticky top-6 rounded-lg bg-gray-50 p-8">
              <div className="-my-4 divide-y-2 divide-gray-100">
                <dl className="divide-y-2 divide-gray-100">
                  <div className="py-4">
                    <dt className="sr-only">Employment type</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                      </svg>
                      <span className="text-gray-800">{metadata.jobType}</span>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Location</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <div className="text-gray-800">{metadata.location[0]}</div>
                        {metadata.location[1] && (
                          <div className="text-gray-500">{metadata.location[1]}</div>
                        )}
                      </div>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Salary</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                        <path
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      <div style={{ fontVariantNumeric: 'tabular-nums' }}>
                        <div className="text-gray-800">{metadata.salary[0]}</div>
                        <div className="text-gray-500">{metadata.salary[1]}</div>
                      </div>
                    </dl>
                  </div>
                  <div className="py-4">
                    <dt className="sr-only">Closing date</dt>
                    <dl className="flex items-start space-x-2 text-sm leading-5">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-800">
                        <span aria-hidden>Closes on</span>{' '}
                        <time dateTime={metadata.closes}>
                          {format(new Date(metadata.closes), 'MMM d, y')}
                        </time>
                      </span>
                    </dl>
                  </div>
                </dl>
                <div className="py-4">
                  <a
                    href={metadata.applyUrl}
                    className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-base leading-6 font-semibold text-white"
                  >
                    Apply for this job
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <div className="col-span-2 space-y-12">
            <div className="space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
                  {metadata.title}
                </h1>
                <p className="text-lg leading-7 text-gray-500">{metadata.subtitle}</p>
              </div>
              <div className="flow-root lg:hidden">
                <div className="-my-4">
                  <dl className="sm:grid sm:grid-cols-2">
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Employment type</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                        </svg>
                        <span className="text-gray-800">{metadata.jobType}</span>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Closing date</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <span className="text-gray-800">
                          <span aria-hidden>Closes on</span>{' '}
                          <time dateTime={metadata.closes}>
                            {format(new Date(metadata.closes), 'MMM d, y')}
                          </time>
                        </span>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Location</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div>
                          <div className="text-gray-800">{metadata.location[0]}</div>
                          {metadata.location[1] && (
                            <div className="text-gray-500">{metadata.location[1]}</div>
                          )}
                        </div>
                      </dl>
                    </div>
                    <div className="py-4 border-b border-gray-100">
                      <dt className="sr-only">Salary</dt>
                      <dl className="flex items-start space-x-2 text-sm leading-5">
                        <svg
                          className="h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                          <path
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                        <div style={{ fontVariantNumeric: 'tabular-nums' }}>
                          <div className="text-gray-800">{metadata.salary[0]}</div>
                          {metadata.salary[1] && (
                            <div className="text-gray-500">{metadata.salary[1]}</div>
                          )}
                        </div>
                      </dl>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            <div className="prose" dangerouslySetInnerHTML={{ __html: body }} />
            <div>
              <a
                href={metadata.applyUrl}
                className="inline-block rounded-md bg-gray-900 px-4 py-2.5 text-base leading-6 font-semibold text-white"
              >
                Apply for this job
              </a>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  )
}
