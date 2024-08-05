import {getStoryblokApi, StoryblokComponent} from "@storyblok/react/rsc";

export default async function Project(params:any) {
    const {data} = await fetchData(params.slug);
    const body = data.story;

    return (
        <main className={''}>
            <h1> Project </h1>

            <pre>
                {JSON.stringify(data)}
            </pre>
        </main>
    );
}

async function fetchData(slug:any) {
    const storyblokApi = getStoryblokApi();
    let sbParams: object = { version: "draft" };

    return storyblokApi.get(`cdn/stories/projects/${slug}`, sbParams);
}