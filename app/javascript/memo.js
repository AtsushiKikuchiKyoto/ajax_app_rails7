//Ajax

const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時:${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>  `;
  return html;
};

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
    XHR.onload = () => { //受信した時の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }; //HTTPステータスコード200番は「成功」,他はエラー表示
      const list     = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
        // beforebegin	要素の直前
        // afterbegin	要素内部の、最初の子要素の直前
        // beforeend	要素内部の、最後の子要素の直後
        // afterend	要素の直後
      formText.value = "";
      }; 
  })    
};

window.addEventListener('turbo:load', post);