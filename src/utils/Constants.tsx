export type BreakpointKey = 'm' | 'l' | 'xl';

export const BREAKPOINTS = new Map<string, number>([
    ['m', 768],
    ['l', 1024],
    ['xl', 1440],
]);
