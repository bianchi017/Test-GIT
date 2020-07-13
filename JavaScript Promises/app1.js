const getPlanetById = id => {
    return new Promise((resolve, reject) => {
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(res => {
                res.json()
                    .then(planet => {
                        resolve(planet);
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
    });
};

getPlanetById(1).then(planetObject => {
        console.log('Planeta 1: ', planetObject);
        getPlanetById(2).then(planetObject => {
            console.log('Planeta 2: ', planetObject);
            getPlanetById(3).then(planetObject => {
                console.log('Planeta 3: ', planetObject);
                getPlanetById(4).then(planetObject => {
                    console.log('Planeta 4: ', planetObject);
                    getPlanetById(5).then(planetObject => {
                        console.log('Planeta 5: ', planetObject);
                    })
                })
            })
        })
    }
);