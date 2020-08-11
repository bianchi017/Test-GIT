import React from 'react';
import axios from 'axios'
import Starship from '../entities/Starship';
import MainHeader from '../components/MainHeader';
import UserInput from '../components/UserInput';
import CustomTable from '../components/CustomTable';

class StarshipContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starshipCollection: [],
        };
    }

    componentDidMount() {
        this.fetchAllStarships();
    }

    async fetchStarshipById(id) {
        const fetchedStarship = await axios.get(`https://swapi.dev/api/starships/${id}`);
        return this.parseStarship(fetchedStarship.data);
    }
    async fetchAllStarships() {
        const fetchedStarships = await axios.get('https://swapi.dev/api/starships/');
        console.log(fetchedStarships);
        const { results } = fetchedStarships.data;
        for (let index = 0; index < results.length; index++) {
            const newStarship = this.parseStarship(results[index]);
            this.addNewStarshipToCollection(newStarship);
        }
    }

    parseStarship = fetchedStarship => {
        const { name, cost_in_credits, cargo_capacity } = fetchedStarship;
        return new Starship(name, cost_in_credits, cargo_capacity);
    };

    addNewStarshipToCollection = newStarship => {
        const { starshipCollection } = this.state;
        starshipCollection.push(newStarship);
        this.setState({ starshipCollection });
    };

    handleStarshipFetch = async (starshipId) => {
        try {
            const newStarship = await this.fetchStarshipById(starshipId);
            this.addNewStarshipToCollection(newStarship);
        } catch(error) {
            console.error('Error while downloading Starship: ' + error);
        }
    };

    render = () => (
        <div className='App'>
            <div className='container'>
                <MainHeader resourceName={'Naves'} />
                <div className='row'>
                    <UserInput resourceName={'Nave'} onFetchResource={this.handleStarshipFetch} />
                    <CustomTable headers={['Nave', 'Costo', 'Carga máxima']} collection={this.state.starshipCollection} />
                </div>
            </div>
        </div>
    );
}
export default StarshipContainer;
