import React from "react";
import { Button } from "./..";

export default function HomePageTwoCategorylist({
  alertsAnd = "Alerts and Updates",
  appearance = "Appearance",
  bookmarks = "Bookmarks",
  download = "Download Management",
  feedsnewsAnd = "Feeds & News",
  games = "Games & Entertainment",
  language = "Language Support",
  other = "Other",
  photosmusicvide = "Photos, Music, & Videos",
  privacy = "Privacy & Security",
  searchTools = "Search Tools",
  shopping = "Shopping",
  social = "Social & Communication",
  tabs = "Tabs",
  webDevelopment = "Web Development",
  ...props
}) {
  return (
    <div {...props}>
      <div className="mx-auto flex w-full max-w-[1696px] items-center gap-4 self-stretch md:flex-col">
      <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/alerts-updates/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[48px] min-w-[243px] items-center justify-center rounded-[20px] bg-blue-A700 px-[30px] text-center text-xl text-white-A700 sm:px-5">
          {alertsAnd}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/appearance/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[48px] min-w-[175px] items-center justify-center rounded-[20px] bg-indigo-A200 px-[30px] text-center text-xl text-white-A700 sm:px-5">
          {appearance}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/bookmarks/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[155px] items-center justify-center self-start rounded-[20px] bg-indigo-A700_01 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {bookmarks}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/download-management/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[262px] items-center justify-center self-start rounded-[20px] bg-blue-800 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {download}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/feeds-news-blogging/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] w-full flex-1 items-center justify-center rounded-[20px] bg-blue-A700 px-[30px] text-center text-lg text-white-A700 md:self-stretch sm:px-5">
          {feedsnewsAnd}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/games-entertainment/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] w-full flex-1 items-center justify-center rounded-[20px] bg-indigo-A200 px-[30px] text-center text-lg text-white-A700 md:self-stretch sm:px-5">
          {games}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/language-support/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[218px] items-center justify-center self-start rounded-[20px] bg-blue-A700_01 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {language}
        </Button>
        </a>
      </div>
      <div className="mx-auto mb-[70px] flex w-full max-w-[1594px] gap-4 md:flex-col">
      <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/other/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[109px] items-center justify-center rounded-[20px] bg-indigo-A700 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {other}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/photos-music-videos/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] w-full flex-1 items-center justify-center rounded-[20px] bg-blue-800 px-[30px] text-center text-lg text-white-A700 md:self-stretch sm:px-5">
          {photosmusicvide}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/privacy-security/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[214px] items-center justify-center rounded-[20px] bg-blue-A700 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {privacy}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/search-tools/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[170px] items-center justify-center rounded-[20px] bg-indigo-A200 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {searchTools}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/shopping/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[141px] items-center justify-center rounded-[20px] bg-indigo-A700 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {shopping}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/social-communication/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] w-full flex-1 items-center justify-center rounded-[20px] bg-blue-800 px-[30px] text-center text-lg text-white-A700 md:self-stretch sm:px-5">
          {social}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/tabs/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[101px] items-center justify-center rounded-[20px] bg-blue-A700 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {tabs}
        </Button>
        </a>
        <a href="https://addons.mozilla.org/en-US/firefox/extensions/category/web-development/" target="_blank" rel="noopener noreferrer">
        <Button className="flex h-[45px] min-w-[216px] items-center justify-center rounded-[20px] bg-indigo-A200 px-[30px] text-center text-lg text-white-A700 sm:px-5">
          {webDevelopment}
        </Button>
        </a>
      </div>
    </div>
  );
}
