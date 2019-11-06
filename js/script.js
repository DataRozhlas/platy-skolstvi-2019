var colors = ['#FF4136', '#0074D9', '#B10DC9', '#3D9970', '#FF851B', '#FFDC00','#001F3F', '#2ECC40'];

var ms = [180,150,106,95,92,62,0,66,88,84,69,76,0,85,83,68,84,80,80,79,68,0,78,67,73,66,68,48,62,{y: 52, color: '#7f6e00'}];

var zs1 = [180,138,106,95,93,91,90,89,88,88,87,86,85,84,83,82,80,80,80,80,79,76,76,75,73,70,68,64,63,{y: 61, color: '#003a6c'}];

var zs2 = [202,135,115,95,93,91,99,99,86,95,89,89,87,82,83,83,82,90,80,97,82,90,88,75,92,70,69,64,65,{y: 61, color: '#7f201b'}];

var ss = [202,147,115,95,93,91,105,111,111,90,94,91,93,104,83,95,89,90,80,113,80,97,100,82,92,75,72,64,68,{y: 63, color: '#000f1f'}];

$(function() {

	Highcharts.setOptions({
		lang: {
			months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
				weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
				shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
				thousandsSep: '',
				decimalPoint:',',
				rangeSelectorZoom: 'Zobrazit'
		}
	});

	Highcharts.chart('strukturaplatu', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Struktura průměrného hrubého platu, 2016'
        },
        subtitle: {
            text: 'učitelé × VŠ vzdělaní ve veřejné sféře × VŠ vzdělaní v soukromé sféře'
        },
        xAxis: {
            categories: ['učitelé', 'VŠ vzdělaní ve veřejné sféře', 'VŠ vzdělaní v soukromé sféře']
        },
        yAxis: {
            labels: {
                format: '{value} Kč'
            },
            min: 0,
            max: 50000,
            title: {
                text: 'Průměrný hrubý plat',
            },
            reversedStacks: false,
            stackLabels: {
                enabled: true,
                formatter: function() {
                    switch (this.total) {
                        case 21350: return '2004'; break;
                        case 25980: return '2008'; break;
                        case 26618: return '2012'; break;
                        case 29882: return '2016'; break;
                        case 33408: return '2012'; break;
                        case 37831: return '2016'; break;
                        case 47765: return '2012'; break;
                        case 49400: return '2016'; break;
                    }
                },
                style: {
                    "fontSize": "9px",
                    "fontWeight": "simple",
                    "color": "white"
                },
                verticalAlign: 'bottom'
            },
            plotLines: [{
                value: 29882,
                color: 'grey',
                dashStyle: 'shortdash',
                width: 1,
                label: {
                    text: 'Průměrný hrubý plat učitelů, 2016'
                }
            }]
        },
        tooltip: {
            formatter: function() {
                return 'Průměrný hrubý plat: <b>' + this.total + ' Kč</b>. ' + this.series.name + ': <b>' + this.y + ' Kč</b>' + ' (' +  Math.round(this.y/this.total * 1000)/10 + ' %)'
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'https://portal.mpsv.cz/sz/stat/vydelky',
            text : 'Zdroj: Informační systém o průměrném výdělku'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                events: {
                    legendItemClick: function () {
                        return false;
                    }
                }
            }
        },
        series: [{
            name: 'Pevná část',
            data: [18203],
            color: colors[1],
            stack: '2004'
        }, {
            name: 'Příplatky',
            data: [2100],
            color: colors[6],
            stack: '2004'
        }, {
            name: 'Odměny',
            data: [1047],
            color: colors[0],
            stack: '2004'
        }, {
            name: 'Pevná část',
            data: [21430],
            color: colors[1],
            showInLegend: false,
            stack: '2008'
        }, {
            name: 'Příplatky',
            data: [2800],
            color: colors[6],
            showInLegend: false,
            stack: '2008'
        }, {
            name: 'Odměny',
            data: [1750],
            color: colors[0],
            showInLegend: false,
            stack: '2008'
        }, {
            name: 'Pevná část',
            data: [23834, 25123, 37591],
            color: colors[1],
            showInLegend: false,
            stack: '2012'
        }, {
            name: 'Příplatky',
            data: [1657, 5746, 812],
            color: colors[6],
            showInLegend: false,
            stack: '2012'
        }, {
            name: 'Odměny',
            data: [1127, 2539, 9362],
            color: colors[0],
            showInLegend: false,
            stack: '2012'
        }, {
            name: 'Pevná část',
            data: [26085, 28146, 39718],
            color: colors[1],
            showInLegend: false,
            stack: '2016'
        }, {
            name: 'Příplatky',
            data: [1923, 6280, 790],
            color: colors[6],
            showInLegend: false,
            stack: '2016'
        }, {
            name: 'Odměny',
            data: [1874, 3405, 8892],
            color: colors[0],
            showInLegend: false,
            stack: '2016'
        }]
    });

	Highcharts.chart('svet', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Platy učitelů v zemích OECD'
        },
        subtitle: {
            text: 'průměrné platy učitelů × platy všech VŠ vzdělaných zaměstnanců, data za rok 2016'
        },
        xAxis: {
            categories: ["Lucembursko","Portugalsko","Řecko","Litva","Austrálie","Estonsko","Německo","Finsko","Belgie (Flandry)","Izrael","Slovinsko","Švédsko","Nový Zéland","Belgie (Valonsko)","Skotsko","Dánsko","Chile","Anglie","Turecko","Lotyšsko","Polsko","Rakousko","Francie","Norsko","Nizozemsko","Maďarsko","Itálie","Slovensko","Spojené státy","Česko"]
        },
        yAxis: {
            labels: {
                format: '{value} %'
            },
            min: 0,
            title: {
                text: 'plat učitele v porovnání s platem všech VŠ vzdělaných',
            },
            reversedStacks: false
        },
        tooltip: {
            formatter: function() {
                return 'Učitelé mají <b>' + this.y + ' %</b> plat v porovnání se všemi VŠ vzdělanými.'
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'http://www.oecd.org/education/education-at-a-glance/',
            text : 'Zdroj: OECD – Education at a Glance 2018, Teachers\' actual salaries'
        },
        series: [{
            name: 'MŠ',
            data: ms,
            color: colors[5],
            visible: false
        },{
            name: '1. stupeň ZŠ',
            data: zs1,
            color: colors[1]
        }, {
            name: '2. stupeň ZŠ a nižší část víceletých SŠ',
            data: zs2,
            color: colors[0]
        }, {
            name: 'Čtyřleté SŠ a vyšší část víceletých SŠ',
            data: ss,
            color: colors[6],
            visible: false
        }]
    });

	Highcharts.chart('1stupenvek', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Struktura platů učitelů 1. stupně ZŠ'
        },
        subtitle: {
            text: 'podle věku, za rok 2016'
        },
        xAxis: {
            categories: [20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,84],
            title: {
                text: 'věk'
            }
        },
        yAxis: [{
            title: {
                text: 'průměrný hrubý plat',
            },
            labels: {
                format: '{value} Kč'
            },
            reversedStacks: false,

        }, {
            title: {
                text: 'podíl učitelů v populačním ročníku',
            },
            labels: {
                format: '{value} %'
            },
            reversedStacks: false,
            opposite: true
        }],
        tooltip: {
            formatter: function() {
                if (this.series.name == 'podíl učitelů v populačním ročníku') {
                    return 'Podíl učitelů v populačním ročníku: <b>' + this.y + ' %</b>'
                } else {
                    return 'Průměrný hrubý plat: <b>' + this.total + ' Kč</b>, ' + this.series.name + ': <b>' + this.y + ' Kč</b>' + ' (' +  Math.round(this.y/this.total * 1000)/10 + ' %)'
                }
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'http://www.mfcr.cz/cs/o-ministerstvu/informacni-systemy/is-o-platech',
            text : 'Zdroj: Informační systém o platech'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'pevná část',
            data: [19089,19488,19844,19716,20095,20365,20839,20786,20820,20767,20525,20798,20764,21081,21090,21450,21820,21843,22106,22297,22624,22741,22785,23279,23482,23723,23922,24133,24149,24507,24586,24794,24931,25140,25133,25332,25543,25171,25273,25261,25387,25588,26338,26586,26405,26403,26356,25609,26223,26849,25790,25604,27200,26116,26528,28067,27469,28221,28897,23605,28671,29238,29555,22012],
            color: colors[1],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'příplatky',
            data: [170,197,238,288,335,418,584,685,776,825,856,859,998,889,884,965,1004,1059,974,1122,1131,1157,1166,1224,1205,1360,1309,1395,1430,1481,1332,1287,1223,1294,1288,1365,1343,1267,1142,1225,1255,1304,1300,1235,1012,945,924,777,865,970,513,555,581,708,596,831,645,581,548,616,1042,483,0,0],
            color: colors[6],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'odměny',
            data: [1814,1494,1353,1550,1495,1723,1622,1659,1574,1606,1554,1568,1557,1651,1646,1656,1711,1717,1705,1703,1798,1820,1833,1810,1826,1864,1870,1851,1761,1864,1827,1844,1708,1646,1715,1681,1622,1617,1547,1546,1529,1556,1465,1481,1583,1583,1414,1664,1429,1599,1264,1398,1628,1639,1375,1319,1088,1404,1388,1680,1605,1055,6546,3468],
            color: colors[0],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'podíl učitelů v populačním ročníku',
            data: [0.03,0.12,0.25,0.27,0.35,0.49,0.66,0.70,0.65,0.60,0.56,0.47,0.45,0.48,0.43,0.48,0.52,0.52,0.55,0.64,0.69,0.74,0.74,0.68,0.71,0.76,0.84,0.81,0.83,0.94,1.08,1.28,1.35,1.36,1.38,1.29,1.28,1.28,1.19,1.07,0.90,0.73,0.52,0.31,0.21,0.15,0.09,0.08,0.07,0.06,0.05,0.05,0.03,0.02,0.03,0.03,0.02,0.01,0.01,0.00,0.00,0.01,0.00,0.00],
            color: '#777777',
            type: 'spline',
            yAxis: 1,
            stack: 'počet',
            visible: false
        }]
    });

	Highcharts.chart('2stupenvek', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Struktura platů učitelů 2. stupně ZŠ a SŠ'
        },
        subtitle: {
            text: 'podle věku, za rok 2016'
        },
        xAxis: {
            categories: [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87],
            title: {
                text: 'věk'
            }
        },
        yAxis: [{
            title: {
                text: 'průměrný hrubý plat',
            },
            labels: {
                format: '{value} Kč'
            },
            reversedStacks: false,

        }, {
            title: {
                text: 'podíl učitelů v populačním ročníku',
            },
            labels: {
                format: '{value} %'
            },
            reversedStacks: false,
            opposite: true
        }],
        tooltip: {
            formatter: function() {
                if (this.series.name == 'podíl učitelů v populačním ročníku') {
                    return 'Podíl učitelů v populačním ročníku: <b>' + this.y + ' %</b>'
                } else {
                    return 'Průměrný hrubý plat: <b>' + this.total + ' Kč</b>, ' + this.series.name + ': <b>' + this.y + ' Kč</b>' + ' (' +  Math.round(this.y/this.total * 1000)/10 + ' %)'
                }
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'http://www.mfcr.cz/cs/o-ministerstvu/informacni-systemy/is-o-platech',
            text : 'Zdroj: Informační systém o platech'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'pevná část',
            data: [21493,19852,20732,21803,21218,21388,21890,21711,21931,21989,21888,21970,21923,22014,22255,22340,22533,22681,23056,23266,23503,23798,23864,24019,24369,24601,24929,25017,25327,25551,25496,25638,25895,26421,26857,27128,27220,27223,27340,27572,27447,27449,27348,27621,27432,27789,28079,27822,28006,28430,28317,28434,28573,28790,29754,29250,28170,27750,27363,29021,27894,29237,28410,30426,31680,27017,29155,29324,29820],
            color: colors[1],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'příplatky',
            data: [748,227,524,598,685,636,694,873,1076,1228,1414,1461,1567,1551,1615,1613,1640,1737,1792,1858,1799,1878,1962,1892,2038,2002,2124,2112,2258,2347,2196,2149,2274,2333,2265,2321,2242,2275,2294,2174,2139,2116,2057,1991,1962,1836,1814,1793,1734,1695,1749,1442,1398,1274,1424,1943,1272,1083,1603,1295,1568,1118,1317,2677,1526,1668,1021,886,8167,2074],
            color: colors[6],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'odměny',
            data: [262,946,2333,1503,1838,1836,1991,1849,1791,1775,1787,1766,1769,1744,1803,1728,1842,1823,1879,1925,1795,1863,1870,1927,1909,1901,1916,1918,1916,1921,1805,1780,2021,1843,1785,1819,1768,1731,1716,1668,1627,1644,1611,1599,1530,1566,1587,1664,1545,1729,1711,1837,1396,1629,1963,1943,1398,1594,1656,1449,1470,1698,2723,1221,3097,220,1966,280,6864,0],
            color: colors[0],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'podíl učitelů v populačním ročníku',
            data: [0.00, 0.00,0.00,0.01,0.02,0.04,0.10,0.25,0.42,0.52,0.55,0.56,0.60,0.60,0.60,0.62,0.66,0.62,0.65,0.77,0.80,0.84,0.91,0.89,0.99,1.01,0.89,0.96,0.94,1.02,1.01,1.02,1.05,1.11,1.42,1.44,1.38,1.45,1.35,1.18,1.17,1.14,1.06,0.84,0.67,0.53,0.38,0.28,0.18,0.14,0.11,0.11,0.09,0.07,0.06,0.05,0.04,0.04,0.02,0.02,0.02,0.01,0.01,0.00,0.00,0.00,0.00,0.00,0.00],
            color: '#777777',
            type: 'spline',
            yAxis: 1,
            stack: 'počet',
            visible: false
        }]
    });

