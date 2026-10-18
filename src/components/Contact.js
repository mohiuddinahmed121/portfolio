import { profile } from "@/data/portfolio";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

const inputClass =
   "w-full rounded-lg border border-white/15 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 outline-none focus:border-orange-500";

export default function Contact() {
   return (
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
         <p className="text-sm uppercase tracking-widest text-orange-500">Get in touch</p>
         <h2 className="mt-2 text-3xl font-bold text-white">Contact</h2>

         <div className="mt-10 grid gap-10 md:grid-cols-3">
            <form
               action={`https://formspree.io/f/${formId}`}
               method="POST"
               className="space-y-4 md:col-span-2"
            >
               <div className="grid gap-4 sm:grid-cols-2">
                  <input
                     className={inputClass}
                     type="text"
                     name="name"
                     placeholder="Your Name"
                     required
                  />
                  <input
                     className={inputClass}
                     type="email"
                     name="email"
                     placeholder="Your Email"
                     required
                  />
               </div>
               <input className={inputClass} type="text" name="subject" placeholder="Subject" />
               <textarea
                  className={inputClass}
                  name="message"
                  rows={6}
                  placeholder="Message"
                  required
               />
               <button
                  type="submit"
                  className="rounded-full bg-orange-500 px-8 py-3 font-medium text-white transition hover:bg-orange-600"
               >
                  Send Message
               </button>
            </form>

            <ul className="space-y-5 text-sm">
               <li>
                  <p className="text-slate-500">Location</p>
                  <p className="text-slate-200">{profile.location}</p>
               </li>
               <li>
                  <p className="text-slate-500">Phone</p>
                  <a className="text-slate-200 hover:text-orange-400" href={`tel:${profile.phone}`}>
                     {profile.phone}
                  </a>
               </li>
               <li>
                  <p className="text-slate-500">Email</p>
                  <a
                     className="break-all text-slate-200 hover:text-orange-400"
                     href={`mailto:${profile.email}`}
                  >
                     {profile.email}
                  </a>
               </li>
               <li>
                  <p className="text-slate-500">GitHub</p>
                  <a
                     className="text-slate-200 hover:text-orange-400"
                     href={profile.github}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     mohiuddinahmed121
                  </a>
               </li>
            </ul>
         </div>
      </section>
   );
}
