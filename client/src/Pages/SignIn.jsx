import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleOnChange(e) {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value.trim() }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.password || !formData.email) {
      setError("All fields must be filled.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) {
        setError(data.message);
        return;
      }

      navigate('/');
    } catch (error) {
      setError("An error occurred while signing in. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen mt-20">
        <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-20">
          {/* right */}
          <div className="flex-1">
            <Link to="/" className="font-bold dark:text-white text-4xl">
              Buzz
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg border-black text-white">
                Byte
              </span>
            </Link>
            <div>
              <p className="text-sm sm:xl mt-5">
                Welcome to our blog! By signing up, you'll get access to exclusive content, latest updates, and much more. Join our community of avid readers and stay connected with insightful articles, helpful tips, and exciting announcements.
              </p>
              <p className="mt-5">
                Why Sign In?
              </p>
              <ul className="list-disc pl-5 mt-3 text-sm sm:xl mt-5">
                <li>Access Your Account: Sign in to access your personalized dashboard, saved articles, and preferences.</li>
                <li>Stay Updated: Get instant access to the latest blog posts, updates, and notifications tailored to your interests.</li>
                <li>Engage with the Community: Join discussions, share insights, and connect with other members of our vibrant community.</li>
              </ul>
            </div>
          </div>
          {/* left */}
          <div className="flex flex-col ml-5 mt-3 flex-1 gap-5">
            <div className="text-xl">
              <span className="px-2 py-1  border-black">
                Enter Your Details
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mt-2">
                <Label value="Your Email"/>
                <TextInput
                  type="text"
                  placeholder="Email"
                  id="email"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mt-2">
                <Label value="Your Password"/>
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleOnChange}
                />
              </div>
              <div className="flex gap-2 text-sm mt-5">
                <span>Have an Account?</span>
                <Link to="/signup" className="text-blue-400 hover:text-purple-600">Sign UP</Link>
              </div>
              <div className="mt-5">
                <Button gradientDuoTone="purpleToPink" type="submit" outline disabled={loading}>
                  {loading ? (
                    <Spinner size='sm'>
                      <span>Loading...</span>
                    </Spinner>
                  ) : 'Sign UP'}
                </Button>
              </div>
            </form>
            {error && <Alert className="mt-5" color='failure'>{error}</Alert>}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
