import React from "react";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import FeedCard from "@/components/FeedCard";
import { SlOptions } from "react-icons/sl";

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Twitter Blue",
    icon: <BiMoney />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
  {
    title: "More Options",
    icon: <SlOptions />,
  },
];
export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen px-56 ">
      <div className="col-span-3 pt-1 px-4 ml-[6rem]">
        <div className="text-2xl h-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all w-fit">
          <BsTwitter />
        </div>
        <div className="mt-2 text-xl pr-4">
          <ul>
            {sidebarMenuItems.map((item) => (
              <li
                key={item.title}
                className="flex justify-start items-center gap-4 hover:cursor-pointer hover:bg-gray-800 rounded-full px-5 py-2 w-fit transition-all mt-2"
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 px-3 font-semibold">
            <button className="bg-[#1d9bf0] py-3 rounded-full w-full  text-lg">
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5  border-r-[0.2px] border-l-[0.2px]  border-gray-600 h-screen overflow-scroll  no-scrollbar ">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-3"></div>
    </div>
  );
}
