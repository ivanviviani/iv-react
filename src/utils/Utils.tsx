import DOMPurify from 'dompurify';
import { Duration, parse, serialize } from 'tinyduration';
import { BreakpointKey, BREAKPOINTS } from './Constants';
import emojiFlags from 'emoji-flags';
import {
    _1000_MILLISECONDS,
    _24_HOURS,
    _30_DAYS,
    _365_DAYS,
    _60_MINUTES,
    _60_SECONDS,
} from './Constants';

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

// current year
export function currentYear() {
    return new Date().getFullYear();
}

// current date ISO
export function currentDateISO() {
    return new Date().toISOString().split('T')[0];
}

// duration
export function getDurationYearsMonths(from: Date, to: Date) {
    const fromT = from.getTime();
    const toT = to.getTime();
    const diffT = toT - fromT;
    return millisToYearsMonths(diffT);
}

export function millisToYears(millis: number) {
    const divisor =
        _365_DAYS * _24_HOURS * _60_MINUTES * _60_SECONDS * _1000_MILLISECONDS;
    return {
        years: Math.floor(millis / divisor),
        remainder: millis % divisor,
    };
}

export function millisToMonths(millis: number) {
    const divisor =
        _30_DAYS * _24_HOURS * _60_MINUTES * _60_SECONDS * _1000_MILLISECONDS;
    return {
        months: Math.ceil(millis / divisor),
        remainder: millis % divisor,
    };
}

export function millisToYearsMonths(millis: number) {
    const { years, remainder } = millisToYears(millis);
    const { months } = millisToMonths(remainder);
    return {
        years,
        months,
    };
}

// separate JSX array reducer
export function separateJSXArrayReducer(separator: string) {
    return (acc: JSX.Element, curr: JSX.Element) => {
        return (
            <>
                {acc} {separator} {curr}
            </>
        );
    };
}
