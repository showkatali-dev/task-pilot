"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function EditTopicForm({
  topic,
}: {
  topic: { _id: string; title: string; description: string };
}) {
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const result = await axios.put(
      `http://localhost:3000/api/topic/${topic._id}`,
      {
        title,
        description,
      }
    );
    if (result.status === 200) {
      form.reset();
      alert(result.data.message);
      router.push("/");
      router.refresh();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
      <input
        type="text"
        name="title"
        className="input input-bordered focus:border-secondary focus:outline-none"
        defaultValue={topic.title}
        placeholder="Topic Title"
      />
      <textarea
        name="description"
        className="input input-bordered py-2 min-h-16 focus:border-secondary focus:outline-none"
        defaultValue={topic.description}
        placeholder="Topic Description"
      />
      <button type="submit" className="btn btn-secondary">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicForm;
