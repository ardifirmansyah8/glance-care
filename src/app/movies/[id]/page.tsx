"use client";

import {
  ArrowLeft,
  Award,
  Building2,
  Clock,
  DollarSign,
  Globe,
  PlayCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useMovies } from "@/hooks/useMovies";

import type { Movie } from "@/apis/moviesApi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function MovieDetail() {
  const params = useParams<{ id: string }>();
  const { getMovieDetail } = useMovies();

  const [detail, setDetail] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    setDetail(getMovieDetail(params.id));
  }, [getMovieDetail, params.id]);

  return (
    <>
      <Link href={"/movies"} className="flex items-center gap-2 mb-4">
        <ArrowLeft className="h-8 w-8" />
        <Label className="text-xl">Back</Label>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-shrink-0">
          <Image
            src={detail?.poster || "https://fakeimg.pl/220x310/ffff00"}
            alt={detail?.title || ""}
            width={0}
            height={0}
            className="rounded-lg shadow-lg w-56"
          />
        </div>

        <div className="flex-grow flex flex-col gap-2">
          <Label className="text-4xl font-bold">
            {detail?.title}{" "}
            <Label className="text-2xl text-gray-500">({detail?.year})</Label>
          </Label>

          <div className="flex flex-wrap gap-2 mb-2">
            {detail?.genre.map((genre) => (
              <Badge key={genre}>{genre}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-500" />
              <Label className="font-bold">{detail?.rating}/10</Label>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <Label>
                {detail?.runtime && (
                  <Label>
                    {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
                  </Label>
                )}
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" />
              <Label>{detail?.awards}</Label>
            </div>
          </div>

          <Label className="text-lg">{detail?.plot}</Label>

          <Button variant="destructive" className="mt-4 w-fit">
            <PlayCircle />
            Watch Trailer
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col gap-4">
            <Label className="text-lg font-bold">Cast & Crew</Label>
            <div className="space-y-4">
              <div>
                <Label className="font-semibold text-gray-500">Director</Label>
                <Label>{detail?.director}</Label>
              </div>
              <div>
                <Label className="font-semibold text-gray-500">Starring</Label>
                <Label>{detail?.actors.join(", ")}</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col gap-4">
            <Label className="text-lg font-bold">Details</Label>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <Globe className="text-gray-500" />
                <Label>
                  <strong>Country:</strong> {detail?.country}
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-gray-500" />
                <Label>
                  <strong>Language:</strong> {detail?.language}
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="text-gray-500" />
                <Label>
                  <strong>Box Office:</strong> {detail?.boxOffice}
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="text-gray-500" />
                <Label>
                  <strong>Production:</strong> {detail?.production}
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-gray-500" />
                <Label>
                  <strong>Website:</strong>{" "}
                  <a
                    className="text-blue-500"
                    href={detail?.website}
                    target="_blank"
                  >
                    {detail?.website}
                  </a>
                </Label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
