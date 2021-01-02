export default {
  async jwt_validate(token) {
    const res = await fetch("http://users-api:3333/validate", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    return res.status;
  }
}