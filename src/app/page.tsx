import { UserAuthForm } from "@/components/templates/Auth/UserAuthFrom";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] lg:px-16 lg:py-8 gap-x-8">
      <div className="hidden lg:flex w-[50%] items-center justify-center rounded bg-slate-100">
        KABUTOのバナーが入ります
      </div>
      <UserAuthForm className="w-[50%] flex flex-col justify-center" />
    </main>
  );
}
