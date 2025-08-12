import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/features/users/usersApiSlice";
import { useLogoutMutation } from "../../redux/features/auth/authApiSlice";
const Home = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetUsersQuery();
  const [logout, { isError, error }] = useLogoutMutation();

  if (isLoading) return <p>Loading...</p>;

  const handelLogout = async () => {
    try {
      await logout();
      Cookies.remove("accessToken");
      navigate("/auth/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={handelLogout}>Logout</button>
      <h1>Users</h1>
      {data?.map((user) => (
        <div key={user._id}>{user.username}</div>
      ))}
    </div>
  );
};

export default Home;
