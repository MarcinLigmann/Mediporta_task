import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Tag } from "../../types/Tag"
import { TagData } from "../../types/TagData"
import constans from "../../constants"

interface TagsState {
  tags: Tag[]
  loading: boolean
  error: string | null
}

const initialState: TagsState = {
  tags: [],
  loading: false,
  error: null,
}

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    fetchTagsStart(state) {
      state.loading = true
      state.error = null
    },
    fetchTagsSuccess(state, action: PayloadAction<Tag[]>) {
      state.loading = false
      state.tags = action.payload
    },
    fetchTagsFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: constans.baseURL }),
  endpoints: (builder) => ({
    getTags: builder.query<TagData, { page: number; pageSize: number; order: string; sort: string }>({
      query: ({ page, pageSize, order, sort }) => ({
        url: `?page=${page}&pagesize=${pageSize}&order=${order}&sort=${sort}&site=stackoverflow`,
      })
      
    }),
  }),
})

export const {
  useGetTagsQuery
} = tagsApi

export default tagsSlice.reducer;