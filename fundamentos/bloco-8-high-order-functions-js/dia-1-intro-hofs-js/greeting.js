// Aplicação num exemplo simples para observar a função sendo passada como parâmetro

// const person = {
//     name: 'Renata',
//     lastName: 'Magalhães',
//     greet: (callback) => {
//         return callback();
//     }
// };

const greetingPeople = () => {
    return 'Olá, tuuurmaaa!';
}

module.exports = greetingPeople;
// module.exports = {greeting, defaultGreeting, badMoodGreeting, loveGreeting, person};