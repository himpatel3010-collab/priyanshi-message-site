
export default function PriyanshiMiniWebsite() {
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
          <p className="text-sm tracking-[0.3em] uppercase text-pink-500 mb-3">A Special gesture from my side</p>
          <h1 className="text-6xl font-bold text-pink-600 mb-4">For Priyanshi 💙</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-8">
            A small message for you.
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
            <h2 className="text-3xl font-semibold text-pink-600 mb-6">A Letter From My Heart</h2>
            <div className="space-y-4 text-lg leading-8 text-gray-700">
              <p>Dear Priyanshi,</p>
              <p>
                I hope you are doing well. There is something that I have been waiting to share with you for quite some time.
                I wanted to tell you this during our internal exam, but you were busy with company work and meetings.
              </p>
              <p>
                Over the days, I have come to admire you more than I can explain. Your smile, your nature,
                the way you carry yourself and the non-argumnetal answer is what make you different from others that leave a special impression on me.
              </p>
              <p>
                Whenever I talk to you, my day feels better.
              </p>
              <p>
                To be honest, I do not know whether this is a feeling or just an attraction,
                but I truly wanted to be honest with you.
              </p>
              <p>
                I want you to know what i fell.
                i will always respect you and value our friendship.
              </p>
              <p className="text-right font-semibold text-pink-600 pt-4">
                — From someone who wants to talk with you.
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
            I hope this message won't impact our friendship.
            This is not a proposal message, I just wanted to honestly convey what I feel.
          </p>

          <button className="mt-8 px-6 py-3 rounded-xl bg-pink-500 text-white hover:scale-105 transition-all">
            According to you
          </button>

          <p className="text-6xl mt-8">I know I am stupid 🥹💙✨</p>
        </div>
      </section>
    </div>
  )
}
