// API endpoint cơ bản
const apiBase = "https://randomuser.me/api/";
const SEED = "fullstackio";

// Hàm fetch danh sách 100 contact
export const fetchContacts = async () => {
  const response = await fetch(`${apiBase}?results=100&seed=${SEED}`);
  const { results } = await response.json();

  return results.map(formatContact);
};

// Hàm fetch 1 user contact (người dùng chính)
export const fetchUserContact = async () => {
  const response = await fetch(`${apiBase}?seed=${SEED}`);
  const { results } = await response.json();

  return formatContact(results[0]);
};

// Hàm fetch 1 contact ngẫu nhiên
export const fetchRandomContact = async () => {
  const response = await fetch(apiBase);
  const { results } = await response.json();

  return formatContact(results[0]);
};

// Format lại dữ liệu contact từ randomuser
const formatContact = (contact) => {
  return {
    name: `${contact.name.first} ${contact.name.last}`,
    avatar: contact.picture.large,
    phone: contact.phone,
    cell: contact.cell,
    email: contact.email,
    favorite: Math.random() < 0.3, // ~30% được đánh dấu yêu thích
  };
};
