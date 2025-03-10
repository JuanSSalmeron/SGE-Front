# 🌐 GenericRequest - Axios Wrapper in TypeScript

🚀 **GenericRequest** is a generic function in TypeScript that encapsulates HTTP requests using Axios, allowing flexible and reusable handling of different request types.

## 📌 Features
- ✅ Supports `GET`, `POST`, `PUT`, `DELETE`, etc.
- ✅ Custom `headers` support.
- ✅ Handles `params` and `data` as needed.
- ✅ Authentication with `Bearer Token`.
- ✅ Error handling with `AxiosError`.

---

## 🛠️ Installation

Make sure you have Axios installed in your project:

```sh
npm install
```

## 📜 Use

### Example:

```ts
//Example for GET.
const response = await GenericRequest<MyDataType>({
  url: "https://api.example.com/data",
  method: "GET",
  authToken: "your-token-here",
});

if (response) {
  console.log("Data retrieved:", response.data);
} else {
  console.error("Request failed");
}

//Example for POST.
const newUser: Type = { name: "John Doe", email: "john@example.com" };

const response = await GenericRequest<Type>({
  url: "https://api.example.com/users",
  method: "POST",
  data: newUser,
  headers: "application/json",
  authToken: "your-token-here",
});

if (response) {
  console.log("User created:", response.data);
} else {
  console.error("Request failed");
}
```

## 🛠️ Parameters

| Parameter  | Type                          | Description                            |
|------------|------------------------------|----------------------------------------|
| `url`      | `string`                      | API endpoint URL.                      |
| `method`   | `"GET" | "POST" | "PUT" | "DELETE"` | HTTP request method.           |
| `headers`  | `string` *(optional)*         | Content type (`Content-Type`).         |
| `params`   | `Record<string, any>` *(optional)* | Query parameters.                  |
| `data`     | `any` *(optional)*            | Request body (for `POST`, `PUT`).      |
| `authToken`| `string` *(optional)*         | Authentication token (`Bearer Token`). |

## 🎯 Contribute

Contributions are welcome! If you want to improve this code, fork the repository, create a branch, and submit a pull request. 🚀  

📌 **Author:** [Francisco Emmanuel Rojas Cerón](mailto:erojas@ozelot.it)