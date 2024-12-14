type ArticleObj = {
    title: string;
    description: string;
    longerDesc: string;
    path?: string;
}

type TimelineObj = {
    title: string;
    desc: string;
}

type ProjectObj = {
    heading: string;
    smallDesc: string;
    largeDesc: string;
    date: string;
    inProgress: boolean;
}

export const projects: ProjectObj[] = [
    {
        heading: "VagaPunk Robot - Embedded System Introduction",
        smallDesc: "Two-wheel drive robot with ATMega324PA microcontroller coded in C/C++",
        largeDesc: "Two-wheel drive robot controlled by an ATMega324PA microcontroller, programmed in C and C++ with a custom Makefile. Project conducted in a team of six during Fall 2024. The project involved building and programming a robot capable of solving two challenges: finding the shortest path to a chosen point (using Dijkstra's algorithm) and navigating obstacles on a table with specific dimensions and markings. \n\nKey tasks included:\n\n- **Identification of Starting Point**: The robot determined its initial position using interrupt-based logic, displaying its coordinates and orientation on an LCD.\n\n- **Pathfinding**: Using Dijkstra's algorithm, the robot calculated the shortest path to a selected destination while dynamically avoiding obstacles.\n\n- **Obstacle Detection**: The robot detected obstacles, recalculated its route, and continued its journey to the destination.\n\n- **Real-time Updates**: The robot displayed real-time coordinates and provided feedback throughout its operation.\n\n- **Hardware Components**: The project utilized:\n  - Line follower sensor (Maker Line by Cytron)\n  - Distance sensor (GP2D120 by Sharp)\n  - LCD display\n  - Breadboard setup\n  - Two motorized wheels\n  - ATMega324PA and ATMega8 microcontrollers\n  - 9V battery and rechargeable AA batteries\n\nThe robot operated on a 4x8-foot table with 28 points connected by edges of varying weights. Red edges had a weight of 5, yellow edges 2, and black edges 1. The robot ensured cost-efficient pathfinding, avoiding higher-weighted edges when possible.\n\nAdditional project details, including the full equipment list, implementation steps, and related documentation, are available on the course website: [INF1900 Project Official Site](https://cours.polymtl.ca/inf1900/tp/projet/epreuves/).",
        date: "Autumn 2023",
        inProgress: false
    }
    ,
    {
        heading: "CANSLIM Calculator",
        smallDesc: "Web application for advanced stock analysis using CAN SLIM strategy",
        largeDesc: "Created a comprehensive web application to evaluate stock investments based on the CAN SLIM strategy, focusing on implementing a custom algorithm to calculate the CAN SLIM index. This algorithm processes multiple financial metrics, including EPS growth, ROE, sales trends, and institutional ownership, derived from real-time data fetched via the unofficial Yahoo Finance API. \n\nThe application is structured into intuitive sections such as Trending Stocks, Market News, and a Stock-Buying Checklist, guiding users through the CAN SLIM methodology. The algorithm assigns ratings to stocks, breaking down their performance across key categories like earnings, technical analysis, and institutional activity, while also calculating overall composite scores.\n\nThe front-end is built with native HTML, CSS, and JavaScript, ensuring a lightweight and responsive design. It is deployed on Vercel for high performance. The back-end, implemented in Express.js and hosted on Heroku, manages API requests, handles data processing, and delivers results seamlessly. Additionally, the site features SEO optimization, integrated Google Analytics 4 tracking, and a user-friendly interface.\n\nRegular updates are published via 𝕏 (@simy46_), ensuring transparency and continuous improvement. This project not only demonstrates advanced algorithm design and data processing capabilities but also provides a practical tool for investors seeking to analyze stocks effectively.",
        date: "Summer 2024",
        inProgress: false
    },
    {
        heading: "vinland.cc",
        smallDesc: "Web game built with Angular and NESTjs server using SocketIO",
        largeDesc: "Developed an interactive web game as a school project in teams of 6, utilizing Angular TypeScript for the front-end and NESTjs with SocketIO for the server-side. The game features real-time multiplayer functionality and dynamic interactions powered by websockets. The project was designed to create a Viking-themed experience, incorporating features like live player updates, map-based exploration, and combat mechanics. The game leverages advanced TypeScript and modular design principles for scalability and maintainability.",
        date: "Autumn 2024",
        inProgress: false
    },
    {
        heading: "Coding windows in 1 week",
        smallDesc: "Based on a youtube video",
        largeDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        date:"Now",
        inProgress: true
    },
    {
        heading: "Open Source Rust project",
        smallDesc: "Rust-to-FPGA communication on PYNQ-Z2 for a CubeSat",
        largeDesc: "As part of PolyOrbite, a student society dedicated to space technologies, the team and I are working on an open-source project aimed at optimizing communication between Rust and the PYNQ-Z2 FPGA. Our goal is to create an efficient solution for memory access and communication via the AXI Bus, significantly reducing resource and time requirements. Each member of the team has specific tasks to ensure a seamless integration. You can explore the project here: [Open-Source Project Link].",
        date: "Now",
        inProgress: true
    }
    
]


export const articles: ArticleObj[] = [
    // {
    //     title: "Article title 1",
    //     description: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    //     longerDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    // },
    // {
    //     title: "Article title 2",
    //     description: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    //     longerDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    // },

    // When you will add arcticles here in above format then they will automatically get rendered and displayed instead of hand image and no articles message, I have developed them is such a way that they can be added and removed without making changes in the future.
]

export const timeline: TimelineObj[] = [
    { 
        title: "Winter 2022", 
        desc: "Beginning of my programming journey with Python, my first language. Still focused on syntax, I couldn’t fully grasp what programming really was. I explored Matplotlib for data visualization and Turtle for graphical programming but forgot most of it.\nI didn’t yet know I wanted to pursue CS"
    },
    { 
        title: "Jan, 2023 - 1st semester", 
        desc: "I started university. In the first 5 minutes of the first class, I'm thinking to myself \"i'm really in university, and now learning privilaged knowledge\". I remember solving my first real Python problem, and understood it was math.. It was math behind programming ALL ALONG. Had difficulties understanding the logic at first, but before the semester ended I was super locked in" 

    },
    {
        title:"Summer, 2023",
        desc:"Had an advanced probabilty & stats course. Pure theoric mathematics. Studied days from 10am to 10pm. Paid off, I learned a lot and had a good grade."
    },
    {
        title:"Autumn, 2024 - 2nd semester",
        desc:"Started real computer learning. I was eating knowledge for breakfast, diner and super. I didn't stop and I liked eveything that I read. I wanted to know more everytime. Took a great linking in C++ and computer architecture"
    },
    {
        title:"Winter, 2024 - 3rd semester",
        desc:"Learned web dev : HTML/CSS/JS and React"
    },
    {
        title: "What do I do now?", 
        desc: "I am still learning engineering and computers. I joined a club. Our role is to implement a method for Rust to communicate with the PYNQ-Z2 (FPGA) and handle memory access efficiently. This solution will save significant time and resources. We are working with the AXI Bus, and each team member has specific tasks assigned to contribute to the project." 
    }
]