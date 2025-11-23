export default function VideoPitch() {
  return (
    <div className="
    px-27 pt-15
    max-[966px]:px-10
    max-[770px]:px-5
    max-[645px]:px-0
    ">
      <div
        className="
          flex justify-center items-center
          bg-green-400 h-130 rounded-[20px]
          border-b-8 border-r-8
          border-green-500
          "
      >
        <video
          className="w-[85%] h-110 object-cover rounded-[20px]"
          src="https://res.cloudinary.com/dt26mfzpw/video/upload/v1761425921/video-pitch_jgvfq0.mp4" // Vídeo provisório até a gravação do vídeo
          controls
        ></video>
      </div>
    </div>
  );
}
