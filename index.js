export function lime() {
    const all = new Map();
    return {
        all,
        subscribe(key, handler) {
            const handlers = all.get(key);
            if (handlers) {
                handlers.push(handler);
            } else {
                all.set(key, [handler]);
            }
        },
        unsubscribe(key, handler) {
            const handlers = all.get(key);
            if (handlers && handler) {
                handlers.splice(handlers.indexOf(handler), 1);
            }
        },
        publish(key, event) {
            const handlers = all.get(key);
            if (handlers) {
                for (const handler of handlers) {
                    handler(event);
                }
            }
            const genericHandlers = all.get('*');
            if (genericHandlers) {
                for (const handler of genericHandlers) {
                    handler(key, event);
                }
            }
        }
    };
}

export default lime;
