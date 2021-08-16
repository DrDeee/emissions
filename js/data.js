const greenhouseGases = [{
        name: 'Fluorverbindungen u. a.',
        percent: 2,
        color: 'rgb(244,203,62)',
        age: 'ca. 740 - 3.200 Jahre'
    },
    {
        name: 'Kohlenstoffdioxid',
        percent: 76,
        color: 'rgb(98,115,121)',
        age: 'ca. 1.000 Jahre'
    },
    {
        name: 'Lachgas',
        percent: 6,
        color: 'rgb(174,212,125)',
        age: 'ca. 121 Jahre'
    },
    {
        name: 'Methan',
        percent: 16,
        color: 'rgb(248,158,104)',
        age: 'ca. 12,4 Jahre'
    }
]
const carbonSectors = [{
        name: 'Strom- und Wärmegewinnung',
        percent: 42
    },
    {
        name: 'Transport',
        percent: 25
    },
    {
        name: 'Industrie',
        percent: 19
    },
    {
        name: 'Gebäude',
        percent: 6
    },
    {
        name: 'Weiteres',
        percent: 8
    }
]

const methaneSectors = [{
        name: 'Fossile Brennstoffe',
        percent: 33,
        color: 'rgb(255,255,0)'
    },
    {
        name: 'Tierische Landwirtschaft',
        percent: 30,
        color: 'rgb(165,42,42)'
    },
    {
        name: 'Pflanzliche Landwirtschaft',
        percent: 15,
        color: 'rgb(0,128,0)'
    },
    {
        name: 'Abfall',
        percent: 18,
        color: 'rgb(255,127,0)'
    },
    {
        name: 'Weiteres',
        percent: 3,
        color: 'rgb(106,61,154)'
    }
]

const globalEmissions = {
    labels: [],
    data: [],
    colors: []
}

greenhouseGases.forEach(gas => {
    globalEmissions.labels.push(gas.name)
    globalEmissions.data.push(gas.percent)
    globalEmissions.colors.push(gas.color)
})


const methaneEmissions = {
    labels: [],
    data: [],
    colors: []
}

methaneSectors.forEach(sector => {
    methaneEmissions.labels.push(sector.name)
    methaneEmissions.data.push(sector.percent)
    methaneEmissions.colors.push(sector.color)
})

function getGaseByName(name) {
    let gase
    greenhouseGases.forEach(gas => {
        if (gas.name === name)
            gase = gas
    })

    return gase
}

function getGaseByPercent(percent) {
    let gase
    greenhouseGases.forEach(gas => {
        if (gas.percent === percent)
            gase = gas
    })

    return gase
}
