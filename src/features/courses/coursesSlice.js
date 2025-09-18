import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../app/firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const querySnapshot = await getDocs(collection(db, "courses"));
    const courses = [];
    querySnapshot.forEach((doc) => {
      courses.push(doc.data());
    });

    return courses;
  }
);

const initialState = {
  coursesArray: [],
  isLoading: true,
  errMsg: "",
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        state.coursesArray = (action.payload);
        // state.coursesArray = mapImageURL(action.payload);
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : "Fetch failed";
      });
  },
});

export const coursesReducer = coursesSlice.reducer;

export const selectAllCourses = (state) => {
  return state.courses.coursesArray;
};

export const selectRandomCourse = (state) => {
  const coursesArray = state.courses.coursesArray;
  const randomIndex = Math.floor(coursesArray.length * Math.random());

  return coursesArray[randomIndex];
};

export const selectCourseById = (id) => (state) => {
  return state.courses.coursesArray.find(
    (course) => course.id === parseInt(id)
  );
};

export const selectFeaturedCourse = (state) => {
  return {
    icon: "📓 ",
    title: "Resources",
    subtitle:
      "I'm a teacher. I get it. If you need help with your content I've got you so you don’t lose it.",
    link: "directory",
    featuredItem: state.courses.coursesArray.find((course) => course.featured),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectFreeCourse = (state) => {
  return {
    freeItem: state.courses.coursesArray.find((course) => course.free),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const shortSelectFeaturedCourse = (state) => {
  return selectFeaturedCourse.slice(0, 20);
};

export const selectGovernmentCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("Government")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectWorldHistoryCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("World History")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectUSHistoryCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("US History")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectGeographyCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("Geography")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectMandatoryCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("Mandatory")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectLanguageArtsCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("Language Arts")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};

export const selectElectiveCourses = (state) => {
  return {
    freeItem: state.courses.coursesArray.filter((course) =>
      course.credit.includes("Elective")
    ),
    isLoading: state.courses.isLoading,
    errMsg: state.courses.errMsg,
  };
};
