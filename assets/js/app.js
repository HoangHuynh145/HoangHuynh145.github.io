const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// Search header
const seacrhBtn = $ ('.header_search .header_search_btn')
seacrhBtn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open')
    this.nextElementSibling.focus()
})

// Chơi nhạc

// 1, Render song (Hiện ra list bài hát) -> OK
// 2, Scroll top (Cuộn lên thì header ẩn dần) -> không cần
// 3, Play / Pause / seek (Chơi / dừng / tua) -> OK
// 4, CD rotate ( đĩa quay quay) -> OK
// 5, Next / Prev (tiến tới / lui lại) -> OK
// 6, Random (phát ngẫu nhiên) -> OK
// 7, Next / Repeat when ended  (Nhảy bài / lặp lại khi hết bài) -> OK
// 8, Active Song (Hiện màu bài đang hát) -> OK
// 9, Scroll active song into view (cuộn bài khi hiện quá mức view) -> OK
// 10, Play song when click ( chơi nhạc khi nhấn chuột)
// 11, Lưu config khi người dùng nhấn vào để khi load lại trang thì config giữ nguyên

const heading = $ ('.body_header .about_song h3')
const cdThumb = $ ('.body_header .cd_thumb img')
const singer = $ ('.body_header .author h3')
const audio = $ ('.control #audio')
const playlist = $('.main_content .body .playlist')
// console.log(playlist)
const playBtn = $ ('.control_container .interact .btn-toggle-play')
const control = $ ('.control')
const progress = $ ('#progress')
const cd = $ ('.main_content .body .body_header .cd_thumb')
const prevBtn = $ ('.control .control_container .interact .btn-prev')
const nextBtn = $ ('.control .control_container .interact .btn-next')
const randomBtn = $ ('.control .control_container .interact .btn-random')
const repeatBtn = $ ('.control .control_container .interact .btn-repeat')
// console.log(repeatBtn) 

