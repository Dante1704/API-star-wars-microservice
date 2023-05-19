const app = require('./src/app')


function main () {
    app.listen(3004, () => console.log('Server is listening on port 3004'))
}

main ()