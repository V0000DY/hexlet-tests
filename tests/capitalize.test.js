import capitalize from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!')
}

if (capitalize('всем привет меня зовут Виталя') !== 'Всем привет меня зовут Виталя') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('1ban') !== '1ban') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('[]') !== '[]') {
    throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');
