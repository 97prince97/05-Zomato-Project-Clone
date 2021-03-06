import { Menu } from "@headlessui/react";
import { FaUser } from "react-icons/fa";

function UserDropdown() {
  return (
    <Menu>
      <Menu.Button>
        <span className="border p-1.5 border-gray-300 text-lg text-zomato-300 rounded-full">
          <FaUser />
        </span>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <button>Sign In</button>
        </Menu.Item>
        <Menu.Item>
          <button>Sign Up</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default UserDropdown;
