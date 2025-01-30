"use client";

import { Clapperboard, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useMovies } from "@/hooks/useMovies";

export default function MoviesPage() {
  const { raw } = useMovies();

  return (
    <>
      <div className="flex items-center gap-2 px-2 md:px-0">
        <Clapperboard className="h-5 w-5" />
        <Label className="text-xl font-bold">List Movies</Label>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 px-2 md:px-0">
        {raw.map((movie) => (
          <Card key={movie.id} className="flex flex-col">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={0}
              height={0}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardContent className="flex-1 p-4 flex flex-col">
              <Link
                href={`/movies/${movie.id}`}
                className="flex-1 text-lg font-bold mb-2 hover:text-blue-500"
              >
                {movie.title}
              </Link>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="text-yellow-500 w-5 h-5" />
                  <Label className="font-semibold">
                    {movie.oscarWins} Oscars
                  </Label>
                </div>
                <Label className="text-gray-600">
                  {movie.year} • Directed by {movie.director}
                </Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
