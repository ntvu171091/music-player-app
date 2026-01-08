// BƯỚC 1: Import dependencies
import { useState, createContext } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";

// BƯỚC 2: Tạo Context
const MusicPlayerContext = createContext();
// createContext() tạo ra một "kho chứa" data có thể truy cập từ bất kỳ đâu

// BƯỚC 3: Định nghĩa giá trị mặc định
const defaultValues = {
  audioPlayer: new Audio(), // Đối tượng Audio để phát nhạc
  tracks: [
    // Mảng chứa danh sách bài hát
    {
      name: "Gorila",
      file: Track1, // URL hoặc đường dẫn file
    },
    {
      name: "Running Night",
      file: Track2,
    },
    {
      name: "Sweet Life (Luxury Chill)",
      file: Track3,
    },
  ],
  currentTrackIndex: null, // Index bài đang phát (null = chưa phát)
  isPlaying: false, // Trạng thái đang phát hay không
};

// BƯỚC 4: Tạo Provider Component
const MusicPlayerProvider = ({ children }) => {
  // Tạo state để lưu trữ tất cả thông tin
  const [state, setState] = useState(defaultValues);

  // Provider bọc children và cung cấp value
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// BƯỚC 5: Export để dùng ở các file khác
export { MusicPlayerContext, MusicPlayerProvider };
