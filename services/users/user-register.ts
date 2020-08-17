import { Event } from '@node-ts/bus-messages';
import { Uuid } from '@node-ts/ddd-types';

export class UserRegistered extends Event {
    static readonly NAME = 'Harley-K/account/user-registered'
    $name = UserRegistered.NAME
    $version = 0
    constructor(readonly userID: Uuid, readonly email: string, readonly isEnabled: boolean) {
        super()
    }
}