//Ajax

function post(){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    // e は 投稿ボタンをクリックしたという情報を持ったオブジェクト
    e.preventDefault(); //通常があると投稿ダブる

    const formData = new FormData(form); //??
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true); //非同期true
    XHR.responseType = "json";
    XHR.send(formData);
    console.log("aaaaa");

  })    
};

window.addEventListener('turbo:load', post);