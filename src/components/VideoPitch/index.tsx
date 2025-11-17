export default function VideoPitch() {
  return (
    <div className="px-27 pt-15">
      <div
        className="
          flex justify-center items-center
          bg-green-400 h-120 rounded-[20px]
          border-b-8 border-r-8
          border-green-500
          "
      >
        <video
          className="w-[90%] h-100 object-cover rounded-[20px]"
          src="https://res.cloudinary.com/dt26mfzpw/video/upload/v1761425921/video-pitch_jgvfq0.mp4" // Vídeo provisório até a gravação do vídeo
          controls
        ></video>
      </div>
    </div>
  );
}
