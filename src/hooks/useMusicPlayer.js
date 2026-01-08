import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  // LẤY state và setState từ Context
  const { state, setState } = useContext(MusicPlayerContext);

  // ==========================================
  // FUNCTION 1: playTrack(index)
  // ==========================================
  function playTrack(index) {
    // TRƯỜNG HỢP 1: Click vào bài đang phát
    if (index === state.currentTrackIndex) {
      togglePlay(); // Chỉ cần pause/play
    }
    // TRƯỜNG HỢP 2: Click vào bài khác
    else {
      state.audioPlayer.pause(); // Dừng bài cũ
      state.audioPlayer = new Audio(state.tracks[index].file); // Tạo Audio mới
      state.audioPlayer.play(); // Phát bài mới

      // Cập nhật state
      setState((state) => ({
        ...state,
        currentTrackIndex: index, // Lưu index bài mới
        isPlaying: true, // Đánh dấu đang phát
      }));
    }
  }

  // ==========================================
  // FUNCTION 2: togglePlay()
  // ==========================================
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause(); // Đang phát → Pause
    } else {
      state.audioPlayer.play(); // Đang pause → Play
    }

    // Đảo ngược trạng thái isPlaying
    setState((state) => ({
      ...state,
      isPlaying: !state.isPlaying,
    }));
  }

  // ==========================================
  // FUNCTION 3: playPreviousTrack()
  // ==========================================
  function playPreviousTrack() {
    // Tính toán index bài trước (có wrap around)
    const newIndex =
      (((state.currentTrackIndex - 1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;

    playTrack(newIndex);
  }

  // ==========================================
  // FUNCTION 4: playNextTrack()
  // ==========================================
  function playNextTrack() {
    // Tính toán index bài kế (có wrap around)
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  // ==========================================
  // RETURN: Những gì components cần dùng
  // ==========================================
  return {
    // Functions
    playTrack,
    togglePlay,
    playPreviousTrack,
    playNextTrack,

    // Data
    currentTrackName:
      state.currentTrackIndex !== null
        ? state.tracks[state.currentTrackIndex].name
        : null,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
  };
};

export default useMusicPlayer;
