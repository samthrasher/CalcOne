const SessionAPI = {
  signUp: (user, success, error) => {
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: {user},
      dataType: "json",

      success,
      error: e => error(e.responseJSON.errors)
    });
  },

  login: (user, success, error) => {
    $.ajax({
      method: "POST",
      url: "/api/session",
      data: {user},
      dataType: "json",

      success,
      error: e => error(e.responseJSON.errors)
    });
  },

  logout: (success, error) => {
    $.ajax({
      method: "DELETE",
      url: "/api/session",
      dataType: "json",

      success,
      error: e => error(e.responseText.errors)
    });
  },
};

export default SessionAPI;
