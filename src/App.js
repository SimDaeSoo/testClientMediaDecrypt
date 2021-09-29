import './App.css';
import { useEffect } from 'react';

const waitBufferUpdating = (sourceBuffer) => {
  return new Promise((resolve) => {
    const check = setTimeout(() => {
      if (!sourceBuffer.updating) {
        resolve();
      } else {
        check();
      }
    }, 1000);
  });
}

const waitSourceOpening = (source) => {
  return new Promise((resolve) => {
    source.addEventListener("sourceopen", () => {
      resolve();
    });
  });
}

const App = () => {
  useEffect(() => {
    (
      async () => {
        const player = document.getElementById('player');
        const source = new MediaSource();
        const url = URL.createObjectURL(source);

        player.src = url;
        await waitSourceOpening(source);

        const sourceBuffer = source.addSourceBuffer('video/mp4; codecs=avc1.42E01E, mp4a.40.2');

        (async () => {
          const response = await fetch('./encrypted.mp4');
          const { body } = response;
          const reader = body.getReader();

          while (true) {
            const { value: chunk, done } = await reader.read();

            if (done) break;

            for (let i = 0; i < chunk.byteLength; i++) {
              chunk[i]--;
            }

            sourceBuffer.appendBuffer(chunk);
            await waitBufferUpdating(sourceBuffer);
          }
        }
        )();
      })();
  }, []);

  return (
    <div className='App'>
      <video
        id='player'
        controls
      >
      </video>
    </div>
  );
};

export default App;
