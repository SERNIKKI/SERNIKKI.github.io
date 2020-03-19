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
        // {
        //   name: "Bad Apple!!",
        //   artist: "のみこ / Masayoshi Minoshima",
        //   url: "https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E3%81%AE%E3%81%BF%E3%81%93,Masayoshi%20Minoshima%20-%20Bad%20Apple!!.mp3",
        //   cover: "https://i.loli.net/2020/03/19/T9mk17IBwaUndeW.jpg"
        // },
        //  {
        //     name: '滲色血界、月狂ノ獄',
        //     artist: 'nayuta',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/nayuta%20-%20%E6%BB%B2%E8%89%B2%E8%A1%80%E7%95%8C%E3%80%81%E6%9C%88%E7%8B%82%E3%83%8E%E7%8D%84.mp3',
        //     cover: 'https://i.loli.net/2020/03/18/1GFVIl3M568jXyn.jpg',
        //   },
        //    {
        //     name: '白石溪',
        //     artist: '乐正绫 / 純白P / 洛天依',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E4%B9%90%E6%AD%A3%E7%BB%AB%20-%20%E7%99%BD%E7%9F%B3%E6%BA%AA.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/rbuDziqC7vcKyda.jpg',
        //   },
        //   {
        //     name: '谷雨',
        //     artist: '桑葚上的猴子',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E6%A1%91%E8%91%9A%E4%B8%8A%E7%9A%84%E7%8C%B4%E5%AD%90%20-%20%E8%B0%B7%E9%9B%A8.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/NWBiJZLD3YOVuFP.jpg',
        //   },
        //   {
        //     name: '樱花樱花想见你',
        //     artist: '南杉',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E5%8D%97%E6%9D%89%20-%20%E6%A8%B1%E8%8A%B1%E6%A8%B1%E8%8A%B1%E6%83%B3%E8%A7%81%E4%BD%A0.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/pMzsdvTn45wfjS8.jpg',
        //   },
        //   {
        //     name: 'うたかたの风と蝉时雨',
        //     artist: 'FELT',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/FELT%20-%20%E3%81%86%E3%81%9F%E3%81%8B%E3%81%9F%E3%81%AE%E9%A3%8E%E3%81%A8%E8%9D%89%E6%97%B6%E9%9B%A8.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/MXFV4NifyG8osq6.jpg',
        //   },
        //   {
        //     name: '土著神の顶点 ~Native Faith',
        //     artist: 'Like a rabbit',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E5%9C%9F%E8%91%97%E7%A5%9E%E3%81%AE%E9%A1%B6%E7%82%B9.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/J8zkZalidVmSyho.jpg',
        //   },
        //   {
        //     name: '秋姉妹のなく頃に in the autumn sky',
        //     artist: 'ばんばんしー',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E3%81%B0%E3%82%93%E3%81%B0%E3%82%93%E3%81%97%E3%83%BC%20-%20%E7%A7%8B%E5%A7%89%E5%A6%B9%E3%81%AE%E3%81%AA%E3%81%8F%E9%A0%83%E3%81%AB%20in%20the%20autumn%20sky.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/gL32JjyFY7QwlkW.jpg',
        //   },
        //   {
        //     name: '秋～華恋～',
        //     artist: 'α·Pav',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%CE%B1%C2%B7Pav%20-%20%E7%A7%8B%EF%BD%9E%E8%8F%AF%E6%81%8B%EF%BD%9E.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/4zecVXi8QM2KwYL.jpg',
        //   },
        //   {
        //     name: '横竖撇点折(泠鸢翻唱）（Cover：米白）',
        //     artist: '泠鸢yousa',
        //     url: 'https://cdn.jsdelivr.net/gh/SERNIKKI/MyMp3/%E6%B3%A0%E9%B8%A2yousa%20-%20%E6%A8%AA%E7%AB%96%E6%92%87%E7%82%B9%E6%8A%98(%E6%B3%A0%E9%B8%A2%E7%BF%BB%E5%94%B1%EF%BC%89%EF%BC%88Cover%EF%BC%9A%E7%B1%B3%E7%99%BD%EF%BC%89.mp3',
        //     cover: 'https://i.loli.net/2020/03/19/RvUcOBX7j2bQxzk.jpg',
        //   }
      ]
    });
  });