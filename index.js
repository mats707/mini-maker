const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start() {
    const content = {}

    content.prefix = askAndReturnPrefix()
    content.searchTerm = askAndReturnSearchTerm()

    await robots.text(content)

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes)
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    console.log(content)
    console.log(content.prefix + ' ' + content.searchTerm)
}

start()

