export const SITE = {
  name: "El Gran Castillo de Jagua",
  tagline: "none",
  phone: "",
  email: "",
  address: "355 Flatbush Ave, Brooklyn, NY 11238",
  hours: "Mon - Sat: 8am - 10pm, Sun: 8am - 9pm",
  mapsUrl: "https://maps.app.goo.gl/5dcAWcnLoyizeC5W6",
  socials: {
    instagram: "https://instagram.com/pulsecoffee.nyc",
  },
};

export const NAV = [
  { label: "Menu", href: "/menu" },
  { label: "Contact", href: "/contact" },
] as const;

export const PHOTOS = {
    hero: "/images/hero.jpg",
} as const;

export const BREAKFAST_MENU_SECTIONS = [
  {
    title: "Breakfast Specials",
    items: [
      { name: "2 Eggs Scrambled or Fried", price: "$9", desc: "With white, wheat, or rye toast & home fries." },
      { name: "2 Eggs with Meat", price: "$11", desc: "Add bacon, ham, or pork sausage to your eggs." },
      { name: "French Toast", price: "$9", desc: "Classic french toast; add bacon, ham, or pork sausage for $11." },
      { name: "Pancakes", price: "$9", desc: "Fluffy pancakes; add bacon, ham, pork sausage, or chocolate chips for $11." },
      { name: "Poached or Boiled Egg", price: "+$1.50", desc: "Add to any breakfast special." },
    ],
  },
  {
    title: "Dominican Breakfast",
    items: [
      { name: "Mangu or Cassava with Salami", price: "$9", desc: "Traditional mashed plantain or cassava served with salami." },
      { name: "Mangu or Cassava with Fried Cheese", price: "$10", desc: "Classic Dominican breakfast with fried cheese." },
      { name: "Mangu or Cassava — Full Plate", price: "$13", desc: "With fried cheese, salami, and 2 eggs." },
      { name: "Fried Cheese, Salami & Eggs on a Hero", price: "$11", desc: "Dominican breakfast served on a hero roll." },
    ],
  },
  {
    title: "Fresh Omelettes",
    items: [
      { name: "Cheese Omelette", price: "$11", desc: "Choice of American, Swiss, or cheddar. Served with toast and home fries." },
      { name: "Western Omelette", price: "$12", desc: "Ham, onions, and green peppers. Served with toast and home fries." },
      { name: "Vegetable Omelette", price: "$10", desc: "Tomatoes, onion, and green peppers. Served with toast and home fries." },
      { name: "Spanish Omelette", price: "$12", desc: "Onions, green peppers, and chorizo. Served with toast and home fries." },
      { name: "Avocado Omelette", price: "$12", desc: "Fresh avocado omelette. Served with toast and home fries." },
    ],
  },
  {
    title: "Breakfast Sandwiches",
    items: [
      { name: "With 2 Eggs", price: "$5", desc: "On white, wheat, rye, roll, or bagel. Add $1 for croissant or hero." },
      { name: "With 2 Eggs & Pork Bacon or Sausage", price: "$6", desc: "Hearty egg sandwich with pork bacon or sausage." },
      { name: "With 2 Eggs & Turkey Bacon or Turkey Sausage", price: "$7", desc: "Lighter option with turkey bacon or turkey sausage." },
      { name: "Western Omelette Sandwich", price: "$8", desc: "Full western omelette on your choice of bread." },
    ],
  },
  {
    title: "Breakfast Sides",
    items: [
      { name: "Toast", price: "$2", desc: "White, wheat, or rye." },
      { name: "Home Fries", price: "$6", desc: "Classic seasoned home fries." },
      { name: "Bacon", price: "$4.50", desc: "Pork bacon." },
      { name: "Sausage", price: "$4.50", desc: "Pork sausage." },
      { name: "Beef Sausage", price: "$3.75", desc: "Savory beef sausage." },
      { name: "Turkey Sausage", price: "$4.50", desc: "Leaner turkey sausage option." },
      { name: "Fried Cheese", price: "$5.50", desc: "Golden pan-fried cheese." },
      { name: "Bagel with Cream Cheese", price: "$3.50", desc: "Fresh bagel with cream cheese." },
      { name: "Croissant", price: "$2.75", desc: "Buttery croissant." },
      { name: "Corn Muffins", price: "$2.75", desc: "Fresh-baked corn muffins." },
      { name: "Corn Bread", price: "$3", desc: "House corn bread." },
      { name: "Grits", price: "$3", desc: "Creamy southern-style grits." },
    ],
  },
] as const;

