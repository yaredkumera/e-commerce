import SignupForm from "./SignupForm";
import NavLinks from "../common/NavLinks";

function MainSignUP() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary flex flex-col">
      <NavLinks bool={true} />
      <main className="flex-1 w-full">
        <SignupForm />
      </main>
    </div>
  );
}

export default MainSignUP;