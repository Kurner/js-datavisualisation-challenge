    let arrX = [];
    let arrY = [];
    
    // Obtiens une promesse via une fonction ASYNC
const fetchData = async () => {
    const data = await fetch('https://canvasjs.com/services/data/datapoints.php', {cache: "no-cache"});
    return await data.json();
}

const arrCopied = (arr) => {

   
        arr.forEach(elem =>
            {
                arrX.pop();
                arrY.pop();
            })
            
    return arr.forEach((elem) => 
    {
        arrX.push(elem[0]);
        arrY.push(elem[1]);
    })
}

var dataAPI = {
    labels: arrX,
    datasets: [{
        label: 'Valeur aléatoire qui change',
        barPercentage: 0.5,
        barThickness: 6,
        maxBarThickness: 8,
        minBarLength: 2,
        data: arrY,
    }]
}

const configAPI = {
    type: 'bar',
    data: dataAPI,
    options: {}
  };

const draw = () => 
{
   return new Chart(ctx, configAPI);
}

var ctx = document.getElementById('graphAPI').getContext('2d');

let launchDraw = draw();

function playChart ()
{
    fetchData()
        .then(res => arrCopied(res))
        .then(() => launchDraw.destroy())
        .then(() => launchDraw = draw())
    
    setTimeout(playChart, 2000);
}

playChart();

// let graph = fetch('https://canvasjs.com/services/data/datapoints.php')
//     .then(function(response)
//     {
//         return response.json();
//     })
//     .then(function(dataCollected)
//     {

//         console.log(dataCollected);

//         let arrX = [];
//         let arrY = [];
//         dataCollected.forEach((elem) => {
//             arrX.push(elem[0]);
//             arrY.push(elem[1]);
//         })

//         let arrFusion = [];
//         arrFusion.push(arrX);
//         arrFusion.push(arrY);
//         console.log(arrFusion);

//         return arrFusion;
//     })

//     let arrX = [];
//     let arrY = [];

//    if(arrFusion % 2 === 0)
//    {
//        arrX.push(arrFusion);
//    }
//    else
//    {
//        arrY.push(arrFusion);
//    }
    
//    console.log(arrX);