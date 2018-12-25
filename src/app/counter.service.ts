export class CounterService {
    inactiveSwicth = 0;
    activeSwitch = 0;

    addInactive() {
        this.inactiveSwicth++;
        console.log(this.inactiveSwicth);
    }

    addActive() {
        this.activeSwitch++;
        console.log(this.activeSwitch);
    }
}
