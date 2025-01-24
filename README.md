# Project README

## Table of Contents

1. [Getting Started](#getting-started)
2. [Thought Process and Architectural Decisions](#thought-process-and-architectural-decisions)
3. [Folder Structure](#folder-structure)
4. [Trade-Offs and Assumptions](#trade-offs-and-assumptions)
5. [Testing](#testing)

## Getting Started

Follow these steps to run the application:

1. **Install Dependencies:**
   This project uses `npm` as the package manager. Install dependencies by running:

   ```bash
   npm install
   ```

2. **Run the Development Server:**
   Start the application in development mode:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

3. **Build for Production:**
   To create an optimized production build:

   ```bash
   npm run build
   ```

   To preview the production build:

   ```bash
   npm run start
   ```

   This will serve the production build on [http://localhost:3000](http://localhost:3000).

---

## Thought Process and Architectural Decisions

The application is designed to be scalable and maintainable. The folder structure is as follows:

### **Folder Structure:**

- **data:** Handles the data layer, including API calls and data types.
- **modules:** Contains application modules organized by domain, ensuring clear separation of concerns.
- **shared:** Holds shared resources like atomic components, hooks, utilities, etc.
- **store:** Contains the core Redux store configuration, root reducer, and essential logic for managing the application’s global state. This includes any middleware, utility functions, and other critical components that ensure predictable state updates and data flow throughout the application.

This organization ensures that the application is easy to scale as features grow and simplifies team collaboration.

---

## Trade-Offs and Assumptions

### **Styling:**

- **Current Implementation:**
  SCSS is used to demonstrate CSS and SCSS skills.
- **Recommendation:**
  Tailwind could be a leaner alternative, offering faster UI development and smaller bundle sizes if configured correctly.

### **Redux:**

- **Current Implementation:**
  A Redux store manages global state to showcase Redux expertise.
- **Recommendation:**
  For a small project, `React Context` and `useReducer` might suffice, reducing overhead.

### **API Client:**

- **Current Implementation:**
  The native `fetch` API is used for network requests.
- **Reasoning:**
  It’s lightweight and avoids increasing the bundle size. For more advanced features, `axios` or similar libraries could be used in the future.

---

### **Testing:**

- **Current Implementation:**
  No tests have been added yet to save time.
- **Recommendation:**
  Write unit tests for critical logic (e.g., useSubmitAnswer and chatbotSlice). Consider adding end-to-end tests with Cypress for a comprehensive testing strategy.
- **Future Command:**
  \
   Once tests are added, run them with:
  ```bash
  npm run test
  ```
