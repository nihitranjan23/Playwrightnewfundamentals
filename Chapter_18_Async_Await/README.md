# Chapter 18: Async/Await

This folder contains code examples and exercises related to **Asynchronous JavaScript** using `async` and `await`.

## Topics Covered

| File | Topic |
|------|-------|
| `161_Async.js` | Introduction to Async functions |
| `162_Async_P2.js` | Async functions - Part 2 |
| `163_PyHell_Async.js` | Playwright Hello World with Async |
| `164_Asycn_Ex.js` | Async examples |
| `165_AA_Parallel.js` | Parallel execution with Async/Await |
| `165_AA_Squencial.js` | Sequential execution with Async/Await |
| `166_IQ.js` | Interview Questions on Async/Await |
| `167_ACLogin.js` | Async/Await Login example |

## What is Async/Await?

`async` and `await` are modern JavaScript features that make working with **Promises** easier and more readable.

- **`async`** - Makes a function return a Promise
- **`await`** - Pauses execution until the Promise resolves

## Example

```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```

## Running the Code

To run any file, navigate to this folder and use Node.js:

```bash
cd "D:\New folder\playwright 2x\Chapter_18_Async_Await"
node 161_Async.js
```

## Key Concepts

- **Async functions** always return a Promise
- **Await** can only be used inside an async function
- Helps avoid **callback hell** and makes code look synchronous
- Useful for **API calls**, **file operations**, and **database queries**

## Interview Questions Covered

- Difference between `async/await` and Promises
- Error handling with `try/catch`
- Parallel vs Sequential execution
- Real-world use cases

## Related Chapters

- [Chapter 17: Promise](../Chapter_17_Promise) - Previous chapter on Promises
- [Chapter 19: Playwright Basics](../CHapter19_Playwright_basics) - Next chapter on Playwright
