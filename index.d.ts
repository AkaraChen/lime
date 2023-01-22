type Key = string | symbol;
type WildCard = '*';
type KeyAndWildCard = Key | WildCard;
type Handler = (event: any) => void;

type Emitter = {
    all: Map<Key, Handler>,
    subscribe(key: KeyAndWildCard, handler: Handler): void,
    unsubscribe(key: KeyAndWildCard, handler: Handler): void
    publish(key: Key, value?): void
};

export function lime(): Emitter;

export default lime;
