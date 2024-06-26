import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";

const FeedCard: React.FC = () => {
  return (
    <div className="p-4 border border-r-0 border-l-0 border-b-0 border-gray-600  hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12  gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/88510930?v=4"
            alt="user"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Manish </h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. At culpa
            tenetur aliquid alias corporis maiores. Sequi quibusdam, quos
            recusandae voluptas neque cum culpa, unde pariatur vitae in nisi
            esse modi tempore ex!
          </p>
          <div className="flex justify-between text-xl items-center mt-4 w-[90%]">
            <div>
                <BiMessageRounded/>
            </div>
            <div>
                <FaRetweet/>
            </div>
            <div>
                <AiOutlineHeart/>
            </div>
            <div>
                <BiUpload/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
