import { sanitizeHTML } from '../../../utils/Utils';

export type TextProps = {
    className?: string;
    text?: string;
    textIsRich?: boolean;
};

function Text(props: TextProps) {
    const { className, text, textIsRich } = props;

    return textIsRich ? (
        <div
            {...(className ? { className } : {})}
            dangerouslySetInnerHTML={{ __html: text ? sanitizeHTML(text) : '' }}
        ></div>
    ) : (
        <p {...(className ? { className } : {})}>{text}</p>
    );
}

export default Text;
