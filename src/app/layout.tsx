import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../../components/StoryblokProvider";
import React from "react";


storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu"
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {

    console.log(process.env.STORYBLOK_ACCESS_TOKEN)

  return (
      <StoryblokProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </StoryblokProvider>
  )
}