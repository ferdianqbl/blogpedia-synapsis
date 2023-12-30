import axios from "axios";

const url = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

export type ResponseType = {
  error: number;
  message: string;
  data: [] | null;
};

export type PostType = {
  id: string | number;
  user_id: string | number;
  title: string;
  body: string;
};

export type UserType = {
  id: string | number | null;
  name: string;
  email: string;
  gender: string;
  status: "active" | "inactive";
};

export type CommentType = {
  id: string | number;
  post_id: string | number;
  name: string;
  email: string;
  body: string;
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
    const response = await axios(
      `${url}/posts?page=${page}&per_page=${per_page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      error: 0,
      message: "success",
      data: response.data,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: [],
    } satisfies ResponseType;
  }
};

export const getDetailPostById = async (id: string | number) => {
  try {
    const res = await axios(`${url}/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      error: 0,
      message: "success",
      data: res.data satisfies PostType,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: null,
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
    const response = await axios(
      `${url}/users?page=${page}&per_page=${per_page}&${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {
      error: 0,
      message: "success",
      data: response.data,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: [],
    } satisfies ResponseType;
  }
};

export const addNewUser = async (data: FormData) => {
  try {
    const res = await axios(`${url}/users`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return {
      error: 0,
      message: "success",
      data: null,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data,
      data: [],
    } satisfies ResponseType;
  }
};

export const editUserById = async (id: string | number, data: FormData) => {
  try {
    const res = await axios(`${url}/users/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return {
      error: 0,
      message: "success",
      data: null,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data,
      data: [],
    } satisfies ResponseType;
  }
};

export const getUserById = async (id: string | number) => {
  try {
    const res = await axios(`${url}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      error: 0,
      message: "success",
      data: res.data satisfies UserType,
    };
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data,
      data: null,
    } satisfies ResponseType;
  }
};

export const getUserPosts = async (id: string | number) => {
  try {
    const res = await axios(`${url}/users/${id}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      error: 0,
      message: "success",
      data: res.data,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data,
      data: [],
    } satisfies ResponseType;
  }
};

export const deleteUserById = async (id: string | number) => {
  try {
    await axios(`${url}/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      error: 0,
      message: "success",
      data: null,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.response.data,
      data: [],
    } satisfies ResponseType;
  }
};

export const addNewUserPost = async (
  userId: string | number,
  data: FormData
) => {
  try {
    const res = await axios(`${url}/users/${userId}/posts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return {
      error: 0,
      message: "success",
      data: null,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: null,
    } satisfies ResponseType;
  }
};

// COMMENTS
export const getCommentsByPostId = async (postId: string | number) => {
  try {
    const res = await axios(`${url}/posts/${postId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      error: 0,
      message: "success",
      data: res.data,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: [],
    } satisfies ResponseType;
  }
};

export const addNewComment = async (
  postId: string | number,
  data: FormData
) => {
  try {
    const res = await axios(`${url}/posts/${postId}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return {
      error: 0,
      message: "success",
      data: null,
    } satisfies ResponseType;
  } catch (error: any) {
    return {
      error: 1,
      message: error.message,
      data: null,
    } satisfies ResponseType;
  }
};
