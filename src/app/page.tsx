import { getStoryblokApi, StoryblokStory, StoryblokComponent } from "@storyblok/react/rsc";
import styles from '../../styles/Home.module.css';
export default async function Home() {
    const { data } = await fetchData();

    const body = data.story.content.body;

    return (
        <main className={styles.main}>

            {body.map((element:any) => {
                return <StoryblokComponent blok={element} key={element._uid}/>
            })}
        </main>
    );
}

export async function fetchData() {
    const storyblokApi = getStoryblokApi();
    let sbParams: object = { version: "draft" };

    return storyblokApi.get('cdn/stories/home', sbParams, { cache: 'no-store' });
}
