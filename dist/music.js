const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Senorita",
        artist: 'Shawn Mendes,Camila Cabello',
        url: 'music/Shawn Mendes & Camila Cabello - Señorita.m4a',
        cover: 'https://p1.music.126.net/tywnf5s0LaPMM640DKQTkQ==/109951164202370414.jpg?param=130y130',
      },
      {
        name: "어른 (大人)",
        artist: '손디아 (Sondia)',
        url: 'music/손디아 - 어른.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Mix2w1utUOr.jpg?max_age=2592000',
      },
      {
        name: "Remember Me (Lullaby)",
        artist: 'Gael Garcia Bernal,Gabriella Flores,Libertad García Fonzi',
        url: 'music/Remember me.m4a',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003cQfbg305tGS.jpg?max_age=2592000',
      }
    ]
});