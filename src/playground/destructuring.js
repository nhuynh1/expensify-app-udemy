const person = {
    name: 'Me',
    age: 50,
    location: {
        city: 'Toronto',
        temp: 35
    }
};

const { name = 'Anonymous', age } = person;
const { city: theCity = 'Nowhere', temp: temperature } = person.location;

console.log(`${name} is ${age}.`)

if(theCity && temperature) {
    console.log(`It's ${temperature} in ${theCity}.`)
}

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName);

// ARRAY DESTRUCTURING

// const address = ['1299 S Juniper Street', 'Philly', 'PA', '12345'];
const address = [];

const [, city, state = 'NY'] = address;

console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [product, , mprice] = item;

console.log(`A mediaum ${product} costs ${mprice}`);