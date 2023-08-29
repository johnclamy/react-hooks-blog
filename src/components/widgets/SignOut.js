import { FaSignOutAlt } from "react-icons/fa";

export default function SignOut({ onSignOut }) {
  return (
    <button
      onClick={onSignOut}
      className="text-amber-200 hover:text-amber-300 hover:no-underline capitalize"
    >
      <FaSignOutAlt />
    </button>
  );
}
