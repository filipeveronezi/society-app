export default {
  async jwt_validate(token) {
    const res = await fetch("http://society.filipeveronezi.dev.br:3333/validate", {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });
    return res.status;
  }
}