import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../../components/StoryblokProvider";
import React from "react";
import Hero from "../../components/Hero";
import ProjectCard from "../../components/ProjectCard";

const components = {
    hero: Hero,
    projectCard: ProjectCard,
}

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu"
  },
    components
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <StoryblokProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </StoryblokProvider>
  )
}