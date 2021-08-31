export const currentLinkStyle = (id) => {
  const arrAnchor = document.getElementsByClassName("anchor");
  const node = document.getElementById(id);

  for (let i = 0; i < arrAnchor.length; i++) {
    arrAnchor[i].style.backgroundColor = "";
    arrAnchor[i].style.borderLeft = "";
  }

  node.style.backgroundColor = "rgba(241, 228, 255, 0.64)";
  node.style.borderLeft = "5px solid #8c30f5";
};

export const currentNode = (e) => {
  let currentNode = null;
  const currentElement = e.target;

  if (currentElement.nodeName === "svg")
    currentNode = currentElement.parentNode;
  else if (currentElement.nodeName === "path")
    currentNode = currentElement.parentNode.parentNode;
  else currentNode = currentElement;

  return currentNode;
};
