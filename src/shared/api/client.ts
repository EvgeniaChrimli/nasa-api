import createClient from "openapi-fetch";
import type {
  CloseApproachData,
  NearEarthObjectDetail,
  NeoBrowseCurrent,
  NeoBrowseResponse,
  NeoFeedResponse,
} from "./scema";

export interface ApiError {
  error: string;
  message?: string;
}

export type paths = {
  "/neo/rest/v1/feed": {
    get: {
      parameters: {
        query: {
          start_date: string;
          end_date: string;
          api_key: string;
        };
      };
      responses: {
        200: { content: { "application/json": NeoFeedResponse } };
        201: { content: { "application/json": NeoFeedResponse } };
        400: { content: { "application/json": ApiError } };
        401: { content: { "application/json": ApiError } };
        403: { content: { "application/json": ApiError } };
        500: { content: { "application/json": ApiError } };
      };
    };
  };
  "/neo/rest/v1/neo/browse": {
    get: {
      parameters: {
        query: {
          page?: number;
          size?: number;
          api_key: string;
        };
      };
      responses: {
        200: { content: { "application/json": NeoBrowseResponse } };
        400: { content: { "application/json": ApiError } };
        401: { content: { "application/json": ApiError } };
        403: { content: { "application/json": ApiError } };
        500: { content: { "application/json": ApiError } };
      };
    };
  };
  "/neo/rest/v1/neo/{id}": {
    get: {
      parameters: {
        path: {
          id: string;
        };
        query: {
          api_key: string;
        };
      };
      responses: {
        200: { content: { "application/json": NeoBrowseCurrent } };
        400: { content: { "application/json": ApiError } };
        401: { content: { "application/json": ApiError } };
        403: { content: { "application/json": ApiError } };
        500: { content: { "application/json": ApiError } };
      };
    };
  };
};

export const nasaClient = createClient<paths>({
  baseUrl: "https://api.nasa.gov",
});
