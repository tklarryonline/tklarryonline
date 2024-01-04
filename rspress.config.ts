import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "Luan Nguyen",
  description: "Full Stuck Engineer",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    darkMode: false,
    footer: {
      message: "Hellowolrd"
    },
    search: false,
    socialLinks: [
      { icon: "github", mode: "link", content: "https://github.com/tklarryonline" },
      { icon: "linkedin", mode: "link", content: "https://linkedin.com/in/tklarryonline" },
    ],
  },
});
