import DOMPurify from 'dompurify';
import { Duration, parse, serialize } from 'tinyduration';
import { BreakpointKey, BREAKPOINTS } from './Constants';
import emojiFlags from 'emoji-flags';

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

// breakpoint
export function breakpointInPixels(key: BreakpointKey, offset?: number) {
    const breakpointValue = BREAKPOINTS.get(key);
    if (!breakpointValue) return 0;
    return breakpointValue + (offset ?? 0);
}

// emoji flag
export function emojiFlag(countryCode: string) {
    return emojiFlags.countryCode(countryCode.toUpperCase());
}
