import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, {useState,useEffect} from "react";
import { Form, Link,Navigate,useNavigate } from "react-router-dom";

function SignUp() {
  const [FormData, setFormData] = useState({})
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(null)
  const  navigate=useNavigate();
  
  function handleOnChange(e) {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value.trim() }))
    console.log(FormData);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!FormData.username || !FormData.password || !FormData.email) {
      setError("All Fields Must be Filled");
  
      return; // Prevent further execution if there are errors
    }
    
    try {
      setLoading(true);
      setError(null);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(FormData),
      });
      const data = await res.json();
      if(data.success ===false){
        return setError(data.message)
      }
      setLoading(false)
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  return (
    <>
  
      <div className="min-h-screen mt-20 ">
        <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-20">
          {/* right */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            Buzz
            <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg border-black text-white">
              Byte
            </span>
          </Link>
          <p className="text-sm sm:xl mt-5">
            Welcome to our blog! By signing up, you'll get access to exclusive content, latest updates, and much more. Join our community of avid readers and stay connected with insightful articles, helpful tips, and exciting announcements.
          </p>
          <p className="mt-5">
            Why Sign Up?
          </p>
          <ul className="list-disc pl-5 mt-3 text-sm sm:xl mt-5">
            <li>Exclusive Content: Gain access to premium articles, in-depth analyses, and special features available only to our subscribers.</li>
            <li>Latest Updates: Be the first to know about new blog posts, upcoming events, and important announcements.</li>
            <li>Community Engagement: Join a community of like-minded individuals who share your interests, engage in discussions, and exchange ideas.</li>
          </ul>
        </div>
        {/* left */}
        <div className="flex flex-col ml-5 mt-3 flex-1 gap-5">
        
         <div className="text-xl">
          <span className="px-2 py-1  border-black">
            Enter Your Details
          </span>
         </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mt-2 whitespace-nowrap">
              <Label value="Your Username"/>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleOnChange}
                />
            </div>
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
                id="password"onChange={handleOnChange}
                />
               
            </div>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an Account?</span>
              <Link to="/signin" className="text-blue-400 hover:text-purple-600">Sign In</Link>
            </div>
            <div className="mt-5">
            <Button gradientDuoTone="purpleToPink" type="submit"  outline disabled={Loading}>
                  {
                  Loading?(<>
                    <Spinner size='sm'>
                      <span>Loading...</span>

                    </Spinner>
                    </>
                  ):'SignUp'}
            </Button>
            </div>
          
            
          </form>
        
          {
          Error && (
            <Alert className="mt-5" color='failure'>
              {Error}
            </Alert>
          )
        }
        </div>
        </div>
        
      </div>
    </>
  );
}

export default SignUp;
