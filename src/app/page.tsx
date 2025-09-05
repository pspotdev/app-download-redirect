"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AppRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      // window.location.href = 'https://play.google.com/store/apps/details?id=com.nishant.blyp';
      window.location.href = 'https://blyp-web-app.parkmate.in/';
    } else if (/iPad|iPhone|iPod/.test(userAgent) ) {
      // window.location.href = 'https://apps.apple.com/in/app/blyp-smart-move/id6745582429';
      window.location.href = 'https://blyp-web-app.parkmate.in/';
    } else {
      window.location.href = 'https://blyp-web-app.parkmate.in/';
      // router.push('/unsupported');
    }
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">Redirecting to the appropriate page...</h1>
    </div>
  );
};

export default AppRedirect;
