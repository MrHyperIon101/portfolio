import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Souvik",
  lastName: "Bagchi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Researcher, Full Stack Developer and Aspiring Data Scientist",
  avatar: "/images/avatar.jpeg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Bengali"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MrHyperIon101/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/bagchisouvik/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mrhyperionai@gmail.com",
  },
  
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Researcher, Full-Stack Developer, Aspiring Data Scientist.</>,
  subline: (
    <>
      I'm Souvik, a research intern at <InlineCode>MIT</InlineCode>, where I research on I research on virtual machines and container based operating systems in quantum computing.
      <br /> My interests span across the tech spectrum — from building full-stack applications to exploring the capabilities of Large Language Models (LLMs), cloud computing, and intelligent systems.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Souvik is a India-based research intern with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "MIT: Massachusetts Institute of Technology",
        timeframe: "2025 - Present",
        role: "Research Intern",
        achievements: [
          <>
            Redesigned the UI/UX for the HexOS platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into container workflows, enabling engineers to
            iterate 50% faster.
          </>,
          <>
            Researched a new type of hardware rasterization technique with the integration of AI tools into container workflows, enabling engineers to
            iterate 20% faster.
          </>,
        ],
        images: [],
      },
      {
        company: "Fiverr",
        timeframe: "2021 - Present",
        role: "Freelancer",
        achievements: [
          <>
            Provided UI/UX designing services through the Fiverr platform, after that further progressed to app development and web development.
          </>,
          <>
            Tested multiple app through client's inputs and some personal additions.
          </>,
        ],
        images: [],
      },
      {
        company: "Amazon Mechanical Turk",
        timeframe: "2021 - Present",
        role: "Worker Account",
        achievements: [
          <>
            Tested multiple people's app/services through Turk's Platform and added useful points to let the author improve.
          </>,
        ],
        images: [],
      },
      {
        company: "Nothing Community Board Insider",
        timeframe: "2025 - Present",
        role: "Lead Tester",
        achievements: [
          <>
            Fixed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Design",
        timeframe: "2024 - Present",
        role: "Lead Designer",
        achievements: [
          <>
            Worked on designing the FluentUI V2 that unified the brand across multiple platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional design team to launch a new product line, contributing to a 10.5% increase in overall company revenue.
          </>
        ],
        images: [],
      },
      {
        company: "Google Design",
        timeframe: "2024 - Present",
        role: "Junior Designer",
        achievements: [
          <>
            Worked on improving Material Design that is being used in the AOSP Kernel across multiple platforms.
          </>,
        ],
        images: [],
      },
      {
        company: "Microsoft Community Board Insider",
        timeframe: "2023 - Present",
        role: "Lead Tester",
        achievements: [
          <>
            Fixed FluentUI design system that unified the brand across multiple platforms, improving
            design consistency by 29%. Also fixed the Kernel Issue on AMD CPUs on 24H1.
          </>,
          <>
            Regularly monitors logs of Dev/Canary Branch of Windows Insider Platform and fixes bugs and improve the overall functioning of the platform.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sikkim Manipal University (SMIT)",
        description: <>Studying Computer Science engineering with major specialization on Data Analytics And Science.</>,
      },
      {
        name: "Kendriya Vidyalaya Sangathan",
        description: <>Studied on CBSE's PCM Syllabus Structure specializing on Computer Science.</>,
      },
      {
        name: "Google Developer Group Kolkata",
        description: <>Studied online marketing and personal branding. Also worked on Gemini Workshops.</>,
      },
      {
        name: "Google Developer Group Siliguri",
        description: <>Studied Gemini APIs principles and working methods.</>,
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    institutions: [
      {
        name: "Google Data Analytics Professional Certificate",
        description: <>Status: Currently Ongoing.</>,
      },
      { name: "Machine Learning Pipelines with Azure ML Studio", description: <>In this project-based course, we built an end-to-end machine learning pipeline in Azure ML Studio, all without writing a single line of code!</>},
      { name: "Get started with Asana", description: <>In this course, we learnt the Asana Fundamentals and managing tasks, subtasks, sections on Asana's Platform. It helped in learning about management of project workflow"</> },
      { name: "Google Ads for Beginners", description: <>Learnt to create ad groups, do keyword research, set up audience targeting, and write ads</> },
      { name: "Deep Learning with PyTorch : Image Segmentation", description: <>Used U-Net architecture for segmentation and created train function and evaluator for training loop</> },
    ]

  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "C, C#, C++, Java, Python, Javascript, HTML, CSS, Angular, MySQL, MongoDB",
        description: <>Building next gen apps combining backend with frontend magic.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Go, Angular.js, Anaconda, django, electron.js, flask, flutter, node.js, react.js, web3.js",
        description: <>Building new UI/UX centric apps.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Adobe Creative Cloud, Blender, Krita, AffinityPhoto, Firebase",
        description: <>Building next gen UI elements and doing professional multimedia editing.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Pandas, Scikit-Learn, Scipy, Numpy, Matplotlib, Github Actions, Gitlab, Pihole",
        description: <>Building next gen AI chatbots.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
