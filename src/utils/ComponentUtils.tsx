export function bem(componentRootClass: string): Function {
    return (el: string = '', mod: string = '') => {
        return componentRootClass
            .concat(el ? `__${el}` : '')
            .concat(mod ? `--${mod}` : '');
    };
}

export function uh(width: number, height?: number): string {
    return `https://unsplash.it/${width}${height ? '/' + height : ''}`;
}
