const projects = [
  {
    id: 1,
    title: "POS Management System",
    image: "/images/projects/pos.png",
    description:
      "Enterprise POS system for order management, invoicing and customer management.",

    technologies: [
      "Angular",
      "TypeScript",
      "Material UI",
      "REST API"
    ],

    github: "",
    live: "",
    isCompanyProject: true,

    features: [
      "Invoice Management",
      "Payments",
      "Reports",
      "Customer Management"
    ]
  },

  {
    id: 2,
    title: "Route Planner",

    image: "/images/projects/route.png",

    description:
      "Interactive route optimization system using Leaflet maps.",

    technologies: [
      "Angular",
      "Leaflet",
      "TypeScript",
      "Mapbox"
    ],

    github: "",
    live: "",
    isCompanyProject: true,

    features: [
      "Drag & Drop",
      "Map Routing",
      "Markers",
      "Optimization"
    ]
  },

  {
    id: 3,
    title: "Invoice Dashboard",

    image: "/images/projects/invoice.png",

    description:
      "Invoice and payment dashboard with reporting.",

    technologies: [
      "Angular",
      "Charts",
      "Bootstrap"
    ],

    github: "",
    live: "",
    isCompanyProject: true,

    features: [
      "Charts",
      "Payments",
      "Analytics"
    ]
  },

  {
    id: 4,
    title: "Shopping Cart",
    image: "/images/projects/shopping-cart.png",
    description:
      "Developed a personal e-commerce shopping cart application with product browsing, cart management, and a responsive user interface. Also migrated the application from Angular 12 to Angular 17.",

    technologies: [
      "Angular",
      "Typescript",
      "API",
      "Vercel"
    ],

    github: "https://github.com/Barath005/shopping-cart",
    live: "https://shopping-cart-theta-roan.vercel.app/",
    isCompanyProject: false,

    features: [
      "Product Listing",
      "Add To Cart",
      "Cart Quantity Update",
      "Responsive Layout"
    ]
  }

];

export default projects;
