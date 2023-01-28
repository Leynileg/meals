import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { Dispatch, RootState } from "@typings/redux";

const useAppDispatch: () => Dispatch = useDispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
