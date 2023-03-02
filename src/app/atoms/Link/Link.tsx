import { ReactNode } from 'react';

function Link({
    children,
    className,
    label,
    href,
    target = '_self',
    title,
    bulletAfter = false,
}: {
    children?: ReactNode;
    className?: string;
    label?: string | null;
    href: string;
    target?: string;
    title?: string;
    bulletAfter?: boolean;
}) {
    return (
        <a
            {...(className ? { className } : {})}
            href={href}
            target={target}
            {...(title ? { title } : {})}
            {...(bulletAfter ? { 'data-bullet-after': '' } : {})}
        >
            {label && !children && label}
            {children}
        </a>
    );
}

export default Link;
