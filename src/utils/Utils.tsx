import DOMPurify from 'dompurify';
import { Duration, parse, serialize } from 'tinyduration';

// sanitize html
export function sanitizeHTML(htmlText: string) {
    return DOMPurify.sanitize(htmlText);
}

// time durations
export type TimeDuration = Duration;
export function parseDuration(durationString: string) {
    return parse(durationString);
}
export function serializeDuration(duration: TimeDuration) {
    return serialize(duration);
}
