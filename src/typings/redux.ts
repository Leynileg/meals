import { rootReducer } from "@store/reducers";
import { store } from "@store/store";

enum LOADING_STATE {
  IDLE = "IDLE",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

type RootState = ReturnType<typeof rootReducer>;

type Dispatch = typeof store.dispatch;

export { LOADING_STATE, RootState, Dispatch };
