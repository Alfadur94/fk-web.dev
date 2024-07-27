import ProjectCard from "./ProjectCard";

const ProjectOverview = ({blok}:any ) => {

    const baseClass = "project-overview"

    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__header`}>
                <div className={`${baseClass}__title`}>
                    {blok.title}
                </div>
                <div className={`${baseClass}__description`}>
                    {JSON.stringify(blok.description)}
                </div>
            </div>

            <div className={`${baseClass}__overview`}>
                {blok.projects.map((project:any) => {
                    return (
                        <ProjectCard {...project.content} />
                    )
                })}
            </div>
        </div>
    )
}
export default ProjectOverview

