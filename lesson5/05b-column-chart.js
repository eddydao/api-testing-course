
const statusGroups = {};
const orderData =  pm.response.json();
orderData.forEach(order => {
    const status = order.status;
    if (!statusGroups[status]) {
        statusGroups[status] = 0;
    }
    statusGroups[status] += order.total_amount;
});
const statuses = Object.keys(statusGroups);
const totalAmounts = statuses.map(status => statusGroups[status]);
var template = `
<canvas id="myChart" height="75"></canvas>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
    var ctx = document.getElementById("myChart");

    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ${JSON.stringify(statuses)},
            datasets: [{
                label: 'Tổng số lượng theo từng trạng thái',
                data: ${JSON.stringify(totalAmounts)}
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Total Amount'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'status'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Total Amount'
                    }
                }]
            }
        }

    });
</script>`;


pm.visualizer.set(template);