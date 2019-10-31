---
layout: two-columns
title: Getting Started
sidebar:
    - title: Getting Started
      menu:
        - title: Motivation
          hash: motivation
        - title: Installation
          hash: installation
        - title: Usage
          hash: usage
    - title: Storage Usage
      menu:
        - title: Create Induxion App
          hash: tba
        - title: Directory Structure
          hash: tba
    - title: App Usage
      menu:
        - title: TBA
          hash: tba
---

# Motivation
Imagine that you create a React App and have Redux installed and configure it's Actions and Reduces. Whenever you switch your project with the same states structure, you must create another new Redux states in it. So, you must re-create the Redux state everytime you changes your project with same state.

Within this problems, we at __DEVSPACE19__, create __INDUXION__, a React JS library that will help us to manage __Central Distributed State Management__ in one place. So, it will help you to use same state management for any projects. Basically, it's look like a minimal frontend-database. And you'll never has effort to re-create same states again and again.

## Installation
All of us like a generator. So, we decide to make a generator for the core of __INDUXION__ (But, if you have an existing app, don't worry, you still can install the package as usual).

First of all, make sure you have the following __Pre-Requisites__:
- Node JS installed in your machine
- Some good knowledge of __React JS__
- Some good knowledge of __Redux__

Then, please do the following installation steps:

1. Install the package globally by running: `npm install -g induxion` or `yarn global add induxion`
2. Thats it, you're ready to develop a new __Central Distributed State Management__ of your own!

Finally, you must know the concepts of using __INDUXION__, so, please continue to the [Usage](#usage) section.

## Usage
__INDUXION__ is used multiple apps. First of all, you've to create your master __Storage__, then it can be used to any __React App__'s that depend on it.

By doing so, you can create as many app with one single usage of storage.

So, basically, below are our data flow:

> TODO: IMAGE FOR DATA FLOW