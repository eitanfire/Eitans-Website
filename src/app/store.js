import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { coursesReducer } from "../features/courses/coursesSlice";
// import { takesReducer } from "../features/takes/takesSlice";
// import { rantsReducer } from "../features/rants/rantsSlice";
// import { commentsReducer } from "../features/comments/commentsSlice";
// import { userReducer } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    // takes: takesReducer,
    // rants: rantsReducer,
    // comments: commentsReducer,
    // user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
