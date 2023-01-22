import { expect, test } from 'vitest';
import { lime } from '.';

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
