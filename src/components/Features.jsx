// Features.jsx
// Section de présentation des fonctionnalités.
//
// Structure (de haut en bas) :
//   1. Grille de 4 photos
//        - desktop : 4 colonnes
//        - tablet  : 4 colonnes (images plus petites)
//        - mobile  : 2 colonnes
//        Assets : image-man-texting.jpg, image-men-in-meeting.jpg,
//                 image-woman-in-videocall.jpg, image-women-videochatting.jpg
//        Les images ont des coins arrondis (rounded-xl ou similaire)
//
//   2. Overline  "BUILT FOR MODERN USE"  → preset-3, couleur cyan-600
//   3. Heading   "Smarter meetings, all in one place"  → preset-2
//   4. Body text                          → preset-4, couleur slate-600
//
// Tout le contenu texte est centré.

function Features() {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-[1fr_1fr_1fr_1fr] md:grid-rows-1 gap-4 pt-16 pb-16 lg:max-w-280">
        <img
          src="/assets/desktop/image-woman-in-videocall.jpg"
          alt="image-woman-in-videocall"
          className="rounded-lg"
        />
        <img
          src="/assets/desktop/image-women-videochatting.jpg"
          alt="image-women-videochatting"
          className="rounded-lg"
        />
        <img
          src="/assets/desktop/image-men-in-meeting.jpg"
          alt="image-men-in-meeting"
          className="rounded-lg"
        />
        <img
          src="/assets/desktop/image-man-texting.jpg"
          alt="image-man-texting"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="md:max-w-111.25">
          <h3 className="preset-3 text-cyan-600">BUILT FOR MODERN USE</h3>
          <h2 className="preset-2 text-slate-900 pt-4 pb-8 px-1">
            Smarter meetings, all in one place
          </h2>
        </div>
        <p className="preset-4 text-slate-600 md:max-w-126 lg:max-w-136 ">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </div>
  );
}

export default Features;
