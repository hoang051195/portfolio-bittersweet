"use client";

import Link from "next/link";
import { socialIcons } from "@/utils/constants";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialIcons.map((icon, index) => {
        return (
          <Link
            href={icon.path}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default Socials;