export const LUNCH_DINNER_MENU_SECTIONS = [
  {
    title: "Meat Selections",
    items: [
      { name: "BBQ Chicken", price: "$16 / $19", desc: "Quarter or half. Served with rice & beans, plantain & salad, french fries & salad, mashed potato & salad, cassava & salad, or rice and pigeon peas." },
      { name: "½ Rotisserie Chicken", price: "$16", desc: "Slow-roasted half chicken." },
      { name: "Fried Pork Meat Chunks", price: "$18", desc: "Crispy fried chunks of pork." },
      { name: "Fried Beef Chunks", price: "$24", desc: "Golden-fried beef chunks." },
      { name: "Fried Chicken Chunks", price: "$16", desc: "Crispy fried chicken pieces." },
      { name: "Boneless Chicken Chunks", price: "$18", desc: "Boneless fried chicken bites." },
      { name: "Roast Pork", price: "$17", desc: "Slow-roasted pork." },
      { name: "Beef Stew", price: "$18", desc: "Hearty braised beef stew." },
      { name: "BBQ Spare Ribs", price: "$17", desc: "Smoky barbecue spare ribs." },
      { name: "Broiled Chicken", price: "$15 / $18", desc: "Quarter or half broiled chicken." },
      { name: "Fried Chicken", price: "$15 / $18", desc: "Quarter or half fried chicken." },
      { name: "Beef Steak in Sauce", price: "$22", desc: "Tender beef steak in savory sauce." },
      { name: "Chicken Pepper Steak — Spanish Style", price: "$18", desc: "Chicken in a Spanish-style pepper sauce." },
      { name: "Beef Pepper Steak — Spanish Style", price: "$22", desc: "Beef in a rich Spanish-style pepper sauce." },
      { name: "Steak with Onions", price: "$22", desc: "Grilled steak topped with sautéed onions." },
      { name: "Breaded Steak", price: "$22", desc: "Crispy breaded and pan-fried steak." },
      { name: "Fried Pork Chops", price: "$15 / $18", desc: "One or two fried pork chops." },
      { name: "Chicken Steak", price: "$18", desc: "Pan-fried chicken steak." },
      { name: "Breaded Pork Chops", price: "$16 / $19", desc: "One or two crispy breaded pork chops." },
      { name: "Broiled Pork Chops", price: "$17 / $20", desc: "One or two broiled pork chops." },
      { name: "T-Bone Steak", price: "MP", desc: "Market price. Ask your server." },
      { name: "Stewed Oxtail", price: "$26", desc: "Slow-braised oxtail in rich sauce." },
    ],
  },
  {
    title: "Seafood",
    items: [
      { name: "Fried or Sautéed Calamari", price: "$16", desc: "Tender calamari fried or sautéed to order." },
      { name: "Grilled Fillet Fish", price: "$20", desc: "Fresh fish fillet, grilled." },
      { name: "Fillet Fish in Tomato Sauce", price: "$20", desc: "Fish fillet braised in house tomato sauce." },
      { name: "Fried Fillet Fish", price: "$20", desc: "Crispy fried fish fillet." },
      { name: "Tilapia Fillet", price: "$18", desc: "Lightly seasoned tilapia fillet." },
      { name: "Red Salmon in Tomato Sauce", price: "$22", desc: "Salmon in a rich tomato sauce." },
      { name: "Broiled Red Salmon", price: "$22", desc: "Simply broiled red salmon." },
      { name: "Shrimp in Tomato Sauce", price: "$22", desc: "Shrimp simmered in savory tomato sauce." },
      { name: "Grilled Shrimp", price: "$22", desc: "Seasoned shrimp off the grill." },
      { name: "Fried Shrimp", price: "$22", desc: "Golden crispy fried shrimp." },
      { name: "Salmon Fillet", price: "$26", desc: "Premium salmon fillet." },
      { name: "Red Snapper", price: "MP", desc: "Fried, grilled, or in tomato sauce. Market price." },
      { name: "Lobster in Tomato Sauce", price: "MP", desc: "Market price. Ask your server." },
      { name: "Grilled Lobster", price: "MP", desc: "Market price. Ask your server." },
    ],
  },
  {
    title: "Rice and Soupy Rice",
    items: [
      { name: "Chicken Soupy Rice", price: "$15", desc: "Slow-cooked rice with tender chicken." },
      { name: "Rice with Squid", price: "$15", desc: "Savory rice prepared with squid." },
      { name: "Rice with Sausage", price: "$15", desc: "Seasoned rice cooked with sausage." },
      { name: "Rice with Chicken", price: "$15", desc: "Classic arroz con pollo." },
      { name: "Rice with Shrimp", price: "$22", desc: "Rice with seasoned shrimp." },
      { name: "Shrimp Soupy Rice", price: "$22", desc: "Rich and brothy shrimp rice." },
      { name: "Lobster Soupy Rice", price: "MP", desc: "Brothy lobster rice. Market price." },
      { name: "Rice with Lobster", price: "MP", desc: "Market price. Ask your server." },
      { name: "Pigeon Pea Soupy Rice", price: "$12", desc: "Traditional rice with pigeon peas." },
      { name: "Calamari Soupy Rice", price: "$16", desc: "Brothy rice with tender calamari." },
      { name: "Chorizo Soupy Rice", price: "$16", desc: "Hearty rice with Spanish chorizo." },
    ],
  },
  {
    title: "Mofongo",
    items: [
      { name: "Plain Mofongo", price: "$11", desc: "Classic mashed green plantains. Add cheese for $3." },
      { name: "Mofongo with Roast Pork", price: "$14", desc: "Mofongo topped with tender roast pork." },
      { name: "Mofongo with Cheese", price: "$15", desc: "Mofongo loaded with melted cheese." },
      { name: "Mofongo with Chicken", price: "$14", desc: "Mofongo topped with seasoned chicken." },
      { name: "Camarofongo / Shrimp", price: "$22", desc: "Mofongo with savory shrimp." },
      { name: "Pork Chicharon", price: "$16", desc: "Mofongo with crispy pork crackling." },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Pure Beef Hamburger", price: "$6", desc: "Simple, classic beef burger." },
      { name: "Cheeseburger", price: "$7", desc: "Beef burger with melted cheese." },
      { name: "Hamburger Deluxe", price: "$11", desc: "Loaded burger with all the fixings." },
      { name: "Cheeseburger Deluxe", price: "$12", desc: "Deluxe burger with cheese and toppings." },
    ],
  },
  {
    title: "Mixed Seafood Combo with Yellow Rice Paella",
    items: [
      { name: "For 1", price: "MP", desc: "Market price. A generous seafood paella for one." },
      { name: "For 2", price: "MP", desc: "Market price. Shared seafood paella for two." },
    ],
  },
  {
    title: "Soups",
    items: [
      { name: "Chicken Soup", price: "$10", desc: "Available every day." },
      { name: "Beef Soup", price: "$11", desc: "Available Monday, Wednesday, and Saturday." },
      { name: "Sancocho — Beef & Chicken Spanish Soup", price: "$11", desc: "Available Tuesday, Thursday, and Sunday." },
      { name: "Seafood Soup", price: "$14", desc: "Available on Fridays." },
    ],
  },
  {
    title: "Salads",
    items: [
      { name: "Lettuce, Tomato & Cucumber", price: "$6", desc: "Fresh garden salad." },
      { name: "Lettuce, Tomato & Avocado", price: "Ask", desc: "In season. Ask your server for pricing." },
      { name: "Chicken Salad", price: "$11", desc: "Garden salad topped with chicken." },
      { name: "Grilled Chicken Salad", price: "$17", desc: "Salad with grilled chicken." },
      { name: "Shrimp Salad", price: "$22", desc: "Fresh salad topped with seasoned shrimp." },
    ],
  },
] as const;





