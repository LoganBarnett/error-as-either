# Introduction

`error-as-either` provides a clean means of expressing error handling that
doesn't cause stack unwinding. There are other uses for an `Either` type, but
this particular function will take any result thrown from `f` and coerce it into
an `Error` if it isn't one already, and then `return` the `Error` instead of
`throw`ing it. The benefit is that eithers can be composable, and it removes
invisible control flow from your program's execution.

It should be noted the result returned here is `A | Error` where `A` is whatever
the return type of `f` is. This is not the same thing as Fantasy Land's
(Either)[https://github.com/ramda/ramda-fantasy/blob/master/docs/Either.md], but
that might be a better thing to do in the future.

# Installation

``` sh
yarn add -E error-as-either
```

# Usage

``` javascript
import errorAsEither from 'error-as-either'

const result = errorAsEither(() => JSON.parse('{'))

if(result instanceof Error) {
  console.error('Input is not valid JSON!')
} else {
  console.log('I got a ', result)
}
```

# Types

All types are expressed as [Flow](http://flow.org) types.

This is the signature for `errorAsEither`:

``` javascript
<A>(f: () => A): A | Error
```
