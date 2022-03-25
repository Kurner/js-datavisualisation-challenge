const fetchData = async () => {
    const data = await fetch('https://canvasjs.com/services/data/datapoints.php', {cache: "no-cache"});
    return await data.json();
}

let dataX = [];
let dataY = [];

let arrCopied = (array) => 
{
    if(array.length != 0)
    {
        array.forEach(el => {

            dataX.pop();
            dataY.pop();
        })
    }
    return array.forEach((elem) => {
       dataX.push(elem[0]);
       dataY.push(elem[1]);
    })
}


const drawAPI = () => {
    return new Chart(graphAPI, config);
}

const data = {
    labels: dataX,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: dataY,
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

const graphAPI = document.getElementById('graphAPI');

let oskoor = drawAPI();

const play = () =>
{
    fetchData().then((res) => {
        arrCopied(res);
    })
    .then(oskoor.destroy())
    .then(oskoor = drawAPI())

    setTimeout(play, 2000);
}

play();

console.log(dataX);