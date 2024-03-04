export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <>
      <div className="fixed top-0 left-0 rtl:right-0 bg-white w-full h-full z-[9999] flex items-center justify-center">
        <div className="relative text-center">
          <div className="h-[80px] w-[80px] rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 rtl:right-0 h-[80px] w-[80px] rounded-full border-t-8 border-b-8 border-primary-color animate-spin"></div>
          <h6 className="text-[16px] mt-[10px]">Plama</h6>
        </div>
      </div>
    </>
  );
}
