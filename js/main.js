// Голосування
// Створити програму для відображення результатів голосування. З наступними умовами:
//
//     Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
//     Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
//     При натисканні на смайл - під ним змінюється значення лічильника.
//     Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

import { getImage, ImgReader } from './imgReader.js';

// getImage();
// console.log(imgReader);
let images = new ImgReader();
images.image;

const votingBlock = document.querySelector('.voting-block');
const item = document.querySelector('.voting-block');

item.addEventListener('click', ( {target}) => {
    // console.dir(target);
    // console.log(target.dataset.key)
    // console.log(target.nextSibling)
    // console.log(target.classList[0] === 'voting-block_item')
    if (target.classList[0] === 'voting-block_item') {
        images.countEmoji(target.dataset.key, target.nextSibling);
    }
})