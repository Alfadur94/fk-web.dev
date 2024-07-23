// import { getStoryblokApi } from "@storyblok/react/rsc";
import {getStoryblokApi, StoryblokStory} from "@storyblok/react/rsc";



export default async function Home() {
    const { data } = await fetchData();

    return (
        <div>
            <StoryblokStory story={data.story} />
        </div>
    );
}

export async function fetchData() {
    let sbParams: object = { version: "draft" };
    const storyblokApi = getStoryblokApi();

    return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}
