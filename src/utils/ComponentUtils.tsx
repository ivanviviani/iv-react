export function bem(componentRootClass: string) {
    console.log('bem called by ' + componentRootClass);
    return (el: string = '', mod: string = '') => {
        return componentRootClass
            .concat(el ? `__${el}` : '')
            .concat(mod ? `--${mod}` : '');
    };
}
