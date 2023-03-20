import { reactive } from "@nuxtjs/composition-api";
import useThemeBiz from "~/composables/theme.biz";

const state = reactive({
  data: null,
});

export default function () {
  const themeBiz = useThemeBiz();

  const init = async () => {
    try {
      const data = await themeBiz.all();
      state.data = [...data];
    } catch (error) {
      console.error(error);
    }
  };

  return {
    state,
    init,
  };
}
