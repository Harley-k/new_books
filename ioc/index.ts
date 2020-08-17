import { fluentProvide } from 'inversify-binding-decorators';

let provideThorwble = (identify: symbol, name: string) => {
    return fluentProvide(identify).whenTargetNamed(name).done()
}
export {
    provideThorwble
}