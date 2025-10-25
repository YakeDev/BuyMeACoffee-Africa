import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      console.log("Code GitHub reçu :", code);
      // Here you could send the code to your backend to retrieve the token.
      // For now, we're simulating that the user is logged in.
      localStorage.setItem("github_code", code);
      navigate("/dashboard"); // redirects to dashboard
    }
  }, [searchParams, navigate]);

  return <div className="flex justify-center items-center h-screen">GitHub Login...</div>;
};

export default GitHubCallback;