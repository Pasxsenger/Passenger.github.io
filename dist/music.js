const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "Senorita",
        artist: 'Shawn Mendes,Camila Cabello',
        url: 'http://ws.stream.qqmusic.qq.com/C400002n4xK13AJJvQ.m4a?guid=619010235&vkey=2D61CE8013A6217221FEC71855FDDF76C4981802F1DE1EF4CF3E497DE2E03FF30195E99F2A388A6A3CD92208844371EC9926684BF17D4A0D&uin=0&fromtag=66',
        cover: 'http://p1.music.126.net/tywnf5s0LaPMM640DKQTkQ==/109951164202370414.jpg?param=130y130',
      },
      {
        name: "어른 (大人)",
        artist: '손디아 (Sondia)',
        url: 'http://ws.stream.qqmusic.qq.com/C4001004TdwL4F73f6.m4a?guid=933646329&vkey=6A0E1F2ECBBF02D95B40F3282293E7F3671E00928B16C28417A62AA91A49032BEC293D26EE467C68752ABF31B12DF2794001A55046E36777&uin=0&fromtag=66',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000Mix2w1utUOr.jpg?max_age=2592000',
      }
    ]
});