import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();

  const onClick = () => {
    if (typeof window === "undefined") {
      localStorage.clear();
      router.push("/signin");
    }
  };

  return (
    <button
      className="p-1 rounded-md text-gray-500 hover:text-gray-700"
      onClick={onClick}
    >
      サインアウト
    </button>
  );
};

export default SignoutButton;
