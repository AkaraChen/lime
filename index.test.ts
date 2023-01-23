import { expect, test } from 'vitest';
import { lime, Key } from '.';

test('subscribe', () => {
    const emitter = lime();
    let count = 0;
    emitter.subscribe('increment', () => {
        count++;
    });
    emitter.publish('increment');
    expect(count).toBe(1);
});

test('unsubscribe', () => {
    const emitter = lime();
    let count = 0;
    const handler = () => count++;
    emitter.subscribe('increment', handler);
    emitter.unsubscribe('increment', handler);
    emitter.publish('increment');
    expect(emitter.all.get('increment')?.length).toBe(0);
});

test('value', () => {
    const emitter = lime();
    emitter.subscribe('increment', (event: number) => {
        expect(event).toBe(114_514);
    });
    emitter.publish('increment', 114_514);
});

test('wildcard', () => {
    const emitter = lime();
    let count = 0;
    emitter.subscribe('*', (key: Key, event: number) => {
        expect(key).toBe('increment');
        expect(event).toBe(2);
        count += event;
    });
    emitter.publish('increment', 2);
    expect(count).toBe(2);
});
