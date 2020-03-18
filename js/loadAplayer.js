document.addEventListener("DOMContentLoaded", function() {
    let apContainer = document.createElement("div");
    apContainer.id = "aplayer";
    // apContainer.setAttribute("id", "aplayer")
    document.body.append(apContainer);
    const ap = new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true,
      theme: '#e9e9e9',
      audio: [
        {
          name: "Bad Apple!!",
          artist: "のみこ / Masayoshi Minoshima",
          url: "https://music.163.com/song/media/outer/url?id=22645196",
          cover: "https://i.loli.net/2020/03/18/BjFfxIwEWQ7dnHa.png"
        },
         {
            name: '滲色血界、月狂ノ獄',
            artist: 'nayuta',
            url: 'https://m10.music.126.net/20200319033446/23737cd2c1a6600349ad13c6359fcd8d/ymusic/6899/10ba/ed59/6c8ef8f0e4f5f4455374419a7f9daf7a.mp3',
            cover: 'https://i.loli.net/2020/03/18/1GFVIl3M568jXyn.jpg',
          },
           {
            name: '白石溪',
            artist: '乐正绫 / 純白P / 洛天依',
            url: 'https://music.163.com/song/media/outer/url?id=415086297',
            cover: 'https://i.loli.net/2020/03/18/71RbqU98zgrDSOL.png',
          },
          {
            name: '谷雨',
            artist: '桑葚上的猴子',
            url: 'https://music.163.com/song/media/outer/url?id=410161057',
            cover: 'https://i.loli.net/2020/03/18/CEIqzavcF6hkUdG.jpg',
          },
          {
            name: '樱花樱花想见你',
            artist: '南杉',
            url: 'https://music.163.com/song/media/outer/url?id=438900492',
            cover: 'https://i.loli.net/2020/03/18/vaJQ1LsGehmEtRw.jpg',
          },
          {
            name: 'うたかたの风と蝉时雨',
            artist: 'FELT',
            url: 'https://m10.music.126.net/20200319033245/c552a7f48803fda7941639646e0fcf85/ymusic/0008/0e0f/5158/7bc9b766f59e5976b2e5f2536079c989.mp3',
            cover: 'https://i.loli.net/2020/03/18/yX3lrcGAseKSWUY.png',
          },
          {
            name: '土著神の顶点 ~Native Faith',
            artist: 'Like a rabbit',
            url: 'https://music.163.com/song/media/outer/url?id=4165168',
            cover: 'https://i.loli.net/2020/03/18/Ap51eaJx6V3BgfC.png',
          },
          {
            name: '秋姉妹のなく頃に in the autumn sky',
            artist: 'ばんばんしー',
            url: 'https://m10.music.126.net/20200319033556/121d3243c30e283ce8c7eb68ebb623bf/ymusic/5353/510b/075f/d92f6aa51efa2b95755e0561806f5708.mp3',
            cover: 'https://i.loli.net/2020/03/18/xf3DILBpgU5aVFK.png',
          },
          {
            name: '秋～華恋～',
            artist: 'α·Pav',
            url: 'https://m10.music.126.net/20200319033646/29fdcf5b9a598f46a6cb05bcf83e1f9f/ymusic/cddb/7b88/0817/f77c9299633f432bb00ee232f8451eb9.mp3',
            cover: 'https://i.loli.net/2020/03/18/4tEMocgjzf8NVO5.png',
          },
          {
            name: '横竖撇点折(泠鸢翻唱）（Cover：米白）',
            artist: '泠鸢yousa',
            url: 'https://music.163.com/song/media/outer/url?id=1419023911',
            cover: 'https://i.loli.net/2020/03/18/9hrDgt7bGJj8Koy.jpg',
          }
      ]
    });
  });