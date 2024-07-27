interface HeroProps {
    content: {
        headline: string;
        content: string;
    };
}

const Hero: React.FC<HeroProps> = ( {blok}:any ) => {
    const baseClass = 'hero'

    return (
        <div className={`${baseClass}`}>
            <div className={`${baseClass}__headline`}>
                <h1>{blok.headline}</h1>
            </div>
            <div className={`${baseClass}__content`}>
                <p>{blok.content}</p>
            </div>
        </div>
    );
}

export default Hero;