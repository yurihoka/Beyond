import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();

  const onClick = () => {
    localStorage.clear();
    router.push("/signin");
  };

  return (
    <button
      className="bg-neutral-300 p-1 rounded-md text-gray-500"
      onClick={onClick}
    >
      サインアウト
    </button>
  );
};

export default SignoutButton;
