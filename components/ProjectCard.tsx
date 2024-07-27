interface ProjectCardProps {
    content: {
        title: string;
        description: string;
        image: string;
        link: string;
    }
}

const ProjectCard: React.FC<ProjectCardProps> = ( {blok}:any ) => {
    const baseClass = 'project-card'

    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__image`}>
                <img src={blok.image.filename}/>
            </div>
            <div className={`${baseClass}__title`}>
                <h3>{blok.title}</h3>
            </div>
            <div className={`${baseClass}__description`}>
                <p>{blok.description}</p>
            </div>
            <div className={`${baseClass}__link`}>
                <a href={blok.link.url} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default ProjectCard;
