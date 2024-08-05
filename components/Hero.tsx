import ResponsiveImage from "../atoms/ResponsiveImage";

interface HeroProps {
    content: {
        headline: string;
        content: string;
        image: string;
    };
}

const Hero: React.FC<HeroProps> = ( {blok}:any ) => {
    const baseClass = 'hero'

    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__text-content`}>
                <div className={`${baseClass}__headline`}>
                    <h1>{blok.headline}</h1>
                </div>
                <div className={`${baseClass}__content`}>
                    <p>{blok.content}</p>
                </div>
            </div>
            <div className={`${baseClass}__image`}>
                <ResponsiveImage {...blok.image} />
            </div>
        </div>
    );
}

export default Hero;