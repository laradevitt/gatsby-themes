const merge = require("deepmerge");
const _ = require("lodash");
const themeDefaults = require("./extra/options-default");

exports.sourceNodes = (
  { actions: { createNode }, createNodeId, createContentDigest },
  themeOptions
) => {
  const { menuLinks } = merge(themeDefaults, themeOptions);

  if (menuLinks.length) {
    console.log(`Generating ${menuLinks.length} MenuItem nodes...`);
  }

  menuLinks.forEach((menuItem) => {
    menuItem.uid = _.replace(_.trim(menuItem.path, "/"), /\//g, "-");
    menuItem.parentUid = _.replace(
      _.trim(menuItem.parentPath, "/"),
      /\//g,
      "-"
    );

    const menuNodeData = {
      id: createNodeId(`MenuItem ${menuItem.uid}`),
      ...menuItem,
    };

    const menuNode = {
      ...menuNodeData,
      internal: {
        type: "MenuItem",
        contentDigest: createContentDigest(menuNodeData),
      },
    };

    createNode(menuNode);
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  // Create a new type to hold menu data. We can't use SitePage context because
  // components will generate errors if the context data is missing.
  actions.createTypes(`
    type MenuItem implements Node {
      uid: String!
      menuName: String!
      path: String!
      level: String!
      weight: String!
      label: String!
      parentUid: String
      parentPath: String
      parentNode: [MenuItem] @link(from: "parentUid", by: "uid")
    }
  `);
};
