import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types'
import { AggregateRoot } from '@node-ts/ddd'
import { UserRegistered, UserDisabled } from './users';
import { provide } from 'inversify-binding-decorators';
import { TAGS } from '../constant/tags';
export interface UserProperties extends AggregateRootProperties {
    isEnabled: boolean,
    email: string,
    passwordChangedAt: Date | undefined
}
@provide(TAGS.UserServices)
export class UserServices extends AggregateRoot implements UserProperties {
    version: number;
    isEnabled: boolean;
    id: string;
    email: string;
    passwordChangedAt: Date | undefined;
    static register(id: Uuid, email: string): UserServices {
        const userRegistered = new UserRegistered(id, email, true)
        const user = new UserServices(id)
        user.when(userRegistered)
        return user
    }
    disable(): void {
        const userDisabled = new UserDisabled(this.id, false)
        super.when(userDisabled)
    }

    protected whenUserRegistered(event: UserRegistered) {
        this.email = event.email
        this.isEnabled = event.isEnabled
    }
    protected whenUserDisabled(event: UserDisabled): void {
        this.isEnabled = event.isEnabled
    }
} 