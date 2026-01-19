import { createFileRoute } from "@tanstack/react-router";
import Analitycs from "../pages/Analitycs";

export const Route = createFileRoute("/analitycs")({
  component: Analitycs,
});
