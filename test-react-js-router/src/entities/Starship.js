class Starship {
    constructor(name, cost, maxCargo) {
        this.name = name;
        this.cost = cost;
        this.maxCargo = maxCargo;
    }
    getName = () => this.name;
    getCost = () => this.cost;
    getMaxCargo = () => this.maxCargo;
    toArray = () => [this.getName(), this.getCost(), this.getMaxCargo()];
}
export default Starship;