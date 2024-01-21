import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload, MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ data, reference}) => {
  return (
    <motion.div drag dragConstraints= {reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 100, bounceDamping: 100 }} className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-600 text-white px-8 py-10 overflow-hidden">
      <FaFileAlt />
      <p className="mt-5 font-semibold text-sm leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex justify-between px-8 py-3 items-center mb-3">
          <h5>{data.filesize}</h5>
          <span className="rounded-full bg-zinc-200 w-6 h-6 flex justify-center items-center">
            {data.close ? (
              <MdOutlineClose color="#000" size=".8rem" />
            ) : (
              <MdOutlineFileDownload color="#000" size=".8rem" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full flex justify-center items-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-4`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
