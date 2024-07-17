import CorePostSliceReducers from "@core/entities/post/model/post-slice-reducers";
import {PostSliceType} from "@src/entities/post";

const PostSliceReducers = {
    ...CorePostSliceReducers,

    clearData: (state: PostSliceType): PostSliceType => ({
        ...state,
        data: [],
    })
}

export default PostSliceReducers
