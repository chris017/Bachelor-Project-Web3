import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import styles from "./header.module.css"
import { signIn, signOut, useSession } from "next-auth/react"
import tef from "../assets/img/Telefonica-Primaerlogo-02-2024_Blue_RGB.png"
import Image from "next/image"
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Client', href: '/client', current: false },
    
    { name: 'Server', href: '/server', current: false },
    { name: 'Protected', href: '/protected', current: false },

    { name: 'API', href: '/api-example', current: false },

    // { name: 'Admin', href: '/admin', current: false },
    // { name: 'Me', href: '/me', current: false },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-28" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={tef}
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className={styles.signedInStatus}> {/* Use your CSS class */}
              <p
                className={`nojs-show ${
                  !session && loading ? styles.loading : styles.loaded
                }`}
              >
                {!session && (
                  <>
                    <a
                      href={`/api/auth/signin`}
                      className={styles.buttonPrimary}
                      onClick={(e) => {
                        e.preventDefault();
                        signIn("worldcoin"); // when worldcoin is the only provider
                        // signIn() // when there are multiple providers
                      }}
                    >
                      Sign in
                    </a>
                  </>
                )}
                {session?.user && (
                  <>
                    {session.user.image && (
                      <span
                        style={{ backgroundImage: `url('${session.user.image}')` }}
                        className={styles.avatar}
                      />
                    )}
                    {/* <span className={styles.signedInText}>
                      <small>Signed in as</small>
                      <br />
                      <strong>{session.user.email ?? session.user.name}</strong>
                    </span> */}
                    <a
                      href={`/api/auth/signout`}
                      className={styles.button}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
            </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src={tef}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className={styles.signedInStatus}> {/* Use your CSS class */}
              <p
                className={`nojs-show ${
                  !session && loading ? styles.loading : styles.loaded
                }`}
              >
                {!session && (
                  <>
                    
                    <a
                      href={`/api/auth/signin`}
                      className={styles.buttonPrimary}
                      onClick={(e) => {
                        e.preventDefault();
                        signIn("worldcoin"); // when worldcoin is the only provider
                        // signIn() // when there are multiple providers
                      }}
                    >
                      Sign in
                    </a>
                  </>
                )}
                {session?.user && (
                  <>
                    {session.user.image && (
                      <span
                        style={{ backgroundImage: `url('${session.user.image}')` }}
                        className={styles.avatar}
                      />
                    )}
                    {/* <span className={styles.signedInText}>
                      <small>Signed in as</small>
                      <br />
                      <strong>{session.user.email ?? session.user.name}</strong>
                    </span> */}
                    <a
                      href={`/api/auth/signout`}
                      className={styles.button}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sign out
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


    </div>
  )
}
