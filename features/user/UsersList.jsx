import User from "./User";
import { useGetUsersQuery } from "./UsersApiSlice"


const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUsersQuery();

  if (isLoading) {
    return <p>Loading...</p>
  } else if (isError) {
    return <p>{error?.data.message}</p>
  } else if (isSuccess) {
    const {ids} = users

    const tableContent = ids?.length
        ? ids.map(userId => <User key={userId} userId={userId}/>)
        : null
        return <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="">Username</th>
              <th className="">Roles</th>
              <th className="">Edit</th>

            </tr>
          </thead>
          <tbody className="">
            {tableContent}
          </tbody>

        </table>
  }
  return null
}

export default UsersList
