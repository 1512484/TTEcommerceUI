import repositories from "../repositories";

export default ({ $axios }, inject) => {
  inject("repositories", repositories($axios));
};
