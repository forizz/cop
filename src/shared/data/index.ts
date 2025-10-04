import type { Category, Quiz } from "~/entities";

export const categories: Category[] = [
  {
    title: "Geography",
    link: "#/geography",
    image: {
      href: "public/geography.jpeg",
      alt: "Geography",
    },
  },
  {
    title: "History",
    link: "#/history",
    image: {
      href: "public/history.png",
      alt: "History",
    },
  },
  {
    title: "Sport",
    link: "#/sport",
    image: {
      href: "public/sport.png",
      alt: "Sport",
    },
  },
];

export const quizes: Quiz[] = [
  {
    id: 1,
    title: "F1 Champions",
    category: "Sport",
    questions: [
      {
        text: "Who has won the most Formula 1 World Championships?",
        answers: [
          "Max Verstappen",
          "Lewis Hamilton",
          "Sebastian Vettel",
          "Ayrton Senna",
        ],
        correctAnswer: 1,
      },
      {
        text: "Which driver won the 2023 F1 Championship?",
        answers: [
          "Max Verstappen",
          "Lewis Hamilton",
          "Charles Leclerc",
          "Sergio Perez",
        ],
        correctAnswer: 0,
      },
      {
        text: "How many championships did Juan Manuel Fangio win?",
        answers: ["3", "4", "5", "6"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 2,
    title: "F1 Legends",
    category: "Sport",
    questions: [
      {
        text: "Who is known as the 'Flying Finn'?",
        answers: [
          "Kimi Räikkönen",
          "Valtteri Bottas",
          "Mika Häkkinen",
          "Keke Rosberg",
        ],
        correctAnswer: 2,
      },
      {
        text: "Which driver died in a crash during the 1994 San Marino Grand Prix?",
        answers: [
          "Ayrton Senna",
          "Roland Ratzenberger",
          "Rubens Barrichello",
          "Michael Schumacher",
        ],
        correctAnswer: 0,
      },
      {
        text: "Who won the first ever F1 race in 1950?",
        answers: [
          "Juan Manuel Fangio",
          "Alberto Ascari",
          "Nino Farina",
          "Luigi Fagioli",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 3,
    title: "World Capitals",
    category: "Geography",
    questions: [
      {
        text: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
      },
      {
        text: "Which city is the capital of Japan?",
        answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        correctAnswer: 2,
      },
      {
        text: "What is the capital of Australia?",
        answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Ancient History",
    category: "History",
    questions: [
      {
        text: "Who was the first Emperor of Rome?",
        answers: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
        correctAnswer: 1,
      },
      {
        text: "In which year did the Roman Empire fall?",
        answers: ["476 AD", "410 AD", "330 AD", "27 BC"],
        correctAnswer: 0,
      },
      {
        text: "Which civilization built the pyramids at Giza?",
        answers: ["Mesopotamians", "Egyptians", "Greeks", "Romans"],
        correctAnswer: 1,
      },
    ],
  },
];

export const quizList = quizes.map((quiz) => ({
  title: quiz.title,
  link: `/quiz/${quiz.id}`,
}));
