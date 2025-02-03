export function SpotifyPlaylist({ playlistId }: { playlistId: string }) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="encrypted-media"
        className="rounded-lg"
        style={{
          border: "none",
        }}
      ></iframe>
    );
  }
  