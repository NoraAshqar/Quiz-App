# Technical Requirements

##  Project Overview
This document outlines the technical specifications for the JavaScript Quiz App. 
The app allows users to answer multiple-choice questions, calculates their score, 
and shows a pass/fail result based on a 70%.

---


### File Structure


```
QuizApp/
├
├── index.html          # HTML structure
├── styles.css          # CSS styling for quiz layout
├── Question.js         # Question class
├── Questions.js        # Array of Question objects
├── Storage.js          # Storage class for localStorage management
├── Quiz.js             # Quiz logic, rendering, and event handling
├── README.md           # Project documentation
└── TECHNICAL_REQUIREMENTS.md # This technical requirements document

```


### **Classes & Structure**

#### **1. Question Class**
- **Properties**:
  - `id` → Unique identifier for the question  
  - `text` → Question text  
  - `options` → Array of answers  
  - `correctAns` → Correct answer  
- **Methods**:
  - `isCorrect(answer)` → Checks if the user’s answer is correct  

#### **2. Storage Class**
- **Purpose**: Save and load user answers from `localStorage`  
- **Methods**:
  - `saveAll(answersObj)` → Save or update answers  
  - `loadAll()` → Load saved answers  
  - `clearAll()` → Clear all saved answers  

#### **3. Quiz Logic (Quiz.js)**
- **Composition**: Uses `Question` objects and a `Storage` instance  
- **Responsibilities**:
  - Render questions and options to the DOM  
  - Track user answers  
  - Save/load answers from storage  
  - Calculate score (`calcScore`)  
  - Display pass/fail results (`showResult`)  
  - Reset quiz  

---

##  Technical Implementation Details

### **DOM Requirements**
- Render each question in a `<div>` with class `question`  
- Display options as radio buttons inside `<label>` tags  
- Submit button calculates score and shows pass/fail message  
- Reset button clears answers and resets the interface  
- Results are displayed in a `<div>` with id `results`  
