const onClickAdd = () => {
  //textの取得
  const inputText = document.getElementById("add-text").value;
  //textの初期化
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する
const createIncompleteList = (text) => {
  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //buttonタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了クリック時の処理作成
  completeButton.addEventListener("click", () => {
    //クリックしたボタンの親要素を削除
    deleteFromIncompleteList(completeButton.parentNode);

    //追加要素の取得
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    //要素の初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      //text取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //削除クリック時の処理作成
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
