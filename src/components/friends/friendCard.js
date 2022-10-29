import React from "react";
import {
  DotsVerticalIcon,
  VideoCameraIcon,
  UserRemoveIcon,
} from "@heroicons/react/solid";
import { Menu } from "@headlessui/react";

const FriendCard = ({ user, onDelete, onCall }) => {
  return (
    <div className="mb-2 rounded-md bg-white border border-gray-100">
      <div className="h-16 px-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src={user.avatar}
            className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
            alt=""
          />
          <p className="text-lg truncate">{user.email}</p>
        </div>
        <Menu as={"div"} className="relative">
          <Menu.Button className="flex items-center z-0">
            <DotsVerticalIcon className="h-5 w-5 text-gray-600" />
          </Menu.Button>
          <Menu.Items className="z-10 absolute -left-28 top-12 p-2 w-36 bg-white divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 space-y-2 divide-y">
            <Menu.Item>
              <button
                onClick={() => onCall(user.email)}
                className="flex items-center w-full space-x-2 bg-green-50 rounded-lg p-2 "
              >
                <div className="bg-green-200 p-2 rounded-lg">
                  <VideoCameraIcon className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-green-500">Video-Call</span>
              </button>
            </Menu.Item>
            <Menu.Item>
              <button
                onClick={() => onDelete(user._id)}
                className="flex items-center w-full space-x-2 bg-red-50 rounded-lg p-2 "
              >
                <div className="bg-red-200 p-2 rounded-lg">
                  <UserRemoveIcon className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-red-500 ">Remove</span>
              </button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

// const FriendCard = ({ user, onDelete, onCall }) => {
//   return (
//     <div className="mb-4 rounded-md bg-white border border-gray-100">
//       <Disclosure>
//         <div className="h-16 px-3 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img
//               src={user.avatar}
//               className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
//               alt=""
//             />
//             <p className="text-lg truncate">{user.email}</p>
//           </div>
//           <Disclosure.Button className="w-5 h-5">
//             <DotsVerticalIcon className="w-5 h-5 text-gray-500" />
//           </Disclosure.Button>
//         </div>
//         <Disclosure.Panel className="p-2 flex items-center justify-between space-x-2 text-gray-500 ">
//           <button
//             onClick={() => onDelete(user._id)}
//             className="flex items-center w-full space-x-2 bg-red-50 rounded-lg p-2"
//           >
//             <div className="bg-red-200 p-2 rounded-lg">
//               <UserRemoveIcon className="h-4 w-4 text-red-600" />
//             </div>
//             <span className="text-red-500 ">Remove</span>
//           </button>
//           <button
//             onClick={() => onCall(user.email)}
//             className="flex items-center w-full space-x-2 bg-green-50 rounded-lg p-2"
//           >
//             <div className="bg-green-200 p-2 rounded-lg">
//               <VideoCameraIcon className="h-4 w-4 text-green-600" />
//             </div>
//             <span className="text-green-500">Video-Call</span>
//           </button>
//         </Disclosure.Panel>
//       </Disclosure>
//     </div>
//   );
// };

export default FriendCard;