Highcharts.chart('1stupenpohlavi', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Struktura platů učitelů 1. stupně ZŠ'
        },
        subtitle: {
            text: 'podle pohlaví, za rok 2016'
        },
        xAxis: {
            categories: ['', 'muži', 'ženy']
        },
        yAxis: {
            title: {
                text: 'průměrný plat',
            },
            labels: {
                format: '{value} Kč'
            },
            reversedStacks: false,
        },
        labels: {
            items: [{
                html: 'Počet učitelů a učitelek',
                style: {
                    left: '80px',
                    top: '60px',
                    color: 'black',
                    fontSize: '16px'
                }
            }]
        },
        tooltip: {
            formatter: function() {
                if (this.key == 'Muži') {
                    return 'Na 1. stupni ZŠ učí <b>1441 mužů</b> (3,0 %)'
                } else if (this.key == 'Ženy') {
                    return 'Na 1. stupni ZŠ učí <b>45969 žen</b> (97,0 %)'
                } else {
                    return 'Průměrný hrubý plat: <b>' + this.total + ' Kč</b>, ' + this.series.name + ': <b>' + this.y + ' Kč</b>' + ' (' +  Math.round(this.y/this.total * 1000)/10 + ' %)'
                }
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'http://www.mfcr.cz/cs/o-ministerstvu/informacni-systemy/is-o-platech',
            text : 'Zdroj: Informační systém o platech'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'pevná část',
            data: [0,25068,23604],
            color: colors[1],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'příplatky',
            data: [0,1711,1797],
            color: colors[6],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'odměny',
            data: [0,1123,1687],
            color: colors[0],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            type: 'pie',
            name: 'Počet učitelů',
            data: [{
                name: 'Muži',
                y: 1441,
                color: '#777777'
            }, {
                name: 'Ženy',
                y: 45969,
                color: '#CCCCCC'
            }],
            center: [150, 200],
            size: 200,
            showInLegend: false,
            dataLabels: {
                enabled: true
            }
        }]
    });

