import React from "react";
import { Text } from "./..";

export default function HomePageTwoSubnavmenu({
  subnav = "Recommended",
  subnavOne = "Top Rated",
  subnavTwo = "Trending",
  ...props
}) {
  return (
    <ul {...props}>
      <li>
        <a href="/recommended" target="_blank" rel="noreferrer" className="self-start">
          <Text as="p">{subnav}</Text>
        </a>
      </li>
      <li>
        <a href="/top-rated" className="self-end">
          <Text as="p">{subnavOne}</Text>
        </a>
      </li>
      <li>
        <a href="/trending" target="_blank" rel="noreferrer" className="self-end">
          <Text as="p">{subnavTwo}</Text>
        </a>
      </li>
    </ul>
  );
}
