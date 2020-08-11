import React from 'react';
import axios from 'axios'
import Planet from "../entities/Planet";
import MainHeader from "../components/MainHeader";
import UserInput from "../components/UserInput";
import CustomTable from "../components/CustomTable";

class PlanetContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planetCollection: [],
        };
    }

    componentDidMount() {
        this.fetchAllPlanets();
    }

    async fetchPlanetById(id) {
        const fetchedPlanet = await axios.get(`https://swapi.dev/api/planets/${id}`);
        return this.parsePlanet(fetchedPlanet.data);
    }
    async fetchAllPlanets() {
        const fetchedPlanets = await axios.get('https://swapi.dev/api/planets/');
        console.log(fetchedPlanets);
        const { results } = fetchedPlanets.data;
        for (let index = 0; index < results.length; index++) {
            const newPlanet = this.parsePlanet(results[index]);
            this.addNewPlanetToCollection(newPlanet);
        }
    }

    parsePlanet = fetchedPlanet => {
        const { name, terrain, rotation_period } = fetchedPlanet;
        return new Planet(name, terrain, rotation_period > 24);
    };

    addNewPlanetToCollection = newPlanet => {
        const { planetCollection } = this.state;
        planetCollection.push(newPlanet);
        this.setState({ planetCollection });
    };

    handlePlanetFetch = async (planetId) => {
        try {
            const newPlanet = await this.fetchPlanetById(planetId);
            this.addNewPlanetToCollection(newPlanet);
        } catch(error) {
            console.error('Error while downloading Planet: ' + error);
        }
    };

    render = () => (
        <div className="App">
            <div className="container">
                <MainHeader resourceName={'Planetas'} />
                <div className="row">
                    <UserInput resourceName={'Planeta'} onFetchResource={this.handlePlanetFetch} />
                    <CustomTable headers={['Planeta', 'Terreno', 'Día más largo al terrestre?']} collection={this.state.planetCollection} />
                </div>
            </div>
        </div>
    );
}
export default PlanetContainer;
