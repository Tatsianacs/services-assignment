import {CounterService} from "./counter.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
    activeUsers: Array<string> = ['Max', 'Anna'];
    inactiveUsers: Array<string> = ['Chris', 'Manu'];


    constructor(private counterService: CounterService) {
    }

    addToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.addInactive();
    }

    addToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.addActive();
    }
}
