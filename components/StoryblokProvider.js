"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */


const components = {

};

storyblokInit({
    accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
    apiOptions: {
        region: "eu",
    },
    components
});

export default function StoryblokProvider({ children }) {
    return children;
}