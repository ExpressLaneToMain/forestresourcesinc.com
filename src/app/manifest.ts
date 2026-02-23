import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Forest Resources Inc.",
    short_name: "Forest Resources",
    description:
      "Professional forestry services in Central & Southern Illinois",
    start_url: "/",
    display: "standalone",
    background_color: "#fafaf9",
    theme_color: "#236653",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
