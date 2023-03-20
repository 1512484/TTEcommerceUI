import services from "../services";

export default (context, inject) => {
  inject("services", services(context));
};
