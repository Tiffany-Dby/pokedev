export type FetchConfig = {
  method: FetchMethod.GET;
  headers: Record<string, string>;
};

export enum FetchMethod {
  GET = "GET",
}
