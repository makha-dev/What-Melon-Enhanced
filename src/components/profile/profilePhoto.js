import React from "react";
import Input from "../common/input";
import Label from "../common/label";

const ProfilePhoto = ({ innerRef, profileStatus, avatar, onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <Label className="" htmlFor="avatar">
        <img
          src={avatar}
          className="w-32 h-32 object-cover bg-white border-2 border-gray-200 rounded-full"
        />
        <p className="text-center text-sky-500">{profileStatus}</p>
      </Label>
      <Input
        id="avatar"
        type="file"
        accept="image/*"
        className="hidden"
        innerRef={innerRef}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default ProfilePhoto;
