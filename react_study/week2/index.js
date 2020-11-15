let postName = document.querySelector("input");
let postContent = document.querySelector("textarea");
let timeline = document.querySelector("#timeline");

window.onload = async () => {
  const postResponse = await fetch(
    "http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/",
    {
      method: "get",
    }
  );
  const posts = await postResponse.json();

  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    post(posts[i].owner, posts[i].content);
  }
};

const postClick = async () => {
  if (postName.value === "") alert("이름을 입력해주세요!");
  else if (postContent.value === "") alert("내용을 입력해주세요!");
  else {
    post(postName.value, postContent.value);

    await fetch(
      "http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: postContent.value,
          owner: postName.value,
        }),
      }
    );

    postName.value = "";
    postContent.value = "";
  }
};

const post = (name, discription) => {
  let container = document.createElement("div");
  let owner = document.createElement("h1");
  let content = document.createElement("p");

  owner.appendChild(document.createTextNode(name));
  content.appendChild(document.createTextNode(discription));

  container.setAttribute("class", "container");
  owner.setAttribute("class", "owner");
  content.setAttribute("class", "content");
  container.appendChild(owner);
  container.appendChild(content);

  timeline.appendChild(container);
};
