"use client";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-900"></div>
    </div>
  );
}
