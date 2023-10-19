import Image from "next/image";

export function LoginSidebarImage() {
  return (
    <div className="hidden lg:block lg:w-[480px] bg-black">
      <img
        src={"/assets/Rectangle5.png"}
        alt="Hands on"
        className="object-cover h-full w-full"
      />
    </div>
  );
}
