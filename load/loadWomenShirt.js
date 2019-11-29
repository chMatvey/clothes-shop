const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');
const url = "https://www.befree.ru/zhenskaja/odezhda/bluzki-i-rubashki";
const shirts = [];
const countShirts = 40;

request(url, (error, response, body) =>{
    if(!error){
        const $ = cheerio.load(body);
        const selectorImgAndName = $('.grid-item__img-wr');
        const selectorPrice = $('.price');
        for (i = 0; i < 15; i++){
            let shirt = {};
            shirt.name = selectorImgAndName[i].children[1].attribs.title;
            shirt.img = selectorImgAndName[i].children[1].attribs;
            shirt.price = selectorPrice[i].children[0].data;
            str = JSON.stringify(shirt);
            str = str.replace(/'/g, '"');
            str = str.replace("data-src", "data");
            shirt = JSON.parse(str);
            if(typeof shirt.img.data === 'undefined'){
                shirt.img = shirt.img.src;
            } else {
                shirt.img = shirt.img.data;
            }
            shirts.push(shirt);
        }
        fs.writeFile('shirts.json', JSON.stringify(shirts), (err) => {
            if (err){
                throw err;
            }
            console.log('The file has been saved!');
        });
    } else {
        console.log(error.message);
    }
});
