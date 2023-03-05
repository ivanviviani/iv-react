import { TimeDuration, serializeDuration } from '../../../utils/Utils';

export type TimeProps = {
    dateTime: TimeDuration | string;
    text: string;
};

function Time(props: TimeProps) {
    const { dateTime, text } = props;
    return (
        <time
            dateTime={
                typeof dateTime === 'string'
                    ? dateTime
                    : serializeDuration(dateTime)
            }
        >
            {text}
        </time>
    );
}

export default Time;
