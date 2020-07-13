const getPlanetById = async id => {
    const res = await fetch(`https://swapi.dev/api/planets/${id}`);
    const planet = await res.json();
    return planet;
};

const getPlanets = async() => {
    try {
        const planet1 = await getPlanetById(1);
        console.log('Planeta 1: ', planet1);

        const planet2 = await getPlanetById(2);
        console.log('Planeta 2: ', planet2);

        const planet3 = await getPlanetById(3);
        console.log('Planeta 3: ', planet3);

        const planet4 = await getPlanetById(4);
        console.log('Planeta 4: ', planet4);

        const planet5 = await getPlanetById(5);
        console.log('Planeta 5: ', planet5);
    } catch (error) {
        console.log('Ocurrió un error: ', error);
    }
};
getPlanets();