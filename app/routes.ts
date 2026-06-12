import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"), route("stories", "routes/stories.tsx"), route("contact", "routes/contact.tsx"), route("about", "routes/about.tsx"), route("stories/:slug", "./routes/story.tsx")] satisfies RouteConfig;
