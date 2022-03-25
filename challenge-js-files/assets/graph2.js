///// graphique pour les homicides
let table2 = document.getElementById("table2");
let tdTable = table2.querySelectorAll("td");
//console.log(table2);

///// création de sous-tableaux 
let pays = [];
let date1 = [];
let date2 = [];

///// création de la boucle
for(let x = 0 ; x < tdTable.length ; x++) {
    if (x % 3  == 0) {
        pays.push(tdTable[x].innerText)
    }
    if (x % 3 == 1) {
        date1.push(tdTable[x].innerText)
    }
    if (x % 3 == 2) {
        date2.push(tdTable[x].innerText)
    }
}

///// création du graphique
let graph2 = document.getElementById("barCanvas");
let barChart = new Chart(graph2, {
    type: "bar", 
    data: {
        labels: pays,
        datasets: [{
            data:date1,
            label: "2007 à 2009",
            backgroundColor : "crimson"
        }, {
            data:date2, 
            label: "2010 à 2012", 
            backgroundColor: "#50C878"
        }]
    }, 
    options: {
        responsive : true,
        scales:{
            y: {
                ticks :{
                    font:{
                        size:12
                    }
                }
            },
            x: {
                ticks :{
                    font:{
                        size:12
                    }
                }
            }
        }
    }
})