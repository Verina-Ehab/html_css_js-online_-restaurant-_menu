const menu = [
  {
    id: 1,
    title: "Broccolli & Sun-dried Omelette",
    category: "breakfast",
    price: 120.00,
    img: "imgs/brocolliomlette.jpg",
    desc: `Broccoli, sun-dried tomatoes, omelette with a side of homemade fries. `,
    rating: "★★★☆☆",
  },
  {
    id: 2,
    title: "Eggs Florentine Sandwich",
    category: "breakfast",
    price: 110.00,
    img: "imgs/eggflorentinesand.jpg",
    desc: `Poached eggs, hollandaise sauce, beef bacon and spinach on a sour dough bun with a side of mix greens and homemade fries.`,
    rating: "★★★★☆",
  },
  {
    id: 3,
    title: "Broccolli Soup",
    category: "soup",
    price: 60.00,
    img: "imgs/brocollisoup.jpg",
    desc: `Broccoli, ginger, miso paste, peas and pumpkin seeds.`,
    rating: "★★☆☆☆",
  },
  {
    id: 4,
    title: "Chicken Soup",
    category: "soup",
    price: 70.00,
    img: "imgs/chickensoup.jpg",
    desc: `Diced chicken and cream served with a lemon wedge, croutons, and some chopped Parsely.`,
    rating: "★★★★☆",
  },
  {
    id: 5,
    title: "Chicken Picatta",
    category: "lunch",
    price: 150.00,
    img: "imgs/chickenpicatta.jpg",
    desc: `Chicken cutlet in creamy mushroom and caramelized onion sauce served with fettuccine cream pasta. `,
    rating: "★★★★★",
  },
  {
    id: 6,
    title: "Mongolian Beef",
    category: "lunch",
    price: 190,
    img: "imgs/mongolianbeef.jpg",
    desc: `Thin slices of caramelized beef in a soy ginger sauce tossed with nipped green onion served with white basmati rice.`,
    rating: "★★★☆☆",
  },
  {
    id: 7,
    title: "Grilled Salmon Steak",
    category: "lunch",
    price: 195.00,
    img: "imgs/salmonsteak.jpg",
    desc: `Marinated Norwegian grilled salmon with your choice of butter, lemon sauce or teriyaki sauce served with white basmati rice`,
    rating: "★★☆☆☆",
  },
  {
    id: 8,
    title: "Roasted Peaches and Honey Comb",
    category: "desserts",
    price: 85.00,
    img: "imgs/roastedpeach.jpg",
    desc: `Roasted peaches with honeycomb crumbles and vanilla ice cream.`,
    rating: "★★★★☆",
  },
  {
    id: 9,
    title: "Lotus French Toast",
    category: "desserts",
    price: 70.00,
    img: "imgs/lotusfrenchtoast.jpg",
    desc: `Lotus biscuit spread on French toast topped with vanilla ice cream`,
    rating: "★★★☆☆"
  },
  {
    id: 10,
    title: "Moroccan Tea",
    category: "drinks",
    price: 30.00,
    img: "imgs/moroccantea.jpg",
    desc: `Refreshing imported Moroccan Tea with mint leaves, served with sugar to your taste.`,
    rating: "★★★★☆",
  },
  {
    id: 11,
    title: "Spanish Latte",
    category: "drinks",
    price: 45.00,
    img: "imgs/latte.jpg",
    desc: `Freshly brewed coffee slowly poured onto a layer of sweetened condensed milk and topped with frothed milk. Flavour added to your taste.`,
    rating: "★★★★★",
  },
  {
    id: 12,
    title: "Water",
    category: "drinks",
    price: 15.00,
    img: "imgs/water.jpg",
    desc: `Refreshing coldwater from our elite sources. Tip: ask for a lemon wedge and a mint leaf for extra freshness and a good detox!`,
    rating: "☆☆☆☆☆",
  },
];


// DOM Content Loaded
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function(){
  displayMenuButtons(menu);
  displayMenuItems(menu);
});


//map that displays all items of the menu
function displayMenuItems(menu) {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}LE</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
            <p class = "rating">
              ${item.rating}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  //inner HTML added
  sectionCenter.innerHTML = displayMenu;
}


// Reduce used to filter the items in the menu with respect to their categories
function displayMenuButtons(menu) {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}








