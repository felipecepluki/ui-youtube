"use client"

import Image from "next/image"; 

import { useState } from "react";
import Home from "../assets/sidebar/icons/home.svg";
import HomeFill from "../assets/sidebar/icons-fill/home-fill.svg";
import Explore from "../assets/sidebar/icons/explore.svg";
import ExploreFill from "../assets/sidebar/icons-fill/explore-fill.svg";
import Subscriptions from "../assets/sidebar/icons/subscriptions.svg";
import SubscriptionsFill from "../assets/sidebar/icons-fill/subscriptions-fill.svg";
import Library from "../assets/sidebar/icons/library.svg";
import LibraryFill from "../assets/sidebar/icons-fill/library-fill.svg";
import History from "../assets/sidebar/icons/history.svg";
import HistoryFill from "../assets/sidebar/icons-fill/history-fill.svg";
import YourVideos from "../assets/sidebar/icons/yourVideos.svg";
import WatchLater from "../assets/sidebar/icons/watchLater.svg";
import WatchLaterFill from "../assets/sidebar/icons-fill/watchLater-fill.svg";
import Liked from "../assets/sidebar/icons/liked.svg";
import LikedFill from "../assets/sidebar/icons-fill/liked-fill.svg";
import ArrowBottom from "../assets/sidebar/icons/arrowBottom.svg";
import ArrowTop from "../assets/sidebar/icons-fill/arrow-top.svg";

import Premium from "../assets/icons/premium.svg";
import Gaming from "../assets/icons/gaming.svg";
import Live from "../assets/icons/live.svg";
import Sports from "../assets/icons/sports.svg";

import Settings from "../assets/sidebar/icons/settings.svg";
import Reports from "../assets/sidebar/icons/report.svg";
import Help from "../assets/sidebar/icons/help.svg";
import Feedback from "../assets/sidebar/icons/feedback.svg";

import ProfileOne from "../assets/profiles/Icon-1.svg";
import ProfileTwo from "../assets/profiles/Icon-2.svg";
import ProfileThree from "../assets/profiles/Icon-3.svg";
import ProfileFour from "../assets/profiles/Icon-4.svg";
import ProfileFive from "../assets/profiles/Icon-5.svg";
import ProfileSix from "../assets/profiles/Icon-6.svg";
import ProfileSeven from "../assets/profiles/Icon-7.svg";
import { SectionsSidebar } from "./SectionsSidebar";

