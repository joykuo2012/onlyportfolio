const select = (DOM) => document.querySelector(DOM);

select("#btn").addEventListener("click", (e) => {
  // 建立 Range 物件
  const range = document.createRange();
  const texts = select("#text");
  range.selectNode(texts);
  // 取得 Selection 物件
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
});

const sr = ScrollReveal({
    distance: "45px",
    duration: 1300,
    delay: 450,
    reset: true
  });
  
  sr.reveal(".joyimg, .text2, .img1, .img3", { delay: 350, origin: "left"});
  sr.reveal(".text, .img2, .img4", {delay: 350, origin: "right"});
  sr.reveal(".icon :nth-child(1)", {delay: 360, origin: "top"});  
  sr.reveal(".icon :nth-child(2)", {delay: 450, origin: "top"});
  sr.reveal(".icon :nth-child(4)", {delay: 550, origin: "top"});
  sr.reveal(".icon :nth-child(3)", {delay: 660, origin: "top"});

