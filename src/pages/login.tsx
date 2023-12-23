import LoginModal from "@/components/modals/login-modal";

const Login = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="relative h-full w-full sm:bg-custom flex items-center justify-center">
        <LoginModal />
      </div>
    </div>
  );
};

export default Login;
