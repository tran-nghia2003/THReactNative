// Hàm này phân tích URL query string thành object
const getURLParams = (url) => {
  const params = {};
  const parts = url?.split("?");

  if (parts.length <= 1) return params;

  const queryString = parts[1];
  const pairs = queryString.split("&");

  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    if (key && value) {
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  }

  return params;
};

export default getURLParams;
