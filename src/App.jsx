import groupPhoto from './1776324411996.jpg'
import lastPhoto1 from './1776355815139.jpg'
import lastPhoto2 from './1776355943274.jpg'
import lastPhoto3 from './1776356112702.jpg' 
import lastPhoto4 from './1776356134880.jpg'
import lastPhoto5 from './1776356055286.jpg'
import lastPhoto6 from './1776358827101.jpg'
import lastPhoto7 from './1776425223804.jpg'
import lastPhoto8 from './1776356217059.jpg'
import lastPhoto9 from './1776340218765.jpg'
import lastPhoto10 from './1776340037592.jpg'
import lastPhoto11 from './1776400483619.jpg'
import lastPhoto12 from './newgrp.jpeg'
import lastPhoto13 from './chocklate.jpeg'
import lastPhoto14 from './concert.jpeg'
import lastPhoto15 from './blackday.jpeg'
import lastPhoto16 from './3idots.jpeg'
import lastPhoto17 from './1777134260880.jpg'
import lastvideo1 from './Snapchat-1070160169.mp4'
import lastvideo2 from './Snapchat-1454945637.mp4'
import lastvideo3 from './Snapchat-814612826.mp4'
import lastvideo4 from './Snapchat-846536604.mp4'
import lastvideo5 from './Snapchat-865556087.mp4'
import lastvideo6 from './VID-20260309-WA0013.mp4'
import lastvideo7 from './Snapchat-1655678465.mp4'
import lastvideo8 from './Snapchat-1726119615.mp4'

export default function CollegeMiniWebsite() {
  const revealSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.classList.remove('hidden')

    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative overflow-hidden">
      

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
          
          <img 
            src={groupPhoto} 
            alt="Our college memory" 
            className="w-full max-w-2xl mx-auto mt-8 rounded-3xl shadow-2xl border border-pink-200" 
            />

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
          <p className="mt-8 px-6 py-3 rounded-xl bg-pink-500 text-white hover:scale-105 transition-all">
            MBA journey Ends here..
          </p> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div>
          <img
            src={lastPhoto1}
            alt="College memory 1"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The day when we all go out to watch the movie for the first time together and it was the beginning of our friendship.
          </p>
        </div>
        <div>
          <img
            src={lastPhoto2}
            alt="College memory 2"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
           />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The night when concert with the friend became a club party.
          </p>
          </div>

        <div>
          <img
            src={lastPhoto3}
            alt="College memory 3"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The day when vasu though to became an face of india just like the one who is face of charusat.
          </p>
        </div> 

        <div>
          <img
            src={lastPhoto4}
            alt="College memory 4"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            Satvik thought this might br the best carrer option with low amount of investment and high return values.
          </p>
        </div> 

        <div>
          <img
            src={lastPhoto5}
            alt="College memory 5"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            Jeel receive his life's best birthday gift that he like the most. #Stingggggg.
          </p>
        </div> 

        <div>
          <img
            src={lastPhoto6}
            alt="College memory 6"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            It was not just an event. it was a activity that helps us to turn our friendship into family. it was the most happiest 4 days just like an trip.
          </p>
        </div>

         <div>
          <img
            src={lastPhoto7}
            alt="College memory 7"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            A event that helps us to make new friend like a family.
          </p>
        </div>
        
      <div>
          <img
            src={lastPhoto8}
            alt="College memory 8"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            A day when preet grandfather tech us how real wealth look like.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto9}
            alt="College memory 9"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The day when pizza meant to tease tithi instead of eating that.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto10}
            alt="College memory 10"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            Trip to sarangpur was a fun, that masti in car, the vlog was the best parth of that trip that will remember for the long time.
          </p>
        </div>

         <div>
          <img
            src={lastPhoto11}
            alt="College memory 11"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            Trip to valsad and daman was fabulous specially when vasu said aeee GJ 23 at that moment everyone the way vasu react.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto12}
            alt="College memory 12"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            First college event of us together.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto13}
            alt="College memory 13"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            A time when ketav use to do clean shave🤦‍♂️.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto14}
            alt="College memory 14"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The only concert when all of us where there.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto15}
            alt="College memory 15"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The day when boys became men in black for the day.
          </p>
        </div>

        <div>
          <img
            src={lastPhoto16}
            alt="College memory 16"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            The End of the chapter. all assignments were completed just before the presentation. college life was like 3 idoits but here i found many idiots in my grp and i enjoyed my college life with these idoits.
          </p>
        </div>

         <div>
          <img
            src={lastPhoto17}
            alt="College memory 17"
            className="rounded-2xl shadow-xl w-full h-64 object-cover"
          />
          <p className="mt-3 text-gray-700 text-sm leading-6">
            We all hope that even after the post graduation we all stay connect like this only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">

          <video src={lastvideo1} controls className="rounded-1xl shadow-xl w-full object cover" />
        <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "A place where satvik became mummy of mihir." 
        </p>
          <video src={lastvideo2} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "A time when tithi became an influencer." 
        </p>
          <video src={lastvideo3} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "A good college days." 
        </p>
          <video src={lastvideo4} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "A time where one of our player got injured so we decided to visit his farm." 
        </p>
          <video src={lastvideo5} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "The time when ketav need to tell all the day story to someone that he like the most." 
        </p>
          <video src={lastvideo6} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "The only time when satvik was happy just because her jannudi gone with someone else." 
        
        </p>
          <video src={lastvideo7} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "Vidai of tithi from the college😂." 
        </p>
          <video src={lastvideo8} controls className="rounded-2xl shadow-xl w-full" />
          <p className="mt-5 text-center text-xl font-semibold text-pink-550">
            "Samaj party jindaa baad." 
        </p>

      </div>
        
      </div>  

          <p className="text-4xl mt-6"> Good Byee 🥹💙✨</p>
        </div>
      </section>
    </div>
  )
}
