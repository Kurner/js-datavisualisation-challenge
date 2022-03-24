
    let arrX = [];
    let arrY = [];
    
    // Obtiens une promesse via une fonction ASYNC
const fetchData = async () => {
    const data = await fetch('https://canvasjs.com/services/data/datapoints.php');
    return await data.json();
}

    // Lance la fonction du Fetch()
fetchData().then(res => 
    {
        arrCopied(res);
    });

const arrCopied = (arr) => {
    return arr.forEach((elem) => 
    {
        arrX.push(elem[0]);
        arrY.push(elem[1]);
    })
}
    console.log(arrX);
    console.log(arrY);
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