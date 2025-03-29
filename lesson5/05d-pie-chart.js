var template = `
<canvas id="countryChart" height="300"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    function generateColors(count) {
        const colors = [];
        const baseColors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#8AC249', '#EA526F', '#49C5B6', '#AF7AC5',
            '#5D6D7E', '#F5B041', '#58D68D', '#EB984E', '#5499C7'
        ];
        
        for (let i = 0; i < count; i++) {
            colors.push(baseColors[i % baseColors.length]);
        }
        
        return colors;
    }

    var ctx = document.getElementById("countryChart");
    var countryChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: [],
            datasets: [{
                data: []
            }]
        },
        options: {
            responsive: true,
            plugins: {
                
                title: {
                    display: true,
                    text: 'Orders by Country'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw;
                            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = Math.round((value / total) * 100);
                            return label + ': ' + value + ' orders (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });

    pm.getData(function (err, value) {
        var orderData = value.response;
        const countryGroups = {};
        
        orderData.forEach(order => {
            const country = order.customer.contact.address.country;
            
            if (!countryGroups[country]) {
                countryGroups[country] = 0;
            }
            
            countryGroups[country]++;
        });
        
        const countries = Object.keys(countryGroups);
        const orderCounts = countries.map(country => countryGroups[country]);
        const backgroundColors = generateColors(countries.length);
        countryChart.data.labels = countries;
        countryChart.data.datasets[0].data = orderCounts;
        countryChart.data.datasets[0].backgroundColor = backgroundColors;
        countryChart.update();
    });
</script>`;

pm.visualizer.set(template, {response: pm.response.json()});