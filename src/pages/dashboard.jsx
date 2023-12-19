import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Huddle from '@/components/Huddle'
import { EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { PushProtocol } from '@/components/PushNotifications'

import { useEffect, useState } from 'react'

import { BasicLayout } from '@/components/BasicLayout'

const user = {
  name: 'Nisha Naziya',
  email: 'nisha@gmail.com',
  role: 'DEPTO member',
  imageUrl: 'https://avatars.githubusercontent.com/u/119906732?v=4',
}

const stats = [
]

function Patent({ patent }) {
  return (
    <li
      key={patent.email}
      className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className=" truncate text-sm font-medium text-gray-900">
              {patent.organization}
            </h3>{' '}
            <div className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              CL# {patent.classNo}
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-lg  bg-gray-300"
              src={`https://ui-avatars.com/api/?background=4f46e5&color=fff&name=${patent.title}`}
              alt=""
            />{' '}
          </div>

          <p className="mt-1 truncate text-sm text-gray-500">{patent.title}</p>
          <p className="mt-1 truncate text-sm text-gray-500">{patent.date}</p>
          <p className="mt-1 truncate text-sm text-gray-500">
            Design No. {patent.designNo}
          </p>
        </div>
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="flex w-0 flex-1">
            <a
              href={`/patent?_id=${patent._id}`}
              className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <LinkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span className="ml-3">View Patent</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

const recentHires = [
  {
    name: 'Aswin',
    handle: '0x65574dDbe98813b23364704e0B00E2e71fC5aD17',
    imageUrl:
      'https://avatars.githubusercontent.com/u/58024846?v=4',
    href: '#',
  },
  {
    name: 'Arun',
    handle: '0x68574dDbe98813b23364704e0B00E2e71fC5aD17',
    imageUrl:
      'https://avatars.githubusercontent.com/u/75669841?v=4',
    href: '#',
  },
  {
    name: 'Faiz',
    handle: '0x74574dDbe98813b23364704e0B00E2e71fC5aD17',
    imageUrl:
      'https://avatars.githubusercontent.com/u/68603404?v=4',
    href: '#',
  },
  {
    name: 'Alan',
    handle: '0x78574dDbe98813b23364704e0B00E2e71fC5aD17',
    imageUrl:
      'https://avatars.githubusercontent.com/u/119315030?v=4',
    href: '#',
  },
]
const announcements = [
  {}
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [patents, setPatents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('/api/patents')

      console.log(data)
      setPatents(data)
      setLoading(false)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>Patent - DEPTO</title>
      </Head>
      <BasicLayout title="Dashboard">
        <main className="pb-8">
          <div className="mx-auto ">
            <h1 className="sr-only">Profile</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                {/* Welcome panel */}
                <section aria-labelledby="profile-overview-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <h2 className="sr-only" id="profile-overview-title">
                      Profile Overview
                    </h2>
                    <div className="bg-white p-6">
                      <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                          <div className="flex-shrink-0">
                            <img
                              className="mx-auto h-20 w-20 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </div>
                          <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                            <p className="text-sm font-medium text-gray-600">
                              Welcome back,
                            </p>
                            <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                              {user.name}
                            </p>
                            <p className="text-sm font-medium text-gray-600">
                              {user.role}
                            </p>
                          </div>
                        </div>
                        <div className="mt-5 flex justify-center sm:mt-0">
                          <Huddle meetCode="65a1sd5a1" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="px-6 py-5 text-center text-sm font-medium"
                        >
                          <span className="text-gray-900">{stat.value}</span>{' '}
                          <span className="text-gray-600">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <h3 className="mt-5 text-lg font-medium leading-6 text-gray-900">
                  Notifications powered by
                  <a
                    href="https://www.push.org/"
                    target="_blank"
                    className="ml-1 font-bold text-pink-600 hover:text-pink-500"
                  >
                    Push Protocol
                  </a>
                </h3>
                <PushProtocol />

                <div className="mt-10 border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Patent Applications
                  </h3>

                  <p className="mt-2 max-w-4xl text-sm text-gray-500">
                    Verify the patents listed in here to get rewarded. Get more
                    rewards for being the verifier.
                  </p>
                </div>

                {/* Patent Applications panel */}
                <section aria-labelledby="quick-links-title">
                  {loading ? (
                    <div className="mt-20 flex items-center justify-center">
                      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
                    </div>
                  ) : (
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                    >
                      {patents.map((patent) => (
                        <Patent key={patent.email} patent={patent} />
                      ))}
                    </ul>
                  )}
                </section>

                <div className="mt-10 border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Validate Approved Patents
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm text-gray-500">
                    Validate
                  </p>
                </div>

                {/* Patent Applications panel */}
                <section aria-labelledby="quick-links-title">
                  {loading ? (
                    <div className="mt-20 flex items-center justify-center">
                      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
                    </div>
                  ) : (
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                    >
                      {patents.slice(0, 3).map((patent) => (
                        <Patent key={patent.email} patent={patent} />
                      ))}
                    </ul>
                  )}
                </section>

                <div className="mt-10 border-b border-gray-200 pb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    False Claim Patents
                  </h3>
                  <p className="mt-2 max-w-4xl text-sm text-gray-500">
                    Review patents marked as False claims.
                  </p>
                </div>

                {/* Patent Applications panel */}
                <section aria-labelledby="quick-links-title">
                  {loading ? (
                    <div className="mt-20 flex items-center justify-center">
                      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
                    </div>
                  ) : (
                    <ul
                      role="list"
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
                    >
                      {patents.slice(0, 1).map((patent) => (
                        <Patent key={patent.email} patent={patent} />
                      ))}
                    </ul>
                  )}
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                {/* Announcements */}
                <section aria-labelledby="announcements-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="announcements-title"
                      >
                      
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-5 divide-y divide-gray-200"
                        >
                          {announcements.map((announcement) => (
                            <li key={announcement.id} className="py-5">
                              <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                <h3 className="text-sm font-semibold text-gray-800">
                                  <a
                                    href={announcement.href}
                                    className="hover:underline focus:outline-none"
                                  >
                                    {/* Extend touch target to entire panel */}
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    />
                                    {announcement.title}
                                  </a>
                                </h3>
                                <p className="line-clamp-2 mt-1 text-sm text-gray-600">
                                  {announcement.preview}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                        
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Recent Hires */}
                <section aria-labelledby="recent-hires-title">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        className="text-base font-medium text-gray-900"
                        id="recent-hires-title"
                      >
                        Validators
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-5 divide-y divide-gray-200"
                        >
                          {recentHires.map((person) => (
                            <li key={person.handle} className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src={person.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium text-gray-900">
                                    {person.name}
                                  </p>
                                  <p className="truncate text-sm text-gray-500">
                                    {person.handle}
                                  </p>
                                </div>
                                <div>
                                  <a
                                    href={person.href}
                                    className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                                  >
                                    View
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </BasicLayout>
    </>
  )
}