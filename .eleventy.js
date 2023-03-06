module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./src/img": "/img" });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
