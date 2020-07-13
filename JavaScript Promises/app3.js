class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        // Avanzado: // this.printInfo = this.printInfo.bind(this)
    }
    /* Alternativa: // printInfo() {
        console.log(`Título del libro: ${this.title},
                       autor: ${this.author}`);
    } */
    printInfo = () => {
        console.log(`Título del libro: ${this.title}, Nombre del autor: ${this.author}`);
    }
}

const book1 = new Book('"The Outsider"', 'Stephen King');
// Alternativa: // const printBookData = book1.printInfo.bind(book1);
const printBookData = book1.printInfo;

console.log(`Test sincronización: `);
console.log('a');
setTimeout(() => console.log('b'), 2000);
console.log('c');
for (let i = 0; i < 10e8; i++) {

}
console.log('d');

const URL = 'https://swapi.dev/api/';
var PEOPLE = 'people/id/';

fetch(`${URL}${PEOPLE.replace('id', 1)}`)
    .then((res) => {
        return res.json()
    })
    .then((character) => {
        console.log(`\n Persona 1: `, character);
    });

fetch('https://swapi.dev/api/planets/1/').then(res => {
    res.json().then(data => {
        console.log(`\n Planeta 1: `, data);
    });
}
);

getById = (id, callBack) => {
    return new Promise((resolve, reject) => {
        if (typeof (id) === 'number') {
            fetch(`${URL}${PEOPLE.replace('id', id)}`)
                .then((res) => {
                    return res.json()
                })
                .then((character) => {
                    console.log(character);

                })
        } else {
            reject(Error('Incorrect ID'))
        }
    })
}

getById(1)
    .then((character) => {
        console.log(character);
    })
    .catch(err => {
        console.log(err);
    })

getById(2)
    .then((character) => {
        console.log(character);
    })
    .catch(err => {
        console.log(err);
    })

getById(3)
    .then((character) => {
        console.log(character);
    })
    .catch(err => {
        console.log(err);
    })

getById(4)
    .then((character) => {
        console.log(character);
    })
    .catch(err => {
        console.log(err);
    })

getById(5)
    .then((character) => {
        console.log(character);
    })
    .catch(err => {
        console.log(err);
    })

/*
getById = (id, callBack) => {
    if (typeof (id) === 'number') {
        fetch(`${URL}${PEOPLE.replace('id', id)}`)
            .then((res) => {
                return res.json()
            })
            .then((character) => {
                console.log(character);
                if (callBack) {
                    callBack();
                }
            })
    }
}

getById(1, () => {
    getById(2, () => {
        getById(3, () => {
            getById(4, () => {
                getById(5)
            })
        })
    })
})
*/