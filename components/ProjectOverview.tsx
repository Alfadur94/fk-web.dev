"use client"

import ProjectCard from "./ProjectCard";
// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const ProjectOverview = ({blok}: any) => {
    const baseClass = "project-overview"

    // https://splidejs.com/integration/react-splide/
    // "rgot-react-splide": "^0.7.12",

    const sliderOptions = {
        type: 'loop',
        perPage: 3,
        gap:'1rem',
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
            },
            640: {
                perPage: 1,
            },
        }
    }


    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__header`}>
                <div className={`${baseClass}__title`}>
                    <h2>{blok.headline}</h2>
                </div>
                <div className={`${baseClass}__description`}>
                    <p>{blok.description}</p>
                </div>
            </div>
            <div className={`${baseClass}__overview`}>
                <Splide
                    options={sliderOptions}
                    >
                    {blok.projects.map((project: any, index: number) => (
                        <SplideSlide key={project._uid}>
                            <ProjectCard {...project.content.projectCard[0]} />
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}
export default ProjectOverview

