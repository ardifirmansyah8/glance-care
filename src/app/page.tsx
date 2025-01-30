"use client";

import { Award, Trophy } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMovies } from "@/hooks/useMovies";
import { COLORS } from "@/constants";
import Link from "next/link";

export default function HomePage() {
  const { raw } = useMovies();

  const getOscarStats = useMemo(() => {
    const stats: { [year: string]: { won: number; nominated: number } } = {};

    raw.forEach((movie) => {
      const year = movie.year;

      if (!stats[year]) {
        stats[year] = {
          won: 0,
          nominated: 0,
        };
      }

      stats[year].won += movie.oscarWins;
      stats[year].nominated += movie.oscarNominations;
    });

    return Object.keys(stats).map((key: string) => {
      return {
        year: key,
        won: stats[key].won,
        nominated: stats[key].nominated,
      };
    });
  }, [raw]);

  const getTopPerformer = useMemo(() => {
    return raw.sort((a, b) => b.oscarWins - a.oscarWins);
  }, [raw]);

  const getWinnerByCountry = useMemo(() => {
    const stats: { [country: string]: { won: number } } = {};

    raw.forEach((movie) => {
      const country = movie.country;

      if (!stats[country]) {
        stats[country] = {
          won: 0,
        };
      }

      stats[country].won += movie.oscarWins;
    });

    return Object.keys(stats).map((key: string) => {
      return {
        name: key,
        value: stats[key].won,
      };
    });
  }, [raw]);

  const getWinnerByLanguage = useMemo(() => {
    const stats: { [language: string]: { won: number } } = {};

    raw.forEach((movie) => {
      const language = movie.language;

      if (!stats[language]) {
        stats[language] = {
          won: 0,
        };
      }

      stats[language].won += movie.oscarWins;
    });

    return Object.keys(stats).map((key: string) => {
      return {
        name: key,
        value: stats[key].won,
      };
    });
  }, [raw]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <Label className="md:text-lg font-bold">
              Oscar Nominations and Wins by Year
            </Label>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={getOscarStats}
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="nominated" stroke="#8884d8" />
                <Line type="monotone" dataKey="won" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <Label className="md:text-lg font-bold">Hall of Fames</Label>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
            {getTopPerformer.slice(0, 3).map((movie) => (
              <Card key={movie.id} className="flex flex-col">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  width={0}
                  height={0}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardContent className="flex-1 p-4 flex flex-col">
                  <Label className="flex-1 text-lg font-bold mb-2 hover:text-blue-500">
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                  </Label>
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <Label className="md:text-lg font-bold">Top Oscar Winners</Label>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Movie</TableHead>
                <TableHead className="text-center font-bold">Win</TableHead>
                <TableHead className="text-center font-bold">
                  Nomination
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {getTopPerformer.map((movie) => (
                <TableRow key={movie.id}>
                  <TableCell>
                    <Link
                      className="hover:text-blue-500"
                      href={`/movies/${movie.id}`}
                    >
                      {movie.title}
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    {movie.oscarWins}
                  </TableCell>
                  <TableCell className="text-center">
                    {movie.oscarNominations}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <Label className="md:text-lg font-bold">
              Top Oscar By Country and Language
            </Label>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:flex-1 w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getWinnerByCountry}
                    dataKey="value"
                    label
                    stroke={getWinnerByCountry.length > 1 ? "#fff" : "none"}
                  >
                    {getWinnerByCountry.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="md:flex-1 w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={getWinnerByLanguage}
                    dataKey="value"
                    label
                    stroke={getWinnerByLanguage.length > 1 ? "#fff" : "none"}
                  >
                    {getWinnerByLanguage.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[COLORS.length - 1 - index]}
                      />
                    ))}
                  </Pie>
                  <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
