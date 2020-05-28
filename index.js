function Slider () {//constructorFunction for creating many similar objects
    this.imgUrl = [];
    this.curIndex = 0;
    this.prevBtn = null;
    this.nextBtn = null;
    this.sliderImg = null;
};
Slider.prototype.start = function (elId) {
    let that = this;
    let el = document.querySelector('#'+ elId);

    this.prevBtn = el.querySelector('.prev-btn');
    this.nextBtn = el.querySelector('.next-btn');
    this.sliderImg = el.querySelector('.slide-img');

    this.prevBtn.addEventListener('click', function(e) {
        that.onPrevBtnClick(e);
    });
    this.nextBtn.addEventListener('click', function(e) {
        that.onNextBtnClick(e);
    });

    this.imgUrl.push('https://i.picsum.photos/id/1024/1920/1280.jpg');
    this.imgUrl.push('https://i.picsum.photos/id/1021/2048/1206.jpg');
    this.imgUrl.push('https://i.picsum.photos/id/1000/5626/3635.jpg');
    this.imgUrl.push('https://i.picsum.photos/id/1025/4951/3301.jpg');

    this.sliderImg.src = this.imgUrl[this.curIndex];
    this.prevBtn.disabled= true;
};

Slider.prototype.onPrevBtnClick = function (e) {
    this.curIndex--;
    this.sliderImg.src = this.imgUrl[this.curIndex];
    this.nextBtn.disabled = false;

    if (this.curIndex === 0) {
        this.prevBtn.disabled = true;
    }
};

Slider.prototype.onNextBtnClick = function (e) {
    this.curIndex++;
    this.sliderImg.src = this.imgUrl[this.curIndex];
    this.prevBtn.disabled = false;

    if (this.curIndex === (this.imgUrl.length - 1)) {
        this.nextBtn.disabled = true;
    }
};

let testOne = new Slider();
let testTwo = new Slider();
let testTree = new Slider ();

testOne.start('testOne');
testTwo.start('testTwo');
testTree.start('testTree');

var slider = {//literal for single use
    imgUrl: [],
    curIndex: 0,
    prevBtn: document.querySelector('.prev-btn'),//null,
    nextBtn: document.querySelector('.next-btn'),//null,
    sliderImg: document.querySelector('.slide-img'),//null,

    start: function () {
        let that = this;

        this.prevBtn.addEventListener('click', function(e) {
            that.onPrevBtnClick(e);
        });
        this.nextBtn.addEventListener('click', function(e) {
            that.onNextBtnClick(e);
        });

        this.imgUrl.push('https://i.picsum.photos/id/1024/1920/1280.jpg');
        this.imgUrl.push('https://i.picsum.photos/id/1021/2048/1206.jpg');
        this.imgUrl.push('https://i.picsum.photos/id/1000/5626/3635.jpg');
        this.imgUrl.push('https://i.picsum.photos/id/1025/4951/3301.jpg');

        this.sliderImg.src = this.imgUrl[this.curIndex];
        this.prevBtn.disabled= true;
    },
    onPrevBtnClick: function (e) {
        this.curIndex--;
        this.sliderImg.src = this.imgUrl[this.curIndex];
        this.nextBtn.disabled = false;

        if (this.curIndex === 0) {
            this.prevBtn.disabled = true;
        }
    },
    onNextBtnClick: function (e) {
        this.curIndex++;
        this.sliderImg.src = this.imgUrl[this.curIndex];
        this.prevBtn.disabled = false;

        if (this.curIndex === (this.imgUrl.length - 1)) {
            this.nextBtn.disabled = true;
        }
    }
}
slider.start();