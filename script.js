const sonic = document.querySelector('.sonic')
const eggman = document.querySelector('.eggman')
const fundo = document.querySelector('.fundo')
const musicaFundo = document.getElementById('musica-fundo')
const musicaMorte = document.getElementById('musica-morte')
const sounds = ['audios/1-2-3-4-flamengo (1) (mp3cut.net).mp3',
'audios/clash-royale-hog-rider (mp3cut.net).mp3', 
'audios/among.mp3', 
'audios/pelada-na-net-75-2500-2550-302523 (mp3cut.net).mp3', 
'audios/gol-messi-vs-getafe-narrat-per-puyal-full-hd-1080p-audiotrimmer (mp3cut.net).mp3', 
'audios/hoje-comeremos-cu (mp3cut.net).mp3',
'audios/paysandu.mp3',
'audios/som-do-zap-zap-estourado.mp3',
'audios/za-da-manga (mp3cut.net).mp3'
]

function playRandomSound() {
    const randomSoundIndex = Math.floor(Math.random() * sounds.length);
    const sound = new Audio(sounds[randomSoundIndex]);
    sound.play();
}

function playMusica() {
    musicaFundo.play();
}

document.addEventListener('click', playMusica);

const jump = () => {
    sonic.classList.add('jump')
    sonic.src = 'img/Sonic-Jump.gif'

    playRandomSound();

    setTimeout(() => {
        sonic.classList.remove('jump')
        sonic.src = 'img/Sonic.gif'
    },900)
}

const loop = setInterval(() => {
    const eggmanPosition = eggman.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')
    
    if (eggmanPosition < 110 && eggmanPosition > 0 && sonicPosition < 180) {
        eggman.style.animation = 'none'
        eggman.style.left = `${eggmanPosition}px`

        sonic.style.animation = 'none'
        sonic.src = 'img/Sonic-Loss.gif'
        sonic.style.width = '200px'

        fundo.src = 'img/GameoverSMB-1.png'

        musicaFundo.pause()

        musicaMorte.play()
    }
},10)

document.addEventListener('click', jump)