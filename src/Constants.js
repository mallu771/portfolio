import Todo from "./Assets/Projects/Todo.jpg";
import Calculator from "./Assets/Projects/calculator.png";
import Shopping from "./Assets/Projects/shoppingcart.jpg";


export const PROJECTS = [
  {
    image: Todo,
    name: "Todo App",
    technologyUsed: "ReactJs,Bootstrap",
    description: "A CRUD-based Todo app in React + Bootstrap lets users Create, Read, Update, and Delete tasks.It uses React state/hooks to manage todos dynamically in the browser.Bootstrap provides responsive styling for forms, buttons, and task lists.Users can add new todos, edit existing ones, mark them complete, or remove them.This app demonstrates essential React concepts like state, props, events, and component reusability.",
    url: "https://todo-react-bootstrap.vercel.app/",
  },
  {
    image: Shopping,
    name: "Shopping cart",
    technologyUsed: "ReactJs,Bootstrap",
    description: "A shopping cart app in React + Bootstrap lets users browse items and add them to a cart and remove item quantities in the cart.A search bar is added at the top using Bootstrap’s form input.As the user types, React filters products from the full list by name or category.Only the matching items are displayed in the product grid.Users can then add filtered items to the cart just like normal.",
    url: "https://ecommerce-store-five-tawny.vercel.app/",
  },
  {
    image: Calculator,
    name: "Calculator",
    technologyUsed: "React.js,React-Bootstrap, Javascript, HTML5 & CSS3",
    description: "This project is a React-based Scientific Calculator that provides both basic and advanced mathematical operations. It is built using React-Bootstrap, which ensures a responsive layout and a clean, modern interface, while Bootstrap Icons add a professional visual touch to the buttons and controls. The calculator supports arithmetic, trigonometric, logarithmic, power, factorial, and memory functions",
    url: "https://calculator-gamma-nine-84.vercel.app/",
  },

];

export const SKILLS = [
  { name: "ReactJs", initialRating: 4 },
  { name: "JavaScript(ES6+)", initialRating: 4 },
  { name: "Redux", initialRating: 3 },
  { name: "Node.js(basic)", initialRating: 3 },
  { name: "EXpress.js", initialRating: 3 },
  { name: "Html", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Unit-Testing(Jest)", initialRating: 3 },
  { name: "TypeScript(basic)", initialRating: 2 },
  { name: "Git,GitHub", initialRating: 4 },
  { name: "GitHub Actions", initialRating: 3 },
  { name: "Babel, ESLint", initialRating: 3 },
  { name: "AWS S3", initialRating: 2},
  
];

export const TOOLS = ["Visual Studio Code", "Git,GitHub", "Chrome DevTools", "Npm (Node Package Manager)", "Sublime Text", "vercel (deployment & hosting)","Bootstrap","React-Bootstrap","MySQL Workbench","Jira"]