Highcharts.chart('2stupenpohlavi', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Struktura platů učitelů 2. stupně ZŠ a SŠ'
        },
        subtitle: {
            text: 'podle pohlaví, za rok 2016'
        },
        xAxis: {
            categories: ['', 'muži', 'ženy']
        },
        yAxis: {
            title: {
                text: 'průměrný plat',
            },
            labels: {
                format: '{value} Kč'
            },
            reversedStacks: false,
        },
        labels: {
            items: [{
                html: 'Počet učitelů a učitelek',
                style: {
                    left: '80px',
                    top: '80px',
                    color: 'black',
                    fontSize: '16px'
                }
            }]
        },
        tooltip: {
            formatter: function() {
                if (this.key == 'Muži') {
                    return 'Na 2. stupni ZŠ a na SŠ učí <b>16822 mužů</b> (31,8 %)'
                } else if (this.key == 'Ženy') {
                    return 'Na 2. stupni ZŠ a na SŠ učí <b>36141 žen</b> (68,2 %)'
                } else {
                    return 'Průměrný hrubý plat: <b>' + this.total + ' Kč</b>, ' + this.series.name + ': <b>' + this.y + ' Kč</b>' + ' (' +  Math.round(this.y/this.total * 1000)/10 + ' %)'
                }
            },
            crosshairs: true
        },
        exporting: {
            enabled: false
        },
        credits: {
            href : 'http://www.mfcr.cz/cs/o-ministerstvu/informacni-systemy/is-o-platech',
            text : 'Zdroj: Informační systém o platech'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'pevná část',
            data: [0,25157,25342],
            color: colors[1],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'příplatky',
            data: [0,2152,1903],
            color: colors[6],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            name: 'odměny',
            data: [0,1813,1783],
            color: colors[0],
            type: 'column',
            yAxis: 0,
            stack: 'příjmy'
        }, {
            type: 'pie',
            name: 'počet učitelů',
            data: [{
                name: 'Muži',
                y: 16822,
                color: '#777777'
            }, {
                name: 'Ženy',
                y: 36141,
                color: '#CCCCCC'
            }],
            center: [150, 200],
            size: 200,
            showInLegend: false,
            dataLabels: {
                enabled: true
            }
        }]
    });

})