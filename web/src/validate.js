export default {
  async jwt_validate(token) {
    const res = await fetch("http://54.233.216.15:3333/validate", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    return res.status;
  }
}