export interface IResponsiveImage {
    filename: string;
    alt: string;
    title?: string;
    caption?: string;
}

const ResponsiveImage = (props: IResponsiveImage) => {

    const media = [{
        size: 380,
        url: props.filename + '/m/380x0/'
    }, {
        size: 768,
        url: props.filename + '/m/768x0/'
    }, {
        size: 1024,
        url: props.filename + '/m/1024x0/'
    }, {
        size: 1920,
        url: props.filename
    }]

    return (
        <picture>
            {media.map((item, index) => {
                return (
                    <source key={index} media={`(max-width: ${item.size}px)`} srcSet={item.url} />
                )
            })}
            <img src={props.filename} alt={props.alt} title={props.title} />

            {props.caption && <figcaption>{props.caption}</figcaption>}
        </picture>
    )
}
export default ResponsiveImage