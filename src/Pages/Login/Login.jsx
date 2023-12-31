import { Link, useLocation, useNavigate } from "react-router-dom";
import image from '../../assets/Developer activity-bro.png'
import useAuth from "../../Hooks/useAuth";
import SocileLogin from "../../Component/SocileLogin/SocileLogin";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location, "10");

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then(() => {
        console.log(location.state);
        navigate(location?.state ? location.state : '/')
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  return (
    <div className="container mx-auto px-5 my-7 flex items-center justify-center lg:flex-row flex-col gap-8">
      {/* <div className="">
            <h1 className="text-5xl font-semibold ">
              Hey there! <br /> Welcome back
            </h1>
            <img
              className="lg:h-[400px]"
              src={image}
              alt=""
            />
          </div> */}
      <div className="flex-1 max-w-sm bg-[#f0eded] px-7 py-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Sign In</h1>
        <form onSubmit={handleLogin}>
          <label className="font-bold " htmlFor="email">
            Your Email
          </label>{" "}
          <br />
          <input
            type="email"
            required
            name="email"
            className="py-2 px-3 mb-3 mt-1 w-full rounded-sm"
            placeholder="Enter email here..."
          />
          <label className="font-bold " htmlFor="email">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            required
            className="py-2 px-3 mt-1 w-full rounded-sm"
            placeholder="Enter Password here..."
          />
          <input
            type="submit"
            value="Sign In"
            className="w-full py-3 rounded btn btn-secondary text-lg"
          />
        </form>
        <p className="my-2 text-center font-medium">or</p>
        <SocileLogin />
        <p className="font-bold mt-1">
          Dont have any Account?
          <Link to="/register" className="text-red-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;