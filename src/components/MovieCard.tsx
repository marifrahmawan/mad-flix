import { IMovies } from "@/lib/types/movies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  data: IMovies;
  href: string;
}

const MovieCard = (props: IProps) => {
  const { data, href } = props;

  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={href}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="aspect-[2/3] object-contain"
          alt={data.title}
          width={500}
          height={600}
        />
      </Link>
      <Link href={href} className="text-center">
        {data.title}
      </Link>
    </div>
  );
};

export default MovieCard;
