"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        color="rgb(37 99 235)"
        shallowRouting
        options={{
          showSpinner: false,
        }}
      />
    </>
  );
};

export default ProgressBarProvider;
