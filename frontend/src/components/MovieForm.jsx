import { useState } from "react";

export default function MovieForm({ initialData = {}, onSubmit }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [year, setYear] = useState(initialData.year || "");
  const [image, setImage] = useState(null);

  const submit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("title", title);
    fd.append("year", year);
    if (image) fd.append("image", image);

    onSubmit(fd);
  };

  return (
    <form
      onSubmit={submit}
      className="min-h-screen bg-[#0e3b44] flex items-center justify-center gap-12 text-white"
    >
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <div className="flex flex-col gap-3">
        <input
          placeholder="Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Year"
          className="input"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <button className="bg-green-500 py-2 rounded">Save</button>
      </div>
    </form>
  );
}
