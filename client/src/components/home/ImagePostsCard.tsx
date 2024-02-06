import { PostType } from "@/@types/post"
import { useRouter } from "next/router";
import { IoIosThumbsUp } from "react-icons/io";

interface ImagePostsCardProps {
  post:PostType;
}
const ImagePostsCard = ({post}:ImagePostsCardProps) => {
  const router = useRouter()
  return (
    <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
    <img
      src={post.image}

      alt={"picture"}
      className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
    />
    <h4 className="text-white font-semibold">Prompt</h4>
    <p className="text-gray-400 text-xs my-1">{post.prompt}</p>
    <div className="flex justify-between items-center mt-3 text-white">
      <div className="flex flex-col">
      <p className="text-sm font-semibold"><IoIosThumbsUp size={20}/>
 {post.voteCount}</p>
        <small className="text-xs">posted by {post.user.username}</small>
       
      </div>

      <button
        className="shadow-lg shadow-black text-white text-sm bg-[#e32970]
          hover:bg-[#bd255f] cursor-pointer rounded-full px-1.5 py-1"
        onClick={()=>{}}
      >
        View Profile
      </button>
    </div>
  </div>
  )
}

export default ImagePostsCard