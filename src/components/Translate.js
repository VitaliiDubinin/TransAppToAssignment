import { useState } from "react";
import axios from "axios";
import Popup from "./Popup";

export function Translate() {
  const [showPopup, setShowPopup] = useState(false);
  const [inputs, setInputs] = useState("");
  const [translation, setTranslation] = useState("");
  const [wordsToVocab, setWordsToVocab] = useState({
    or_word: "",
    tr_word: "",
  });

  const handleOrigChange = (event) => {
    setInputs(() => event.target.value);
  };

  const closeHandler = () => {
    window.location.reload();
  };
  const handleTransChange = (event) => {
    const value = event.target.value;
    setTranslation(() => event.target.value);
    setWordsToVocab({ or_word: inputs, tr_word: value });
  };

  const handleToVocab = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8005/langtransapp/", wordsToVocab);
    // axios.post("http://localhost:8005/langtransapp/", wordsToVocab).then((res) => console.log(res));
    setShowPopup(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://libretranslate.com/translate", {
      method: "POST",
      body: JSON.stringify({
        q: inputs,
        source: "en",
        target: "fi",
        format: "text",
        api_key: "5651b501-f6da-4525-9a57-4561057a2ae2",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setTranslation(() => data.translatedText);
        // setTranslation(() => data.translatedText);
        setWordsToVocab({ or_word: inputs, tr_word: data.translatedText });
      });
  };

  return (
    <div>
      <h1>Translate</h1>
      <form>
        <label htmlFor="or_word">originate word:</label>

        <input type="text" name="or_word" onChange={handleOrigChange} />
        <label htmlFor="traslation">translation:</label>

        {/* <input type="text" name="tr_word" onChange={handleTransChange} placeholder={translation} value={translation} /> */}
        <input type="text" name="tr_word" onChange={handleTransChange} value={translation} />

        <br />

        <button onClick={handleSubmit}>translate</button>
        <button onClick={handleToVocab}>send to vocab</button>

        {showPopup && <Popup close={closeHandler} />}
      </form>
    </div>
  );
}

export default Translate;
