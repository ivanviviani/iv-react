export type ImageProps = {
    className?: string;
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
};

function Image(props: ImageProps) {
    const { className, src, alt, loading } = props;

    return (
        <img
            {...(className ? { className } : {})}
            src={src}
            alt={alt}
            loading={loading}
        />
    );
}

export default Image;
