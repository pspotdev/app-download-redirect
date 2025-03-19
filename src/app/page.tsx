"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AppRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=io.pspot.user';
    } else if (/iPad|iPhone|iPod/.test(userAgent) ) {
      window.location.href = 'https://apps.apple.com/app/id1590756872';
    } else {
      router.push('/unsupported');
    }
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-xl font-semibold">Redirecting to the appropriate store...</h1>
    </div>
  );
};

export default AppRedirect;
