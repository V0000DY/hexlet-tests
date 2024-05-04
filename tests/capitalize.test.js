import { strict as assert } from 'node:assert';
import capitalize from "../src/capitalize.js";

assert(capitalize('hello') === 'Hello');

assert.equal(capitalize(''), '');

assert.strictEqual(capitalize('всем привет меня зовут Виталя'), 'Всем привет меня зовут Виталя');

assert.deepEqual(capitalize('1ban'), '1ban');

if (capitalize('[]') !== '[]') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');
