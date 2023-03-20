const unauthorizedHandle = (response, { $config, redirect }) => {
  const loginUrl = `${$config.appSpaceUrl || ""}/login`;
  localStorage.removeItem("$SESSION_TOKEN");
  localStorage.removeItem("$EMPLOYEE_ID");
  if (response.data.message) {
    window.location.replace(`${loginUrl}?message=${response.data.message}`);
  } else {
    window.location.replace(loginUrl);
  }
};

export default function (context) {
  const { $axios } = context;

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);

    if (code === 401) {
      unauthorizedHandle(error.response, context);
      return Promise.resolve(error.response);
    }

    if (code === 404) {
      return Promise.resolve(false);
    }

    if (code === 500) {
      return Promise.resolve(false);
    }
  });
}
