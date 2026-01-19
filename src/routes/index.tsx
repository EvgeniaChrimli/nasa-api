import { createFileRoute } from "@tanstack/react-router";
import AsteroidPage from "../pages/AsteroidPage";

export const Route = createFileRoute("/")({
  component: AsteroidPage,
});
