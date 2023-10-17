import React from "react";

function PopularSearchCard({
  color,
  href,
  trendingText,
  title,
  imageSrc,
  alt,
}) {
  return (
    <a
      href={href}
      className={`relative overflow-hidden rounded-[24px] border p-6 transition-all hover:shadow-400 md:px-6 md:py-[42px]`}
      style={{ borderColor: color }}
    >
      <p className="m-0 text-md text-[#8C8594]">{trendingText}</p>
      <h3 className="mb-0 mt-3 md:mt-8">{title}</h3>
      <p
        style={{
          textShadow: "0px 0px 2px #000",
        }}
        className="stroked bg-text absolute left-[24px] top-[40%] whitespace-nowrap text-[28px] font-bold text-transparent transition-all duration-500 md:left-[75px] md:top-[47%] md:text-[64px]"
      >
        {title}
      </p>
      <div className="absolute bottom-0 right-0 h-full max-h-[130px] w-[100px] object-contain md:max-h-[180px] md:w-[45%]">
        <img
          alt={alt}
          src={imageSrc}
          className="object-contain"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          sizes="100vw"
          decoding="async"
        />
      </div>
      <span className="mt-[64px] inline-block rounded-lg px-4 py-2 font-semibold transition-all md:mt-[100px]">
        View all
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
        </svg>
      </span>
    </a>
  );
}

function PopularSearches() {
  return (
    <div
      id="popular-searches"
      className="mx-auto flex max-w-screen-xl grid-cols-3 grid-rows-2 flex-col flex-wrap gap-4 px-4 py-[72px] md:grid md:py-[100px]"
    >
      <div className="mb-[48px] flex items-center md:mb-0">
        <h4 className="text-center text-[32px] font-bold leading-[48px] md:text-left md:text-[56px] md:leading-[67px]">
          Popular Searches on Apna
        </h4>
      </div>
      <PopularSearchCard
        color="#DE3700"
        href="/jobs/freshers-jobs?sourcePage=Home+Page"
        trendingText="TRENDING AT #1"
        title="Jobs for Freshers"
        imageSrc="/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Ffreshers-jobs.png&amp;w=3840&amp;q=50"
        alt="Jobs for Freshers"
      />
      <PopularSearchCard
        color="#722ED1"
        href="/jobs/work_from_home-jobs?sourcePage=Home+Page"
        trendingText="TRENDING AT #2"
        title="Work from home Jobs"
        imageSrc="/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fwork-from-home-jobs.png&amp;w=3840&amp;q=50"
        alt="Work from home Jobs"
      />
      <PopularSearchCard
        color="#CC0000"
        href="/jobs/part_time-jobs?sourcePage=Home+Page"
        trendingText="TRENDING AT #3"
        title="Part time Jobs"
        imageSrc="/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fpart-time-jobs.png&amp;w=3840&amp;q=50"
        alt="Part time Jobs"
      />
      <PopularSearchCard
        color="#1F8268"
        href="/jobs/female-jobs?sourcePage=Home+Page"
        trendingText="TRENDING AT #4"
        title="Jobs for Women"
        imageSrc="/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Fwomen-jobs.png&amp;w=3840&amp;q=50"
        alt="Jobs for Women"
      />
      <PopularSearchCard
        color="#0074E8"
        href="/international/jobs?sourcePage=Home+Page"
        trendingText="TRENDING AT #5"
        title="International Jobs"
        imageSrc="/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fmumbai_apnatime_prod%2Fapna-home%2Finternational-jobs.png&amp;w=3840&amp;q=50"
        alt="International Jobs"
      />
    </div>
  );
}

export default PopularSearches;
