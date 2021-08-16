const subchart = new Chart(document.getElementById('subchart'), {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        locale: 'de-DE',
        plugins: {
            title: {
                display: true,
                text: 'Keine Daten ausgewählt!'
            }
        }
    }
})

const chart = new Chart(document.getElementById('chart'), {
    type: 'doughnut',
    data: {
        labels: globalEmissions.labels,
        datasets: [{
            data: globalEmissions.data,
            backgroundColor: globalEmissions.colors
        }]
    },
    options: {
        locale: 'de-DE',
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (ctx) => ' ' + ctx.label + ': ' + ctx.formattedValue + '%',
                    footer: (ctx) => 'Verweildauer: ' + getGaseByName(ctx[0].label).age
                }
            }
        },
        onClick: (ctx) => {
            const points = chart.getElementsAtEventForMode(ctx.native, 'nearest', { intersect: true }, true)
            if (points.length == null) return
            const gase = getGaseByPercent(chart.data.datasets[points[0].datasetIndex].data[points[0].index])
            if (gase.name === 'Methan') {
                subchart.config.options.plugins.title.text = 'Methanausstoß nach Sektoren'
                subchart.data.labels = methaneEmissions.labels
                subchart.data.datasets = [{
                    data: methaneEmissions.data,
                    backgroundColor: methaneEmissions.colors
                }]
                subchart.update()
            }
        }
    }
})

fetch('../data/test.json').then(res => res.json()).then(d => console.log(d))