import ResponsiveImage from "../atoms/ResponsiveImage";

interface IProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}


const ProjectCard: React.FC<IProjectCardProps> = ( props :any ) => {
    const baseClass = 'project-card'

    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__image`}>
                <ResponsiveImage {...props.image} />

                {/*<img src={props.image?.filename}/>*/}
            </div>
            <div className={`${baseClass}__title`}>
                <h3>{props.title}</h3>
            </div>
            <div className={`${baseClass}__description`}>
                <p>{props.description}</p>
            </div>
            <div className={`${baseClass}__link`}>
                <a href={props.link?.url} target="_blank" rel="noopener noreferrer">
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
