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
        heading: "Project 1",
        smallDesc: "Small Detial here",
        largeDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        date:"20th Nov 2023",
        inProgress: false
    },
    {
        heading: "Project 2",
        smallDesc: "Small Detial here",
        largeDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        date:"20th Nov 2023",
        inProgress: false
    },
    {
        heading: "Project 3",
        smallDesc: "Small Detial here",
        largeDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        date:"20th Nov 2023",
        inProgress: true
    },
    {
        heading: "Project 4",
        smallDesc: "Small Detial here",
        largeDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        date:"20th Nov 2023",
        inProgress: true
    },
]


export const articles: ArticleObj[] = [
    {
        title: "Article title 1",
        description: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        longerDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    },
    {
        title: "Article title 2",
        description: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
        longerDesc: "More Detials here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quod.",
    },

    // When you will add arcticles here in above format then they will automatically get rendered and displayed instead of hand image and no articles message, I have developed them is such a way that they can be added and removed without making changes in the future.
]

export const timeline: TimelineObj[] = [
    {
        title:"Oct-Dec, 2023",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, debitis dolore inventore ab ducimus earum et fugiat voluptas iusto. Architecto neque deserunt mollitia aut, qui molestiae quasi optio eius."
    },
    {
        title:"Jan-Mar, 2024",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, debitis dolore inventore ab ducimus earum et fugiat voluptas iusto. Architecto neque deserunt mollitia aut, qui molestiae quasi optio eius."
    },
    {
        title:"Apr-Jun, 2024",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, debitis dolore inventore ab ducimus earum et fugiat voluptas iusto. Architecto neque deserunt mollitia aut, qui molestiae quasi optio eius."
    },
]