export default function Sidebar() {
  const [home, setHome] = useState(true);
  const [explore, setExplore] = useState(true);
  const [subscriptions, setSubscriptions] = useState(true);
  const [library, setLibrary] = useState(false);
  const [history, setHistory] = useState(false);
  const [watchLater, setWatchLater] = useState(false);
  const [liked, setLiked] = useState(false);
  const [arrowBottom, setArrowBottom] = useState(false);
  const [arrowBottomTwo, setArrowBottomTwo] = useState(false);

  return (
    <div className="w-60 h-full bg-[#212121] flex flex-col pt-3">
      <div className="pb-3">
        <SectionsSidebar
          variable={home}
          variableFunctionEnter={() => setHome(true)}
          variableFunctionLeave={() => setHome(false)}
          iconOne={HomeFill}
          iconTwo={Home}
          nameOfSection="Home"
        />
        <SectionsSidebar
          variable={explore}
          variableFunctionEnter={() => setExplore(true)}
          variableFunctionLeave={() => setExplore(false)}
          iconOne={SubscriptionsFill}
          iconTwo={Subscriptions}
          nameOfSection="Subscriptions"
        />
        <SectionsSidebar
          variable={subscriptions}
          variableFunctionEnter={() => setSubscriptions(true)}
          variableFunctionLeave={() => setSubscriptions(false)}
          iconOne={ExploreFill}
          iconTwo={Explore}
          nameOfSection="Explore"
        />
      </div>
      <div className="bg-[#303030] w-56 h-[1px]" />
      <div className="py-3">
        <SectionsSidebar
          variable={library}
          variableFunctionEnter={() => setLibrary(true)}
          variableFunctionLeave={() => setLibrary(false)}
          iconOne={LibraryFill}
          iconTwo={Library}
          nameOfSection="Library"
        />
        <SectionsSidebar
          variable={history}
          variableFunctionEnter={() => setHistory(true)}
          variableFunctionLeave={() => setHistory(false)}
          iconOne={HistoryFill}
          iconTwo={History}
          nameOfSection="History"
        />
        <SectionsSidebar
          variable={history}
          variableFunctionEnter={() => setHistory(true)}
          variableFunctionLeave={() => setHistory(false)}
          iconOne={YourVideos}
          iconTwo={YourVideos}
          nameOfSection="Your Videos"
        />
        <SectionsSidebar
          variable={watchLater}
          variableFunctionEnter={() => setWatchLater(true)}
          variableFunctionLeave={() => setWatchLater(false)}
          iconOne={WatchLaterFill}
          iconTwo={WatchLater}
          nameOfSection="Watch Later"
        />
        <SectionsSidebar
          variable={liked}
          variableFunctionEnter={() => setLiked(true)}
          variableFunctionLeave={() => setLiked(false)}
          iconOne={LikedFill}
          iconTwo={Liked}
          nameOfSection="Liked Videos"
        />
        <SectionsSidebar
          variable={arrowBottom}
          variableFunctionEnter={() => setArrowBottom(true)}
          variableFunctionLeave={() => setArrowBottom(false)}
          iconOne={ArrowTop}
          iconTwo={ArrowBottom}
          nameOfSection="Show More"
        />
      </div>
      <div className="bg-[#303030] w-56 h-[1px]" />
      <div className="py-3">
        <div className="px-6">
          <p className="font-roboto text-sm font-bold uppercase text-[#AAAAAA]">
            Subscriptions
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileOne} alt="Profile Image One" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            James Gouse
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileTwo} alt="Profile Image Two" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Alan Cooper
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileThree} alt="Profile Image Three" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Marcus Levin
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileFour} alt="Profile Image Four" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Alexis Sears
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileFive} alt="Profile Image Five" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Jessica Lambert
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileSix} alt="Profile Image Six" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Ana White
          </p>
        </div>
        <div className="flex flex-row cursor-pointer px-6 py-2 hover:bg-[#303030] transition-all">
          <Image src={ProfileSeven} alt="Profile Image Seven" />
          <p className="font-roboto text-sm font-normal text-white pl-[10px]">
            Skylar Dias
          </p>
        </div>
        <SectionsSidebar
          variable={arrowBottomTwo}
          variableFunctionEnter={() => setArrowBottomTwo(true)}
          variableFunctionLeave={() => setArrowBottomTwo(false)}
          iconOne={ArrowTop}
          iconTwo={ArrowBottom}
          nameOfSection="Show 13 more"
        />
      </div>
      <div className="bg-[#303030] w-56 h-[1px]" />
      <div className="py-3">
        <div className="px-6">
          <p className="font-roboto text-sm font-bold uppercase text-[#AAAAAA]">
            More from youtube
          </p>
        </div>
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Premium}
          iconTwo={Premium}
          nameOfSection="Youtube Premium"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Gaming}
          iconTwo={Gaming}
          nameOfSection="Gaming"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Live}
          iconTwo={Live}
          nameOfSection="Live"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Sports}
          iconTwo={Sports}
          nameOfSection="Sports"
        />
      </div>
      <div className="bg-[#303030] w-56 h-[1px]" />
      <div className="py-3">
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Settings}
          iconTwo={Settings}
          nameOfSection="Settings"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Reports}
          iconTwo={Reports}
          nameOfSection="Report history"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Help}
          iconTwo={Help}
          nameOfSection="Help"
        />
        <SectionsSidebar
          variable={""}
          variableFunctionEnter={() => {}}
          variableFunctionLeave={() => {}}
          iconOne={Feedback}
          iconTwo={Feedback}
          nameOfSection="Send feedback"
        />
      </div>
      <div className="bg-[#303030] w-56 h-[1px]" />
      <div className="py-4 px-6">
        <div className="flex flex-row justify-between w-[148px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            About
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Press
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Copyright
          </p>
        </div>
        <div className="flex flex-row justify-between w-[148px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Contact us
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Creators
          </p>
        </div>
        <div className="flex flex-row justify-between w-[148px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Advertise
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Developers
          </p>
        </div>
      </div>
      <div className="py-4 px-6">
        <div className="flex flex-row justify-between w-[189px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Terms
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Privacy
          </p>
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Policy & Safety
          </p>
        </div>
        <div className="flex flex-row justify-between w-[148px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            How Youtube works
          </p>
        </div>
        <div className="flex flex-row justify-between w-[148px]">
          <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
            Test new features
          </p>
        </div>
      </div>
      <div className="py-4 px-6">
        <p className="text-[#AAAAAA] font-roboto font-bold text-[13px]">
          © 2023 Google LLC
        </p>
      </div>
    </div>
  );
}
