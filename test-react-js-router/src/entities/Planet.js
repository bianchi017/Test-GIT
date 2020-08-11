class Planet {
    constructor(name, terrain, dayLongerAsEarth) {
        this.name = name;
        this.terrain = terrain;
        this.dayLongerAsEarth = dayLongerAsEarth;
    }
    getName = () => this.name;
    getTerrain = () => this.terrain;
    getDayLongerAsEarth = () => this.dayLongerAsEarth;
    toArray = () => [this.getName(), this.getTerrain(), this.getDayLongerAsEarth() ? 'Sí' : 'No'];
}
export default Planet;