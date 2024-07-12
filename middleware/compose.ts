/* eslint-disable @typescript-eslint/no-explicit-any */
type ComposeFunction = (...fns: ((...args: any[]) => any)[]) => (...args: any[]) => any;

function composeTwo(f: (...args: any[]) => any, g: (...args: any[]) => any) {
    return function (this: any, ...args: any[]) {
        return f.call(this, g.apply(this, args));
    };
}

const compose: ComposeFunction = (...fns) => {
    if (fns.length === 0) {
        throw new TypeError('compose requires at least one argument');
    }

    return fns.slice(1).reduce(composeTwo, fns[0]);
};

export function composeHandler(...fns: any[]): any {
    return compose(...fns.slice(0, fns.length - 1))(fns[fns.length - 1] as any);
}
