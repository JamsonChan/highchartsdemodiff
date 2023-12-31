Highcharts.chart('container', {
    chart: {
        type: 'cylinder',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    title: {
        text: 'Number of confirmed COVID-19'
    },
    subtitle: {
        text: 'Source: ' +
            '<a '="" 'target="_blank" +="" href="https://www.fhi.no/en/id/infectious-diseases/coronavirus/daily-reports/daily-reports-COVID19/">FHI</a>'
    },
    xAxis: {
        categories: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'],
        title: {
            text: 'Age groups'
        }
    },
    yAxis: {
        title: {
            margin: 20,
            text: 'Reported cases'
        }
    },
    tooltip: {
        headerFormat: '<b>Age: {point.x}</b><br/>'
    },
    plotOptions: {
        series: {
            depth: 25,
            colorByPoint: true
        }
    },
    series: [{
        data: [95321, 169339, 121105, 136046, 106800, 58041, 26766, 14291,
            7065, 3283],
        name: 'Cases',
        showInLegend: false
    }]
});