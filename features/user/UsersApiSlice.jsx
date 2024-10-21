import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../src/app/api/ApiSlice";

const usersAdapter = createEntityAdapter({});
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError;
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedUsers = responseData.map(user => {
                    user.id = user._id;
                    return user;
                });
                return usersAdapter.setAll(initialState, loadedUsers);
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'User', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'User', id }))
                    ];
                } else return [{ type: 'User', id: 'LIST' }];
            }
        }),

        addNewUser: builder.mutation({
            query: initialUserData => ({
                url: '/users',
                method: 'POST',
                body: {
                    ...initialUserData,
                }
            }),
            invalidatesTags: [{ type: 'User', id: 'LIST' }]
        }),

        updateUser: builder.mutation({
            query: initialUserData => ({
                url: `/users/${initialUserData.id}`, // Add user ID to the URL
                method: 'PATCH',
                body: {
                    ...initialUserData
                }
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }] // Use arg here
        }),

        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`, // Use ID in the URL
                method: 'DELETE',
                // Usually no body is needed for DELETE
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.id }] // Use arg here
        })
    })
})

export const {
    useGetUsersQuery,
    useAddNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = usersApiSlice;


// returns the query result object

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

// creates memoized selector
const  selectUsersData = createSelector(
    selectUsersResult,
    userResult => userResult.data // normalized state object with ids and entities 
)

//getSelectors creates these selectors and we rename them with aliases using destructuring

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds
    // pass in a selector that returns the users  slice of state
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState);