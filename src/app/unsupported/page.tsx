"use client";
import Image from "next/image";
const Unsupported: React.FC = () => (
  <div className="h-screen flex items-center justify-center flex-col space-y-6">
    <h1 className="text-xl font-semibold">Unsupported Device. Please visit from your mobile device.</h1>
    <div className="flex space-x-4">
      {/* Play Store Button */}
      <a title="play_store" href="https://play.google.com/store/apps/details?id=io.pspot.user" target="_blank"  rel="noopener noreferrer">
        <Image src="/images/playstore_icon.png" alt="Get it on Google Play" width={200} height={50} />
      </a>

      {/* App Store Button */}
      <a title="app_store" href="https://apps.apple.com/app/id1590756872" target="_blank" rel="noopener noreferrer">
        <Image src="/images/appstore_icon.png" alt="Download on the App Store" width={200} height={50} />
      </a>
    </div>
  </div>
);

export default Unsupported;
