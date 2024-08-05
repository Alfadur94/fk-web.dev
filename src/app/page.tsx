import { getStoryblokApi, StoryblokStory, StoryblokComponent } from "@storyblok/react/rsc";

import '../../styles/main.scss';

export default async function Home() {
    const response  = await fetchData();

    if (!response) {
        return <div>Failed to load content</div>;
    }

    const body = response.data.story.content.body;


    return (
        <main className={'test'}>
            {body.map((element:any) => {
                return <StoryblokComponent blok={element} key={element._uid}/>
            })}
        </main>
    );
}

async function fetchData() {
    const storyblokApi = getStoryblokApi();
    let sbParams: object = {
        version: "draft",
        resolve_relations: "projectOverview.projects"
    };

    try {
        const data =  storyblokApi.get('cdn/stories/home', sbParams);
        return data || null;
    } catch (error) {
        console.error(error);
        return null;
    }
}
