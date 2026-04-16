
export default function CollegeMiniWebsite() {
  const revealSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.classList.remove('hidden')

    const music = document.getElementById('bg-music') 
    if (music) music.play().catch(() => {})
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      <audio
        id="bg-music"
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 text-5xl animate-bounce">💖</div>
        <div className="absolute top-24 right-16 text-4xl animate-pulse">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce">💗</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse">💜</div>
      </div>

      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl w-full bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-pink-200 p-10 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-pink-500 mb-3">A warm welcome to our college dairies</p>
          <h1 className="text-6xl font-bold text-pink-600 mb-4">Here we share a good memory💙</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            A small message for you guys.
          </p>

          <button
            onClick={() => revealSection('message-section')}
            className="mt-8 px-8 py-4 rounded-2xl bg-pink-500 text-white text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-300"
          >
            Click here and scroll down 
          </button>
        </div>
      </section>

      <section id="message-section" className="hidden px-6 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white/90 backdrop-blur-lg rounded-[2rem] shadow-2xl p-10 border border-rose-200">
            <h2 className="text-3xl font-semibold text-pink-600 mb-6">This is the hardest good bye</h2>
            <div className="space-y-4 text-lg leading-8 text-gray-700">
              <p>Dear All,</p>
              <p>
                I hope you all are doing well. 
              </p>
              <p>
                There is something that I have been waiting to share with you for quite some time.
              </p>
              <p>
                Over the days, I have come to admire you more than I can explain.
              </p>
              <p>
                Whenever I talk with you guys, my day feels better and all my stress go off.
              </p>
              <p>
                Its was a journey full of enjoyable.
              </p>
              <p>
                i will always respect you guys and value our friendship.
              </p>
              <p className="text-right font-semibold text-pink-600 pt-4">
                — From someone who always want to spend a day with you guys.
              </p>
            </div>

            <button
              onClick={() => revealSection('final-section')}
              className="mt-8 px-6 py-3 rounded-xl bg-purple-500 text-white hover:scale-105 transition-all"
            >
              One last things 💌
            </button>
          </div>
        </div>
      </section>

      <section id="final-section" className="hidden px-6 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-lg rounded-[2rem] shadow-2xl p-10 border border-pink-200 text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">No Matter What...</h2>
          <p className="text-lg text-gray-700 leading-8 max-w-2xl mx-auto">
            Our friendship means a lot to me and will always remain special.
            All the fun activities or trip that we have made that will remain memorable for me.
          </p>
          <button className="mt-8 px-6 py-3 rounded-xl bg-pink-500 text-white hover:scale-105 transition-all">
            According to you
          </button>

          <p className="text-4xl mt-6"> Good Byee 🥹💙✨</p>
        </div>
      </section>
    </div>
  )
}
