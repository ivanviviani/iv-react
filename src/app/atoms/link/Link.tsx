import { ReactNode } from 'react';

export type LinkProps = {
    children?: ReactNode;
    className?: string;
    label?: string | null;
    href: string;
    target?: string;
    title?: string;
    bulletAfter?: boolean;
};

function Link(props: LinkProps) {
    const { children, className, label, href, target, title, bulletAfter } =
        props;

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
