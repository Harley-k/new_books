import {Event} from '@node-ts/bus-messages';
import { Uuid } from '@node-ts/ddd-types';

export class UserPasswordChange extends Event{
    static readonly NAME = 'Harley-K/account/user-password-change'
    $name = UserPasswordChange.NAME
    $version = 0
    constructor(
        readonly userID:Uuid,
        readonly email:string,
        readonly passwordChangedAt:Date){
        super()
    }
    
}