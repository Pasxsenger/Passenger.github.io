const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Senorita (Acoustic)",
        artist: 'Adam Christopher,Kimmy Nearon',
        url: 'http://m10.music.126.net/20190912000829/863a53a7fa9b1820fac67f7f274c34c0/ymusic/515d/015b/555b/f7616fb116614a5cd8cfb19b63088d57.mp3',
        cover: 'http://p1.music.126.net/tywnf5s0LaPMM640DKQTkQ==/109951164202370414.jpg?param=130y130',
      },
      {
        name: "Thinking Out Loud",
        artist: 'Ed Sheeran',
        url: 'http://m10.music.126.net/20190912002527/41d7115ea16bf3ed254f57303c4fc176/ymusic/c789/fdef/0831/8984d5b49bd9087185f8d341cc13ad55.mp3',
        cover: 'http://p1.music.126.net/coUnPtrHg0zUozRCwYOxog==/6051711999665662.jpg?param=130y130',
      }
    ]
});