function Link({
    className,
    label,
    href,
    target = '_self',
}: {
    className?: string;
    label: string;
    href: string;
    target?: string;
}) {
    return (
        <a
            {...(className ? { className } : {})}
            href={href}
            target={target}
        >
            {label}
        </a>
    );
}

export default Link;
