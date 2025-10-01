
    const CSHARP = { name: "CSharp", link: "https://dotnet.microsoft.com/en-us/languages/csharp" },
        JAVASCRIPT = { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        HTML = { name: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        CSS3 = { name: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        P5 = { name: "p5", link: "https://p5js.org/" },
        TENSORFLOW = { name: "TensorFlow", link: "https://www.tensorflow.org/" },
        ARDUINO = { name: "Arduino", link: "https://www.arduino.cc/" },
        REACT = { name: "React", link: "https://reactjs.org/" },
        TYPESCRIPT = { name: "TypeScript", link: "https://www.typescriptlang.org/" },
        CPLUSPLUS = { name: "C++", link: "https://isocpp.org/" },
        UNITY = { name: "Unity", link: "https://unity.com/" },
        FIREBASE = { name: "Firebase", link: "https://firebase.google.com/" };
    


const projects = [
    {
        name: "Motion Surfer",
        description: "Want to exercise but struggle with motivation? Motion Surfer makes moving fun.<br/>This mobile fitness game turns real physical movement into in‑game actions using AI‑powered body tracking. Its low barrier and gamification make it easy to pick up daily – no gym, no excuses.",
        link: 'https://motionsurfer.de/',
        image: "images/project-icons/motionsurfer.png",
        technologies: [CSHARP, UNITY, FIREBASE, HTML, CSS3],
    },
    {
        name: "Fluent Ear",
        description: "A web application that helps musicians to train their ear and quickly find the right notes on their instrument.",
        link: 'https://www.fluent-ear.com',
        image: 'images/project-icons/fluent-ear-transparent.png',
        technologies: [REACT, TYPESCRIPT, CSS3],  
    },
    {
        name: "AI Character Classifier",
        description: "A web application that displays a selfmodeled AI, which is able to read handwritten numbers and can be trained to read letters by the user.",
        link: 'https://bryanhogan.github.io/projects/AAI/index.html',
        image: 'images/project-icons/ai.png',
        technologies: [TENSORFLOW, JAVASCRIPT, HTML, CSS3],
    },

    {
        name: "Generative Design",
        description: "A project showcasing generative design principles and techniques.",
        link: 'https://mzens.pages.coco.study/startercode-gestaltungsportfolio-2020/',
        image: 'images/project-icons/generative-gestaltung.png',
        technologies: [JAVASCRIPT, P5],
    },
    {
        name: "Wire Fire",
        description: "An atmospheric light installation that mimics the flickering glow of a flame.",
        link: 'https://www.youtube.com/watch?v=7zqv6YlaVhs&ab_channel=Mattes',
        image: 'images/project-icons/wirefiretransparentscene.png',
        technologies: [ARDUINO, CPLUSPLUS],
    }
]