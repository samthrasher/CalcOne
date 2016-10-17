export const openModal = () => ({
  type: "SET_LOGIN_MODAL_STATE",
  state: true
});

export const closeModal = () => ({
  type: "SET_LOGIN_MODAL_STATE",
  state: false
});
