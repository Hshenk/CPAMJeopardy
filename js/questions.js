/**
 * questions.js - Holds the questions used by other files.
 * This file contains no actual logic, it's just storage
 */


// ============================================================
// CPAM Jeopardy – Question Bank
//
// categories: every category that can appear on a board
//   id   – short internal name that questions link to
//   name – text shown in the category header
//
// questions: the pool that boards pull from
//   category   – must match a category id
//   difficulty – 1 to 5 (1 = 100 points ... 5 = 500 points)
//                null = not assigned yet, skipped when building boards
//   question   – the question text
//   answer     – shown after "Show Answer" is clicked
//   choices    – (optional) array of multiple-choice options
//   image      – (optional) image path, relative to index.html
// ============================================================

const QUESTION_BANK = {
  categories: [
    { id: "space", name: "Space" },
    { id: "airplanes", name: "Airplanes" },
    { id: "helicopters", name: "Helicopters" },
  ],

  questions: [
    // ---------------- Space ----------------
    {
      category: "space",
      difficulty: 1,
      question: "What do astronauts use to travel to space?",
      answer: "A rocket / spaceship",
    },
    {
      category: "space",
      difficulty: 1,
      question: "Is the Sun a star or a planet?",
      answer: "A star",
    },
    {
      category: "space",
      difficulty: 1,
      question: "How many moons does Earth have?",
      answer: "One",
    },
    {
      category: "space",
      difficulty: 2,
      question: "What is the 4th planet in our solar system?",
      answer: "Mars",
    },
    {
      category: "space",
      difficulty: 2,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      category: "space",
      difficulty: 2,
      question: "Saturn is famous for its what?",
      answer: "Rings",
    },
    {
      category: "space",
      difficulty: 3,
      question: "Who was the first person to walk on the Moon?",
      answer: "Neil Armstrong",
    },
    {
      category: "space",
      difficulty: 3,
      question: "Which planet in our solar system was changed to a dwarf planet?",
      answer: "Pluto",
    },
    {
      category: "space",
      difficulty: 3,
      question: "Why do astronauts float in space?",
      answer: "No gravity",
    },

    // Space – from "Extra Questions" (assign difficulties)
    {
      category: "space",
      difficulty: null,
      question: "Before the US landed on the Moon, this country was responsible for the first flight into space.",
      answer: "Russia / the Soviet Union",
    },
    {
      category: "space",
      difficulty: null,
      question: "Rudimentary rockets have existed since at least the 13th century. In what country did these early rockets fly?",
      answer: "China",
      choices: ["The United States", "Germany", "Brazil", "China"],
    },
    {
      category: "space",
      difficulty: null,
      question: "Sputnik was the first of these devices to orbit the Earth.",
      answer: "A satellite",
    },
    {
      category: "space",
      difficulty: null,
      question: "How many planets are in our solar system?",
      answer: "8",
    },
    {
      category: "space",
      difficulty: null,
      question: "This object is Earth's only natural satellite.",
      answer: "The Moon",
    },
    {
      category: "space",
      difficulty: null,
      question: "This type of animal was the first to fly in Earth's orbit.",
      answer: "A dog",
      choices: ["A dog", "A human", "A bear"],
    },
    {
      category: "space",
      difficulty: null,
      question: "This planet, named for the Greek god who was the father of Cronus, is the only planet in our solar system that rotates on its side.",
      answer: "Uranus",
    },
    {
      category: "space",
      difficulty: null,
      question: "This planet is named after the Roman god of war.",
      answer: "Mars",
    },

    // ---------------- Airplanes ----------------
    {
      category: "airplanes",
      difficulty: 1,
      question: "What is the job of someone who flies airplanes?",
      answer: "A pilot",
    },
    {
      category: "airplanes",
      difficulty: 1,
      question: "What do airplanes take off from?",
      answer: "A runway",
    },
    {
      category: "airplanes",
      difficulty: 1,
      question: "Where does the pilot sit while flying?",
      answer: "In the cockpit",
    },
    {
      category: "airplanes",
      difficulty: 2,
      question: "Who were the first to fly an airplane?",
      answer: "The Wright brothers",
    },
    {
      category: "airplanes",
      difficulty: 2,
      question: "How many wings does a biplane have?",
      answer: "Two",
    },
    {
      category: "airplanes",
      difficulty: 2,
      question: "What powers an airplane?",
      answer: "The engine",
    },
    {
      category: "airplanes",
      difficulty: 3,
      question: "What is the oldest continuously operating airport in the world?",
      answer: "College Park Airport",
    },
    {
      category: "airplanes",
      difficulty: 3,
      question: "What force pushes an airplane forward?",
      answer: "Thrust",
    },
    {
      category: "airplanes",
      difficulty: 3,
      question: "What is the path next to a runway called?",
      answer: "A taxiway",
    },

    // Airplanes – from "Extra Questions" (assign difficulties)
    {
      category: "airplanes",
      difficulty: null,
      question: "This set of six instruments is so common aboard airplanes that it has earned a nickname. What is it?",
      answer: "The \"six pack\"",
      image: "images/six-pack-instruments.jpg",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "Airplanes have a set of six basic flight instruments. Can you name any of them?",
      answer: "Airspeed indicator, attitude indicator, altimeter, turn coordinator, heading indicator, vertical speed indicator",
      image: "images/six-pack-instruments.jpg",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "What scientific principle is responsible for generating lift?",
      answer: "Bernoulli's principle",
      image: "images/airfoil.jpg",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "This shape is responsible for generating lift for propellers and airplanes. What is the name of this shape?",
      answer: "An airfoil",
      image: "images/airfoil.jpg",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "What are the three directions (axes) a plane can steer in?",
      answer: "Yaw, pitch, and roll",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "Chosen by the Wright brothers for its light weight, this material was used to build the first airplane.",
      answer: "Spruce wood, canvas, or muslin",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "Even before birds, this carnivorous insect was the first to fly.",
      answer: "Dragonflies",
    },
    {
      category: "airplanes",
      difficulty: null,
      question: "This machine is known as an ornithopter. It was designed in the 16th century by which Italian Renaissance inventor?",
      answer: "Leonardo da Vinci",
      image: "images/ornithopter.jpg",
    },

    // ---------------- Helicopters ----------------
    {
      category: "helicopters",
      difficulty: 1,
      question: "Where is the propeller of a helicopter: front, back, top, or bottom?",
      answer: "Top",
    },
    {
      category: "helicopters",
      difficulty: 1,
      question: "Who designs helicopters?",
      answer: "Engineers",
    },
    {
      category: "helicopters",
      difficulty: 1,
      question: "Name one use of helicopters.",
      answer: "Rescue, cargo, military, tours / fun",
    },
    {
      category: "helicopters",
      difficulty: 2,
      question: "Which direction do helicopters take off?",
      answer: "Up",
    },
    {
      category: "helicopters",
      difficulty: 2,
      question: "How many wings does the Berliner helicopter have?",
      answer: "Three",
    },
    {
      category: "helicopters",
      difficulty: 2,
      question: "What are the big blades of a helicopter called?",
      answer: "Rotors",
    },
    {
      category: "helicopters",
      difficulty: 3,
      question: "What are helicopter landing spots called?",
      answer: "Helipads",
    },
    {
      category: "helicopters",
      difficulty: 3,
      question: "What is another name for an unmanned helicopter?",
      answer: "A drone",
    },
    {
      category: "helicopters",
      difficulty: 3,
      question: "Which directions can helicopters fly?",
      answer: "All directions",
    },

    // Helicopters – from "Extra Questions" (assign difficulties)
    {
      category: "helicopters",
      difficulty: null,
      question: "In 1924, Emile and Henry Berliner demonstrated the first manned vertical flight for the US Army. What type of aircraft was it?",
      answer: "A helicopter",
      choices: ["A drone", "A helicopter", "A rocket"],
    },
    {
      category: "helicopters",
      difficulty: null,
      question: "What is the purpose of a tail rotor?",
      answer: "To counter the spinning force of the main rotor blades",
    },
  ],
};
