import { GradientButton } from "@/registry/default/gradient-button/gradient-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-center mt-8">Shover</h1>
      <GradientButton fromColor="#ABABAB" toColor="#248080" className="rounded-full mt-4 mx-auto">
        Get Started &rarr;
      </GradientButton>
    </div>
  );
}
