export type PictureProps = {
    className?: string;
    srcSets: PictureSourceProps[];
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
};

function Picture(props: PictureProps) {
    const { className, srcSets, src, alt, loading } = props;
    return (
        <picture {...(className ? { className } : {})}>
            {srcSets.map((srcSet, i) => (
                <PictureSource
                    {...srcSet}
                    key={i}
                />
            ))}
            <img
                src={src}
                alt={alt}
                loading={loading}
            />
        </picture>
    );
}

interface PictureSourceProps {
    type?: string;
    srcSet: string;
    media?: string;
}

function PictureSource(props: PictureSourceProps) {
    return <source {...props} />;
}

export default Picture;
