module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ "docs/public": "public" });
    return {
        dir: {
          input: "docs",
          layouts: "layouts",
          output: "dist/docs",
        },
    };
};
