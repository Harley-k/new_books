import { interfaces, controller, httpGet, TYPE } from 'inversify-koa-utils';
import { Index } from '../interface/Index';
import { inject } from 'inversify';
import { TAGS } from '../constant/tags';
import { IRouterContext } from 'koa-router'
import { provideThorwble } from '../ioc';
import { UserServices, UserProperties } from '../services/UserServices'
@provideThorwble(TYPE.Controller, 'IndexController')
@controller('/')
export default class IndexController implements interfaces.Controller {
    private indexServices: Index
    @inject(TAGS.IndexServices) UserServices: UserProperties
    constructor(@inject(TAGS.IndexServices) indexServices: Index) {
        this.indexServices = indexServices
    }
    @httpGet('/')
    private async index(ctx: IRouterContext, next: () => Promise<any>) {
        const data = this.indexServices.getUser(1)
        const user_service = UserServices.register('123345', '326276140@qq.com')
        console.log(user_service)
        ctx.body = {
            data
        }
    }
}
