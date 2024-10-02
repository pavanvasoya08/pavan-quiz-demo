export const quizQuestions = [
    // HTML Questions
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<hyperlink>"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: [
            "<lb>",
            "<break>",
            "<br>",
            "<newline>"
        ],
        correctAnswer: 2
    },
    {
        question: "Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
        options: [
            "title",
            "alt",
            "src",
            "longdesc"
        ],
        correctAnswer: 1
    },
    {
        question: "Which HTML5 element is used to define navigation links?",
        options: [
            "<navigate>",
            "<nav>",
            "<navigation>",
            "<navi>"
        ],
        correctAnswer: 1
    },
    {
        question: "How can you open a link in a new tab/browser window?",
        options: [
            '<a href="url" target="_blank">',
            '<a href="url" new>',
            '<a href="url" target="new">',
            '<a href="url" open="_blank">'
        ],
        correctAnswer: 0
    },

    // CSS Questions
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            "font-color",
            "text-color",
            "color",
            "fgcolor"
        ],
        correctAnswer: 2
    },
    {
        question: "How do you add a background color in CSS?",
        options: [
            "background-color: #FFFFFF;",
            "bgcolor: #FFFFFF;",
            "background: #FFFFFF;",
            "Both A and C are correct"
        ],
        correctAnswer: 3
    },
    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        correctAnswer: 2
    },
    {
        question: "Which CSS selector is used to select elements with a specific class?",
        options: [
            "#classname",
            ".classname",
            "*classname",
            "classname"
        ],
        correctAnswer: 1
    },
    {
        question: "How do you make each word in a text start with a capital letter in CSS?",
        options: [
            "text-transform: uppercase;",
            "text-transform: capitalize;",
            "text-style: capitalize;",
            "transform: capitalize;"
        ],
        correctAnswer: 1
    },

    // JavaScript Questions
    {
        question: "Inside which HTML element do we put the JavaScript code?",
        options: [
            "<javascript>",
            "<script>",
            "<js>",
            "<code>"
        ],
        correctAnswer: 1
    },
    {
        question: 'How do you write "Hello World" in an alert box in JavaScript?',
        options: [
            'alertBox("Hello World");',
            'msg("Hello World");',
            'alert("Hello World");',
            'msgBox("Hello World");'
        ],
        correctAnswer: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunction()",
            "function:myFunction()",
            "create myFunction()",
            "func myFunction()"
        ],
        correctAnswer: 0
    },
    {
        question: "How do you call a function named myFunction in JavaScript?",
        options: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()",
            "Call.myFunction()"
        ],
        correctAnswer: 2
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onchange",
            "onmouseclick",
            "onclick",
            "onmouseover"
        ],
        correctAnswer: 2
    },

    // Mixed HTML, CSS, and JavaScript Questions
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
            "class",
            "style",
            "styles",
            "font"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the correct CSS syntax to change the background color of all <h1> elements to blue?",
        options: [
            "h1 {background-color: blue;}",
            "h1:background-color = blue;",
            "h1 {bg-color: blue;}",
            "h1 {background: blue;}"
        ],
        correctAnswer: 0
    },
    {
        question: 'How do you select an element with the id "demo" in JavaScript?',
        options: [
            'document.getElement("demo")',
            'document.getElementById("demo")',
            'document.querySelector("#demo")',
            'Both B and C are correct'
        ],
        correctAnswer: 3
    },
    {
        question: "Which property is used to change the font of an element in CSS?",
        options: [
            "font-weight",
            "font-style",
            "font-family",
            "text-font"
        ],
        correctAnswer: 2
    },
    {
        question: "What will the following JavaScript code output?\n```javascript\nconsole.log(typeof null);\n```",
        options: [
            "\"null\"",
            "\"object\"",
            "\"undefined\"",
            "\"number\""
        ],
        correctAnswer: 1
    }
];
