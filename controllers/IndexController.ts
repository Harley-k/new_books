import { interfaces, controller, httpGet, TYPE } from 'inversify-koa-utils';
import { Index } from '../interface/Index';
import { inject } from 'inversify';
import { TAGS } from '../constant/tags';
import { IRouterContext } from 'koa-router'
import { provideThorwble } from '../ioc';

@provideThorwble(TYPE.Controller,'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller {
    private indexServices: Index
    constructor(@inject(TAGS.IndexServices) indexServices: Index) {
        this.indexServices = indexServices
    }
    @httpGet('/')
    private async index(ctx: IRouterContext, next:()=>Promise<any>) {
        const data = this.indexServices.getUser(1)
        ctx.body = {
            data
        }
    }
}
