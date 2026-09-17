// ===== 1. Element references =====

// Screens
const setupScreen = document.getElementById("setup-screen");
const boardScreen = document.getElementById("board-screen");
const questionScreen = document.getElementById("question-screen");

// Setup screen
const categoryList = document.getElementById("category-list");
const setupError = document.getElementById("setup-error");
const maxDifficultySelect = document.getElementById("max-difficulty");
const startButton = document.getElementById("start-button");

// Board screen
const boardElement = document.getElementById("board");
const newBoardButton = document.getElementById("new-board-button");

// Question screen
const questionCategory = document.getElementById("question-category");
const questionValue = document.getElementById("question-value");
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const questionChoices = document.getElementById("question-choices");
const answerBox = document.getElementById("answer-box");
const answerText = document.getElementById("answer-text");
const showAnswerButton = document.getElementById("show-answer-button");
const backToBoardButton = document.getElementById("back-to-board-button");

// ===== 2. Game state =====

const POINTS_PER_LEVEL = 100;

let currentBoard = [];

// ===== 3. Helpers =====

// Show one screen and hide the others
function showScreen(screenToShow) {
    const allScreens = [setupScreen, boardScreen, questionScreen];

    for (const screen of allScreens) {
        screen.hidden = screen !== screenToShow;
    }
}

// Return a shuffled copy
function shuffle(items) {
    const copy = [...items];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

// Return one random item from an array
function pickRandom(items) {
    if (items.length === 0) {
        return null;
    }

    return items[Math.floor(Math.random() * items.length)];
}


// ===== 4. Setup screen =====

// Build one checkbox per category
function renderCategoryOptions() {
    categoryList.innerHTML = "";

    for (const category of QUESTION_BANK.categories) {
        const label = document.createElement("label");
        label.className = "category-option";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = category.id;
        checkbox.checked = true;

        const name = document.createElement("span");
        name.textContent = category.name;

        label.append(checkbox, name);
        categoryList.append(label);
    }
}

function getSelectedCategories() {
    const checkedBoxes = categoryList.querySelectorAll("input:checked");
    const checkedIds = [...checkedBoxes].map((checkbox) => checkbox.value);

    return QUESTION_BANK.categories.filter((category) => checkedIds.includes(category.id));
}

function startGame() {
    const categories = getSelectedCategories();
    const maxLevel = Number(maxDifficultySelect.value);

    if (categories.length === 0) {
        setupError.hidden = false;
        return;
    }

    setupError.hidden = true;

    currentBoard = generateBoard(categories, maxLevel);
    renderBoard();
    showScreen(boardScreen);
}

// ===== 5. Board =====

// Pick random categories, then one random question
function generateBoard(categories, maxLevel) {
    return categories.map((category) => {
        const tiles = [];

        for (let level = 1; level <= maxLevel; level ++) {
            const pool = QUESTION_BANK.questions.filter(
                (question) => question.category === category.id && question.difficulty === level
            );

            const question = pickRandom(pool);

            if (!question) {
                console.warn(`No questions for "${category.name}" at ${level * POINTS_PER_LEVEL}.`);
            }

            tiles.push({ level, question, used: false });
        }

        return { category, tiles };
    });
}

function renderBoard() {
    boardElement.innerHTML = "";
    boardElement.style.setProperty("--category-count", currentBoard.length);

    for (const column of currentBoard) {
        const columnElement = document.createElement("div");
        columnElement.className = "category-column";

        const header = document.createElement("div");
        header.className = "category-header";
        header.textContent = column.category.name;
        columnElement.append(header);

        for (const tile of column.tiles) {
            const tileButton = document.createElement("button");
            tileButton.type = "button";
            tileButton.className = "tile";
            tileButton.textContent = tile.level * POINTS_PER_LEVEL;

            if (!tile.question) {
                tileButton.classList.add("tile--empty");
                tileButton.disabled = true;
            } else if (tile.used) {
                tileButton.classList.add("tile--used");
                tileButton.disabled = true;
            } else {
                tileButton.addEventListener("click", () => openQuestion(column.category, tile));
            }

            columnElement.append(tileButton)
        }

        boardElement.append(columnElement);
    }
}

// ===== 6. Question screen =====

// Show the question screen for a given tile
function openQuestion(category, tile) {
    const question = tile.question;

    tile.used = true;

    questionCategory.textContent = category.name;
    questionValue.textContent = tile.level * POINTS_PER_LEVEL;
    questionText.textContent = question.question;

    if (question.image) {
        questionImage.src = question.image;
        questionImage.alt = "Picture for this question";
        questionImage.hidden = false;
    } else {
        questionImage.removeAttribute("src");
        questionImage.alt = "";
        questionImage.hidden = true;
    }

    // For multiple-choice questions
    questionChoices.innerHTML = "";

    if (question.choices && question.choices.length > 0) {
        for (const choice of question.choices) {
            const item = document.createElement("li");
            item.textContent = choice;
            questionChoices.append(item);
        }
        questionChoices.hidden = false;
    } else {
        questionChoices.hidden = true;
    }

    // Answer starts hidden
    answerText.textContent = question.answer;
    answerBox.hidden = true;
    showAnswerButton.hidden = false;

    showScreen(questionScreen);
}

function showAnswer() {
    answerBox.hidden = false;
    showAnswerButton.hidden = true;
}

function returnToBoard() {
    renderBoard();
    showScreen(boardScreen);
}


// ===== 7. Event listeners & startup =====

startButton.addEventListener("click", startGame);
newBoardButton.addEventListener("click", () => showScreen(setupScreen));
showAnswerButton.addEventListener("click", showAnswer);
backToBoardButton.addEventListener("click", returnToBoard);
categoryList.addEventListener("change", () => {
    setupError.hidden = true;
});


renderCategoryOptions();
showScreen(setupScreen);
