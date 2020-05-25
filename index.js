var slider = {
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