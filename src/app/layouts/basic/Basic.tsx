import { ReactNode, useRef } from 'react';
import { bem } from '../../../utils/ComponentUtils';
import './Basic.scss';
const cl = bem('l-basic');

function LayoutBasic({
    children,
    wrapMain = false,
}: {
    children?: ReactNode | ReactNode[];
    wrapMain?: boolean;
}) {
    const root = useRef(null);
    const rootProps = {
        className: cl(),
        ref: root,
    };

    const childElements =
        !!children &&
        (Array.isArray(children)
            ? children?.map((child, i) => wrapLayoutItem(child, i))
            : wrapLayoutItem(children, 0));

    return wrapMain ? (
        <main
            id="main"
            {...rootProps}
        >
            {childElements}
        </main>
    ) : (
        <div {...rootProps}>{childElements}</div>
    );
}

function wrapLayoutItem(child?: ReactNode, index?: number) {
    if (!child) return <></>;
    return (
        <section
            key={`${cl('item')}--${index}`}
            className={cl('item')}
        >
            {child}
        </section>
    );
}

export default LayoutBasic;
