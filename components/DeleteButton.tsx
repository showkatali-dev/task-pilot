"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const confirmed = confirm("Are you confirm to delete this?");
      if (confirmed) {
        const res = await axios.delete(`http://localhost:3000/api/topic/${id}`);
        if (res.status !== 200) throw new Error("Failed to delete");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="btn btn-secondary btn-circle btn-outline text-xl"
    >
      <MdDeleteForever />
    </button>
  );
}

export default DeleteButton;
