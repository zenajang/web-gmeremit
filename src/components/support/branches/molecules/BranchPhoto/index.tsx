"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";

interface BranchPhotoProps {
  name: string;
  image?: string;
}

const BranchPhoto = ({ name, image }: BranchPhotoProps) => {
  return (
    <div className="hidden sm:block rounded-2xl overflow-hidden">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={600}
          height={176}
          priority
          className="w-full h-40 lg:h-64 object-cover"
        />
      ) : (
        <div
          className="w-full h-40 lg:h-64 flex flex-col items-center justify-center gap-3 bg-gray-100"
          role="img"
          aria-label={`${name} — No image available`}
        >
          <HiLocationMarker className="w-16 h-16 lg:w-24 lg:h-24 text-primary/60" />
          <p className="text-xs lg:text-sm font-semibold text-gray-400 tracking-[0.2em] uppercase">
            No Image
          </p>
        </div>
      )}
    </div>
  );
};

export default BranchPhoto;
