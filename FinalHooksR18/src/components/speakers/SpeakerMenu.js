import React, { useContext } from "react";
import { SpeakerMenuContext } from "../../contexts/SpeakerMenuContext";
import AddSpeakerDialog from "./AddSpeakerDialog";
import { SpeakerModalProvider } from "../../contexts/SpeakerModalContext";

export default function SpeakerMenu() {
  const {
    speakingSaturday,
    setSpeakingSaturday,
    speakingSunday,
    setSpeakingSunday,
  } = useContext(SpeakerMenuContext);

  return (
    <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
      <div className="hide">
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setSpeakingSaturday(!speakingSaturday);
              }}
              checked={speakingSaturday}
            />
            Saturday Speakers
          </label>
        </div>
        <div className="form-check-inline">
          <label className="form-check-label">
            <input
              type="checkbox"
              className="form-check-input"
              onChange={() => {
                setSpeakingSunday(!speakingSunday);
              }}
              checked={speakingSunday}
            />
            Sunday Speakers
          </label>
        </div>
        <div className="form-check-inline">
          <SpeakerModalProvider>
            <AddSpeakerDialog />
          </SpeakerModalProvider>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
