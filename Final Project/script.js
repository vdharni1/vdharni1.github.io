document.addEventListener('DOMContentLoaded', () => {

  
  const suggestBtn = document.getElementById('suggestBtn');
  if (suggestBtn) {
    const suggestions = [
      'Try the Epic Burger! On brand',
      'Grab the Galaxy Fries for a fun side!',
      'Order the Starlight Dessert for a sweet finish! Yum!',
      'Try a seasonal special at the Food Court! ooooh',
      'Quick Tip: Don\'t eat anything before going on Stardust Racers, you will throw up',
      'Get the Burning Cheddar Bites for a quick and filling snack',
      'Butterbeer Crepes are fun for any occasion!'
        ];

    suggestBtn.addEventListener('click', () => {
      const idx = Math.floor(Math.random() * suggestions.length);
      const el = document.getElementById('suggestion');
      el.textContent = suggestions[idx];
      // small visual feedback
      suggestBtn.textContent = 'Here!';
      setTimeout(() => suggestBtn.textContent = 'Get a random suggestion', 500);
    });
  }

  // RIDES: highlight matching rides (no hiding)
  const applyFilter = document.getElementById('applyFilter');
  if (applyFilter) {
    applyFilter.addEventListener('click', () => {
      const sel = document.getElementById('intensityFilter').value;
      const items = document.querySelectorAll('#ridesList li');

      items.forEach(li => {
        li.classList.remove('highlight');
        if (sel !== 'all' && li.dataset.intensity === sel) {
          li.classList.add('highlight');
        }
        // If 'all' selected then no highlight 
      });
    });
  }

});
