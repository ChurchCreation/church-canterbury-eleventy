export default function (eleventyConfig) {
  // The template's assets ship as-is; Eleventy only builds the pages.
  eleventyConfig.addPassthroughCopy('src/core');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/church.config.json');
  eleventyConfig.addPassthroughCopy('src/LICENSE');
  eleventyConfig.addPassthroughCopy('src/CREDITS.md');

  return {
    // Only .njk files are pages. Without this Eleventy also renders the
    // template's documentation — CREDITS.md and core/fonts/FONTS.md — into
    // stray pages of their own.
    templateFormats: ['njk'],
    dir: { input: 'src', includes: '_includes', data: '_data', output: '_site' },
  };
}
