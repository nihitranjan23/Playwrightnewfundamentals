# JavaScript String Cheatsheet

## String Basics

| Property/Method | Description | Example | Result |
|----------------|-------------|---------|--------|
| `length` | Returns string length | `"Hello".length` | `5` |
| `[]` / `charAt()` | Access character by index | `"Hello"[1]` / `"Hello".charAt(1)` | `"e"` |
| `charCodeAt()` | Returns UTF-16 code | `"A".charCodeAt(0)` | `65` |
| `String.fromCharCode()` | Creates string from code | `String.fromCharCode(65)` | `"A"` |

---

## Case Conversion

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `toUpperCase()` | All uppercase | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | All lowercase | `"HELLO".toLowerCase()` | `"hello"` |
| `toLocaleUpperCase()` | Locale-aware uppercase | `"i".toLocaleUpperCase('tr')` | `"İ"` |
| `toLocaleLowerCase()` | Locale-aware lowercase | `"I".toLocaleLowerCase('tr')` | `"ı"` |

---

## Searching

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `indexOf()` | First occurrence index | `"hello".indexOf("l")` | `2` |
| `lastIndexOf()` | Last occurrence index | `"hello".lastIndexOf("l")` | `3` |
| `includes()` | Check if contains | `"hello".includes("ell")` | `true` |
| `startsWith()` | Check prefix | `"hello".startsWith("he")` | `true` |
| `endsWith()` | Check suffix | `"hello".endsWith("lo")` | `true` |
| `search()` | Match regex, return index | `"hello".search(/l+/)` | `2` |
| `match()` | Match regex, return array | `"hello".match(/l/g)` | `["l", "l"]` |
| `matchAll()` | Match regex, return iterator | `"hello".matchAll(/l/g)` | Iterator |

---

## Extracting Substrings

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `slice(start, end)` | Extract section | `"JavaScript".slice(0, 4)` | `"Java"` |
| `slice(-6)` | Negative = from end | `"JavaScript".slice(-6)` | `"Script"` |
| `substring(start, end)` | Extract section | `"JavaScript".substring(0, 4)` | `"Java"` |
| `substr(start, length)` | ⚠️ Deprecated | `"JavaScript".substr(4, 6)` | `"Script"` |

### slice() vs substring() vs substr()

| Feature | `slice()` | `substring()` | `substr()` |
|---------|-----------|---------------|------------|
| Syntax | `slice(start, end)` | `substring(start, end)` | `substr(start, length)` |
| Negative start | ✅ Counts from end | ❌ Treated as 0 | ✅ Counts from end |
| Negative end | ✅ Counts from end | ❌ Treated as 0 | N/A |
| Start > end | Returns `""` | ✅ Swaps arguments | Returns `""` |
| Status | ✅ Modern | ✅ Modern | ⚠️ Deprecated |

---

