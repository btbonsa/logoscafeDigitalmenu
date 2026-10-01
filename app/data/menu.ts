import { MenuItem } from "@/app/types/menu";

const photos = {
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=85",
  beef: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85",
  juice: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1000&q=85",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  coffee: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1000&q=85",
};

export const menuItems: MenuItem[] = [
  { id: 1, name: "Chicken Burger", description: "Grilled chicken, melted cheese, crisp lettuce, tomato, and our house sauce.", price: 350, category: "Burgers", image: photos.burger, popular: true },
  { id: 2, name: "Special Pizza", description: "A golden crust topped with chicken, mozzarella, garden vegetables, and rich tomato sauce.", price: 450, category: "Pizza", image: photos.pizza, popular: true },
  { id: 3, name: "Beef Burger", description: "A juicy grilled beef patty with cheddar, fresh vegetables, and smoky house dressing.", price: 400, category: "Burgers", image: photos.beef },
  { id: 4, name: "Fresh Juice", description: "A bright, refreshing blend made fresh with seasonal fruit.", price: 150, category: "Drinks", image: photos.juice },
  { id: 5, name: "Margherita Pizza", description: "Classic mozzarella, fragrant basil, and slow-cooked tomato on a crisp base.", price: 380, category: "Pizza", image: photos.pizza },
  { id: 6, name: "Crispy Chicken", description: "Crunchy golden chicken served with seasoned fries and a creamy dipping sauce.", price: 420, category: "Burgers", image: photos.burger, popular: true },
  { id: 7, name: "Chocolate Cake", description: "A soft, rich chocolate slice finished with silky ganache.", price: 180, category: "Desserts", image: photos.cake },
  { id: 8, name: "Iced Coffee", description: "Smooth espresso poured over ice with a splash of creamy milk.", price: 170, category: "Drinks", image: photos.coffee },
];
