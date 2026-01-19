import { createFileRoute } from "@tanstack/react-router";
import OauthPage from "../../pages/auth/OauthPage";

export const Route = createFileRoute("/oauth/callBack")({
  component: OauthPage,
});
