// convert flat array with parent ids to a tree with child nodes
export default (data, path) => {
  // Create some UIDs. Sort by level so the parents get processed first.
  const dataset = data;

  // every node gets an entry in hashTable. We're going to reference into this
  // in our final tree structure.
  const hashTable = {};

  // create hastTable entries for nodes
  dataset.forEach((menuItem) => {
    // Set property for currently active menu.
    menuItem.node.activeMenu =
      !menuItem.node.parentPath && path.includes(menuItem.node.path);

    hashTable[menuItem.node.uid] = {
      ...menuItem,
      childNodes: [],
    };
  });

  const dataTree = [];

  dataset.forEach((menuItem) => {
    // if this node has a parent, push it onto the child array in the hash
    // table entry for that node
    if (menuItem.node.parentPath) {
      hashTable[menuItem.node.parentUid].childNodes.push(
        hashTable[menuItem.node.uid]
      );

      // if the node doesn't have a parent, it goes into the data tree as a
      // root node
    } else {
      dataTree.push(hashTable[menuItem.node.uid]);
    }
  });

  return dataTree;
};
