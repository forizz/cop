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
    difficulty: {
      easy: [
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
      medium: [
        {
          id: 1,
          text: "Which team won the Constructors' Championship in 2022?",
          answers: [
            { text: "Mercedes", id: 1 },
            { text: "Red Bull Racing", id: 2 },
            { text: "Ferrari", id: 3 },
            { text: "McLaren", id: 4 },
          ],
          correctAnswer: 1,
        },
        {
          id: 2,
          text: "How many Grand Prix wins does Fernando Alonso have?",
          answers: [
            { text: "30", id: 1 },
            { text: "32", id: 2 },
            { text: "34", id: 3 },
            { text: "36", id: 4 },
          ],
          correctAnswer: 1,
        },
        {
          id: 3,
          text: "Which circuit hosts the Belgian Grand Prix?",
          answers: [
            { text: "Spa-Francorchamps", id: 1 },
            { text: "Monza", id: 2 },
            { text: "Silverstone", id: 3 },
            { text: "Monaco", id: 4 },
          ],
          correctAnswer: 0,
        },
      ],
      hard: [
        {
          id: 1,
          text: "Which driver holds the record for the most consecutive race wins?",
          answers: [
            { text: "Sebastian Vettel", id: 1 },
            { text: "Max Verstappen", id: 2 },
            { text: "Michael Schumacher", id: 3 },
            { text: "Alain Prost", id: 4 },
          ],
          correctAnswer: 0,
        },
        {
          id: 2,
          text: "In which year was the first turbocharged engine introduced in F1?",
          answers: [
            { text: "1977", id: 1 },
            { text: "1981", id: 2 },
            { text: "1985", id: 3 },
            { text: "1979", id: 4 },
          ],
          correctAnswer: 0,
        },
        {
          id: 3,
          text: "Which team dominated F1 in the 1980s with 6 consecutive Constructors' Championships?",
          answers: [
            { text: "Williams", id: 1 },
            { text: "McLaren", id: 2 },
            { text: "Ferrari", id: 3 },
            { text: "Lotus", id: 4 },
          ],
          correctAnswer: 1,
        },
      ],
    },
  },
  {
    id: 2,
    title: "F1 Legends",
    category: "Sport",
    difficulty: {
      easy: [
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
      medium: [
        {
          id: 6,
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
          id: 7,
          text: "How many F1 World Championships did Alain Prost win?",
          answers: [
            { text: "3", id: 1 },
            { text: "4", id: 2 },
            { text: "5", id: 3 },
            { text: "6", id: 4 },
          ],
          correctAnswer: 1,
        },
      ],
      hard: [
        {
          id: 8,
          text: "Which driver won the 1976 German Grand Prix despite having a broken neck?",
          answers: [
            { text: "Niki Lauda", id: 1 },
            { text: "James Hunt", id: 2 },
            { text: "Mario Andretti", id: 3 },
            { text: "Jody Scheckter", id: 4 },
          ],
          correctAnswer: 0,
        },
        {
          id: 9,
          text: "In which year did the first turbocharged F1 car win a race?",
          answers: [
            { text: "1978", id: 1 },
            { text: "1979", id: 2 },
            { text: "1980", id: 3 },
            { text: "1981", id: 4 },
          ],
          correctAnswer: 0,
        },
      ],
    },
  },
  {
    id: 3,
    title: "World Capitals",
    category: "Geography",
    difficulty: {
      easy: [
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
      ],
      medium: [
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
        {
          id: 10,
          text: "Which city is the capital of Brazil?",
          answers: [
            { text: "Rio de Janeiro", id: 1 },
            { text: "São Paulo", id: 2 },
            { text: "Brasília", id: 3 },
            { text: "Salvador", id: 4 },
          ],
          correctAnswer: 2,
        },
      ],
      hard: [
        {
          id: 11,
          text: "What is the capital of Kazakhstan?",
          answers: [
            { text: "Almaty", id: 1 },
            { text: "Astana", id: 2 },
            { text: "Nur-Sultan", id: 3 },
            { text: "Shymkent", id: 4 },
          ],
          correctAnswer: 1,
        },
        {
          id: 12,
          text: "Which city serves as the capital of both South Africa and Lesotho?",
          answers: [
            { text: "Cape Town", id: 1 },
            { text: "Johannesburg", id: 2 },
            { text: "Maseru", id: 3 },
            { text: "Pretoria", id: 4 },
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
  {
    id: 4,
    title: "Ancient History",
    category: "History",
    difficulty: {
      easy: [
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
      medium: [
        {
          id: 12,
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
          id: 13,
          text: "Who was the first Pharaoh of Ancient Egypt?",
          answers: [
            { text: "Narmer", id: 1 },
            { text: "Khufu", id: 2 },
            { text: "Tutankhamun", id: 3 },
            { text: "Cleopatra", id: 4 },
          ],
          correctAnswer: 0,
        },
      ],
      hard: [
        {
          id: 14,
          text: "Which Greek philosopher was the teacher of Alexander the Great?",
          answers: [
            { text: "Plato", id: 1 },
            { text: "Socrates", id: 2 },
            { text: "Aristotle", id: 3 },
            { text: "Diogenes", id: 4 },
          ],
          correctAnswer: 2,
        },
        {
          id: 15,
          text: "In which battle did Hannibal famously cross the Alps with elephants?",
          answers: [
            { text: "Battle of Zama", id: 1 },
            { text: "Battle of Cannae", id: 2 },
            { text: "Battle of Ticino", id: 3 },
            { text: "Battle of the Trebia", id: 4 },
          ],
          correctAnswer: 2,
        },
      ],
    },
  },
  {
    id: 5,
    title: "Basic Geography",
    category: "Geography",
    difficulty: {
      easy: [
        {
          id: 16,
          text: "What is the largest continent?",
          answers: [
            { text: "Africa", id: 1 },
            { text: "Asia", id: 2 },
            { text: "Europe", id: 3 },
            { text: "North America", id: 4 },
          ],
          correctAnswer: 1,
        },
        {
          id: 17,
          text: "Which ocean is the largest?",
          answers: [
            { text: "Atlantic Ocean", id: 1 },
            { text: "Indian Ocean", id: 2 },
            { text: "Pacific Ocean", id: 3 },
            { text: "Arctic Ocean", id: 4 },
          ],
          correctAnswer: 2,
        },
      ],
      medium: [
        {
          id: 18,
          text: "What is the longest river in the world?",
          answers: [
            { text: "Amazon River", id: 1 },
            { text: "Nile River", id: 2 },
            { text: "Yangtze River", id: 3 },
            { text: "Mississippi River", id: 4 },
          ],
          correctAnswer: 1,
        },
      ],
      // Note: No hard difficulty for this quiz
    },
  },
];

export const quizList = quizzes.map((quiz) => ({
  title: quiz.title,
  link: `/quiz/${quiz.id}`,
}));
