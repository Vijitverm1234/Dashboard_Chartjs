const ctx1 = document.getElementById('doughnut');

new Chart(ctx1, {
  type: 'doughnut',
  data: {
    labels: ['Acedemics', 'Non-acedemics', 'Admistrations', 'Others'],
    datasets: [{
      label: 'Employee Status',
      data: [12, 42, 8, 6],
      backgroundColor:[
        'rgba(41,155,99,1)',
        'rgba(54,162,235,1)',
        'rgba(255,206,86,1)',
        'rgba(120,46,139,1)'

      ],
      borderColor:[
        'rgba(41,155,99)'
      ],
      borderWidth: 1

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