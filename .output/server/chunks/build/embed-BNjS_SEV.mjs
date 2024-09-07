const transformations = [
  // Video Players
  {
    pattern: /https:\/\/www\.youtube\.com\/watch\?v=(.+)/,
    replacement: "https://www.youtube.com/embed/$1"
  },
  {
    pattern: /https:\/\/vimeo\.com\/(.+)/,
    replacement: "https://player.vimeo.com/video/$1"
  },
  {
    pattern: /https:\/\/www\.loom\.com\/share\/(.+)/,
    replacement: "https://www.loom.com/embed/$1"
  },
  // File Services
  {
    pattern: /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view/,
    replacement: "https://drive.google.com/file/d/$1/preview"
  }
  // Calendar Tools
  // Calendly: Remains unchanged
  // SavvyCal: Remains unchanged
  // Hubspot: @TODO
];
function transformUrlToIframeSrc(url) {
  for (const transformation of transformations) {
    if (transformation.pattern.test(url)) {
      return url.replace(transformation.pattern, transformation.replacement);
    }
  }
  return url;
}
function generateVideoEmbed(url) {
  if (url.includes("youtube.com")) {
    return `https://www.youtube.com/embed/${url.split("v=")[1]}`;
  } else if (url.includes("youtu.be")) {
    return `https://www.youtube.com/embed/${url.split("be/")[1]}`;
  } else if (url.includes("vimeo.com")) {
    return `https://player.vimeo.com/video/${url.split("vimeo.com/")[1]}`;
  } else if (url.includes("loom.com")) {
    return `https://www.loom.com/embed/${url.split("loom.com/share/")[1]}`;
  } else {
    return url;
  }
}

export { generateVideoEmbed as g, transformUrlToIframeSrc as t };
//# sourceMappingURL=embed-BNjS_SEV.mjs.map
