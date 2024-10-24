
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../src/app/api/ApiSlice";
const notesAdapter = createEntityAdapter({
    sortComparer:(a,b) => (a.completed === b.completed) ? 0 : a.completed ? 1 : -1
});
const initialState  = notesAdapter.getInitialState();

export const notesApiSlice = apiSlice.injectEndpoints({
    endpoints: builder =>({
        getNotes: builder.query({
            query: () => '/notes',
            validateStatus:(response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor:5, 
            transformResponse: responseData =>{
                const loadedNotes = responseData.map(note => {
                    note.id = note._id
                    return note
                });
                return notesAdapter.setAll(initialState, loadedNotes)
            },
            providesTags: (result, error,arg) => {
                if (result?.ids) {
                    return [
                        {type:'Note', id:'LIST'},
                        ...result.ids.map(id => ({type:'Note', id}))
                    ]
                } else return [{type:'Note', id:'LIST'}]
            }
        }),

        addNewNote: builder.mutation({
            query: initialNoteData => ({
                url:'/notes',
                method: 'POST',
                body: {
                    ...initialNoteData,
                }
            }),
            invalidatesTags: [
                {type:'Note', id:'LIST'}
            ]
        }),
        updateNote: builder.mutation({
            query: initialNoteData => ({
                url:'notes',
                method:'PATCH',
                body: {
                    ...initialNoteData
                }
            }),
            invalidatesTags: [
                {type:'Note', id:arg.id}
            ]
        }),
        deleteNote : builder.mutation({
            query:({id}) => ({
                url: '/notes',
                method:'DELETE',
                body:{id}
            }),
            invalidatesTags: [
                {type:'Note', id:arg.id}
            ]
        })
    })
})

export const {
    useGetNotesQuery,
    useAddNewNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation
} = notesApiSlice;

// returns the query result object

export const selectNotesResult = notesApiSlice.endpoints.getNotes.select()

// creates memoized selector
const  selectNotesData = createSelector(
    selectNotesResult,
    noteResult => noteResult.data // normalized state object with ids and entities 
)

//getSelectors creates these selectors and we rename them with aliases using destructuring

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
    selectIds: selectNoteIds
    // pass in a selector that returns the notes  slice of state
} = notesAdapter.getSelectors(state => selectNotesData(state) ?? initialState);