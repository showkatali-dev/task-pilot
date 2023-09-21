"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi2";

function Page() {
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    try {
      const res = await axios.post("http://localhost:3000/api/topic", {
        title,
        description,
      });
      if (res.status !== 201) throw new Error("Failed to add topic");
      alert("New topic is created");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-4 mb-8">
      <Link
        href="/"
        className="link link-secondary no-underline font-bold flex items-center mb-8"
      >
        <HiArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
        <input
          type="text"
          name="title"
          className="input input-bordered focus:border-secondary focus:outline-none"
          placeholder="Topic Title"
        />
        <textarea
          name="description"
          className="input input-bordered py-2 min-h-16 focus:border-secondary focus:outline-none"
          placeholder="Topic Description"
        />
        <button type="submit" className="btn btn-secondary">
          Add Topic
        </button>
      </form>
    </div>
  );
}

export default Page;
