// import { imagesFile as imagesJson } from './imagesFile.js';
import imagesJson from '../data/imagesJson.json' assert {type: "json"};

// const images = JSON.parse(imagesJson);

// console.log(images);
const images = imagesJson;
// console.log(images);

const votingBlock = document.querySelector('.voting-block');


export function getImage() {
    for (let key in images) {
        let item = document.createElement('img');
        item.classList.add('voting-block_item');
        item.setAttribute('data-key', key);
        item.src = `./img/${key}.png`;
        votingBlock.append(item);
    }
}

export class ImgReader {
    images;
    votingBlock;

    // items;

    constructor() {
        // this.images = JSON.parse(imagesJson);
        this.images = imagesJson;
        console.log(this.images);
        this.votingBlock = document.querySelector('.voting-block');
        // this.item = document.querySelector('.voting-block_item');
    }

    get image() {
        for (let key in this.images) {
            let div = document.createElement('div');
            div.classList.add('voting-block_div');

            let item = document.createElement('img');
            item.classList.add('voting-block_item');
            item.setAttribute('data-key', key);
            item.src = `./img/${key}.png`;

            let countVote = document.createElement('p');
            countVote.classList.add('voting-block_count');
            countVote.textContent = this.images[key].vote;

            this.votingBlock.append(div);
            div.appendChild(item);
            div.appendChild(countVote);
        }
    }

    countEmoji(key, nextSibling) {
        // console.log(key);
        this.images[key].vote += 1;
        // console.log(this.images[key].vote)
        nextSibling.textContent = this.images[key].vote;
    }
}