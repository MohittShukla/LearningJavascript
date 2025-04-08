# JavaScript Learning Playground

This folder contains various small JavaScript programs I've written to understand and practice the core concepts of JavaScript. Each file is focused on a specific topic or feature, and the code is intentionally simple and well-commented to make it easy to revisit and revise.

---

## 📂 Folder Overview

### 1. **`filter.js`**
Contains examples of using the `filter()` method:
- Filtering positive numbers from an array.
- Filtering strings based on length.
- Filtering users by city.
- Filtering products based on multiple conditions.
- Filtering students who passed and extracting their names.

Each example is clearly separated and explained using plain logic.

---

### 2. **`map.js`**
Contains examples using the `map()` method:
- Adding 10 to every number in an array.
- Converting fruit names to uppercase.
- Getting string lengths of array items.
- Extracting specific fields (like names) from arrays of objects.
- Formatting product information into strings.

Again, each case is isolated and easy to understand.

---

### 3. **`quiz.js`**
An interactive terminal-based quiz app that:
- Asks multiple-choice questions one by one.
- Accepts user input via `prompt-sync`.
- Validates answers and gives feedback after each question.
- Shows the final score once the quiz ends.

This file showcases how to:
- Structure logic using functions.
- Handle user input in Node.js.
- Use `setTimeout` for delays between actions.
- Use callbacks to keep logic clean and extensible.

---

## 🛠 Requirements

For running the quiz app (`quiz.js`), you'll need to install the `prompt-sync` module:

```bash
npm install prompt-sync
