import { profile } from "@/data/portfolio";

export default function Hero() {
   const initials = profile.name
      .split(" ")
      .map((w) => w[0])
      .join("");

   return (
      <section
         id="home"
         className="mx-auto flex min-h-screen max-w-6xl flex-col-reverse items-center justify-center gap-12 px-5 pt-24 md:flex-row md:justify-between"
      >
         <div className="max-w-xl text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-orange-500">
               Hello! This is {profile.shortName}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
               Full-Stack <span className="text-orange-500">Web</span> Developer
            </h1>
            <p className="mt-5 text-slate-400">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
               <a
                  href="#contact"
                  className="rounded-full bg-orange-500 px-7 py-3 font-medium text-white transition hover:bg-orange-600"
               >
                  Hire me
               </a>
               <a
                  href={profile.cv}
                  download
                  className="rounded-full border border-orange-500 px-7 py-3 font-medium text-orange-400 transition hover:bg-orange-500 hover:text-white"
               >
                  Download CV
               </a>
            </div>
         </div>

         {/* Photo: public/images/profile.jpg thakle oi chhobi dekhabe, na thakle initials */}
         <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-500 to-rose-600 text-7xl font-bold text-white shadow-2xl shadow-orange-500/20 sm:h-80 sm:w-80">
            <span>{initials}</span>
            <div
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: `url(${profile.photo})` }}
               role="img"
               aria-label={profile.name}
            />
         </div>
      </section>
   );
}
