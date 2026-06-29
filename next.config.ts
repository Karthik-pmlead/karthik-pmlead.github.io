const repoName = "YOUR_REPO_NAME"; // 👈 CHANGE THIS

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // IMPORTANT for GitHub Pages
  basePath: isGithubPages ? `/${repoName}` : "",

  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

module.exports = nextConfig;
