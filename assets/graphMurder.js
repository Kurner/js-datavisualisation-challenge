// Recolte des données
let table = document.getElementById('table1');

// Change les données en héxadécimal
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

// On ne prend que le 1er élément du tableau
let tableBody = document.getElementsByTagName('tbody')[0];
let tableTr = tableBody.getElementsByTagName('tr');

let arrDatasets = [];

// On ne veut pas la première rangée du tableau
for(let i = 1; i < tableTr.length; i++)
{
    let dataCountry = {};
    
    // On crée les clés et leurs valeurs de l'objet dataCountry
    dataCountry['label'] = tableTr[i].getElementsByTagName('td')[0].innerText;
    dataCountry['pointBackgroundColor'] = 'white';
	dataCountry['borderWidth'] =  1;
    
    // On crée la couleur random
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);    
    let color = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	dataCountry['borderColor'] = color;
    
    let numbers = [];

    // On ignore la 1er case de la colomne car c'est le nom du pays
    for(let j = 1; j <= 11; j++)
    {
        // On récupére le reste des données des autres cases
        let numberCollect = tableTr[i].getElementsByTagName('td')[j].innerText;
        // On change les strings en nombre en les mettant dans un tableau
        numbers.push(parseFloat(numberCollect));
    }
    
    dataCountry['data'] = numbers;  
    // On rempli le Dataset avec l'objet qu'on vient de finir
    arrDatasets.push(dataCountry);  
}

console.log(arrDatasets);

// Création du graph

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)');
gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)');
gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');


var data  = {
    labels: [ 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012 ],
    // On envoie toutes les datasets d'un coup via l'objet arrDatasets créer précédement
    datasets: arrDatasets
};


var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	// scales: {
	// 	xAxes: [{
	// 		gridLines: {
	// 			color: 'rgba(200, 200, 200, 0.05)',
	// 			lineWidth: 1
	// 		}
	// 	}],
	// 	yAxes: [{
	// 		gridLines: {
	// 			color: 'rgba(200, 200, 200, 0.08)',
	// 			lineWidth: 1
	// 		}
	// 	}]
	// },
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: 'white'
	},
	tooltips: {
		titleFontFamily: 'Open Sans',
		backgroundColor: 'rgba(0,0,0,0.3)',
		titleFontColor: 'red',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};


var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
	options: options
});


