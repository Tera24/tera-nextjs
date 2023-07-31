import React from 'react';

const SignUpForm = () => {
  return (
    <div className="form-box max-w-500 bg-gray rounded-lg text-black flex justify-center items-center">
      <form className="form flex flex-col gap-4 p-8 text-center"
        action={'https://getform.io/f/8ffed39c-4f5d-4129-aa65-a3ad3187938b'}
        method="POST"
        encType="multipart/form-data">

        <span className="title font-bold text-1.4rem text-white">Contact Me</span>
        <div className="form-container rounded-lg bg-white my-1">
          <input
            type="name"
            name="name"
            className="rounded-lg input bg-white border-2 outline-2 h-12 w-full border-b border-gray-300 text-0.9rem px-4"
            placeholder="Name"
          />
        </div>
        <div className="form-container rounded-lg bg-white my-1">
          <input
            type="email"
            name="email"
            className="rounded-lg input bg-white border-2 outline-2 h-12 w-full border-b border-gray-300 text-0.9rem px-4"
            placeholder="Email"
          />
        </div>
        <div className="form-container rounded-lg bg-white my-1">
          <input
            type="subject"
            name="subject"
            className="rounded-lg input bg-white border-2 outline-2 h-40 w-full border-b border-gray-300 text-0.9rem px-4 py-2"
            placeholder="Subject"
          />
        </div>
        <button type='submit' className="bg-gray-400 text-black border-0 rounded-full py-3 px-6 text-0.9rem font-semibold cursor-pointer transition duration-300 hover:bg-gray-300">
          Send
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;