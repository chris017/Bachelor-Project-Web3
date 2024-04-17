import Layout from "../components/layout"
import Image from "next/image"
import { IDKitWidget, VerificationLevel } from '@worldcoin/idkit'

export default function IndexPage() {
  return (
    <Layout>
           <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0066FF] to-[#59c2c6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-16 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Worldcoin Telefónica Example
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            This is an example integration site to demonstrate how to use WorldCoin for Telefonica Technology Strategy & Innovation area. 
            </p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
           {/* <div className="mt-10">
            <IDKitWidget
            
            app_id="app_bd46eb0f1e53a7aa6450f2169086932d" // obtained from the Developer Portal
            action="your-action" // this is your action name from the Developer Portal
            onSuccess={onSuccess} // callback when the modal is closed
	       
            verification_level={VerificationLevel.Device}
          >
            {({ open }) => <button onClick={open}>Verify with World ID</button>}
          </IDKitWidget>
          </div> */}
          </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="relative aspect-square w-9/12 md:w-2/3 lg:w-[50%]">
          <img className="absolute inset-0 h-full w-full translate-x-[-30%] scale-95 object-contain transition-transform duration-700 lg:translate-x-0 lg:group-hover:translate-x-[-30%]" src="https://worldcoin.org/images/home/world-id-2.png" alt="WorldCoin" width={500} height={500} />
          <img  className="absolute inset-0 h-full w-full  translate-x-[15%] object-contain transition-transform duration-700 lg:translate-x-0 lg:group-hover:translate-x-[15%]" src="https://worldcoin.org/images/home/world-id-1.png" alt="WorldCoin" width={500} height={500} />
        </div>
      </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0066FF] to-[#59c2c6] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </Layout>
    
  )
}