const PLAYER_STORAGE_KEY = 'my_music'

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    //lấy ra config 
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    songs: [
        {
            name: 'Cartoon - C U Again feat. Mikk Mäe',
            singer: 'Cartoon',
            path: './assets/music/cu-again-mp3.mp3',
            image: './assets/img/c-u-again.jpg'
        },
        {
            name: 'Unknown Brain x Rival - Control ',
            singer: 'Unknown Brain x Rival',
            path: './assets/music/control-mp3.mp3',
            image: './assets/img/control.jpg'
        },
        {
            name: 'Janji - Heroes Tonight ',
            singer: 'Janji',
            path: './assets/music/hero-tonight-mp3.mp3',
            image: './assets/img/hero-tonight.jpg'
        },
        {
            name: 'Robin Hustin x TobiMorrow - Light It Up',
            singer: 'Robin Hustin x TobiMorrow',
            path: './assets/music/light-it-up-mp3.mp3',
            image: './assets/img/light-it-up.jpg'
        },
        {
            name: 'Hai Chữ Đã Từng (Ciray x Dj Mi-A)',
            singer: 'Như Việt',
            path: './assets/music/hai-chu-mp3.mp3',
            image: './assets/img/hai-chu-r.jpg'
        },
        {
            name: 'Tình Đẹp Đến Mấy Cũng Tàn (Ciray Remix)',
            singer: 'Như Việt',
            path: './assets/music/tinh-dep-mp3.mp3',
            image: './assets/img/tinh-dep-r.jpg'
        },
        {
            name: 'Yêu Em Thật Đấy (Ciray Remix x Trang Sara) ',
            singer: 'Đinh Tùng Huy',
            path: './assets/music/yeu-em-mp3.mp3',
            image: './assets/img/yeu-em-r.jpg'
        },
        {
            name: 'Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit)',
            singer: 'Mike Posner',
            path: './assets/music/i-took-mp3.mp3',
            image: './assets/img/i-took.jpg'
        },
        {
            name: 'Play My Mind (Remix) ',
            singer: 'Tài Muzik ',
            path: './assets/music/my-mind-mp3.mp3',
            image: './assets/img/my-mind.jpg'
        },
        {
            name: 'Ampyx - Holo (Wontolla Remix)',
            singer: 'Ampyx (Wontolla Remix)',
            path: './assets/music/holo-mp3.mp3',
            image: './assets/img/holo.jpg'
        },

    ],

    setConfig: function(key, value){
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${this.currentIndex === index ? 'sActive' : ''}" data-index = ${index}>
                <div class="thumb">
                    <img src="${song.image}" alt="">
                </div>
                <div class="body_song">
                    <h3 class="tiltle">${song.name}</h3>
                    <p class="singer">${song.singer}</p>
                </div>
                <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playlist.innerHTML = htmls.join('')
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handelEvent: function () {
        _this = this;

        // quay quay cd
        const thumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        thumbAnimate.pause()

        // khi click play button
        playBtn.onclick =  function() {
            if(_this.isPlaying){
                audio.pause(); 
            }else{
                audio.play();
            }
        }

        // khi song play
        audio.onplay = function() {
            _this.isPlaying =  true;
            control.classList.add('playing')
            thumbAnimate.play()
        }

        // khi song pause
        audio.onpause = function() {
            _this.isPlaying = false;
            control.classList.remove('playing');
            thumbAnimate.pause();
        }

        // Tiến độ bài hát
        audio.ontimeupdate = function () {
            const progressPercent = (audio.currentTime / audio.duration * 100);
            progress.value = progressPercent;
        }

        // Khi tua song
        progress.oninput = function (e) {
            const seekTime = (e.target.value * audio.duration / 100);
            audio.currentTime = seekTime
        }

        // khi click next button
        nextBtn.onclick = function () {
           if(_this.isRandom){
                _this.randomSong()
           }else{
               _this.nextSong()
           }
            audio.play()
            _this.scrollToActiveSong()
        }

        // khi click prev button
        prevBtn.onclick = function () {
            if(_this.isRandom){
                _this.randomSong()
            }else{
                _this.prevSong()
            }
            audio.play()
            _this.scrollToActiveSong()
        }

        // khi click random button
        randomBtn.onclick = function () {
            _this.isRandom = ! _this.isRandom
            _this.setConfig('isRandom',  _this.isRandom)
            randomBtn.classList.toggle('active')
        }

        // khi click nút repeat
        repeatBtn.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            _this.setConfig('isRepeat',  _this.isRepeat)
            repeatBtn.classList.toggle('active')
        }
        
        // khi song ended
        audio.onended = function () {
            if(_this.isRepeat){
                audio.play()
            }else{
                nextBtn.click()
            }
        }

        // Khi click song
        playlist.onclick = function (e) {
            const activesSong = e.target.closest('.song:not(.sActive)')
            if(activesSong || e.target.closest('.option')){
                if(activesSong){
                    _this.currentIndex = activesSong.dataset.index;
                    _this.loadCurrentSong()
                    audio.play()
                    _this.activeSong()
                }

                if(e.target.closest('.option')){

                }
            }
        }
    },

    scrollToActiveSong: function () {
        setTimeout(() => {
            $('.song.sActive').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 300);
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.name;
        cdThumb.src = this.currentSong.image;
        singer.textContent = this.currentSong.singer;
        audio.src = this.currentSong.path;
        // console.log(this.currentSong.image)
    },

    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong()
        this.activeSong()
    },

    prevSong: function () {
        this.currentIndex--
        if(this.currentIndex <= 0){
            this.currentIndex = this.songs.length -1
        }
        this.loadCurrentSong()
        this.activeSong()
    },

    randomSong: function() {
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while(newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
        this.activeSong()
    },

    loadConfig: function(){
        this.isRandom = this.config.isRandom
        this.isRepeat= this.config.isRepeat
    },

    activeSong: function() {
        let loopSongs = $$ ('.song')
        console.log(loopSongs)
       for(song of loopSongs){
           song.classList.remove('sActive') // check xem có class sActive hông để xóa đi
       }
       const songActive = loopSongs[this.currentIndex];
       songActive.classList.add('sActive') 
    },

    start: function () {
        // Load ra cofig
        this.loadConfig()
        // định nghĩa thuộc tính cho object
        this.defineProperties()
        // lắng nghe sự kiện
        this.handelEvent()
        // tải ra bài hát hiện tại
        this.loadCurrentSong()
        // remder ra bài hát hiện tại
        this.render()

        // hiển thị trạng thái ban đầu của nút repeat và random
        repeatBtn.classList.toggle('active', this.isRepeat)
        randomBtn.classList.toggle('active', this.isRandom)
    }
}

app.start()