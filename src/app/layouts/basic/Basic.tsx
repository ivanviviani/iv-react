import { Children, ReactNode, useRef } from 'react';
import { bem } from '../../../utils/ComponentUtils';
import './Basic.scss';
const cl = bem('l-basic');

function LayoutBasic({
    children,
    wrapMain = false,
    gap = false,
}: {
    children?: ReactNode;
    wrapMain?: boolean;
    gap?: boolean;
}) {
    const rootRef = useRef(null);
    const childrenArray = Children.toArray(children);
    const childElements = Children.map(childrenArray, (child, i) =>
        wrapLayoutItem(child, i)
    );

    const rootProps = {
        className: `${cl()} ${gap ? cl('', 'gap') : ''}`.trim(),
        ref: rootRef,
        'data-num-items': childrenArray.length ?? 0,
    };

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
