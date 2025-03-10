import type { Method } from "axios";

export enum ContentType {
  JSON = "application/json",
  FORM_DATA = "multipart/form-data",
}

export interface RequestOptions {
  url: string;
  method: Method;
  headers?: ContentType;
  params?: Record<string, string | number>;
  authToken?: string;
  data?: Record<string, unknown>;
}
