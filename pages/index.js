import Head from "next/head";
import { HiChevronRight } from "react-icons/hi";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";
import ReactPlayer from "react-player";
import kids from "../public/assets/kids.png";
import mobile from "../public/assets/mobile.jpg";
import tv from "../public/assets/tv.png";
import boxShot from "../public/assets/boxshot.png";
import download from "../public/assets/download-icon.gif";
import { useState, useRef } from "react";

export default function Home() {
  const [session, loading] = useSession();
  const [state, setState] = useState({
    show: false,
    toggle: false,
  });
  const toggle = useRef();

  const handleClick = (e) => {
    if (faq.toggle === false && faq.show === false) {
      setFaq({
        toggle: true,
        show: true,
      });
    } else if (faq === true) {
      setFaq(false);
    }
    // setFaq(!faq);
    console.log(faq);
    console.log(e);
  };

  return (
    <div className="bg-black overflow-hidden">
      <Head>
        <title>Netflix Clone</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="flex flex-col items-center overflow-hidden justify-center xl:min-h-screen bg-black"
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/assets/hero-bg.jpg)",
        }}
      >
        <header className="flex justify-between w-full px-12 py-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0.238 0.034 919.406 248.488"
              className="w-28"
            >
              <path
                fill="#e50914"
                d="M870.46 118.314l49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
              />
            </svg>
          </div>
          <div>
            {!session ? (
              <button
                onClick={() => signIn("google")}
                className="flex items-center bg-red-500 text-white text-sm px-4 py-2 rounded"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => signOut()}
                className="flex items-center bg-red-500 text-white text-sm px-4 py-2 rounded"
              >
                Sign Out
              </button>
            )}
          </div>
        </header>

        <div className="flex flex-col md:justify-center md:py-36 lg:py-32 items-center flex-1 py-16 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium text-white">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-white mt-4 mb-5">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-white text-xl  mx-20 md:mx-auto md:mt-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="flex flex-col lg:flex-row mt-4 w-11/12 lg:w-full">
            <input
              type="email"
              className="bg-white text-gray-500 px-4 py-3 lg:py-5 min-w-lg w-full focus:outline-none"
              placeholder="Email address"
            />
            <button
              onClick={() => signIn("google")}
              className="flex justify-around md:justify-center items-center mx-auto py-2 px-3 lg:py-4 bg-red-600 mt-4 lg:mt-0 w-38 md:w-48 lg:w-3/5 text-white"
            >
              <span className="text-lg md:text-4xl">Get Started</span>
              <HiChevronRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen">
        <div className="w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="text-white text-center pt-16 pb-10 lg:flex justify-between items-center lg:pt-10 lg:pb-6">
            <div className="lg:text-left">
              <h2 className="text-5xl font-medium lg:text-6xl">
                Enjoy on your TV.
              </h2>
              <p className="text-xl pt-4 lg:text-2xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </p>
            </div>
            <div className="w-full">
              <div className="w-2/3 h-2/3 relative mx-auto">
                <Image
                  className="z-30"
                  src={tv}
                  alt="tv"
                  width="450"
                  height="450"
                  objectFit="cover"
                />

                <ReactPlayer
                  className="absolute top-0 left-5 bottom-0 right-0 z-10 mb-1 -ml-3 "
                  url="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                  loop={true}
                  playing={true}
                  muted={true}
                  width="95%"
                  height="95%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen">
        <div className="w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="text-white text-center pt-16 pb-10 lg:flex justify-between items-center">
            <div className="order-2">
              <h2 className="text-5xl font-medium">
                Download your shows to watch offline.
              </h2>
              <p className="text-xl pt-4">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
            <div className="relative">
              <Image
                src={mobile}
                alt="mobile"
                width="450"
                height="450"
                objectFit="cover"
              />
              <div className="w-3/4 absolute top-3/4 bg-black left-0 bottom-0 right-0 mx-auto flex justify-between items-center border-2 border-gray-400 py-2 px-3 h-16 rounded-lg">
                <div className="flex">
                  <Image
                    src={boxShot}
                    alt="boxshot"
                    width="30"
                    height="30"
                    objectFit="cover"
                  />
                  <div className="ml-5">
                    <div className="font-medium">Stranger Things</div>
                    <div className="text-blue-700 text-left text-sm">
                      Downloading...
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src={download}
                    alt="download-icon"
                    width="50"
                    height="50"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen">
        <div className="w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="text-white text-center py-20">
            <h2 className="text-5xl font-medium">Watch everywhere.</h2>
            <p className="text-xl pt-4">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen">
        <div className="w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="text-white text-center py-16 lg:flex justify-between items-center">
            <div className="order-2 lg:text-left lg:w-2/5">
              <h2 className="text-5xl font-medium">
                Create profiles for kids.
              </h2>
              <p className="text-xl pt-4">
                Send kids on adventures with their favorite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div className="order-1">
              <Image
                src={kids}
                alt="kids"
                width="450"
                height="450"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen">
        <div className="w-full md:w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="text-white text-center py-16">
            <h2 className="text-3xl lg:text-5xl font-medium">
              Frequently Asked Questions
            </h2>
            <div className="w-full mt-6">
              <div className="q1 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>What is Netflix?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <p className="text-left text-xl mt-4">
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. Theres
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>

              <div className="q2 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>How much does Netflix cost?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₦1,200 to ₦4,400 a month. No extra costs, no
                    contracts.
                  </p>
                </div>
              </div>

              <div className="q3 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>Where can I watch?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    Watch anywhere, anytime, on an unlimited number of devices.
                    Sign in with your Netflix account to watch instantly on the
                    web at netflix.com from your personal computer or on any
                    internet-connected device that offers the Netflix app,
                    including smart TVs, smartphones, tablets, streaming media
                    players and game consoles.
                  </p>
                  <p className="text-left text-xl mt-0.5">
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    {`you're`} on the go and without an internet connection.
                    Take Netflix with you anywhere.
                  </p>
                </div>
              </div>

              <div className="q4 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>How do I cancel?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    Netflix is flexible. There are no pesky contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </div>
              </div>

              <div className="q5 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>What can I watch on Netflix?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </div>
              </div>

              <div className="q6 mb-2">
                <div className="flex justify-between text-xl items-center px-6 py-4 bg-gray-800">
                  <div>Is Netflix good for kids?</div>
                  <button onClick={handleClick}>
                    <IoAddSharp className="text-white w-7 h-7" />
                  </button>
                </div>
                <div
                  style={
                    !state.show ? { display: "none" } : { display: "block" }
                  }
                  className="mt-0.5 px-6 py-4 bg-gray-800 text-left text-xl"
                >
                  <p className="text-left text-xl">
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and movies in their own space.
                  </p>
                  <p className="text-left text-xl mt-0.5">
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg pt-3 w-3/5 mx-auto">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col mt-4 w-5/6 mx-auto">
              <input
                type="email"
                className="bg-white text-gray-500 px-4 py-3 lg:py-5 min-w-lg w-full focus:outline-none"
                placeholder="Email address"
              />
              <button
                onClick={() => signIn("google")}
                className="flex justify-around md:justify-center  items-center mx-auto py-2 px-3 lg:py-4 bg-red-600 mt-4 lg:mt-3 w-38 md:w-48 lg:w-2/5 text-white rounded-sm"
              >
                <span className="text-lg md:text-4xl">Get Started</span>
                <HiChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-3 bg-gray-800 border-0" />

      <div className="w-screen mx-auto">
        <div className="w-5/6 lg:w-4/6 h-full mx-auto">
          <div className="py-14 pb-10 text-gray-500">
            <p>Questions? Contact us.</p>
            <div className="flex flex-wrap md:flex-nowrap justify-between  py-8">
              <div className="w-1/2 md:w-1/4">
                <ul className="">
                  <li className="py-1">FAQ</li>
                  <li className="py-1">Investor Relations</li>
                  <li className="py-1">Privacy</li>
                  <li className="py-1">Speed Test</li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4">
                <ul className="">
                  <li className="py-1">Help Center</li>
                  <li className="py-1">Jobs</li>
                  <li className="py-1">Cookie Preferences</li>
                  <li className="py-1">Legal Notices</li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4">
                <ul className="">
                  <li className="py-1">Account</li>
                  <li className="py-1">Ways to watch</li>
                  <li className="py-1">Corporate Information</li>
                  <li className="py-1">Only on Netflix</li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/4">
                <ul className="">
                  <li className="py-1">Media Center</li>
                  <li className="py-1">Terms of Use</li>
                  <li className="py-1">Contact Us</li>
                </ul>
              </div>
            </div>
            <p>Netflix Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}
