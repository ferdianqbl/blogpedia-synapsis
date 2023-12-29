const url = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export type ResponseType = {
  error: number;
  message: string;
  data: [];
};

export type PostType = {
  id: string | number;
  user_id: string | number;
  title: string;
  body: string;
};

export type UserType = {
  id: string | number;
  name: string;
  email: string;
  gender: "male" | "female";
  status: "active" | "inactive";
};

// POSTS
export const getAllPosts = async ({
  page = 1,
  per_page = 10,
}: {
  page: string | number;
  per_page: string | number;
}) => {
  try {
    const response = await fetch(
      `${url}/posts?page=${page}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      }
    );
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

// USERS
export const getAllUsers = async ({
  page = 1,
  per_page = 10,
  query = null,
}: {
  page: string | number;
  per_page: string | number;
  query?: Partial<UserType> | null;
}) => {
  try {
    let queryString = "";
    if (query) {
      queryString = Object.keys(query)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(
              (query as any)[key]
            )}`
        )
        .join("&");
    }
    const response = await fetch(
      `${url}/users?page=${page}&per_page=${per_page}&${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-cache",
      }
    );
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
