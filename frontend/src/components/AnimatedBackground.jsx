function AnimatedBackground() {
  return (
    <>
      {/* Purple Blob */}
      <div className="fixed -top-32 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Blue Blob */}
      <div className="fixed top-1/3 -right-32 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Pink Blob */}
      <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Small Floating Circles */}
      <div className="fixed top-24 left-20 w-4 h-4 rounded-full bg-cyan-400 animate-bounce" />
      <div className="fixed bottom-20 right-40 w-3 h-3 rounded-full bg-purple-400 animate-ping" />
      <div className="fixed top-1/2 left-1/2 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
    </>
  );
}

export default AnimatedBackground;