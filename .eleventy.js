module.exports = function(eleventyConfig) {
  // Copy over images, CSS, etc. so they are available in _site
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",         // Our main input directory is the project root
      includes: "_includes", // Where partials/layouts live
      output: "_site"     // Default output folder
    },
    // Use Liquid by default
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};
