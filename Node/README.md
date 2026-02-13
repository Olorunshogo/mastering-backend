# Node.js

## Overview/Introduction

+ **Note:** LTS means **Long Term Support**
+ **REPL:** Read-Eval-Print-Loop
  - Read: The system reads user input (e.g., a line of code)
  - Eval: It evaluates the input in the context of the current program state 
  - Print: The result of the evaluation is displayed to the user
  - Loop: The process repeats, waiting for the next input

+ It is an open-source JavaScript runtime
+ Uses the V8 JavaScript engine that Google Chrome uses
+ Mostly used for developing server-side &amp; networking apps/api
+ Takes JavaScript out of the browser
+ Fast, scalable and popular in many areas of the industry

### Covered In This Course
+ What is Node.js and  how does it work?
+ Installation, setup, package.json (manifest files), npm etc
+ Modules import/export (CommonJS &amp; ES Modules)
+ HTTP Module, req/res, routing, serving JSON/HTML
+ Custom middleware - Functions that sits between incoming **requests** and outgoing **responses**
+ Other Core Modules - fs, path, url, events, process, os

### Prerequisites
+ JavaScript fundamentals (Functions, loops, objects, classes, etc)
+ Asynchronous programming - Promises, callbacks, async/await
+ HTTP Basics (Methods, status codes, etc)
+ How JSON APIs work
+ NPM (Node Package Manager)

### How Node.js Works
+ V8 JS Engine - Written in C++ and it&apos;s what compile the JS codes to machine language
+ Non-Blocking - It&apos;s not waiting for input and output operations e.g network calls, file system operations and database operations. It&apos;s doesnt wait around for these things to happen or complete, it uses events and callbacks to work-around this.
+ Single Threaded - There&apos;s a single-main thread (set of instructions that the computer runs) that executes JS codes
+ Event Loop - A mechanism that allows node to perform none-blocking io operations

### What is Node.js Used For?
+ APIs
+ Server-rendered apps
+ Real-time applications
+ Microservices
+ Command Line Tools
+ Bots
+ Web scraping
+ Web Servers





