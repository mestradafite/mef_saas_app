import { SignIn } from '@clerk/nextjs';

const page = () => {
  return (
    <main className="flex items-center justify-center">
      <SignIn></SignIn>
    </main>
  );
};

export default page;
