import { useContext } from "@nuxtjs/composition-api";

function useThemeBiz() {
  const { $repositories } = useContext();

  return {
    ...$repositories.theme,
  };
}

export default useThemeBiz;
