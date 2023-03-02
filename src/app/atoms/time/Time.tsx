import { TimeDuration, serializeDuration } from '../../../utils/Utils';

function Time({ duration, label }: { duration: TimeDuration; label: string }) {
    return <time dateTime={serializeDuration(duration)}>{label}</time>;
}

export default Time;
