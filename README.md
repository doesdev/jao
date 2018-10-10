# JAO

## It's litrally, just an object

### Why

I keep seeing modules popping up that claim the be the simplest way to manage
state. Personally I find none simpler than this.

### Install

```sh
$ npm install --save jao
```

### Use

One file
```js
import state from 'jao'

state.hello = world
```

Another file
```js
import state from 'jao'

console.log(state.hello)
```

### License

MIT © [Andrew Carpenter](https://github.com/doesdev)
