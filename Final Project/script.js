
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  
  pages.forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

const suggestBtn = document.getElementById('suggestBtn');

if (suggestBtn) {
  const suggestions = [
    "Try the Epic Burger!",
    "Galaxy Fries are a fan favorite.",
    "Starlight Dessert is perfect for photos.",
    "Burning Cheddar Bites are crunchy!",
    "Butterbeer Crepes are a must for kids!"
  ];

  suggestBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    document.getElementById("suggestion").textContent = suggestions[randomIndex];
  });
}

const applyFilter = document.getElementById('applyFilter');

if (applyFilter) {
  applyFilter.addEventListener("click", () => {
    const selected = document.getElementById("intensityFilter").value;
    const rideItems = document.querySelectorAll("#ridesList li");

    rideItems.forEach(li => {
      li.classList.remove("highlight");

      //highlight only matching intensity
      if (selected !== "all" && li.dataset.intensity === selected) {
        li.classList.add("highlight");
      }
    });
  });
}
