// export function SpotifyPlaylist({ playlistId }: { playlistId: string }) {
//     return (
//       <iframe
//         src={`https://open.spotify.com/embed/playlist/${playlistId}`}
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         allow="encrypted-media"
//         className="rounded-lg"
//         style={{
//           border: "none",
//         }}
//       ></iframe>
//     );
//   }
  
import { useState, useEffect } from "react";

export function SpotifyPlaylist({ playlistId }: { playlistId: string }) {
  const [src, setSrc] = useState(`https://open.spotify.com/embed/playlist/${playlistId}`);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleTimeout = setTimeout(() => {
      if (retryCount < 3) {
        setRetryCount((prev) => prev + 1);
        setSrc(`https://open.spotify.com/embed/playlist/${playlistId}?retry=${retryCount}`);
      }
    }, 3000);

    return () => clearTimeout(handleTimeout);
  }, [retryCount, playlistId]);

  return (
    <iframe
      src={src}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="encrypted-media"
      className="rounded-lg"
      style={{ border: "none" }}
    ></iframe>
  );
}
