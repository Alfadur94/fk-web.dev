import { getStoryblokApi, StoryblokStory, StoryblokComponent } from "@storyblok/react/rsc";

import '../../styles/main.scss';

export default async function Home() {
    const { data } = await fetchData();

    const body = data.story.content.body;

    return (
        <main className={'test'}>
            <pre>
                {/*{JSON.stringify(data, null, 2)}*/}
            </pre>

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

    return storyblokApi.get('cdn/stories/home', sbParams, { cache: 'no-store' });
}
