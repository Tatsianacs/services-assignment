export class UserService {
    activeUsers: Array<string> = ['Max', 'Anna'];
    inactiveUsers: Array<string> = ['Chris', 'Manu'];

    addToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
    }

    addToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
    }
}
