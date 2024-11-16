const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "ELECTROLITE",
    description: "Explore the Air Force collection with high-performance and comfort. Available in stylish black and dark blue.",
    listItems: [
      "LED Bulbs",
      "Tube Lights",
      "Floodlights",
      "Emergency Lights",
      "Switches & Sockets",
      "Wiring & Cables",
      "Circuit Breakers & Fuses",
      "Electric Panels",
      "Motors & Electrical Devices",
      "Submersible Motors",
      "Water Pumps",
      "Fans",
      "Starters",
    ],
    Img: "menu1.jpg"
  },
  {
    id: 2,
    title: "PLUMBING",
    description: "Discover the comfort and style of Air Jordan sneakers in light gray and green.",
    listItems: [
      "Plumbing Fixtures",
      "Showers (Standard, Rain, Handheld)",
      "Taps & Faucets (Kitchen, Bathroom)",
      "PVC Taps",
      "Mixers & Diverters",
      "Indian Toilets",
      "Western Toilets",
      "Piping & Fittings",
      "PVC & CPVC Pipes",
      "Steel Pipes & Hoses",
      "Pipe Fittings (Elbows, Tees, Couplings)",
      "Valves",
      "Joints",
    ],
    Img: "menu2.jpg"
  },
  {
    id: 3,
    title: "BuildCare",
    description: "Discover a comprehensive range of construction and home maintenance supplies, including fasteners like screws, bolts, and washers, as well as essential household hardware such as shower panels, taps, and tape measures.",
    listItems: [
      "Construction & Home Maintenance Supplies",
      "Fasteners",
      "Screws (Wood, Metal, Drywall)",
      "Bolts & Nuts",
      "Washers",
      "Household Hardware",
      "Shower Panels & Accessories",
      "Sanitary Ware",
      "Tape Measures",
      "Taps & Faucets (Kitchen)",
      "Water Pumps",
      "Taps & Faucets (Bathroom)",
      "Starters",
    ],
    Img: "menu3.jpg"
  },
  {
    id: 4,
    title: "About Us",
    description: "At Enterprises Store, we are committed to providing high-quality products that cater to both residential and industrial needs. Our extensive range includes everything from electrical essentials like LED bulbs and switches to plumbing fixtures, home maintenance supplies, and more. We pride ourselves on offering reliable and durable solutions for all your construction and home improvement projects. With a focus on customer satisfaction, we ensure timely delivery, competitive prices, and a seamless shopping experience. Whether you're upgrading your home or undertaking a large-scale construction project, Enterprises Store has the products you can trust. Explore our diverse selection and experience exceptional service today!",
    Img: "about.jpg",
  },
  {
    id: 5,
    title: "Contact Us",
    description: "Address: No:2/116c , Indira complex , Subha Nagar Road , New Bus stand, backside, Kovilpatti, Tamil Nadu 628502",
    Img: "contactus.png",
  }
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductList = document.querySelector(".productList");
const productButton = document.querySelector(".productButton");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductDesc.textContent = choosenProduct.description;

    currentProductList.innerHTML = '';
    if (choosenProduct.listItems) {
      choosenProduct.listItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        currentProductList.appendChild(li);
      });
    }

    if (choosenProduct.id == 4 || choosenProduct.id == 5) {
      productButton.style.display = 'none';
    } 
    else {
      productButton.style.display = 'block';
    }

    currentProductImg.src = choosenProduct.Img;

  });
});

const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
