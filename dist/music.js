const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    loop: 'all',
    order: 'list',
    mutex: true,
    preload: 'auto',
    // autoplay: true,
    audio: [
        {
            name: 'When we..',
            artist: 'silky soap',
            url: 'http://music.163.com/song/media/outer/url?id=475072607.mp3',
            cover: 'https://p2.music.126.net/Bt1GCxjRAUHUC7t0JyjiDg==/18569651883396138.jpg?param=130y130',
        },
        {
            name: 'Mystery of Love',
            artist: 'Luke Pickman',
            url: 'http://music.163.com/song/media/outer/url?id=1457681678.mp3',
            cover: 'https://p2.music.126.net/EzA0RJ4sni0PSfHplB_LLQ==/109951165084783424.jpg?param=130y130',
        },
        {
            name: 'yellow',
            artist: 'eel.',
            url: 'http://music.163.com/song/media/outer/url?id=499675131.mp3',
            cover: 'https://p1.music.126.net/1NeZ6C7m3Zgtpgm0MYOy9g==/109951163007159533.jpg?param=130y130',
        },
    ]
  });
