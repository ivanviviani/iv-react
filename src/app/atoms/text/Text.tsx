import { useCallback, useMemo } from 'react';
import { bem } from '../../../utils/ComponentUtils';
import { sanitizeHTML } from '../../../utils/Utils';
import './Text.scss';
const cl = bem('c-text');

function Text({
    extraClasses = '',
    text = '',
    textIsRich = false,
}: {
    extraClasses?: string;
    text?: string;
    textIsRich?: boolean;
}) {
    const rootClasses = `${cl()} ${extraClasses}`.trim();
    const sanitizedText = useMemo(() => {
        return sanitizeHTML(text);
    }, []);

    return textIsRich ? (
        <div
            className={rootClasses}
            dangerouslySetInnerHTML={{ __html: sanitizedText }}
        ></div>
    ) : (
        <p className={rootClasses}>{text}</p>
    );
}

export default Text;
