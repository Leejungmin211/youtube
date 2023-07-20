import { useEffect } from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

export default function Search() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <form className="w-full flex justify-center" onSubmit={handelSubmit}>
      <input
        className="w-7/12 p-2 outline-none bg-black text-gray-50"
        type="text"
        placeholder="Search..."
        value={text}
        onChange={handleChange}
      />
      <button className="bg-zinc-600 px-4">
        <BsSearch />
      </button>
    </form>
  );
}
