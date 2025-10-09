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

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "F1 Champions",
    category: "Sport",
    questions: [
      {
        id: 1,
        text: "Who has won the most Formula 1 World Championships?",
        answers: [
          { text: "Max Verstappen", id: 1 },
          { text: "Lewis Hamilton", id: 2 },
          { text: "Sebastian Vettel", id: 3 },
          { text: "Ayrton Senna", id: 4 },
        ],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: "Which driver won the 2023 F1 Championship?",
        answers: [
          { text: "Max Verstappen", id: 1 },
          { text: "Lewis Hamilton", id: 2 },
          { text: "Charles Leclerc", id: 3 },
          { text: "Sergio Perez", id: 4 },
        ],
        correctAnswer: 0,
      },
      {
        id: 3,
        text: "How many championships did Juan Manuel Fangio win?",
        answers: [
          { text: "3", id: 1 },
          { text: "4", id: 2 },
          { text: "5", id: 3 },
          { text: "6", id: 4 },
        ],
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
        id: 4,
        text: "Who is known as the 'Flying Finn'?",
        answers: [
          { text: "Kimi Räikkönen", id: 1 },
          { text: "Valtteri Bottas", id: 2 },
          { text: "Mika Häkkinen", id: 3 },
          { text: "Keke Rosberg", id: 4 },
        ],
        correctAnswer: 2,
      },
      {
        id: 5,
        text: "Which driver died in a crash during the 1994 San Marino Grand Prix?",
        answers: [
          { text: "Ayrton Senna", id: 1 },
          { text: "Roland Ratzenberger", id: 2 },
          { text: "Rubens Barrichello", id: 3 },
          { text: "Michael Schumacher", id: 4 },
        ],
        correctAnswer: 0,
      },
      {
        id: 6,
        text: "Who won the first ever F1 race in 1950?",
        answers: [
          { text: "Juan Manuel Fangio", id: 1 },
          { text: "Alberto Ascari", id: 2 },
          { text: "Nino Farina", id: 3 },
          { text: "Luigi Fagioli", id: 4 },
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
        id: 7,
        text: "What is the capital of France?",
        answers: [
          { text: "London", id: 1 },
          { text: "Berlin", id: 2 },
          { text: "Paris", id: 3 },
          { text: "Madrid", id: 4 },
        ],
        correctAnswer: 2,
      },
      {
        id: 8,
        text: "Which city is the capital of Japan?",
        answers: [
          { text: "Seoul", id: 1 },
          { text: "Beijing", id: 2 },
          { text: "Tokyo", id: 3 },
          { text: "Bangkok", id: 4 },
        ],
        correctAnswer: 2,
      },
      {
        id: 9,
        text: "What is the capital of Australia?",
        answers: [
          { text: "Sydney", id: 1 },
          { text: "Melbourne", id: 2 },
          { text: "Canberra", id: 3 },
          { text: "Perth", id: 4 },
        ],
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
        id: 10,
        text: "Who was the first Emperor of Rome?",
        answers: [
          { text: "Julius Caesar", id: 1 },
          { text: "Augustus", id: 2 },
          { text: "Nero", id: 3 },
          { text: "Caligula", id: 4 },
        ],
        correctAnswer: 1,
      },
      {
        id: 11,
        text: "In which year did the Roman Empire fall?",
        answers: [
          { text: "476 AD", id: 1 },
          { text: "410 AD", id: 2 },
          { text: "330 AD", id: 3 },
          { text: "27 BC", id: 4 },
        ],
        correctAnswer: 0,
      },
      {
        id: 12,
        text: "Which civilization built the pyramids at Giza?",
        answers: [
          { text: "Mesopotamians", id: 1 },
          { text: "Egyptians", id: 2 },
          { text: "Greeks", id: 3 },
          { text: "Romans", id: 4 },
        ],
        correctAnswer: 1,
      },
    ],
  },
];

export const quizList = quizzes.map((quiz) => ({
  title: quiz.title,
  link: `/quiz/${quiz.id}`,
}));
