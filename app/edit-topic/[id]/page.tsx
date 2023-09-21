import EditTopicForm from "@/components/EditTopicForm";
import axios from "axios";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

const getTopicByID = async (id: string) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/topic/${id}`);
    if (res.status !== 200) throw new Error("Failed to fetch");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

async function Page({ params }: { params: { id: string } }) {
  const topic = await getTopicByID(params.id);

  return (
    <div className="mt-4 mb-8">
      <Link
        href="/"
        className="link link-secondary no-underline font-bold flex items-center mb-8"
      >
        <HiArrowLeft className="mr-2" />
        Back to Home
      </Link>
      <EditTopicForm topic={topic} />
    </div>
  );
}

export default Page;
