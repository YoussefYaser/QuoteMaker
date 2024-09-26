var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        quoter: '― Oscar Wilde',
        photo: 'Oscar Wilde.jpg', 
        info: `Born:
        <span class="d-block mb-3"> 
            in Dublin, IrelandOctober 16, 1854
        </span> 
        Died:
        <span class="d-block">
            November 30, 1900
        </span>`, 
        flag: 'ierland.jpg'
    }
    ,
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        quoter: '― Marilyn Monroe',
        photo: 'Marilyn Monroe.jpg', 
        info:`Born:
        <span class="d-block mb-3"> 
        in Norma Jeane Mortenson Los Angeles, California, U.S. June 1, 1926
        </span> 
        Died:
        <span class="d-block">
        August 4, 1962
        </span>`,
        flag: 'america.png'
    }
    ,
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        quoter: '― Albert Einstein',
        photo: 'Albert Einstein.jpg',
        info: `Born:
        <span class="d-block mb-3"> 
        in Ulm, kingdom of Württemberg, German empireMarch 14, 1879
        </span> 
        Died:
        <span class="d-block">
            April 18, 1955
        </span>`,
        flag: 'germany.png'
    }
    ,
    {
        quote: "“Be the change that you wish to see in the world.”",
        quoter: '― Mahatma Gandhi',
        photo: 'Mahatma Gandhi.jpg',
        info: `Born:
        <span class="d-block mb-3"> 
        in Porbander, Gujrat, IndiaOctober 02, 1869
        </span> 
        Died:
        <span class="d-block">
        January 30, 1948
        </span>`, 
        flag: 'india.png'
    }
    ,
    {
        quote: "“If you enter this world knowing you are loved and you leave this world knowing the same, then everything that happens in between can be dealt with.”",
        quoter: '― Michael Jackson',
        photo: 'Michael Jackson.jpg',
        info: `Born:
        <span class="d-block mb-3"> 
        in Gary, Indiana, The United StatesAugust 29, 1958
        </span> 
        Died:
        <span class="d-block">
        June 25, 2009
        </span>`,
        flag: 'america.png'
    }
    ,
    {
        quote: "“Do not compare yourself to others. If you do so, you are insulting yourself.”",
        quoter: '― Adolf Hitler',
        photo: 'Adolf Hitler.jpg', 
        info: `Born:
        <span class="d-block mb-3"> 
        in Braunau am Inn, Austro-Hungarian empireApril 20, 1889
        </span> 
        Died:
        <span class="d-block">
        April 30, 1945
        </span>`,
        flag: 'germany.png'
    }
    ,
    {
        quote: "“I think you actually have to have all of your dreams come true to realize they are the wrong dreams.”",
        quoter: '― Matthew Perry',
        photo: 'Matthew Perry.jpg', 
        info: `Born:
        <span class="d-block mb-3"> 
        in Williamstown, Massachusetts, US August 19, 1969
        
        </span> 
        Died:
        <span class="d-block">
        October 28, 2023
        </span>`,
        flag: 'america.png'
    }
];


var quote = document.getElementById('quote-text');
var quoter = document.getElementById('quoter');
var quoterImg = document.getElementById('quoter-img');
var quoteChanger = document.getElementById('quoteChanger');
var cardInfo = document.getElementById('card-info');
var cardImg = document.getElementById('cardImg');


const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

var randomNum = -1;
quoteChanger.onclick = function(){
    do{
        var temp = getRandomInteger(0, quotes.length);
    }while(temp === randomNum);
    randomNum = temp;
    quote.innerHTML = quotes[randomNum].quote;
    quoter.innerHTML = quotes[randomNum].quoter;
    quoterImg.src = 'images/'+ quotes[randomNum].photo;
    cardInfo.innerHTML = quotes[randomNum].info;
    cardImg.src = 'images/'+ quotes[randomNum].flag;

}
