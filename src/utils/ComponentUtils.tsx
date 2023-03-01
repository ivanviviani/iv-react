export function bem(componentRootClass: string): Function {
    console.log('bem called by ' + componentRootClass);
    return (el: string = '', mod: string = '') => {
        return componentRootClass
            .concat(el ? `__${el}` : '')
            .concat(mod ? `--${mod}` : '');
    };
}

export function uh(width: number, height?: number): string {
    return `https://unsplash.it/${width}${height ? '/' + height : ''}`;
}
