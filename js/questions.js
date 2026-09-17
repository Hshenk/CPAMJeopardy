/**
 * questions.js - Holds the questions used by other files.
 * This file contains no actual logic, it's just storage
 */


// ============================================================
// CPAM Jeopardy – Question Bank
//
// categories: every category that can appear on a board
//   (shared by all pools)
//   id   – short internal name that questions link to
//   name – text shown in the category header
//
// pools: separate question lists, picked on the setup screen
//   Each key (easy, hard) must match a radio button value in index.html.
//   A question's difficulty is its level *within its own pool*.
//
// Each question:
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
    { id: "vertical-lift", name: "Vertical Lift" },
  ],

  pools: {
    // ==========================================================
    // EASY
    // ==========================================================
    easy: [
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

      // ---------------- Vertical Lift ----------------
      {
        category: "vertical-lift",
        difficulty: 1,
        question: "Where is the propeller of a helicopter: front, back, top, or bottom?",
        answer: "Top",
      },
      {
        category: "vertical-lift",
        difficulty: 1,
        question: "Who designs helicopters?",
        answer: "Engineers",
      },
      {
        category: "vertical-lift",
        difficulty: 1,
        question: "Name one use of helicopters.",
        answer: "Rescue, cargo, military, tours / fun",
      },
      {
        category: "vertical-lift",
        difficulty: 2,
        question: "Which direction do helicopters take off?",
        answer: "Up",
      },
      {
        category: "vertical-lift",
        difficulty: 2,
        question: "How many wings does the Berliner helicopter have?",
        answer: "Three",
      },
      {
        category: "vertical-lift",
        difficulty: 2,
        question: "What are the big blades of a helicopter called?",
        answer: "Rotors",
      },
      {
        category: "vertical-lift",
        difficulty: 3,
        question: "What are helicopter landing spots called?",
        answer: "Helipads",
      },
      {
        category: "vertical-lift",
        difficulty: 3,
        question: "What is another name for an unmanned helicopter?",
        answer: "A drone",
      },
      {
        category: "vertical-lift",
        difficulty: 3,
        question: "Which directions can helicopters fly?",
        answer: "All directions",
      },
    ],

    // ==========================================================
    // HARD
    // Levels 2–5 are estimates – review them.
    // ==========================================================
    hard: [
      // ---------------- Space ----------------
      {
        category: "space",
        difficulty: 1,
        question: "The first person to walk on the Moon.",
        answer: "Who is Neil Armstrong?",
      },
      {
        category: "space",
        difficulty: 1,
        question: "In 2006 this former planet was reclassified as a dwarf planet.",
        answer: "What is Pluto?",
      },
      {
        category: "space",
        difficulty: 1,
        question: "The number of planet in our solar system.",
        answer: "What is 8?",
      },
      {
        category: "space",
        difficulty: 1,
        question: "This object is Earth's only natural satellite.",
        answer: "What is the Moon?",
      },
      {
        category: "space",
        difficulty: 2,
        question: "Sputnik was the first of these devices to orbit the Earth.",
        answer: "What is a satellite?",
      },
      {
        category: "space",
        difficulty: 2,
        question: "This planet is named after the Roman god of war.",
        answer: "What is Mars?",
      },
      {
        category: "space",
        difficulty: 3,
        question: "Before the US landed on the Moon, this country was responsible for the first flight into space.",
        answer: "What is Russia / the Soviet Union?",
      },
      {
        category: "space",
        difficulty: 3,
        question: "This type of animal was the first to fly in Earth's orbit.",
        answer: "What is a dog?",
        choices: ["A dog", "A human", "A bear"],
      },
      {
        category: "space",
        difficulty: 4,
        question: "Rudimentary rockets have existed since at least the 13th century in this country.",
        answer: "What is China?",
        choices: ["The United States", "Germany", "Brazil", "China"],
      },
      {
        category: "space",
        difficulty: 4,
        question: "Another name for Earth's Moon, shared with the Roman goddess of the Moon.",
        answer: "What is Luna?",
      },
      {
        category: "space",
        difficulty: 5,
        question: "This planet, named for the Greek god who was the father of Cronus, is the only planet in our solar system that rotates on its side.",
        answer: "What is Uranus?",
      },

      // ---------------- Airplanes ----------------
      {
        category: "airplanes",
        difficulty: 1,
        question: "Known as the Field of Firsts, this is the oldest continuously operating airport in the world.",
        answer: "Where is College Park Airport?",
      },
      {
        category: "airplanes",
        difficulty: 1,
        question: "Among the four forces of flight, this force, created by an engine, pushes a plane forward.",
        answer: "Thrust",
      },
      {
        category: "airplanes",
        difficulty: 1,
        question: "A paved path that runs parallel to a runway. Used by airplanes before takeoff and after landing.",
        answer: "What is a taxiway?",
      },
      {
        category: "airplanes",
        difficulty: 2,
        question: "Developed by this famed 16th century Renaissance Man, the ornithopter was an early attempt at human flight.",
        answer: "Who was Leonardo da Vinci?",
        image: "images/ornithopter.jpg",
      },
      {
        category: "airplanes",
        difficulty: 2,
        question: "This is one of the six basic flight instruments seen in airplanes. (Name one).",
        answer: "What is an: Airspeed indicator, attitude indicator, altimeter, turn coordinator, heading indicator, vertical speed indicator",
        image: "images/six-pack-instruments.jpg",
      },
      {
        category: "airplanes",
        difficulty: 3,
        question: "These three axes of movement describe the directions in which a plane can steer.",
        answer: "What are: yaw, pitch, and roll?",
      },
      {
        category: "airplanes",
        difficulty: 3,
        question: "Even before birds, this carnivorous insect was the first to fly.",
        answer: "What are Dragonflies?",
      },
      {
        category: "airplanes",
        difficulty: 4,
        question: "This shape is responsible for generating lift for propellers and airplanes.",
        answer: "What is an airfoil",
        image: "images/airfoil.png",
      },
      {
        category: "airplanes",
        difficulty: 4,
        question: "This set of six instruments is so common aboard airplanes that it has earned this common nickname.",
        answer: "What is the \"six pack\"?",
        image: "images/six-pack-instruments.jpg",
      },
      {
        category: "airplanes",
        difficulty: 5,
        question: "Discovered in the 18th century by a Swiss inventor, this principle is responsible for generating lift.",
        answer: "What is Bernoulli's principle?",
        image: "images/airfoil.png",
      },
      {
        category: "airplanes",
        difficulty: 5,
        question: "Chosen by the Wright brothers for its light weight, this material was used to build the first airplane.",
        answer: "What is spruce wood, canvas, or muslin?",
      },

      // ---------------- Vertical Lift ----------------
      {
        category: "vertical-lift",
        difficulty: 1,
        question: "Helicopters land and take off from these circular platforms.",
        answer: "What is a helipad",
      },
      {
        category: "vertical-lift",
        difficulty: 1,
        question: "An aircraft flown without a human pilot onboard. Usually with either with a remote or automated system.",
        answer: "What is a drone",
      },
      {
        category: "vertical-lift",
        difficulty: 2,
        question: "In 1924, Emile and Henry Berliner demonstrated the first manned vertical flight for the US Army in this type of aircraft.",
        answer: "A helicopter",
        choices: ["A drone", "A helicopter", "A rocket"],
      },
      {
        category: "vertical-lift",
        difficulty: 3,
        question: "Helicopters use tail rotors to generate rotational force for this purpose.",
        answer: "How to counter the spinning force of the main rotor blades and to turn?",
      },
      {
        category: "vertical-lift",
        difficulty: 4,
        question: "NOTAR helicopters, know for being among the quietest in the world, are missing this component that would otherwise generate noise.",
        answer: "What is a tail rotor?",
        image: "images/silent-helicopter.jpg",
      },
      {
        category: "vertical-lift",
        difficulty: 5,
        question: "The difference between a 'rotor blade' and a 'propellor' this airfoil design is used by helicopters to generate lift at any angle.",
        answer: "What is a Symmetrical Airfoil",
        choices: ["Symmetrical", "Cambered"],
        image: "images/airfoil-types.jpg",
      },
    ],
  },
};
