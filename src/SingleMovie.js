import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src="{movie.Poster}" alt="" />
        </figure>
      </div>
    </section>
  );
};

export default SingleMovie;
