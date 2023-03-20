const uri = "/themes";

export default ($axios) => ({
  all() {
    return $axios.$get(`${uri}`);
  },
});
