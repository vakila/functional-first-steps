# Functional JavaScript First Steps

A super fun(ctional) programming workshop by [Anjana Vakil](https://anjana.dev) for [FrontendMasters](https://frontendmasters.com/courses/functional-first-steps/)

### Course site: [functional-first-steps.netlify.app](https://functional-first-steps.netlify.app)


## Why am I here?

You may have found yourself hearing more and more about this trendy topic of “functional programming", from a bunch of excited coders enthusiastically gushing about how it helps them write elegant, modular code that's easier to test, debug, and reason about. If you're like me, you may have started wondering:

- What is functional programming anyway, and why are people so excited about it?
- What does functional code look like? How is it different from imperative or OO code?
- What tools do I need to write functional programs? Do I have to learn Haskell? (spoiler alert: no!)

If you too have been asking yourself questions like these, you're in the right place! If you're a functional programming pro or have zero interest in learning a new paradigm, then this probably isn't the workshop for you.

## What will we learn in this workshop?

This will be a friendly, practical exploration of functional programming fundamentals.

We'll learn how to follow the basic principles of the functional programming paradigm, such as:
- construct programs from pure, “input in-output out” functions through which data flows
- use higher-order functions like map & filter instead of iterative loops, and closures instead of objects & classes
- avoid mutation (changing things in-place), and use immutable data structures for efficiency


## How do I use this repository?

The interactive exercises in this repository are built with [TutorialKit](https://tutorialkit.dev), which uses [StackBlitz](https://stackblitz.com) for live code editing and previews in the browser. It's not necessary to install anything or run this repository locally, but if you'd like to do so follow the instructions below. 


- Install Node (version 6 or 8 recommended), if you don't already have it - I recommend installing via [NVM](https://github.com/creationix/nvm) (Node Version Manager). Installing Node also installs the package manager [npm](https://www.npmjs.com/).
- Fork/clone the workshop repository at [github.com/vakila/functional-js-first-steps](https://github.com/vakila/functional-first-steps). If you don't use GitHub, you can download a zip file of the repository instead, and unzip it.
- Change into the repository directory and install the project dependencies:
  ```
  $ cd functional-first-steps
  $ npm install
  ```
- Launch the TutorialKit app, which will be available at `http://localhost:4321`:
  ```
  $ npm run dev
  ```
- Follow along with the step-by-step exercises.
