"use client";
import { ReactNode } from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";


interface StoryblokProviderProps {
    children: ReactNode;
}

const components = {};

storyblokInit({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN as string,
    use: [apiPlugin],
    apiOptions: {
        region: "eu",
    },
    components,
});

const StoryblokProvider: React.FC<StoryblokProviderProps> = ({ children }) => {
    return <>{children}</>;
};

export default StoryblokProvider;
