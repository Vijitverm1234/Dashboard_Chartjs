const ctx = document.getElementById('linechart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['jan','feb','mar','apr','may','jun','jul','aug'],
    datasets: [{
      label: 'Earnings',
      data: [2050,1900,2200,2100,2990,2300,2593,2345],
      borderWidth: 1,
      backgroundColor:[
        'rgba(85,85,85,1)'
      ],
      borderColor:[
        'rgba(41,155,99)'
      ]
    }]
  },
  options: {
    responsive:true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
