compositter
---

A library provide a [higher-order function](https://en.wikipedia.org/wiki/Higher-order_function) in javascript.

About
---

F# provide the `>>` operator. `>>` operator is able to generate higher-order function. <br />
I want to simulate `>>` operator in javascript.

- in fsharp

```fsharp
let function1 x = x + 1
let function2 x = x * 5

let f = function1 >> function2
f(10) //=> 55
```

- in javascript

```javascript
const compositter = require('compositter')

const function1 = x => x + 1
const function2 = x => x * 5

const f = compositter([function1, function2])
f(10) //=> 55
```

LICENSE
---

[MIT](./LICENSE.txt)
