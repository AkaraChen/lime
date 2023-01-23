export type Key = string | symbol;
export type WildCard = '*';
export type KeyAndWildCard = Key | WildCard;
export type Handler = (event: any) => void;
export type WildCardHandler = (key: Key, event: any) => void

export type Emitter = {
    all: Map<Key, Handler>,
    subscribe(key: Key, handler: Handler): void,
    subscribe(key: WildCard, handler: WildCardHandler): void,
    unsubscribe(key: KeyAndWildCard, handler: Handler): void,
    publish(key: Key, value?): void,
};

export function lime(): Emitter;

export default lime;
