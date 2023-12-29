const url = process.env.API_URL;
const token = process.env.TOKEN;

export type ResponseType = {
  error: number;
  message: string;
  data: [];
};

export const getAllPosts = async () => {
  try {
    const response = await fetch(`${url}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: [] = await response.json();
    return {
      error: 0,
      message: "success",
      data,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: [],
    } satisfies ResponseType;
  }
};
