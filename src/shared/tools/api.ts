import { FetchConfig, FetchMethod } from "@/shared/types/api";

const getRequest = async <T>(
  url: string
): Promise<{ result: T; error: string | null; status: number }> => {
  const config = {
    method: FetchMethod.GET,
    headers: {
      Accept: "application/json",
    },
  };

  return await request<T>(url, config);
};

const request = async <T>(
  url: string,
  config: FetchConfig
): Promise<{ result: T; error: string | null; status: number }> => {
  let result = [];
  let error = null;
  let status = -1;

  try {
    const response = await fetch(url, config);

    status = response.status;
    result = await response.json();

    if (status >= 400) throw new Error(`Error ${status}: ${result?.message}`);
  } catch (err) {
    if (err instanceof Error) error = err.message;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return { result, error, status };
  }
};

export { getRequest };
