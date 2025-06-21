  const hoverItems = document.querySelectorAll('.courses, .results, .testseries, .store');

  hoverItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#4169E1'; // Royal Blue
      item.style.color = 'white';
    });

    item.addEventListener('mouseout', () => {
      if (item.classList.contains('courses')) {
        item.style.backgroundColor = 'yellow';
        item.style.color = 'black';
      } else {
        item.style.backgroundColor = 'transparent';
        item.style.color = 'white';
      }
    });
  });