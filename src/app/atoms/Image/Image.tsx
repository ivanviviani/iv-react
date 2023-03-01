function Image({
    className,
    src,
    alt = '',
    loading = 'lazy',
}: {
    className?: string;
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
}) {
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
