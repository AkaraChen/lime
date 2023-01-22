# Lime

A quite simple pub-sub implement.

## Example

```ts
import { lime } from '@akrc/lime'

let count = 0
const emitter = lime()
const handler = event => (count + event)
emitter.subscribe('increment', handler)
emitter.publish('increment', 2)
console.log(count) // 2
emitter.unsubscribe('increment', handler)
emitter.publish('increment', 1) // nothing happened
```
