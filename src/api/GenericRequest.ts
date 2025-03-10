import type { RequestOptions } from "@/types/RequestOptions";
import type { ResponseHelper } from "@/types/ResponseHelper";
import axios, { AxiosError } from "axios";


export async function GenericRequest<T>({url, method, headers, params, data, authToken
}: RequestOptions){
  try {
    const response = await axios({
      url,
      method,
      headers: {
        ...(headers ? { "Content-Type": headers } : {}),
        ...(authToken ? { "Authorization": `Bearer ${authToken}` } : {}),
      },
      params,
      data,
    });

    return response.data as ResponseHelper<T>;
  }
  catch (error) {
    if(error instanceof AxiosError) {
      console.error('Error in the request: ', error);
    } else {
      console.error("Error unknown:", error);
    }
    return null;
  }
}