## Modifying Strings

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `replace(old, new)` | Replace first match | `"hello".replace("l", "x")` | `"hexlo"` |
| `replaceAll(old, new)` | Replace all matches | `"hello".replaceAll("l", "x")` | `"hexxo"` |
| `replace(/regex/g, fn)` | Replace with regex | `"hello".replace(/l/g, "x")` | `"hexxo"` |
| `trim()` | Remove whitespace both ends | `" hello ".trim()` | `"hello"` |
| `trimStart()` / `trimLeft()` | Remove leading whitespace | `" hello".trimStart()` | `"hello"` |
| `trimEnd()` / `trimRight()` | Remove trailing whitespace | `"hello ".trimEnd()` | `"hello"` |
| `padStart(len, str)` | Pad from start | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(len, str)` | Pad from end | `"5".padEnd(3, "0")` | `"500"` |
| `repeat(count)` | Repeat string | `"ha".repeat(3)` | `"hahaha"` |

---

## Splitting & Joining

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `split(separator)` | Split into array | `"a,b,c".split(",")` | `["a", "b", "c"]` |
| `split("")` | Split into characters | `"abc".split("")` | `["a", "b", "c"]` |
| `split(" ", limit)` | Split with limit | `"a b c".split(" ", 2)` | `["a", "b"]` |
| Array `join()` | Join array to string | `["a", "b"].join("-")` | `"a-b"` |

---

## Checking String Content

| Method | Description | Example | Result |
|--------|-------------|---------|--------|
| `===` | Strict equality | `"hello" === "hello"` | `true` |
| `==` | Loose equality | `"5" == 5` | `true` |
| `localeCompare()` | Compare for sorting | `"a".localeCompare("b")` | `-1` |

---

## Template Literals (ES6+)

| Syntax | Description | Example | Result |
|--------|-------------|---------|--------|
| `` `...` `` | Template literal | `` `Hello ${name}` `` | Interpolated string |
| `` `${expr}` `` | Expression interpolation | `` `1 + 2 = ${1 + 2}` `` | `"1 + 2 = 3"` |
| `` `...\n...` `` | Multi-line strings | `` `Line 1\nLine 2` `` | Multi-line output |
| `` String.raw`...` `` | Raw string | `` String.raw`C:\nope` `` | `"C:\nope"` |

---

## Index Reference: "JavaScript"

```
  J   a   v   a   S   c   r   i   p   t
  0   1   2   3   4   5   6   7   8   9
-10  -9  -8  -7  -6  -5  -4  -3  -2  -1
```

| Method Call | Result | Explanation |
|-------------|--------|-------------|
| `"JavaScript".slice(0, 4)` | `"Java"` | Index 0 to 3 |
| `"JavaScript".slice(4)` | `"Script"` | From index 4 to end |
| `"JavaScript".slice(-6)` | `"Script"` | Last 6 characters |
| `"JavaScript".slice(0, -6)` | `"Java"` | Exclude last 6 |
| `"JavaScript".substring(4, 6)` | `"Sc"` | Index 4 to 5 |
| `"JavaScript".substring(6, 4)` | `"Sc"` | Auto-swapped to 4,6 |

---

## Quick Reference: Most Used Methods

| Task | Method | Example |
|------|--------|---------|
| Get length | `length` | `str.length` |
| Check if empty | `length === 0` | `if (!str)` (falsy check) |
| Check contains | `includes()` | `str.includes("xyz")` |
| Remove spaces | `trim()` | `str.trim()` |
| Convert number | `String()` / `toString()` | `String(42)` / `(42).toString()` |
| Reverse string | `split().reverse().join()` | `str.split("").reverse().join("")` |
| Remove first char | `slice(1)` | `str.slice(1)` |
| Remove last char | `slice(0, -1)` | `str.slice(0, -1)` |
| Get first char | `[0]` / `charAt(0)` | `str[0]` |
| Get last char | `slice(-1)` / `at(-1)` | `str.at(-1)` |
| Check number string | `!isNaN(str)` / regex | `!isNaN("123")` → `true` |

---

## String Immutability Reminder

> **Strings are immutable in JavaScript!**
> 
> Methods return new strings; they don't modify the original:
> ```javascript
> let str = "hello";
> str.toUpperCase();  // Returns "HELLO" but str is still "hello"
> str = str.toUpperCase();  // Need to reassign: str is now "HELLO"
> ```

---

## Escape Characters

| Escape | Meaning | Example | Output |
|--------|---------|---------|--------|
| `\n` | New line | `"Line1\nLine2"` | Line break |
| `\t` | Tab | `"Col1\tCol2"` | Tab space |
| `\\` | Backslash | `"C:\\path"` | `C:\path` |
| `\'` | Single quote | `'It\'s ok'` | `It's ok` |
| `\"` | Double quote | `"Say \"hi\""` | `Say "hi"` |
| `\`` | Backtick | `` `\`quoted\`` `` | `` `quoted` `` |
| `\uXXXX` | Unicode | `"\u0041"` | `"A"` |
| `\u{XXXXXX}` | Extended unicode | `"\u{1F600}"` | `😀` |

