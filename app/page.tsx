import DeleteButton from "@/components/DeleteButton";
import axios from "axios";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const getTopics = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/topic");
    if (res.status !== 200) throw new Error("Failed to fetch topics");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

async function Page() {
  const topics = await getTopics();

  return (
    <div className="my-6 flex flex-col gap-5">
      {topics.map((topic: any) => (
        <div
          key={topic._id}
          className="border-2 border-white/10 flex items-center justify-between gap-6 p-5"
        >
          <div>
            <h2 className="text-3xl font-bold text-neutral mb-1">
              {topic.title}
            </h2>
            <p>{topic.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <DeleteButton id={topic._id} />
            <Link
              href={`/edit-topic/${topic._id}`}
              className="btn btn-secondary btn-circle btn-outline text-xl"
            >
              <HiOutlinePencilSquare />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
