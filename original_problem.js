class Tree {
  constructor(x, left = null, right = null) {
    this.value = x;
    this.left = left;
    this.right = right;
  }
}
function searchBST(root, target) {
    if (target === root.value) {
        return true;
    }
    if (!root) {
        return false;
    }
if (target < root.value) {
    searchBST(root.left, target);
}
if (target > root.value) {
    searchBST(root.right, target);
}
}
let node = new Tree(2,
           new Tree(1),
           new Tree(5,
           new Tree(4)))
console.log(searchBST(node, 2), 'true')
console.log(searchBST(node, 1), 'true')
console.log(searchBST(node, 5), 'true')
console.log(searchBST(node, 4), 'true')
console.log(searchBST(node, 6), 'false')
console.log(searchBST(node, -1), 'false')
