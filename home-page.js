const profit = document.querySelector('.profit-input');
const loss = document.querySelector('.loss-input');

const ctx = document.getElementById('mychart').getContext('2d');
let mychart = new Chart(ctx,{

    type:'pie',
    data: {

        labels : ['Profit', 'Loss'],
        datasets : [
            {
                label:'# of votes',
                data : [0,0],
                backgroundColor:['#588c7e','#c1502e'],
                borderWidth:1
            }
        ]

    }
});

const updateChartValue = (input, dataOrder)=> {
    input.addEventListener ('change', e => {
        mychart.data.datasets[0].data[dataOrder] = e.target.value;
        mychart.update();
    });
};

updateChartValue(profit,0);
updateChartValue(loss,1);