import React from "react";

const AnnouncementBar = () => {
  return (
    <a
      href="https://pro.aceternity.com"
      className="block no-underline"
    >
      <div className="bg-gradient-to-b from-blue-500 to-blue-600 px-2 py-2 text-left font-sans text-xs font-medium tracking-tight text-white sm:px-4 sm:py-3 sm:text-base md:text-center">
        Introducing{" "}
        <span className="rounded-sm px-1 py-1 font-bold">
          Aceternity UI Pro
        </span>{" "}
        - 70+ premium component packs and templates to build amazing websites.
      </div>
    </a>
  );
};

export default AnnouncementBar;