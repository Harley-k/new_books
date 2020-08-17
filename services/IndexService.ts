import { Index } from "../interface/Index";
import { Module } from "../modules/user";
import {provide} from 'inversify-binding-decorators';
import { TAGS } from "../constant/tags";
@provide(TAGS.IndexServices)
export class IndexService implements Index{
    private userStorage:Module.User[]=[
        {
            email:'Harley_K@s.upc.edu.cn',
            name:'Harley-k_0'
        },
        {
            email:'Harley_K@s.upc.edu.cn',
            name:'Harley-k_1'
        }
    ]
    public getUser(id: number): Module.User {
        let result:Module.User=this.userStorage[id];
        return result
        // throw new Error("Method not implemented.");
    }

}