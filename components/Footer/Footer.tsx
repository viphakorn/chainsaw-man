import ExportedImage from "next-image-export-optimizer";

export default function Footer() {
  return (
    <footer className=" bg-slate-900">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 p-8">
        <ExportedImage
          src="/images/logo.png"
          alt="Chainsaw Man Logo"
          width={200}
          height={25}
        />
        <p className="text-center text-white">@Chainsaw Man Wiki 2023.</p>
      </div>
    </footer>
  );
}
